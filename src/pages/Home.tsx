import React from 'react';
import { Link } from 'react-router-dom';
import medtechicon from '../assets/medtech.png';
export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-56 h-56 mb-4">
            <img src={medtechicon} alt='Medtech'/>
          </div>
          <h1 className="text-4xl font-bold tracking-tight hidden">MEDTECH</h1>
        </div>
        
        <div className="space-y-4 mt-8">
          <Link to="/login" className="w-full">
            <button
              className="mb-4 w-full bg-black text-white hover:bg-gray-800 py-6 text-lg rounded"
            >
              LOGIN
            </button>
          </Link>
          
          <Link to="/register" className="w-full">
            <button
              className="mt-4 w-full bg-black text-white hover:bg-gray-800 py-6 text-lg rounded"
            >
              REGISTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

