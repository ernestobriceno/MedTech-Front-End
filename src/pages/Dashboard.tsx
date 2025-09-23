import { Header } from '@/components/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "📁", label: "My files", path: "/files" },
    { icon: "📋", label: "Prescriptions", path: "/prescriptions" },
    { icon: "🔬", label: "X-Rays", path: "/xrays" },
    { icon: "🧪", label: "Examinations", path: "/examinations" },
    { icon: "👨🏻‍⚕️", label: "Doctors", path: "/doctors" },
    { icon: "🏥", label: "Hospitals", path: "/hospitals" },
    { icon: "🛡️", label: "Insurance", path: "/insurance" },
  ];

  const handleUserFiles = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Appointment Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600">Next Dr Appointment</h2>
            <p className="text-lg font-semibold">June 21 2025</p>
          </div>

          {/* Medication Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-2">Medication Active</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>1 acetaminophen every 12 hours</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>2 tetracetina every 8 hours</span>
              </li>
            </ul>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                onClick={() => handleUserFiles(item.path)}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm capitalize">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
