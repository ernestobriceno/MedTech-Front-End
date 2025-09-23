import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import medtechicon from '../assets/medtech.png';

export const Patienthealth: React.FC = () => {
  const location = useLocation();
  const patient = location.state?.patient;
  const menuItems = [
    { icon: "📋", label: "Prescriptions", path: "/prescriptions", patient, category:"prescriptions" },
    { icon: "🔬", label: "X-Rays", path: "/xrays", patient, category:"xrays" },
    { icon: "🧪", label: "Examenes", path: "/addexams", patient, category: "examinations"},
    { icon: "♥️", label: "last checkup", path: "/health", patient, category: "checkout"},
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-20 h-12 mb-4">
              <img src={medtechicon} alt="Medtech" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">

          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-2">Patient</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">👤</span>
                <span>{patient}</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.label}
                state={{category: item.category, patient: item.patient}}
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm capitalize">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
