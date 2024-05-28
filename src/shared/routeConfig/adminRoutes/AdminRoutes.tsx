import { type RouteProps } from 'react-router-dom';
import { AdminsPage } from 'pages/ADMIN/admins/AdminsPage';
import { AdminEditPage } from 'pages/ADMIN/admins/AdminEditPage';
import { CreateAdminPage } from 'pages/ADMIN/admins/CreateAdminPage';
import { UsersPage } from 'pages/ADMIN/users/UsersPage';
import { UserEditPage } from 'pages/ADMIN/users/UserEditPage';
import CreateUserPage from 'pages/ADMIN/users/CreateUserPage/ui/CreateUserPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AdminRoutes {
    ADMINS = 'admins',
    ADMIN_EDIT = "admin_edit",
    CREATE_ADMIN = "create_admin",
    USERS = 'users',
    USER_EDIT = "user_edit",
    CREATE_USER = "create_user",
}

export const AdminRoutePath: Record<AdminRoutes, string> = {
    [AdminRoutes.ADMINS]: '/',
    [AdminRoutes.ADMIN_EDIT]: '/admins/edit/:id',
    [AdminRoutes.CREATE_ADMIN]: '/create-admin',
    [AdminRoutes.USERS]: '/users',
    [AdminRoutes.USER_EDIT]: '/users/edit/:id',
    [AdminRoutes.CREATE_USER]: '/create-user',
}

export const AdminRouteConfig: Record<AdminRoutes, RouteProps> = {
    [AdminRoutes.ADMINS]: {
        path: AdminRoutePath.admins,
        element: <AdminsPage />,
    },
    [AdminRoutes.ADMIN_EDIT]: {
        path: AdminRoutePath.admin_edit,
        element: <AdminEditPage />,
    },
    [AdminRoutes.CREATE_ADMIN]: {
        path: AdminRoutePath.create_admin,
        element: <CreateAdminPage />,
    },
    [AdminRoutes.USERS]: {
        path: AdminRoutePath.users,
        element: <UsersPage />,
    },
    [AdminRoutes.USER_EDIT]: {
        path: AdminRoutePath.user_edit,
        element: <UserEditPage />,
    },
    [AdminRoutes.CREATE_USER]: {
        path: AdminRoutePath.create_user,
        element: <CreateUserPage />,
    },
}