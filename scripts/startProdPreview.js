// vendor modules
import express from 'express';
import chalk from 'react-dev-utils/chalk';
// utils
import paths from './paths';
import { config } from './config';

const app = express();

// Get environment config
const { APP_HOST, APP_PORT, PUBLIC_URL } = config;

app.use(express.static(paths.appBuild));

app.use(PUBLIC_URL, express.static(paths.appBuild));

app.listen(APP_PORT, APP_HOST, () => {
  console.log(
    chalk.cyan(
      `\n Front-end preview server is listening on ${chalk.bold(
        `http://${APP_HOST}:${APP_PORT}`,
      )} \n`,
    ),
  );
});
