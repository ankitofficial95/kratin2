import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import AddMedicine from './AddMedicine';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the session storage
    sessionStorage.clear();

    // Navigate to the home page
    navigate('/');
  };

  // Retrieve the email from session storage
  const userEmail = sessionStorage.getItem('email');

  const handleAddMedicineClick = () => {
    navigate('/AddMedicine');
  };

  const handleAddMedicineClick2 = () => {
    navigate('/HealthReport');
  };

  const handleAddMedicineClick3 = () => {
    navigate('/Appointments');
  };

  const handleAddMedicineClick4 = () => {
    navigate('/Healthtips');
  };

  const handleAddMedicineClick5 = () => {
    navigate('/HealthGame');
  };

  const handleAddMedicineClick6 = () => {
    navigate('/Alert');
  };

  return (
    <div className="container">
      <h1>Welcome to the Dashboard</h1>
      <p>Welcome, {userEmail}!</p>
      <button className="btn btn-red" onClick={handleLogout}>Logout</button>
<br></br>
      <button className="btn" onClick={handleAddMedicineClick}>Add Medicine</button>
    <br></br>
      <button className="btn" onClick={handleAddMedicineClick2}>Health Report</button>
      <br></br>
      <button className="btn" onClick={handleAddMedicineClick3}>Doctor Appointments</button>
      <br></br>
      <button className="btn" onClick={handleAddMedicineClick4}>Health Tips</button>
      <br></br>
      <button className="btn" onClick={handleAddMedicineClick5}>Health Game</button>
      <br></br>
      <button className="btn" onClick={handleAddMedicineClick6}>Alerts</button>
    </div>
  );
}

export default Dashboard;
