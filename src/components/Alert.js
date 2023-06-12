import React, { useState } from 'react';
import './App.css';

const Alert = () => {
  const [medicineList, setMedicineList] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleAddMedicine = () => {
    if (medicineName && dosage && time) {
      const newMedicine = {
        medicineName,
        dosage,
        time,
      };
      setMedicineList([...medicineList, newMedicine]);
      setMedicineName('');
      setDosage('');
      setTime('');
    }
  };

  const handleDeleteMedicine = (index) => {
    const updatedMedicineList = [...medicineList];
    updatedMedicineList.splice(index, 1);
    setMedicineList(updatedMedicineList);
  };

  const handleAlert = (time) => {
    alert(`It's time to take your medicine: ${time}`);
  };

  return (
    <div className="container">
      <h1>Medication Alert</h1>
      <div className="add-medicine-form">
        <input
          type="text"
          placeholder="Medicine Name"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleAddMedicine}>Add Medicine</button>
      </div>

      {medicineList.length > 0 && (
        <table className="medicine-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Dosage</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicineList.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.medicineName}</td>
                <td>{medicine.dosage}</td>
                <td>{medicine.time}</td>
                <td>
                  <button onClick={() => handleDeleteMedicine(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {medicineList.length > 0 && (
        <div className="medicine-alerts">
          <h2>Medicine Alerts</h2>
          {medicineList.map((medicine, index) => (
            <div key={index} className="alert">
              <span>{medicine.medicineName}</span>
              <span>{medicine.time}</span>
              <button onClick={() => handleAlert(medicine.time)}>
                Alert Me
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alert;
