import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <img src={logo} alt="Company Logo" className="logo" />
      <h1>Welcome to the Kratin Senior-Connect</h1>
      <p>Designed for individuals aged 65 and above</p>
      <br></br>
      <p>Transforming Healthcare Experience
We partner with healthcare companies at strategic level to assist them in bridging the gap between hospitals, patients and physicians with cutting edge technologies.</p>
<br></br>
      <p>Our Offerings
	TruliaCare Suite
Ready to use solution providing “Truly caring integrated experience” across continuum
 
	UHX Platform
Rapid cost effective building blocks for delivering unified care experience
 
	Innovation Lab
Extended IT team for cutting edge technology solutions meeting your specific needs
</p>
      
      <div className="buttons">
        <Link to="/login" className="btn">Log In</Link>
        {/* <Link to="/register" className="btn">Register</Link> */}
        <Link to="/about" className="btn">About Us</Link> {/* Add the "About Us" button */}

        <Link to="/Contact" className="btn">Contact Us</Link> {/* Add the "About Us" button */}
      </div>
      <p>© 2018 Kratin LLC</p>
    </div>



  );
}

export default Home;
