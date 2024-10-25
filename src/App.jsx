import React, { useState } from 'react';
import useLogger from './hooks/useLogger';
import LoggerDisplay from './components/LoggerDisplay';
import './App.css';

function App() {
  const [scope, setScope] = useState('DeleteFriend');
  const [method, setMethod] = useState('LOG');
  const [message, setMessage] = useState('');
  const [logs, setLogs] = useState([]);
  const log = useLogger(setLogs);

  const handleSubmit = (e) => {
    e.preventDefault();
    log(scope, method, message);
    setMessage('');  // Clear the input after submitting
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            placeholder="Action Scope (e.g., DeleteFriend)"
            className="scope-input"
          />
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="method-select">
            <option value="ERROR">ERROR</option>
            <option value="WARN">WARN</option>
            <option value="LOG">LOG</option>
            <option value="DEBUG">DEBUG</option>
          </select>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="message-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <LoggerDisplay logs={logs} />
    </div>
  );
}

export default App;
