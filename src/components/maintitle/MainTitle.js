import React from 'react';
import './MainTitle.css';

function MainTitle() {
  return (
    <div className="main-title">
      <div className="left-column">
        <h2 className="main-heading">
          Earn Instant rewards when you shop
        </h2>
        <p className="sub-heading">
          Collect rewards at all your favourite stores in India
        </p>
      </div>
      <div className="right-column">
        <button className="join-button">Join the Waitlist</button>
      </div>
    </div>
  );
}

export default MainTitle;
