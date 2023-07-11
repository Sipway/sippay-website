import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="privacy-policy.html" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="terms-conditions.html" style={{ color: 'white', textDecoration: 'none' }}>Terms and Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
