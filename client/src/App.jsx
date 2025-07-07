import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import AuthForm from './pages/AuthForm'; // Swapped in here
import ContactUs from './pages/contact';
import Doctors from './pages/Doctors';
import MyProfile from './pages/myprofile';
import Appointment from './pages/appointments';
import Navbar from './components/Navbar';
import DoctorDetails from './pages/DoctorDetails';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/login' element={<AuthForm />} /> {/* 👈 Auth form rendered here */}
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/appointments' element={<Appointment />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/doctor/:id' element={<DoctorDetails />} />
      </Routes>
    </div>
  );
};

export default App;
