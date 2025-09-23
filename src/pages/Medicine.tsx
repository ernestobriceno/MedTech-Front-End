import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import medtechicon from '../assets/medtech.png';

export const Examination: React.FC = () => {
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/medications/self', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setMedicines(data);
        });
      }
    }).catch((error) => {
      console.error('Error fetching medications:', error);
    });
  }, []);
  // Lista de medicinas con horarios
  // const medicines = [
  //   { name: "Acetaminophen", time: "Every 12 hours", dosage: "1 pill", id: 1 },
  //   { name: "Tetracetina", time: "Every 8 hours", dosage: "2 pills", id: 2 },
  //   { name: "Ibuprofen", time: "Every 6 hours", dosage: "1 pill", id: 3 },
  //   { name: "Aspirin", time: "Once a day", dosage: "1 pill", id: 4 },
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-20 h-12 mb-4">
              <img src={medtechicon} alt="Medtech" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Medications List Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-4">Your Medications</h2>
            
            {medicines.map((med) => (
              <div key={med.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{med.name}</h3>
                <p className="text-sm text-gray-600">{1} - {med.schedule}</p>
                <p className="text-sm text-gray-600">{med.active === true ? 'Active' : 'Inactive'}</p>
              </div>
            ))}
          </div>

          {/* Button to go back */}
          <div className="flex justify-center mt-6">
          <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={() => navigate("/dashboard")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
