import React from 'react';
import Header from '../components/Header';
import Specialities from '../components/SpecialityMenu';
import Topdoctors from '../components/Topdoctors';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
     <Header />
      <Specialities />
      <Topdoctors />
      <Banner/>
      <Footer />
    </div>
  );
};

export default Home;
