
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <h1>Get in touch</h1>
      <div className="location">
        <h2>New Jersey</h2>
        <p>Kratin LLC, 131, Recklesstown Way,</p>
        <p>Chesterfield, New Jersey - 08515</p>
        <p>USA.</p>
        <div className="contact-info">
          <p>email: info@kratinmobile.com</p>
          <p>call: (+1) 817 898 1386</p>
        </div>
        <a
          href="https://www.google.com/maps?q=131+Recklesstown+Way,Chesterfield,New+Jersey+-+08515"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on map
        </a>
      </div>
      <div className="location">
        <h2>Nagpur</h2>
        <p>Kratin Software Solutions Pvt. Ltd., B2-First Floor,</p>
        <p>47, Harihar Nagar, Nagpur - 440034</p>
        <p>India.</p>
        <div className="contact-info">
          <p>email: info@kratinmobile.com</p>
          <p>call: (+91) 9545001357</p>
        </div>
        <a
          href="https://www.google.com/maps?q=47,Harihar+Nagar,Nagpur+-+440034"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on map
        </a>
      </div>
    </div>
  );
}

export default Contact;
