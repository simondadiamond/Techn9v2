import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Work from './components/Work';
import About from './components/About';
import FAQ from './components/FAQ'; // Assuming you have FAQ, add if needed
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
// Import any other components like Blog if necessary
import { I18nProvider } from './i18n';

// MainContent component to group sections for the main route
function MainContent() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Work />
      <About />
      {/* Assuming CTA and FAQ come after About */}
      <CallToAction />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <I18nProvider>
      <Router>
        {/* Main wrapper div */}
        <div className="bg-black min-h-screen">
          <Navbar />

          <Routes>
            {/* Main route rendering all sections */}
            <Route path="/" element={<MainContent />} />

            {/* Other specific routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Add other routes like /blog if needed */}
            {/* <Route path="/blog" element={<Blog />} /> */}
          </Routes>

          {/* Footer rendered on all pages (outside Routes might be better if needed everywhere) */}
          <Footer />
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;