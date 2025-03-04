import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-container">
        <div className="footer-section">
          <h3>NoteKeeper</h3>
          <p>Your personal digital notebook for capturing ideas, plans, and memories.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li className="footer-link"><a href="#">Home</a></li>
            <li className="footer-link"><a href="#">My Notes</a></li>
            <li className="footer-link"><a href="#">Categories</a></li>
            <li className="footer-link"><a href="#">About</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-links">
            <li className="footer-link"><a href="mailto:xyz@gmail.com">xyz@gmail.com</a></li>
            <li className="footer-link"><a href="#">Help Center</a></li>
            <li className="footer-link"><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 NoteKeeper. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
