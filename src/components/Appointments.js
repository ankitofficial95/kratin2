import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './App.css';

function Appointments() {
  const [doctorName, setDoctorName] = useState('');
  const [doctorAddress, setDoctorAddress] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [doctorLocation, setDoctorLocation] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (e) => {
    e.preventDefault();

    // Create a new appointment object
    const newAppointment = {
      doctorName,
      doctorAddress,
      appointmentDate,
      doctorLocation,
      appointmentTime,
    };

    // Add the new appointment to the list of appointments
    setAppointments([...appointments, newAppointment]);

    // Reset the form
    setDoctorName('');
    setDoctorAddress('');
    setAppointmentDate('');
    setDoctorLocation('');
    setAppointmentTime('');
  };

  const handleDownloadPDF = () => {
    // Create an HTML template for the PDF content
    const template = `
      <h1>Appointments</h1>
      <table>
        <tr>
          <th>Doctor Name</th>
          <th>Doctor Address</th>
          <th>Appointment Date</th>
          <th>Doctor Location</th>
          <th>Appointment Time</th>
        </tr>
        ${appointments
          .map(
            (appointment) => `
              <tr>
                <td>${appointment.doctorName}</td>
                <td>${appointment.doctorAddress}</td>
                <td>${appointment.appointmentDate}</td>
                <td>${appointment.doctorLocation}</td>
                <td>${appointment.appointmentTime}</td>
              </tr>
            `
          )
          .join('')}
      </table>
    `;

    // Options for the PDF generation
    const options = {
      filename: 'appointments.pdf',
      html2canvas: {},
      jsPDF: { orientation: 'portrait' },
    };

    // Generate the PDF and download it
    html2pdf().from(template).set(options).save();
  };

  return (
    <div className="appointments-container">
      <h2>Add Appointment</h2>
      <form onSubmit={handleAddAppointment}>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor Name</label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorAddress">Doctor Address</label>
          <input
            type="text"
            id="doctorAddress"
            value={doctorAddress}
            onChange={(e) => setDoctorAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorLocation">Doctor Location</label>
          <input
            type="text"
            id="doctorLocation"
            value={doctorLocation}
            onChange={(e) => setDoctorLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Appointment</button>
      </form>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Doctor Address</th>
            <th>Appointment Date</th>
            <th>Doctor Location</th>
            <th>Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.doctorName}</td>
              <td>{appointment.doctorAddress}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.doctorLocation}</td>
              <td>{appointment.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="download-btn" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
}

export default Appointments;
