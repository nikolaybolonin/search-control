// vendor modules
import webpack from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import fs from 'fs-extra';
// utils
import paths from './paths';
import { config, stringifiedConfig } from './config';

const isDevelopment = process.env.NODE_ENV !== 'production';
const shouldUseSourceMap = isDevelopment;

export default {
  mode: isDevelopment ? 'development' : 'production',
  devtool: shouldUseSourceMap ? 'eval-source-map' : false,
  entry: {
    main: [
      isDevelopment && 'webpack-hot-middleware/client',
      '@babel/polyfill',
      paths.appIndexJs,
    ].filter(Boolean),
  },
  output: {
    filename: 'bundle.js',
    path: paths.appBuild,
    publicPath: isDevelopment ? '/' : config.PUBLIC_URL,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        use: {
          loader: 'babel-loader',
          options: {
            ...JSON.parse(fs.readFileSync(paths.babelrc)),
            // Babel sourcemaps are needed for debugging into node_modules
            // code.  Without the options below, debuggers like VSCode
            // show incorrect code and set breakpoints on the wrong lines.
            sourceMaps: shouldUseSourceMap,
            inputSourceMap: shouldUseSourceMap,
          },
        },
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment &&
      new ReactRefreshPlugin({
        overlay: {
          sockIntegration: 'whm',
        },
      }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: true,
      template: paths.appHtml,
    }),
    new InterpolateHtmlPlugin(
      // Makes some environment variables available in index.html
      HtmlWebpackPlugin,
      config,
    ),
    new webpack.DefinePlugin(stringifiedConfig),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: 'stats.json',
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // Keep in sync with .eslintrc and jsconfig.json
    modules: [paths.appSrc, 'node_modules'],
    // alias: { modules: path.resolve(process.cwd(), '../../packages') },
  },
};
