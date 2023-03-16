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
      <span><i  style={styles.icon} className="fab fa-2x fa-linkedin"></i>  
      <i style={styles.icon} className="fab fa-2x fa-github"></i> 
      <i style={styles.icon} className="fab fa-2x fa-stack-overflow"></i></span>
      
    </footer>
  );
}
export default Footer;