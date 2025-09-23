import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const shareFiles = (doctor_email) => {
    console.log("Sharing files...");
    fetch(import.meta.env.VITE_API_URL + "/users/share", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doctor_email }),
    })
    .then((response) => {
      if (response.ok) {
        toast.success("Files shared successfully with " + doctor_email);
        console.log("Files shared successfully");
      } else {
        toast.error("Error sharing files");
        console.error("Error sharing files");
      }
    })
    .catch((error) => {
      toast.error("Error sharing files");
      console.error("Error sharing files:", error);
    });
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-4">
          <div className="grid gap-4">
            <div className="flex justify-around py-4">
              {[
                { icon: "👨🏻‍⚕️", label: "Dr. Smith", color: "bg-green-500", email:"doctorsmith@gmail.com" },
                { icon: "👨🏻‍⚕️", label: "Dr. Jackson", color: "bg-blue-600", email:"doctorjackson@gmail.com"},
                { icon: "👨🏻‍⚕️", label: "Dr. Murphy", color: "bg-blue-500", email:"doctormurphy@gmail.com" },
              ].map((item) => (
                <button key={item.label} className="flex flex-col items-center gap-1" onClick={() => {shareFiles(item.email)}}>
                  <div className={`h-12 w-12 flex items-center justify-center rounded-full ${item.color} text-white`}>
                  <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-xs">{item.label}</span>
                </button>
              ))}
            </div>
            
            <div className="flex flex-col gap-2">
              {[
                { icon: "file-text", label: "Save as PDF" },
                { icon: "printer", label: "Print" },
                { icon: "users", label: "Share with contacts" },
              ].map((item) => (
                <button key={item.label} className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t p-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
