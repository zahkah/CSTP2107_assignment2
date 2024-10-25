import { useCallback } from 'react';

const useLogger = (setLogs) => {
  const log = useCallback((scope, method, message) => {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${scope}] [${method}] [${timestamp}] ${message}`;

    // Log to the browser console using the method specified
    switch (method) {
      case 'ERROR':
        console.error(formattedMessage);
        break;
      case 'WARN':
        console.warn(formattedMessage);
        break;
      case 'LOG':
        console.log(formattedMessage);
        break;
      case 'DEBUG':
        console.debug(formattedMessage);
        break;
      default:
        console.log(formattedMessage); // Default to log if method is unspecified
    }

    // Additionally, update the visual log display in the UI
    setLogs(logs => [...logs, formattedMessage]);
  }, [setLogs]);

  return log;
};

export default useLogger;
