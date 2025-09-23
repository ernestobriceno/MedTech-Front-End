import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';

export const Patients: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category;
  const [patients, setPatients] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setPatients(data.patients);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching patients:", error);
    });
  }, []);

  const handleRedirect = (patientName: string) => {
    if (category === "xrays") {
      navigate(`/xrays`, {state: {patient: patientName, category: "xrays"}});
    } else if (category === "examination"){
      // navigate(`/exams`, {state: {patient: patientName}});
    } else
      navigate(`/patienthealth`, {state: {patient: patientName}});
    //navigate(`/patient/${patientName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <h3>all patients</h3>
          
          {/* Cards */}
          {/* {["1:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "9:00 pm", "9:00 am"].map((time, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-sm text-gray-600 mb-2">{time} Patient</h2>
              <ul className="space-y-2">
                <li
                  className="flex items-center cursor-pointer"
                  onClick={() => handleRedirect(`mamv2002@gmail.com`)} 
                >
                  <span className="mr-2">👤</span>
                  <span>Ernesto Bricenio</span>
                </li>
              </ul>
            </div>
          ))} */}
          {patients.map((patient, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-sm text-gray-600 mb-2">Patient</h2>
              <ul className="space-y-2">
                <li
                  className="flex items-center cursor-pointer"
                  onClick={() => handleRedirect(patient.email)} 
                >
                  <span className="mr-2">👤</span>
                  <span>{patient.email}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
