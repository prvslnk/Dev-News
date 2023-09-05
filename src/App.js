import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Resister';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />



        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>


      <Footer />
    </>

  );
};

export default App;
