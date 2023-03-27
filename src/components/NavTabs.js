import React from 'react';
import '../styles/style.css';
import logo from '../assets/aph-logo2.1.png';
import {motion } from 'framer-motion';

const styles = {
  nav: {
    position: "absolute",
    top: "50px",
    left: "10%",
    width: "80%",
    color: "#ffffff",
    textAlign: "center",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    listStyleType: "none",
  },
  navLink: {
  },
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange, isProjectData, setIsProjectData, showHome, setShowHome }) {
  return (
    <motion.ul style = {styles.nav}
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
    >
      <img src = {logo} alt="Logo" className="logo" onClick={() => {
        handlePageChange('Home');
        setIsProjectData("0");}}
        ></img>
      
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => {handlePageChange('Portfolio'); setShowHome(false);}}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => {handlePageChange('Resume'); setShowHome(false);}}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => {handlePageChange('Contact');setShowHome(false);}}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </motion.ul>
  );
}

export default NavTabs;
