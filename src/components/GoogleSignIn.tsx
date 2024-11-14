import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Mock Google Sign-In
    navigate('/employees');
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full bg-red-500 text-white p-2 mt-2"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
