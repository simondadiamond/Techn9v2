// app.tsx - TEMPORARY TEST - NAVBAR + HERO + SERVICES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Keep Navbar import
import Hero from './components/Hero'; // Keep Hero import
import Services from './components/Services'; // *** UNCOMMENT Services import ***
// Comment out imports for components not being rendered in this test:
// import Process from './components/Process';
// import Benefits from './components/Benefits';
// import Work from './components/Work';
// import About from './components/About';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import CallToAction from './components/CallToAction';
import Privacy from './components/Privacy'; // Keep if you want to test this route
import Terms from './components/Terms'; // Keep if you want to test this route
import { I18nProvider } from './i18n';

// Comment out MainContent function definition for this test
/*
function MainContent() { ... }
*/

function App() {
  return (
    <I18nProvider>
      <Router>
        <div className="bg-black min-h-screen">
          <Navbar /> {/* Original Navbar */}

          <Routes>
            {/* Route for '/': Render Hero AND Services */}
            <Route path="/" element={
              <>
                <Hero />
                <Services /> {/* *** ADD Services component here *** */}
                {/* --- Other components still commented out --- */}
                {/* <Process /> */}
                {/* <Benefits /> */}
                {/* <Work /> */}
                {/* <About /> */}
                {/* <CallToAction /> */}
                {/* <FAQ /> */}
              </>
            } />

            {/* Keep other routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

          </Routes>

          {/* --- Footer still commented out --- */}
          {/* <Footer /> */}

        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;
