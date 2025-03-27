import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Work from './components/Work';
import About from './components/About';
import FAQ from './components/FAQ'; // Assuming you might have this component
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
      {/* Removed duplicate CallToAction from here, assuming it's only needed once */}
      {/* You might need FAQ or other components here depending on your structure */}
    </>
  );
}

// Note: Ensure you only have one CallToAction component rendered if it's meant
// to be in a specific place (e.g., before the Footer).
// If you have FAQ, uncomment or add it in MainContent or wherever appropriate.

function App() {
  return (
    <I18nProvider>
      <Router>
        {/* ↓↓↓ The overflow-x-hidden class is added here for diagnosis ↓↓↓ */}
        <div className="bg-black min-h-screen overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <MainContent />
                <CallToAction /> {/* Example: Placing CTA before Footer */}
                <FAQ />         {/* Example: Placing FAQ before Footer */}
              </>
            } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Add other routes like /blog if needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;