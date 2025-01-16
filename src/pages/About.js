import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Movie App</h1>
      <p className="about-description">Welcome to our movie app! Here you can find information about your favorite movies, actors, and directors. Stay updated with the latest releases and reviews.</p>
      <h2 className="features-title">Features</h2>
      <ul className="features-list">
        <li className="feature-item">Search for movies</li>
        <li className="feature-item">Read reviews</li>
        <li className="feature-item">Get recommendations</li>
        <li className="feature-item">Watch trailers</li>
      </ul>
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">If you have any questions or feedback, feel free to reach out to us at support@movieapp.com.</p>
    </div>
  )
}

export default About