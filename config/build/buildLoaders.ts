import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildPhotoViewCssLoader } from './loaders/buildPhotoViewLoader'
import { buildReactSlickLoader } from './loaders/buildReactSlickLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      }
    ]
    
  }  

  const cssLoader = buildCssLoader(isDev)
  const slickLoader = buildReactSlickLoader(isDev)
  const photoViewLoader = buildPhotoViewCssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
    photoViewLoader,
    slickLoader
  ]
}
