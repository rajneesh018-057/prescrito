import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AdminContext } from './context/Admincontext';
import Login from './pages/login';
import Navbar from './components/Navbar';
import AdminSidebar from './components/AdminSidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import DoctorList from './pages/Admin/DoctorLIst';
import Appointments from './pages/Admin/Appointments';
import AddDoctor from './pages/Admin/AddDoctor';

const App = () => {
  const { atoken } = useContext(AdminContext);

  return (
    <>
      {atoken ? (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
            <div className="w-64 border-r bg-white min-h-screen">
              <AdminSidebar />
            </div>
            <div className="flex-1 p-6">
              <Routes>
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/doctors-list" element={<DoctorList />} />
                <Route path="/all-appointments" element={<Appointments />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}

      {/* Toast container globally once */}
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
};

export default App;
