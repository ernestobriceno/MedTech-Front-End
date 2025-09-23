import React, { useEffect, useState } from 'react';

export const Appointment: React.FC = () => {
  const [medications, setMedications] = useState<string[]>(['']);
  const [recommendations, setRecommendations] = useState('');
  
  useEffect(()=>{
    scrollToBottom();
  }, [medications])

  const scrollToBottom = () => {
    const div = document.getElementById('medicamentos');
    if (div) {
      div.scrollTo({
        top: div.scrollHeight,  // Scroll to the bottom
        behavior: 'smooth'      // Smooth scrolling
      });
    }
  };

  const addMedication = () => {
    setMedications([...medications, '']);
  };
  const removeMedication = (index: number) => {
    setMedications(medications.filter((_, idx)=> idx!=index));
  };

  const updateMedication = (index: number, value: string) => {
    const updatedMedications = [...medications];
    updatedMedications[index] = value;
    setMedications(updatedMedications);
  };

  const handleSubmit = (finalizeAppointment: boolean) => {
    // Handle form submission
    console.log('Medications:', medications.filter(med => med.trim() !== ''));
    console.log('Recommendations:', recommendations);
    console.log('Finalize:', finalizeAppointment);
  };

  return (
    <div className="min-h-screen bg-white p-4 max-w-md mx-auto">
        <div className="space-y-2 my-2">
            <h1 className="text-4xl font-bold tracking-tight">Cita médica</h1>
            <h2 className="">Paciente: David</h2>
            <h2 className="">Hora: 09:00 a.m.</h2>
        </div>
        <div className="space-y-4">
            <h2 className="text-xl font-bold">LISTA DE MEDICAMENTOS</h2>

            <div className="space-y-2 h-48 overflow-auto p-4" id="medicamentos">
            {medications.map((medication, index) => (
                <div className="flex items-center gap-2 w-full" key={index}>
                <input
                    type="text"
                    value={medication}
                    onChange={(e) => updateMedication(index, e.target.value)}
                    className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ingrese medicamento"
                />
                <button
                    onClick={() => removeMedication(index)}
                    className={`w-12 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors ${index === 0 ? 'hidden' : ''}`}
                >
                    -
                </button>
                </div>
            ))}
            </div>
            <div className='p-4'>
                {/* Add medication button */}
                <button
                onClick={addMedication}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                +
                </button>
            </div>

            {/* Recommendations */}
            <div className="space-y-2">
                <h2 className="font-bold">RECOMENDACIONES</h2>
                <textarea
                    value={recommendations}
                    onChange={(e) => setRecommendations(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ingrese recomendaciones"
                />
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-4">
                <button
                    onClick={() => handleSubmit(false)}
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                    GUARDAR
                </button>
                <button
                    onClick={() => handleSubmit(true)}
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                GUARDAR Y FINALIZAR CITA
            </button>
        </div>
      </div>
    </div>
  );
};

