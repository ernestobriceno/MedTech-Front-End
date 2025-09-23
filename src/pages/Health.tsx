import React from 'react';
import { Heart, Bell, ShoppingBag, Pill } from 'lucide-react';
import { Header } from '@/components/Header';
export const HealthCheck: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <Header />

      {/* Main Content */}
      <main className="p-4 space-y-4">
        {/* Metrics */}
        <div className="space-y-3">
          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-gray-600 text-sm">heart rate</div>
              <div className="font-semibold">88 bpm</div>
            </div>
            <Heart className="w-6 h-6 text-red-500" />
          </div>

          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-gray-600 text-sm">blood pressure</div>
              <div className="font-semibold">125p / 45 p</div>
            </div>
            <Bell className="w-6 h-6 text-orange-500" />
          </div>

          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-gray-600 text-sm">weight</div>
              <div className="font-semibold">65kg</div>
            </div>
            <ShoppingBag className="w-6 h-6 text-gray-500" />
          </div>

          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-gray-600 text-sm">medication</div>
              <div className="space-y-1">
                <div className="text-sm">1 acetaminophen every 12 hours</div>
                <div className="text-sm">2 tetracetina every 8 hours</div>
              </div>
            </div>
            <Pill className="w-6 h-6 text-blue-500" />
          </div>
        </div>

        {/* Doctor Recommendations */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-gray-600 text-sm mb-2">Dr. Recomendations</h2>
          <p className="text-sm">
            Patient needs to rest and stop going to the gym for 1 month, back pains are for bad handling of weights
          </p>
        </div>
      </main>
    </div>
  );
};

export default HealthCheck;

