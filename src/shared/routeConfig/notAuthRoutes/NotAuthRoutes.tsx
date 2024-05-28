import { LoginPage } from 'pages/LoginPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum NotAuthRoutes {
    LOGIN = 'login',
}

export const NotAuthRoutePath: Record<NotAuthRoutes, string> = {
    [NotAuthRoutes.LOGIN]: '/',
}

export const NotAuthRouteConfig: Record<NotAuthRoutes, RouteProps> = {
    [NotAuthRoutes.LOGIN]: {
        path: NotAuthRoutePath.login,
        element: <LoginPage />
    },
}
