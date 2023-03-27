import React from 'react';
import '../styles/style.css';

const styles = {
    footer: {
        position: "absolute",
        bottom: "40px",
        width: "100%",
        color: "#ffffff",
        textAlign: "center",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        padding: "10px",
    }
};

function Footer() {
  return (
    <footer style={styles.footer} className="footer">
      <span><a href="https://www.linkedin.com/in/albin-ponce-ha/" style={styles.icon} className="fab fa-2x fa-linkedin"></a>  
      <a href="https://github.com/aponceha" style={styles.icon} className="fab fa-2x fa-github"></a> 
      <a href="https://stackoverflow.com/users/21461503/albin-ponce-ha-albin" style={styles.icon} className="fab fa-2x fa-stack-overflow"></a></span>
      
    </footer>
  );
}
export default Footer;