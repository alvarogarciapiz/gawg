import './styles/globals.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Hero from './components/hero';
import Features from './components/features';
import Properties from './components/properties';
import Pricing from './components/pricing';
import Generator from './components/generator';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';
import TermsConditions from './components/TermsConditions';
import Steps from './components/steps';
import Macbook from './components/macbook';
import YouTube from './components/youtube';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Properties />
            <Steps />
            <Macbook />
            <YouTube />
            <Pricing />
            <Generator />
          </>
        } />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;