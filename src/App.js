import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RequestServiceForm from './pages/RequestServiceForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-service" element={<RequestServiceForm />} />
      </Routes>
    </Router>
  );
}

export default App;
