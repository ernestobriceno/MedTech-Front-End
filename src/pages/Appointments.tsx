import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Appointments: React.FC = () => {
  const [birthdate, setBirthdate] = useState('');
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zM4 6l8 4m0 0l8-4m-8 4v12" />
              <path d="M12 12l4-2v4l-4 2-4-2v-4l4 2z" />
            </svg>
          </div>
        </div> */}

        <h1 className="text-4xl font-bold tracking-tight">Citas médicas</h1>
        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-row justify-between items-center gap-2">
            <p className="text-md inline-block">Fecha</p>
            <input
                id="birthdate"
                name="birthdate"
                type="date"
                required
                className="w-full appearance-none rounded relative inline-block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer select-none">
            <Link to="/hospital/appointment">
                    <h2 className="text-sm text-gray-600 mb-2">Cita médica</h2>
                    <p className="text-md">Paciente: David</p>
                    <p className="text-md">Hora: 09:00 a.m.</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

