import { NotFoundPage } from 'pages/NotFoundPage'
import { MainPage } from 'pages/USER/MainPage'
import { ProfilePage } from 'pages/USER/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export enum UserRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
}

export const UserRoutePath: Record<UserRoutes, string> = {
  [UserRoutes.PROFILE]: '/profile',
  [UserRoutes.MAIN]: '/',
}

export const UserRouteConfig: Record<UserRoutes, RouteProps> = {
  [UserRoutes.MAIN]: {
    path: UserRoutePath.main,
    element: <MainPage />
  },
  [UserRoutes.PROFILE]: {
    path: UserRoutePath.profile,
    element: <ProfilePage />
  },
}
