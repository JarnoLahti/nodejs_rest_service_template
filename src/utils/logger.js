import bunyan from 'bunyan';
import caller from 'get-caller-file';
import path from 'path';

function loggerBuilder() {

  const _logger = bunyan.createLogger({ name: caller().split(path.sep).slice(-1)[0] });

  function info(message) {
    _logger.info(message);
  }

  function debug(message) {
    _logger.debug(message);
  }

  function warning(message) {
    _logger.warn(message);
  }

  function error(message) {
    _logger.error(message);
  }

  return Object.freeze({
    info,
    debug,
    warning,
    error,
  });
}

export default loggerBuilder;
