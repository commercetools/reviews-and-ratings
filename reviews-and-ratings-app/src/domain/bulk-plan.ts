import type { Comment } from '../types/comment';

export type BulkPlan = {
  /** Comments the target state is one of the allowed transitions of. */
  changeable: Comment[];
  /** Already in the target state, or the project does not allow the move. */
  skipped: Comment[];
};

/** Plans a bulk move from each comment's own transitions (never a hardcoded state graph). */
export function planBulk(comments: Comment[], targetStateId: string): BulkPlan {
  const changeable: Comment[] = [];
  const skipped: Comment[] = [];
  for (const comment of comments) {
    const allowed =
      comment.state?.id !== targetStateId &&
      comment.transitions.some((target) => target.id === targetStateId);
    (allowed ? changeable : skipped).push(comment);
  }
  return { changeable, skipped };
}

export type BulkResult = {
  changed: Comment[];
  skipped: Comment[];
  failed: Array<{ comment: Comment; error: unknown }>;
};

export const BULK_CONCURRENCY = 4;

/**
 * Runs one move per changeable comment, a few at a time; a failure never
 * stops the others. There is no bulk transition API.
 */
export async function runBulk(
  plan: BulkPlan,
  move: (comment: Comment) => Promise<unknown>,
  concurrency: number = BULK_CONCURRENCY
): Promise<BulkResult> {
  const result: BulkResult = {
    changed: [],
    skipped: plan.skipped,
    failed: [],
  };
  let next = 0;
  const worker = async () => {
    while (next < plan.changeable.length) {
      const comment = plan.changeable[next];
      next += 1;
      try {
        await move(comment);
        result.changed.push(comment);
      } catch (error) {
        result.failed.push({ comment, error });
      }
    }
  };
  await Promise.all(
    Array.from(
      { length: Math.min(concurrency, plan.changeable.length) },
      worker
    )
  );
  return result;
}
