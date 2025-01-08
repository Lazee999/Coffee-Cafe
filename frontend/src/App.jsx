import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services.jsx';
import Banner from './Component/Banner/Banner.jsx';
import AppStore from './Component/AppStore/AppStore.jsx';
import Testimonial from './Component/Testimonial/Testimonial.jsx';
import Footer from './Component/Footer/Footer.jsx';

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 0,
    });
  });
  return (<div className="overflow-x-hidden">
    <Navbar />
    <Home />
    <Services />
    <Banner />
    <AppStore />
    <Testimonial />
    <Footer />




  </div >
  );
};

export default App