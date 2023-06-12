import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password match the expected values
    if (email === 'kratin@kratin.com' && password === 'kratin') {
      // Store the email in session storage
      sessionStorage.setItem('email', email);

      // Reset the form
      setEmail('');
      setPassword('');

      // Navigate to the Dashboard component
      navigate('/dashboard');
    } else {
      // Display an error message for failed login
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h1 className="login-title">Kratin Senior-Connect</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <button className="btn login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
