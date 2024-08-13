import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  const [updateMessage, setUpdateMessage] = useState('');
  useEffect(() => {}, [updateMessage]);

  window.electron.ipcRenderer.on('checking-for-updates', () => {
    setUpdateMessage('checking for updates');
  });

  return <div>Message: {updateMessage}</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
