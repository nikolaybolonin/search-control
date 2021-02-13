// vendor modules
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import chalk from 'react-dev-utils/chalk';
// utils
import paths from './paths';
import { config } from './config';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig);
const app = express();

// Get environment config
const { APP_HOST, APP_PORT } = config;

app.use(config.PUBLIC_URL, express.static(paths.appPublic));

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }),
);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    path: `/__webpack_hmr`,
    heartbeat: 10 * 1000,
  }),
);

app.listen(APP_PORT, APP_HOST, () => {
  console.log(
    chalk.cyan(
      `\n Front-end dev server is listening on ${chalk.bold(
        `http://${APP_HOST}:${APP_PORT}`,
      )} \n`,
    ),
  );
});
