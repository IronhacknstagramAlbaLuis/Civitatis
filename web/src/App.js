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
import UserPage from './pages/UserPage';
import Pagefilter from './pages/Pagefilter';




function App() {
  return (
    <>
      <AuthStore>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/activities/:id" element={<DetailPage/>} />
          <Route path="/users/:userId" element={<UserPage/>} />
          <Route path="/activities/:id" element={<Pagefilter/>}/>
        </Routes> 
      
        <Footer />
      </AuthStore>
    </>
  );
}

export default App;
