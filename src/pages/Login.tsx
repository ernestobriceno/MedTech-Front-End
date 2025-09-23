import React, { useState, useContext } from 'react';
import { UserRoleContext } from '../context/UserRoleContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import medtechicon from '../assets/medtech.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login: React.FC = () => {
  const { setUserRole } = useContext(UserRoleContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    fetch(import.meta.env.VITE_API_URL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({ email, password }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          toast.error(data.error);
          return;
        }
        const { token, email } = data.user;
        localStorage.setItem('token', token);
        toast.success('Login successful');
        setTimeout(() => {
          if (email.includes("doctor")) {
            setUserRole('doctor')
            navigate('/doctor/dashboard');
          } else {
            setUserRole('patient')
            navigate('/dashboard');
          }
        }, 1000);
      })
      .catch((err) => {
        console.log(err)
        toast.error('Login failed');
      });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-md space-y-8">
      <div className="flex flex-col items-center justify-center">
          <div className="w-56 h-56 mb-4">
            <img src={medtechicon} alt='Medtech'/>
          </div>
          <h1 className="text-4xl font-bold tracking-tight hidden">MEDTECH</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link to="/register" className="font-medium text-black hover:text-gray-800">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

