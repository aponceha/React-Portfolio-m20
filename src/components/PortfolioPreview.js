import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/style.css';
import projectData from '../assets/projects.json';

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


export default function PortfolioPreview({isProjectData, setIsProjectData}) {
  return (
    <div style={styles.previewContainer}>
      <h1 style={styles.h1Portfolio}>Projects</h1>
      <div style={styles.pListContainer}>
        <li className="projectListLi" style={styles.projectList}
        onClick={() => setIsProjectData(1)}>
          {projectData[0].title}
        </li>
        <li className="projectListLi" style={styles.projectList}
        onClick={() => setIsProjectData(2)}>
          {projectData[1].title}
        </li>
        <li className="projectListLi" style={styles.projectList} 
        onClick={() => setIsProjectData(3)}>
          {projectData[2].title}
        </li>
        <li className="projectListLi" style={styles.projectList}
        onClick={() => setIsProjectData(4)}>
          {projectData[3].title}
        </li>
        <li className="projectListLi" style={styles.projectList} 
        onClick={() => setIsProjectData(5)}>
          {projectData[4].title}
        </li>
      </div>
    </div>
  );
}