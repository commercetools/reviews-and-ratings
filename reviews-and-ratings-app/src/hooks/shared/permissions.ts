import { useIsAuthorized } from '@commercetools-frontend/permissions';
import { PERMISSIONS } from '../../constants';

/** Manage permission; controls are disabled without it, never hidden. */
export const useCanManage = (): boolean =>
  useIsAuthorized({ demandedPermissions: [PERMISSIONS.Manage] });
