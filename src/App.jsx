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
import TermsConditions from './components/TermsConditions';
import Steps from './components/steps';
import Macbook from './components/macbook';
import YouTube from './components/youtube';
import Users from './components/users';
import Documentation from './components/documentation';
import Problems from './components/problems';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Problems />
            <Users />
            <Properties />
            <Steps />
            <Macbook />
            <YouTube />
            {/* <Pricing /> */}
            <Generator />
          </>
        } />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;