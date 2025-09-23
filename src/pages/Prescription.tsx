import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Prescription: React.FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<{ name: string; date: string }[]>([]);
  
  const location = useLocation();
  const patient = location.state?.patient;
  const category = location.state?.category;

  if (patient) {
    React.useEffect(() => {
      fetch(import.meta.env.VITE_API_URL + "/users/doctor/files?patient="+ patient + "&category=" + category, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setFiles(data.files);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
    }, []);
  } else {
    React.useEffect(() => {
      fetch(import.meta.env.VITE_API_URL + "/users/files?category=prescriptions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setFiles(data.files);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
    }, []);
  }


  const downloadFile = (name) => {
    fetch(import.meta.env.VITE_API_URL + "/users/uploads/" + name, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      if (response.ok) {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = name;
          a.click();
        });
        toast.success('File downloaded successfully');
      }
    })
  }

  const handleAddFile = () => {
    if (selectedFile) {
      const newFile = {
        name: selectedFile.name,
        date: new Date().toISOString().split("T")[0], // Fecha actual en formato YYYY-MM-DD
      };

      // Subir archivo al servidor
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("category", "prescriptions");
      fetch(import.meta.env.VITE_API_URL + "/users/uploadfile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setFiles([...files, newFile]);

            console.log("File uploaded successfully");
            toast.success('File uploaded successfully');
          }
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          toast.error('Error uploading file');
        });

      setSelectedFile(null);
      setShowModal(false);
    }
  };
  const handleBack = () => {
    navigate(-1)
  }
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const sortedFiles = files.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <ToastContainer />
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg font-bold">Prescription files</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Available Files</h2>

          {/* Lista de archivos */}
          {sortedFiles.length > 0 ? (
            <ul className="space-y-4">
              {sortedFiles.map((file, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-200"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{file.name}</h3>
                    <p className="text-sm text-gray-600">Uploaded: {file.date}</p>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => {downloadFile(file.name)}}
                  >
                    Open
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No files available</p>
          )}

          {/* Botón centrado */}
          <div className="flex justify-center mt-6">
            <button
              className={`bg-red-200 text-black py-2 px-4 rounded hover:bg-red-300 ${patient!=undefined ? "hidden" : ""}`}
              onClick={() => setShowModal(true)}
            >
              Add New File
            </button>
          </div>

          {/* Botón para regresar */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={() => {handleBack()}}
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>

      {/* Modal para agregar archivo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className={`text-lg font-semibold mb-4`}>Add New File</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select File</label>
                <input
                  type="file"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
                onClick={handleAddFile}
                disabled={!selectedFile}
              >
                Add File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
