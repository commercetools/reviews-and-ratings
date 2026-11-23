import CommentsList from './components/comments-list/comments-list';
import { CommentsQueryProvider } from './hooks/query-state-context';

// The application shell renders this under `/:projectKey/<entry point>` and
// already enforces the app's View permission for the route.
const ApplicationRoutes = () => (
  <CommentsQueryProvider>
    <CommentsList />
  </CommentsQueryProvider>
);
ApplicationRoutes.displayName = 'ApplicationRoutes';

export default ApplicationRoutes;
