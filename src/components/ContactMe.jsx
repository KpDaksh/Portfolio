import React from 'react';

const ContactMe = () => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '150px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={containerStyle}>
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style = cardHoverStyle)}
        onMouseOut={(e) => (e.currentTarget.style = cardStyle)}
      >
        <h3>LinkedIn</h3>
        <p>Connect with me on LinkedIn</p>
      </a>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        onMouseOver={(e) => (e.currentTarget.style = cardHoverStyle)}
        onMouseOut={(e) => (e.currentTarget.style = cardStyle)}
      >
        <h3>GitHub</h3>
        <p>Check out my GitHub profile</p>
      </a>
    </div>
  );
};

export default ContactMe;
