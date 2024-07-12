import { MainPage } from 'pages/MainPage'
import { CatalogPage } from 'pages/CatalogPage'
import { ProductPage } from 'pages/ProductPage'
import { type RouteProps } from 'react-router-dom'
import { ProductsPage } from 'pages/ProductsPage'
import { NewsDetailPage } from 'pages/NewsDetailPage'
import { NewsPage } from 'pages/NewsPage'
import CatalogDetailPage from 'pages/ProductPage/ui/CatalogDetailPage'

export enum UserRoutes {
  MAIN = 'main',
  CATALOG = 'catalog',
  CATALOG_DETAIL = 'catalog_detail',
  PRODUCT = 'product',
  PRODUCT_DETAIL = 'product_detail',
  NEWS = 'news',
  NEWS_DETAIL = 'news_detail'
}

export const UserRoutePath: Record<UserRoutes, string> = {
  [UserRoutes.MAIN]: '/',
  [UserRoutes.CATALOG]: '/catalog/:catalogName',
  [UserRoutes.CATALOG_DETAIL]: '/catalog/:catalogName/product/:productId',
  [UserRoutes.PRODUCT]: '/finished-product/:productName',
  [UserRoutes.PRODUCT_DETAIL]: '/finished-product/:productName/product/:productId',
  [UserRoutes.NEWS]: '/news',
  [UserRoutes.NEWS_DETAIL]: '/news/:id',
}

export const UserRouteConfig: Record<UserRoutes, RouteProps> = {
  [UserRoutes.MAIN]: {
    path: UserRoutePath.main,
    element: <MainPage />
  },
  [UserRoutes.CATALOG]: {
    path: UserRoutePath.catalog,
    element: <CatalogPage />
  },
  [UserRoutes.CATALOG_DETAIL]: {
    path: UserRoutePath.catalog_detail,
    element: <CatalogDetailPage />
  },
  [UserRoutes.PRODUCT]: {
    path: UserRoutePath.product,
    element: <ProductsPage />
  },
  [UserRoutes.PRODUCT_DETAIL]: {
    path: UserRoutePath.product_detail,
    element: <ProductPage />
  },
  [UserRoutes.NEWS]: {
    path: UserRoutePath.news,
    element: <NewsPage />
  },
  [UserRoutes.NEWS_DETAIL]: {
    path: UserRoutePath.news_detail,
    element: <NewsDetailPage />
  },
}
