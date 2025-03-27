// app.tsx - TEMPORARY TEST - ONLY RENDER NAVBAR

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import other components if needed by Navbar, but they won't be rendered directly here
// import Hero from './components/Hero';
// import Services from './components/Services';
// ... etc ...
// import Footer from './components/Footer';
import { I18nProvider } from './i18n';

// MainContent function might not be needed for this test
// function MainContent() { ... }

function App() {
  return (
    <I18nProvider>
      <Router>
        {/* Ensure no overflow-x-hidden here if you added it before */}
        <div className="bg-black min-h-screen">

          <Navbar /> {/* Use your ORIGINAL Navbar component code */}

          {/* --- Temporarily Comment Out Routes and Footer --- */}
          {/*
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
          */}
          {/* --- End of Temporarily Commented Out Section --- */}

        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;