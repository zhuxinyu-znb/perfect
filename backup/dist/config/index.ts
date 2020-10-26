import { extend } from 'lodash';
import { join } from 'path';

let config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
  port: 0,
  memoryFlag: false,
};
if (process.env.NODE_ENV === 'development') {
  let localConfig = {
    port: 8081
  };
  config = extend(config, localConfig);
}
if (process.env.NODE_ENV === 'production') {
  let prodConfig = {
    port: 8082,
    memoryFlag: 'memory',
  };
  config = extend(config, prodConfig);
}

export default config;
