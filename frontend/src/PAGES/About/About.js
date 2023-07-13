import React from 'react';
import './About.css';
import profile from "../../ASSETS/profile.jpeg";
import Navbar from '../../COMPONENTS/Navbar/Navbar';
const About = () => {
  const teamMembers = [
    {
      name: 'ABHIJIT TK',
      role: 'FullStack Developer',
      image: profile,
    },
    {
      name: 'DHARSAN PG',
      role: 'FullStack Developer',
      image: profile,
    },
   
  ];

  return (
    <div className="about-container">
    <Navbar/>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our website!</p>
      <p>We are a team of passionate individuals dedicated to providing quality products and services.</p>
      <p>Feel free to explore our website and learn more about what we do.</p>
      <p></p>


      <div className="team-members-container">
        <h2>Our Team</h2>
        <div className="card-container">
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.image} alt={member.name} className="card-image" />
              <div className="card-content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
