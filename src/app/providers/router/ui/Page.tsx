import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/header/Header'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type RouteConfigType } from 'shared/routeConfig/types'
import Preloader from 'shared/ui/Preloader/Preloader'
import 'animate.css';

export interface PageProps {
    routes: RouteConfigType
}

const Page: React.FC<PageProps> = ({ routes }) => {
    return (
        <Suspense fallback={<Preloader full />}>
            <Routes>
                {Object.values(routes).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <div className="page-wrapper">
                                <Header />
                                {element}
                                <Footer />
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
