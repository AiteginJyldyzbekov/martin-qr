import Page from './Page'
import { UserRouteConfig } from 'shared/routeConfig/userRoutes/UsersRoutes'

const AppRouter = () => {
  return <Page routes={UserRouteConfig} />
}

export default AppRouter
