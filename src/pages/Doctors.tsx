import React from "react";
import { useNavigate } from "react-router-dom";
import medtechicon from "../assets/medtech.png";

export const DoctorsHistory: React.FC = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = React.useState([]);
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/doctors/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setDoctors(data);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);
  // Lista de doctores con detalles de consulta
  // const doctors = [
  //   {
  //     name: "Dr. Emily Carter",
  //     specialty: "Cardiologist",
  //     lastDate: "Nov 10, 2024",
  //     reason: "Routine heart check-up",
  //     id: 1,
  //   },
  //   {
  //     name: "Dr. John Smith",
  //     specialty: "Dermatologist",
  //     lastDate: "Oct 22, 2024",
  //     reason: "Skin allergy consultation",
  //     id: 2,
  //   },
  //   {
  //     name: "Dr. Sarah Brown",
  //     specialty: "Endocrinologist",
  //     lastDate: "Sep 15, 2024",
  //     reason: "Thyroid evaluation",
  //     id: 3,
  //   },
  //   {
  //     name: "Dr. Michael Lee",
  //     specialty: "Orthopedic",
  //     lastDate: "Aug 8, 2024",
  //     reason: "Knee pain assessment",
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
          {/* Doctors History List */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-4">Doctors You Have Consulted</h2>

            {doctors.map((doctor) => (
              <div key={doctor.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-gray-600">Specialty: {doctor.specialty}</p>
                <p className="text-sm text-gray-600">Phone: {doctor.phone}</p>
                <p className="text-sm text-gray-600">Hospital: {doctor.hospital}</p>
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
