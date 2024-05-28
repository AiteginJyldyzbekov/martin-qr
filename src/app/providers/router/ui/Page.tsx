// import { getUserAuthData } from 'entities/User'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Suspense } from 'react'
// import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { type RouteConfigType } from 'shared/routeConfig/types'
// import { Navbar } from 'widgets/Navbar'
// import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
// import { Sidebar } from 'widgets/Sidebar'

export interface PageProps {
  routes: RouteConfigType
}

const Page: React.FC<PageProps> = ({ routes }) => {
//   const { isAuth } = useSelector(getUserAuthData)
const isAuth = false
  return (
        <Suspense fallback={<div>Loading...</div>}> 
        {/* Заменить на Loader */}
            {isAuth && (
                <div>
                    <div>SideBar</div> 
                    {/* Заменить на компоненту SideBar */}
                </div>
            )}
            <Routes>
                {Object.values(routes).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <div className="page-wrapper">
                                {isAuth && <div>Navbar</div>}
                                {/* Заменить на компоненту Navbar */}
                                {element}
                            </div>
                        )}
                        path={path}
                    />
                ))}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
  )
}

export default Page
