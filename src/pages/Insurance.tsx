import React from "react";
import { useNavigate } from "react-router-dom";
import medtechicon from "../assets/medtech.png";

export const InsuranceList: React.FC = () => {
  const navigate = useNavigate();
  const [insuranceList, setInsuranceList] = React.useState([]);
  
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/insurances/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setInsuranceList(data);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching insurance:', error);
      });
  }, []);
 
  // Lista de seguros
  // const insuranceList = [
  //   {
  //     name: "Blue Shield",
  //     plan: "Gold Plan",
  //     startDate: "Jan 1, 2022",
  //     status: "Active",
  //     id: 1,
  //   },
  //   {
  //     name: "United Healthcare",
  //     plan: "Silver Plan",
  //     startDate: "Mar 15, 2021",
  //     status: "Inactive",
  //     id: 2,
  //   },
  //   {
  //     name: "Cigna",
  //     plan: "Platinum Plan",
  //     startDate: "Jul 20, 2023",
  //     status: "Active",
  //     id: 3,
  //   },
  //   {
  //     name: "Kaiser Permanente",
  //     plan: "Bronze Plan",
  //     startDate: "Nov 5, 2020",
  //     status: "Inactive",
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
          {/* Insurance List */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-4">Your Insurance Policies</h2>

            {insuranceList.map((insurance) => (
              <div key={insurance.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{insurance.name}</h3>
                {/* <p className="text-sm text-gray-600">Plan: {insurance.plan}</p> */}
                {/* <p className="text-sm text-gray-600">Start Date: {insurance.startDate}</p> */}
                {/* <p
                  className={`text-sm font-semibold ${
                    insurance.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status: {insurance.status}
                </p> */}
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
