import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
  <footer>
    <div className="footer-content">
      <p>&copy; 2025 MovieApp. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer