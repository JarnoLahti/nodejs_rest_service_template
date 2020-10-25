import http from 'http';
import appBuilder from './app';
import loggerBuilder from './utils/logger';

function buildServer() {
  const _logger = loggerBuilder();

  const _app = appBuilder();

  const _server = http.createServer(_app);

  const _port = process.env.PORT || 0;

  const _nodeEnv = process.env.NODE_ENV || 'development';

  async function start() {
    return new Promise((resolve, reject) => {
      _server.listen(_port, (err) => {
        if (err) {
          return reject(err);
        }

        _logger.info(
          `Service listening port: ${
            _server.address().port
          } in ${_nodeEnv.toUpperCase()} mode`
        );

        return resolve();
      });
    });
  }

  async function stop() {
    return new Promise((resolve) => {
      if (_server) {
        _server.close(() => {
          _logger.info("stopping service")
          resolve(true);
        });
      } else {
          resolve(true);
      }
    });
  }

  return Object.freeze({
    start,
    stop,
  });
}

export default buildServer;
