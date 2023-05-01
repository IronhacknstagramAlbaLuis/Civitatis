import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ActivitiesList from "./components/activities/activities-list/ActivitiesList";
import HomePage from "./pages/HomePage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import  AuthStore  from './components/context/AuthStore'
import DetailPage from './pages/DetailPage';




function App() {
  return (
    <>
      <AuthStore>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/activities/:id " element={<ActivitiesPage/>} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/activities/:id" element={<DetailPage/>} />

          </Routes> 
          {/* <Route path="/projects/:projectId" element={<ProjectPage />} /> */}
        
        <Footer />
      </AuthStore>
    </>
  );
}

export default App;
