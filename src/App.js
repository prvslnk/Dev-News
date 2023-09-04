import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
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
        </Routes>
      </Router>
      <Footer />
    </>

  );
};

export default App;
