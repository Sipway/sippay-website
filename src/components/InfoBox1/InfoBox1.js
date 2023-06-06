import React from 'react';
import './InfoBox1.css';

const InfoBox1 = () => {
  return (
    <div className="info-box-1">
      <div className="info-box-1-card">
        <h2 className="info-box-1-heading">Instant Reward Credit</h2>
        <p className="info-box-1-subheading">We credit your rewards instantly, within minutes after each transaction</p>
      </div>
      <div className="info-box-1-card">
        <h2 className="info-box-1-heading">Rewards in 24K Digital Gold</h2>
        <p className="info-box-1-subheading">No more boring or complex point systems. We credit your rewards in 24K digital gold.</p>
      </div>
      <div className="info-box-1-card">
        <h2 className="info-box-1-heading">Rewards that Grow with You</h2>
        <p className="info-box-1-subheading">Your rewards don't sit idle at SIPPAY. They have the potential to grow along with the gold price</p>
      </div>
    </div>
  );
}

export default InfoBox1;
