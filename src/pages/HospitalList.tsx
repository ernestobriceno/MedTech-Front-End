import React from "react";
import { useNavigate } from "react-router-dom";
import medtechicon from "../assets/medtech.png";

export const HospitalsHistory: React.FC = () => {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = React.useState([]);
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/hospitals/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setHospitals(data);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching hospitals:", error);
      });
  }, []);
  // Lista de hospitales con detalles de visita
  // const hospitals = [
  //   {
  //     name: "Saint Mary's Hospital",
  //     location: "New York, NY",
  //     lastDate: "Nov 15, 2024",
  //     reason: "Routine check-up",
  //     id: 1,
  //   },
  //   {
  //     name: "General City Hospital",
  //     location: "Los Angeles, CA",
  //     lastDate: "Oct 5, 2024",
  //     reason: "Emergency surgery",
  //     id: 2,
  //   },
  //   {
  //     name: "River Valley Medical Center",
  //     location: "Austin, TX",
  //     lastDate: "Sep 12, 2024",
  //     reason: "Specialist consultation",
  //     id: 3,
  //   },
  //   {
  //     name: "Sunnydale Health Clinic",
  //     location: "Seattle, WA",
  //     lastDate: "Aug 20, 2024",
  //     reason: "Physical therapy",
  //     id: 4,
  //   },
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
          {/* Hospitals History List */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-4">Hospitals You Have Visited</h2>

            {hospitals.map((hospital) => (
              <div key={hospital.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{hospital.name}</h3>
                <p className="text-sm text-gray-600">Location: {hospital.location}</p>
                {/* <p className="text-sm text-gray-600">Last Visit: {hospital.lastDate}</p> */}
                {/* <p className="text-sm text-gray-600">Reason: {hospital.reason}</p> */}
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
