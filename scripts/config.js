const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  NODE_ENV: isDevelopment ? 'development' : 'production',
  APP_HOST: '127.0.0.1',
  APP_PORT: '3000',
  PUBLIC_URL: isDevelopment ? '/static' : '/search-control',
  API_URL: 'https://api.github.com/orgs/kraftvaerk/repos',
};

const stringifiedConfig = {
  'process.env': Object.keys(config).reduce((env, key) => {
    env[key] = JSON.stringify(config[key]);
    return env;
  }, {}),
};

module.exports = {
  config,
  stringifiedConfig,
};
