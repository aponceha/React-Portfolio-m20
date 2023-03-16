import React from 'react';
import '../../styles/style.css';
import projectData from '../../assets/projects.json';

const styles = {
  homeContainer: {
    position: 'absolute',
    width: '50%',
    top: '45%',
  },
  pContainer: {
    backgroundImage: "linear-gradient(to bottom, #d53a9d, #743ad5,#d53a9d)",
    backgrounOrigin: "border-box",
    backgroundSize: "3px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingLeft: "18px",
    height: "fit-content",

  },

  h1Container: {
    paddingLeft: "20px",
  },
}

const aboutMe = `Welcome, my name is Albin Ponce-Ha. I am a full stack web developer with 5+ years of experience in Data Analysis and 1 year of building web applications.
I am a graduate of the UofT Full Stack Web Development Bootcamp. I am currently looking for a full time position as a web developer.`



export default function Home({option}) {
  // const renderBlurb = () => {
  //   if (isProjectData=0){
  //     return aboutMe
  //   }
  //   else if (isProjectData=1) {
  //     return projectData[0].blurb
  //   }
  //   else if (isProjectData=2) {
  //     return projectData[1].blurb
  //   }
  //   else if (isProjectData=3) {
  //     return projectData[2].blurb
  //   }
  //   else if (isProjectData=4) {
  //     return projectData[3].blurb
  //   }
  //   else if (isProjectData=5) {
  //     return projectData[4].blurb
  //   }
  // }

  return (
    <div style={styles.homeContainer}>
      <h1 className="mainHeader" style={styles.h1Container}>
      About Me</h1>
      <p style={styles.pContainer}>
        {option}
      </p>
    </div>
  );
}
