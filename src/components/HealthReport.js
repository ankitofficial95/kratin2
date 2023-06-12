import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './App.css';

function HealthReport() {
  const [metersWalked, setMetersWalked] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [stepsDone, setStepsDone] = useState('');
  const [yogaDone, setYogaDone] = useState('');

  const handleGenerateReport = (e) => {
    e.preventDefault();

    // Generate the health report data
    const healthReportData = [
      { name: 'Meters Walked Today', value: metersWalked },
      { name: 'Water Intake for Today (liters)', value: waterIntake },
      { name: 'Steps Done for Today', value: stepsDone },
      { name: 'Yoga Done for Today (minutes)', value: yogaDone },
      // Add more data fields as needed
    ];

    // Create an HTML template for the PDF content
    const template = `
      <h1>Health Report</h1>
      <table>
        <tr>
          <th>Attribute</th>
          <th>Value</th>
        </tr>
        ${healthReportData
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
      filename: 'health_report.pdf',
      html2canvas: {},
      jsPDF: { orientation: 'portrait' },
    };

    // Generate the PDF and download it
    html2pdf().from(template).set(options).save();
  };

  return (
    <div className="container">
      <h1>Health Report</h1>
      <form onSubmit={handleGenerateReport}>
        <div className="form-group">
          <label htmlFor="metersWalked">Meters Walked Today</label>
          <input
            type="number"
            id="metersWalked"
            value={metersWalked}
            onChange={(e) => setMetersWalked(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="waterIntake">Water Intake for Today (liters)</label>
          <input
            type="number"
            id="waterIntake"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stepsDone">Steps Done for Today</label>
          <input
            type="number"
            id="stepsDone"
            value={stepsDone}
            onChange={(e) => setStepsDone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="yogaDone">Yoga Done for Today (minutes)</label>
          <input
            type="number"
            id="yogaDone"
            value={yogaDone}
            onChange={(e) => setYogaDone(e.target.value)}
            required
          />
        </div>
        {/* Add more form fields for additional data */}
        <button type="submit">Generate Report</button>
      </form>
    </div>
  );
}

export default HealthReport;
