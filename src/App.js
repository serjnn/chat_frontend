import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ChatRoom from './components/ChatRoom';

function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/chat" element={<ChatRoom />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
