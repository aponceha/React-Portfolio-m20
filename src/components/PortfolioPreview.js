import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/style.css';
import projectData from '../assets/projects.json';
import { motion } from 'framer-motion';

const styles = {
    previewContainer: {
        position: "absolute",
        bottom: "120px",
        left: "65%",
        width: "30%",
        paddingRight: "50px",
    },
    projectList: {
        listStyleType: "none",
        margin: "1rem",
        width: "fit-content",
        backgroundImage: "linear-gradient(to right, #d53a9d, #743ad5,#d53a9d)",
        backgrounOrigin: "border-box",
        backgroundSize: "100% 3px",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        paddingBottom: "0.3rem",
        fontSize: "1.1rem",
    },
    pListContainer: {
        padding: "0.3rem",
        paddingTop: "1rem",
        paddingLeft: "2rem",
        backgroundImage: "linear-gradient(to right, #d53a9d, #743ad5, #743ad5,#743ad5,#743ad5,#d53a9d, transparent 400px), linear-gradient(to top, #d53a9d,#743ad5,#743ad5, #743ad5, #d53a9d, transparent 400px), linear-gradient(to left, #d53a9d, #743ad5, #743ad5,#d53a9d, transparent 400px), linear-gradient(to bottom, #d53a9d, #743ad5, #743ad5,#743ad5,#d53a9d, transparent 400px)",
        backgrounOrigin: "border-box",
        backgroundSize: "100px 5px, 0px 25%, 25% 0px, 5px 100px",
        backgroundPosition: "top left, top right, bottom right, top left",
        backgroundRepeat: "no-repeat",
        borderRadius: "5px",
    },
    h1Portfolio: {
        paddingBottom: "1rem",
    },

}


export default function PortfolioPreview({isProjectData, setIsProjectData, showHome, setShowHome}) {
  return (
    <motion.div style={styles.previewContainer}
    initial={{ opacity: 0, scale: 0.2 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 2, type: 'spring', stiffness: 120 }}
    >
      <h1 style={styles.h1Portfolio}>Projects</h1>
      <div style={styles.pListContainer}>
        <li className="projectListLi" style={styles.projectList}
        onClick={() => {setIsProjectData("1");
        setShowHome(false);}
        }>
          {projectData[0].title}
        </li>
        <li className="projectListLi" style={styles.projectList}
        onClick={() => {setIsProjectData("2");
        setShowHome(false);}}>
          {projectData[1].title}
        </li>
        <li className="projectListLi" style={styles.projectList} 
        onClick={() => {setIsProjectData("3");setShowHome(false);}}>
          {projectData[2].title}
        </li>
        <li className="projectListLi" style={styles.projectList}
        onClick={() => {setIsProjectData("4");setShowHome(false);}}>
          {projectData[3].title}
        </li>
        <li className="projectListLi" style={styles.projectList} 
        onClick={() => {setIsProjectData("5");setShowHome(false);}}>
          {projectData[4].title}
        </li>
      </div>
    </motion.div>
  );
}