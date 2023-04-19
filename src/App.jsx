import React from 'react';
import './app.scss';
import Navbar from './components/navBar/navBar';
import Hero from './components/heroSection/heroSection';
import WhyUsSection from './components/whyUsSection/whyUsSection';
import PackagesSection from './components/packagesSection/packagesSection';
import FaqSection from './components/faqSection/faqSection';
import PartnersSection from './components/partnersSection/partnersSection';
import Footer from './components/Footer/Footer';

const App = () => {
  console.log("app.scss", 'navBar');

  return (
    <div className="body">
      <Navbar />
      <Hero />
      <WhyUsSection />
      <PackagesSection />
      <FaqSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default App;

