import { useState } from 'react';
import './partnersSection.scss';

const PartnersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const logos = [
    'bw-microtik.svg',
    'bw-paystack.svg',
    'bw-starlink.svg',
    'bw-tplink.svg',
    'logo-BankoInd.svg'
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="partners-section">
      <div className="title">Partners and Sponsors</div>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <img
            key={index}
            className={`logo ${index === activeIndex ? 'active' : ''}`}
            src={logo}
            alt="Partner Logo"
            loading="lazy"
          />
        ))}
      </div>
      <div className="dot-container">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
