import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Hours from './components/Hours';
import EnquiryForm from './components/EnquiryForm';
import Packages from './components/Packages';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [toast, setToast] = useState({ show: false, message: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState({ open: false, mode: 'login' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2200);
  };

  const openLogin = () => setAuthModal({ open: true, mode: 'login' });
  const openSignup = () => setAuthModal({ open: true, mode: 'signup' });
  const closeAuth = () => setAuthModal({ open: false, mode: 'login' });

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    closeAuth();
    showToast('Logged in successfully');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    showToast('Logged out');
  };

  return (
    <div className="App">
      <Header 
        onLoginClick={openLogin}
        onSignupClick={openSignup}
        onLogoutClick={handleLogout}
        isAuthenticated={isAuthenticated}
      />
      <Hero />
      <Hours />
      <EnquiryForm 
        isAuthenticated={isAuthenticated}
        onRequireLogin={openLogin}
        onSuccess={() => showToast('Thanks for your enquiry! We will contact you shortly.')} 
      />
      <Packages />
      <Offers />
      <Gallery />
      <Trainers />
      <Reviews />
      <Contact />
      <FeedbackForm onSuccess={() => showToast('Thank you for your feedback!')} />
      <Footer />

      {authModal.open && (
        <div className="toast" style={{display:'block', position:'fixed', top:'20%', left:'50%', transform:'translateX(-50%)', zIndex:70, width:'min(420px, 92%)'}}>
          <div className="card" style={{padding:'20px'}}>
            <h3 style={{marginBottom:12}}>{authModal.mode === 'login' ? 'Login' : 'Sign Up'}</h3>
            <form onSubmit={handleAuthSubmit} style={{display:'grid', gap:12}}>
              {authModal.mode === 'signup' && (
                <input placeholder="Full Name" required />
              )}
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <div className="inline" style={{justifyContent:'flex-end'}}>
                <button type="button" className="btn" onClick={closeAuth}>Cancel</button>
                <button type="submit" className="btn primary" style={{color:'white'}}>{authModal.mode === 'login' ? 'Login' : 'Create Account'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast.show && <Toast message={toast.message} />}
    </div>
  );
}

export default App; 