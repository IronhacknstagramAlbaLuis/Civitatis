import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ActivitiesList from "./components/activities/activities-list/ActivitiesList";
import ActivitiesPage from "./pages/ActivitiesPage";
import HomePage from "./pages/HomePage";import ActivitiesPage from "./pages/ActivitiesPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities/:id " element={<ActivitiesPage/>} />
      

      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
