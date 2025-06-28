// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Services from './pages/Services';
import Companies from './pages/TempCompanies';
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';

// Company subpages
import CaskPage from './pages/companies/Cask';
import MaharusiPage from './pages/companies/Maharusi';
import PerserviaPage from './pages/companies/Perservia';
import NurVoltPage from './pages/companies/NurVolt';
import AmakuroPage from './pages/companies/Amakuro';
import EasbyPage from './pages/companies/Easby';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main one-page layout */}
        <Route
          path="/"
          element={
            <div>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              {/* <section id="services">
                <Services />
              </section> */}
              <section id="companies">
                <Companies />
              </section>
              <section id="leadership">
                <Leadership />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </div>
          }
        />

        {/* Individual company pages */}
        <Route path="/companies/cask-and-crate" element={<CaskPage />} />
        <Route path="/companies/maharusi" element={<MaharusiPage />} />
        <Route path="/companies/preservia" element={<PerserviaPage />} />
        <Route path="/companies/nurvolt" element={<NurVoltPage />} />
        <Route path="/companies/amakuro-capital" element={<AmakuroPage />} />
        <Route path="/companies/easby-road" element={<EasbyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
