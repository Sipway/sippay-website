import React from 'react';
import './MainTitle.css';

function MainTitle() {
  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/BLiwJAYFxw9r4EjW8', '_blank');
  };

  return (
    <div className="main-title">
      <div className="left-column">
        <h2 className="main-heading">Earn Instant rewards when you shop</h2>
        <p className="sub-heading">Collect rewards at all your favourite stores in India</p>
      </div>
      <div className="right-column">
        <button className="join-button" onClick={handleJoinWaitlist}>
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}

export default MainTitle;
