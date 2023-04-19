import React from 'react';
import StateComponent from './bundleContainer';

const packagesSection = () => {
  return (
    <div className="section-packages">
      <div className="packages-heading">Packages</div>
      <div className="choose-package-heading">Choose your package</div>
      <div className="package-container">
        <StateComponent className="StateComponent" />
        <StateComponent className="StateComponent" />
        <StateComponent className="StateComponent" />
      </div>
    </div>
  );
};

export default packagesSection