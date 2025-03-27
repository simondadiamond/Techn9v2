import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Keep Navbar import
import Hero from './components/Hero'; // Keep Hero import
// Comment out imports for components not being rendered in this test:
// import Services from './components/Services';
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
*/

function App() {
  return (
    <I18nProvider>
      <Router>
        {/* Ensure no overflow-x-hidden here */}
        <div className="bg-black min-h-screen">
          {/* Render the Navbar (using original Navbar.tsx code) */}
          <Navbar />

          {/* --- Routes Section: Modified for Test 2 --- */}
          <Routes>
            {/* Route for '/': Render ONLY Hero */}
            <Route path="/" element={
              <>
                <Hero />
                {/* --- Components previously on main route are commented out --- */}
                {/* <MainContent /> */}
                {/* <CallToAction /> */}
                {/* <FAQ /> */}
              </>
            } />

            {/* Keep other routes if you need to navigate to them for any reason during test */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Comment out other potential routes like /blog if they exist */}
            {/* <Route path="/blog" element={<Blog />} /> */}

          </Routes>
          {/* --- End of Routes Section --- */}


          {/* --- Footer is commented out for this test --- */}
          {/* <Footer /> */}

        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;
