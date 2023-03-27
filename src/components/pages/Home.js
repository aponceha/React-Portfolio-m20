import React from 'react';
import '../../styles/style.css';
import { motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';


const styles = {
  homeContainer: {
    position: 'absolute',
    width: '50%',
    top: '45%',
  },
  pContainer: {
    backgroundImage: "linear-gradient(to bottom, #d53a9d, #743ad5)",
    backgroundOrigin: "border-box",
    backgroundSize: "3px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingLeft: "18px",
    height: "fit-content",
    marginTop: '24px',

  },

  h1Container: {
    paddingLeft: "20px",
  },
}

export default function Home(props) {
  
  setTimeout(() => {
    props.setShowHome(true);
  }, 400);

  return ( 
    <AnimatePresence>
    {props.showHome && <motion.div style={styles.homeContainer}
    key={props.header}
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1,}}
    transition={{ delay: 0.2, type: 'tween', }}
    exit={{ x: -300, opacity: 0, transition: { duration: 0.4 } }}
    >
      
      <h1 className="mainHeader" style={styles.h1Container}>
      {props.header}</h1>
      <p style={styles.pContainer}
      >
        {props.option}motion.
      
      <div className="link-div"> 
        {props.links.Site && <a href={props.links.Site} className="link-header">View Site</a>}
        {props.links.Github && <a href={props.links.Github} className="link-header">Github</a>}
        {props.links.Video && <a href={props.links.Video} className="link-header">Video</a>}
      </div>
      </p>
    </motion.div>}
    </AnimatePresence>
  );
}
