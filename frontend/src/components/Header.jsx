import React, { useState } from 'react';

const Header = ({ onLoginClick, onSignupClick, onLogoutClick, isAuthenticated }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="nav">
      <img 
  src="logo.PNG" 
  alt="Company Logo" 
  
/>

        <nav className="menu" aria-label="Primary">
          <a href="#packages">Packages</a>
          <a href="#offers">Offers</a>
          <a href="#trainers">Trainers</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* <div className="cta">
          <a className="btn" href="tel:8610209166" aria-label="Call 8610209166">Call : 8610209166</a>
          <a className="btn primary" href="https://maps.app.goo.gl/AoPDpjE5u5shzZPg7" target="_blank" rel="noopener">Google Directions</a>
        </div> */}

        {/* <button 
          className="burger" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu" 
          aria-expanded={mobileMenuOpen}
        >
          <span></span><span></span><span></span>
        </button> */}
         <div id="mobile" >
                <div className="social-links" style={{padding:'12px 0', gap:'12px', justifyContent:'center'}}>
          <a  href="https://instagram.com/delta.fitness_" target="_blank" rel="noopener" style={{color:'white'}}>
            <img src="insta.PNG" alt="Instagram" style={{width:'45px', height:'35px', objectFit:'cover'}}/>
          </a>
          <a href="https://wa.me/918610209166" target="_blank" rel="noopener" style={{color:'white'}}>
          <img src="whatsapp.png" alt="WhatsApp" style={{width:'35px', height:'35px', objectFit:'cover'}}/>
          </a>
        </div>
      </div>
      </div>
      
     
        {/* <nav className="menu" aria-label="Mobile" tyle={{padding:'16px 0 12px'}}>
          <a href="#packages" onClick={closeMobileMenu}>Packages</a>
          <a href="#offers" onClick={closeMobileMenu}>Offers</a>
          <a href="#trainers" onClick={closeMobileMenu}>Trainers</a>
          <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
          <a href="#reviews" onClick={closeMobileMenu}>Reviews</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </nav> */}
        {/* <div className="inline" style={{padding:'16px 0 12px'}}>
          <a className="btn" href="tel:8610209166">Call : 8610209166</a>
          <a className="btn primary" href="https://maps.app.goo.gl/AoPDpjE5u5shzZPg7" target="_blank" rel="noopener">Google Directions</a>
        </div> */} 

    </header>
  );
};

export default Header; 