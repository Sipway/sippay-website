import React from 'react';
import './MainTitle.css';
import LoginModal from '../LoginModal/LoginModal';
import { useState } from 'react';

function MainTitle() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleJoinWaitlist = () => {
    setIsModalOpen(true)
  };

  const handleCoseModal = () => {
    setIsModalOpen(false);

  }


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
      <LoginModal open={isModalOpen} onClose={handleCoseModal} />
    </div>
  );
}

export default MainTitle;
