import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <LoginForm />
        <div className="text-center mt-4">or</div>
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default LoginPage;
