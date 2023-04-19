import React from 'react';
import './bundleContainer.scss';

const stateComponent = ({ isMobile }) => {
  const handleMouseEnter = (event) => {
    event.currentTarget.classList.add('expanded-section');
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.classList.remove('expanded-section');
  };

  return (
    <div
      className={`section-component${isMobile ? ' mobile-adaptable' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header">N400/day</div>
      <div className="package-name">FroDay</div>
      <div className="user-profiles">
        <img src="profile1.jpg" alt="Profile 1" />
        <img src="profile2.jpg" alt="Profile 2" />
        <img src="profile3.jpg" alt="Profile 3" />
        <img src="profile4.jpg" alt="Profile 4" />
      </div>
      <hr />
      <ul className="checkmark-list">
        <li>N400 for 24 hours</li>
        <li>One free hour</li>
      </ul>
      <button className="subscribe-button">Subscribe Now</button>
      <a href="#" className="view-all-link">View all packages</a>
    </div>
  );
};
export default stateComponent;