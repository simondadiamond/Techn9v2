import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Work from './components/Work';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import { I18nProvider } from './i18n';

function MainContent() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Work />
      <About />
      <CallToAction />
    </>
  );
}

function App() {
  return (
    <I18nProvider>
      <Router>
        <div className="bg-black min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;
