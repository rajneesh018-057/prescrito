import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import  Login from './pages/login';
import Contact from './pages/contact';
import Doctors from './pages/Doctors';

import Myprofile from './pages/myprofile';
import Appointment from './pages/appointments';
import Navbar from './components/Navbar';
import DoctorDetails from './pages/DoctorDetails';
// import { assets } from './assets/assets';
import { useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      

<Route path='/doctors' element={<Doctors />} />

        <Route path='/login' element={<div>Login</div>} />
        <Route path='/contact' element={<div>Contact</div>} />
        <Route path='/apt' element={<div>apt</div>} />
        <Route path='/myprofile' element={<div>Myprofile</div>} />
         <Route path="/doctor/:id" element={<DoctorDetails />} />
             </Routes>
    </div>
  );
};

export default App;
