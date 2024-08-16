import { useState } from 'react';
import Swal from 'sweetalert2';

const AgeCalc = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);
  const [days, setDays] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return Swal.fire("Please Provide Date Of Birth");
    
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    
    // Adjust for month and day difference
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      calculatedAge--;
    }

    const daysDifference = Math.floor((today - birthDateObj) / (1000 * 60 * 60 * 24)); // Difference in days

    setAge(calculatedAge);
    setDays(daysDifference);

    Swal.fire({
      title: `You Are ${calculatedAge} Years Old`,
      text: `You have lived for ${daysDifference} days.`,
      width: 600,
      padding: "3em",
      color: "#716add",
    });
  };

  return (
    <div className="flex flex-col h-56 rounded-lg items-center justify-center bg-blue-100 p-5">
      <h1 className="text-xl font-bold text-blue-600 mb-4">Age Calculator</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="p-2 mb-4 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={calculateAge}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
      >
        Calculate Age
      </button>
    </div>
  );
};

export default AgeCalc;
