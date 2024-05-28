import { AdminRouteConfig } from 'shared/routeConfig/adminRoutes/AdminRoutes'
import Page from './Page'
import { UserRole } from '../types'
import { NotAuthRouteConfig } from 'shared/routeConfig/notAuthRoutes/NotAuthRoutes'
import { UserRouteConfig } from 'shared/routeConfig/userRoutes/UsersRoutes'
// import {
//   NotAuthRouteConfig
// } from 'shared/config/routeConfig/notAuthRoutes/NotAuthRoutes'
// import {
//   DriverRouteConfig
// } from 'shared/config/routeConfig/driverRoutes/DriverRoutes'
// import { useSelector } from 'react-redux'
// import { getUserAuthData } from 'entities/User'

const AppRouter = () => {
  // const { authData, isAuth } = useSelector(getUserAuthData)
  const role = UserRole.user
  const isAuth = true
  // const role = authData?.role 

  if (!isAuth) return <Page routes={NotAuthRouteConfig} />
  if (role) {
    if (role === UserRole.user) return <Page routes={UserRouteConfig} />
    if (role === UserRole.admin) return <Page routes={AdminRouteConfig} />
  }

  return <Page routes={NotAuthRouteConfig} />
}

export default AppRouter
