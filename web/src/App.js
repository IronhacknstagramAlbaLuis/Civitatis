import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ActivitiesList from "./components/activities/activities-list/ActivitiesList";

import HomePage from "./pages/HomePage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';




function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/activities/:id " element={<ActivitiesPage/>} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>} />

      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
