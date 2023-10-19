import React from 'react';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Contact from '../pages/contact/Contact';
import Doctor from '../pages/doctors/Doctors';
import DoctorDetails from '../pages/doctors/DoctorDetails'
import MyAccount from "../Dashboard/user-account/MyAccount"
import Dashboard from "../Dashboard/doctor-account/Dashboard"

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/users/profile/me" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <MyAccount />
        </ProtectedRoute>
      }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={['doctor']}>
            <Dashboard />
          </ProtectedRoute> 
        }
      />      
    </Routes>
  )
}

export default Routers;
