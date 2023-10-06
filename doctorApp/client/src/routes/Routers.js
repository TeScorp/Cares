import React from 'react';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Contact from '../pages/contact/Contact';
import Doctor from '../pages/doctors/Doctors';
import DoctorDetails from '../pages/doctors/DoctorDetails'

import { Routes, Route } from 'react-router-dom'
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
    </Routes>
  )
}

export default Routers