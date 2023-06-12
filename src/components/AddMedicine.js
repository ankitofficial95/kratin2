import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './App.css';

function AddMedicine() {
  // State for the new medicine form
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [medicineType, setMedicineType] = useState('');
  const [intervalValue, setIntervalValue] = useState('');
  const [intervalUnit, setIntervalUnit] = useState('hours');
  const [startingTime, setStartingTime] = useState('');

  const handleAddMedicine = (e) => {
    e.preventDefault();

    // Generate the medicine data for the PDF
    const medicineData = [
      { name: 'Medicine Name', value: medicineName },
      { name: 'Dosage in mg', value: dosage },
      { name: 'Medicine Type', value: medicineType },
      { name: 'Interval Value', value: intervalValue },
      { name: 'Interval Unit', value: intervalUnit },
      { name: 'Starting Time', value: startingTime },
    ];

    // Create an HTML template for the PDF content
    const template = `
      <h1>Medicine Details</h1>
      <table>
        <tr>
          <th>Attribute</th>
          <th>Value</th>
        </tr>
        ${medicineData
          .map(
            (item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.value}</td>
              </tr>
            `
          )
          .join('')}
      </table>
    `;

    // Options for the PDF generation
    const options = {
      filename: 'medicine_details.pdf',
      html2canvas: {},
      jsPDF: { orientation: 'portrait' },
    };

    // Generate the PDF and download it
    html2pdf().from(template).set(options).save();
  };

  return (
    <div className="add-medicine-container">
      <h2>Add New Medicine</h2>
      <form onSubmit={handleAddMedicine}>
        <div className="form-group">
          <label htmlFor="medicineName">Medicine Name</label>
          <input
            type="text"
            id="medicineName"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dosage">Dosage in mg</label>
          <input
            type="text"
            id="dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="medicineType">Medicine Type</label>
          <input
            type="text"
            id="medicineType"
            value={medicineType}
            onChange={(e) => setMedicineType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="intervalValue">Interval Selection</label>
          <input
            type="number"
            id="intervalValue"
            value={intervalValue}
            onChange={(e) => setIntervalValue(e.target.value)}
            required
          />
          <select
            value={intervalUnit}
            onChange={(e) => setIntervalUnit(e.target.value)}
            required
          >
            <option value="hours">hours</option>
            <option value="minutes">minutes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startingTime">Starting Time</label>
          <input
            type="time"
            id="startingTime"
            value={startingTime}
            onChange={(e) => setStartingTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Confirm</button>
      </form>
      <button onClick={handleAddMedicine} className="btn">Download PDF</button>
    </div>
  );
}

export default AddMedicine;
