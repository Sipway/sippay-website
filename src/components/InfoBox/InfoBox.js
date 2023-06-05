import React from 'react';
import './InfoBox.css';

const InfoBox1 = () => {
  return (
    <div className="info-grid" id="info-grid-section">
      <div className="info-card">
        <h2 className="info-heading">Instant Reward Credit</h2>
        <p className="info-detail">We credit your rewards instantly, within minutes after each transaction</p>
      </div>
      <div className="info-card">
        <h2 className="info-heading">Rewards in 24K Digital Gold</h2>
        <p className="info-detail">No more boring or complex point systems. We credit your rewards in 24K digital gold.</p>
      </div>
      <div className="info-card">
        <h2 className="info-heading">Rewards that Grow with You</h2>
        <p className="info-detail">Your rewards don't sit idle at SIPPAY. They have the potential to grow along with the gold price</p>
      </div>
      <div className="info-card">
        <h2 className="info-heading">No Joining Fee or Annual Fee</h2>
        <p className="info-detail">You can start using SIPPAY with your UPI or basic RUPAY credit cards at no joining fee</p>
      </div>
      <div className="info-card">
        <h2 className="info-heading">Unbelievable Rewards</h2>
        <p className="info-detail">No premium credit card can match the SIPPAY rewards</p>
      </div>
      <div className="info-card">
        <h2 className="info-heading">700+ Stores</h2>
        <p className="info-detail">SIPPAY has partnered with over 700+ online brands and physical stores that you use in your daily life</p>
      </div>
    </div>
  );
}

export default InfoBox1;
