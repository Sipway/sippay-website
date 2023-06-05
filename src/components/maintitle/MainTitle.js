import React from 'react';
import './MainTitle.css';

function MainTitle() {
  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/BLiwJAYFxw9r4EjW8', '_blank');
  };
  return (
    <div className="main-title">
      <div>
        <div className="main-heading">Earn Instant rewards when you shop</div>
        <div className="sub-heading">across all your favourite stores in India</div>
        <div className="wrapper-item-waitlist-button">
          <button className="join-button" onClick={handleJoinWaitlist}>
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
