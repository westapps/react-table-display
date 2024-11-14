import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/employees" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
};

export default App;
