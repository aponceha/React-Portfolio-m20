import React from 'react';
import '../styles/style.css';
import logo from '../assets/aph-logo2.1.png';

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
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style = {styles.nav}>
      <img src = {logo} alt="Logo" className="logo" onClick={() => handlePageChange('Home')}
        ></img>
      {/* <li className="nav-item">
        <a
          href="#about-me"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li> */}
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
