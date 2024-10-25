import React from 'react';

const LoggerDisplay = ({ logs }) => {
  return (
    <div className="logger-display">
      {logs.map((log, index) => (
        <div key={index} className="log-entry">{log}</div>
      ))}
    </div>
  );
};

export default LoggerDisplay;
