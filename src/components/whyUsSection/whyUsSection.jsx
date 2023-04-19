import React from 'react';
import './whyUsSection.scss';

const WhyUsSection = () => {
  return (
    <section className="why-us-section">
      <h2 className="why-us-section__title">ABOUT US</h2>
      <h3 className="why-us-section__subtitle">WHAT MAKES US SPECIAL</h3>
      <div className="why-us-section__container">
        <div className="why-us-section__panel">
          <div className="why-us-section__panel-container">
            <h3 className="why-us-section__panel-title">NO COST ACCESS TO EQUIPMENT</h3>
            <p className="why-us-section__panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna eget eros faucibus posuere. Mauris venenatis risus augue, in vestibulum velit dapibus quis. Vestibulum laoreet bibendum velit, sit amet eleifend nulla efficitur ac. Donec vehicula risus auctor est rhoncus elementum. </p>
          </div>
        </div>
        <div className="why-us-section__panel">
          <div className="why-us-section__panel-container">
            <h3 className="why-us-section__panel-title">UNCAPPED INTERNET ACCESS</h3>
            <p className="why-us-section__panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna eget eros faucibus posuere. Mauris venenatis risus augue, in vestibulum velit dapibus quis. Vestibulum laoreet bibendum velit, sit amet eleifend nulla efficitur ac. Donec vehicula risus auctor est rhoncus elementum. </p>
          </div>
        </div>
        <div className="why-us-section__panel">
          <div className="why-us-section__panel-container">
            <h3 className="why-us-section__panel-title">FLEXIBLE PAYMENT OPTIONS</h3>
            <p className="why-us-section__panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna eget eros faucibus posuere. Mauris venenatis risus augue, in vestibulum velit dapibus quis. Vestibulum laoreet bibendum velit, sit amet eleifend nulla efficitur ac. Donec vehicula risus auctor est rhoncus elementum. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
