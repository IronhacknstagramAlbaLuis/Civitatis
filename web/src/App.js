import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
