import React from 'react';

const contactContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
};

const contactInfoStyle = {
  width: '45%',
};

const contactFormStyle = {
  width: '45%',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  margin: '10px 0',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const buttonHoverStyle = {
  backgroundColor: '#45a049',
};

const ContactUs = () => {
  return (
    <div style={contactContainerStyle}>
      <div style={contactInfoStyle}>
        <h2>CALL US</h2>
        <p>Helpline: +91-98765 43210</p>
        <h2>EMAIL US</h2>
        <p><a href="mailto:ashmi140305@gmail.com">ashmi140305@gmail.com</a></p>
        <h2>HEAD OFFICE LOCATION</h2>
        <p>Green Paradise Limited</p>
        <p>EcoHub Building, 123 Green Lane,
          Springfield Business Park,
          Downtown City, ABC State 123456</p>
        <h2>STORE LOCATION</h2>
        <p>Green Paradise Garden Center</p>
        <p>Nature's Corner, 456 Forest Drive,
          Woodland District,
          Eden City, XYZ State 654321
        </p>
        <p>Timings: 9:00AM - 6:00PM, Monday - Saturday</p>
      </div>
      <div style={contactFormStyle}>
        <h2>Contact Us</h2>
        <form style={formStyle}>
          <label style={labelStyle}>
            Full Name:
            <input type="text" name="name" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Phone Number:
            <input type="text" name="phone" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Email Address:
            <input type="email" name="email" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Location:
            <input type="text" name="location" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Your Message:
            <textarea name="message" style={textareaStyle}></textarea>
          </label>
          <button type="submit" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
