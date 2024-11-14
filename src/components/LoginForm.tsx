import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication
    if (username && password) {
      navigate('/employees');
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Username"
        className="block w-full mb-2 p-2 border border-gray-300"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="block w-full mb-4 p-2 border border-gray-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-primary text-white p-2"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
