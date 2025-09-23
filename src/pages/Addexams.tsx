import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddExams: React.FC = () => {
  const navigate = useNavigate();

  // Estado para manejar la selección de horarios y medicinas
  const [selectedTime, setSelectedTime] = useState<Hospitals>("zacamil");
  type Hospitals = "zacamil" | "zaldaña" | "rosales";

  const [examDetails, setMedicineDetails] = useState<Record<Hospitals, string>>({
    zacamil: "",
    zaldaña: "",
    rosales: "",
  });


  const handleMedicineInputChange = (value: string) => {
    setMedicineDetails((prev) => ({
      ...prev,
      [selectedTime]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg font-bold">Patient Health</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Hospital</h2>
            <div className="mb-4">
              <label htmlFor="time-dropdown" className="block text-gray-700 mb-2">
                Select Hospital:
              </label>
              <select
                id="time-dropdown"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value as Hospitals)}
                className="w-full p-2 border rounded">
                <option value="zacamil">zacamil</option>
                <option value="zaldaña">zaldaña</option>
                <option value="rosales">rosales</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicine-input" className="block text-gray-700 mb-2">
                Exam for {selectedTime.charAt(0).toUpperCase() + selectedTime.slice(1)}:
              </label>
              <input
                id="medicine-input"
                type="text"
                value={examDetails[selectedTime]}
                onChange={(e) => handleMedicineInputChange(e.target.value)}
                placeholder={`Enter medicine for ${selectedTime}...`}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
</div>

   
        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Hospital</h2>
            <div className="mb-4">
              <label htmlFor="time-dropdown" className="block text-gray-700 mb-2">
                Select Hospital:
              </label>
              <select
                id="time-dropdown"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value as Hospitals)}
                className="w-full p-2 border rounded">
                <option value="zacamil">zacamil</option>
                <option value="zaldaña">zaldaña</option>
                <option value="rosales">rosales</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicine-input" className="block text-gray-700 mb-2">
                Exam for {selectedTime.charAt(0).toUpperCase() + selectedTime.slice(1)}:
              </label>
              <input
                id="medicine-input"
                type="text"
                value={examDetails[selectedTime]}
                onChange={(e) => handleMedicineInputChange(e.target.value)}
                placeholder={`Enter medicine for ${selectedTime}...`}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Hospital</h2>
            <div className="mb-4">
              <label htmlFor="time-dropdown" className="block text-gray-700 mb-2">
                Select Hospital:
              </label>
              <select
                id="time-dropdown"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value as Hospitals)}
                className="w-full p-2 border rounded">
                <option value="zacamil">zacamil</option>
                <option value="zaldaña">zaldaña</option>
                <option value="rosales">rosales</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicine-input" className="block text-gray-700 mb-2">
                Exam for {selectedTime.charAt(0).toUpperCase() + selectedTime.slice(1)}:
              </label>
              <input
                id="medicine-input"
                type="text"
                value={examDetails[selectedTime]}
                onChange={(e) => handleMedicineInputChange(e.target.value)}
                placeholder={`Enter medicine for ${selectedTime}...`}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-black"
              onClick={() => navigate(-1)}
            >
              Complete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
