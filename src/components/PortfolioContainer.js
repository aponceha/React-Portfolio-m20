import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import PortfolioPreview from './PortfolioPreview';
import Footer from './Footer';
import "@fontsource/montserrat"
import '../styles/style.css';
import projectData from '../assets/projects.json';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const [isProjectData, setIsProjectData] = useState(0);

  useEffect(() => {
    console.log("use effect: ");
    localStorage.setItem('isProjectData', isProjectData);
    renderPage();
  }, [isProjectData]);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    console.log("renderpage");
    console.log(isProjectData);
    if (currentPage === 'Home') {
      return (
        [
          <Home />,
          <PortfolioPreview isProjectData={isProjectData} setIsProjectData={setIsProjectData}/>
      ]);
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const aboutMe = `Welcome, my name is Albin Ponce-Ha. I am a full stack web developer with 5+ years of experience in Data Analysis and 1 year of building web applications.
  I am a graduate of the UofT Full Stack Web Development Bootcamp. I am currently looking for a full time position as a web developer.`
  
  const renderText = () => {
    if (isProjectData=0){
      <Home option= {isProjectData[0].blurb}/>
       
    }
    else if (isProjectData=1) {
      <Home option= {isProjectData[1].blurb}/>
      
    }
    else if (isProjectData=2) {
      <Home option= {isProjectData[2].blurb}/>
    }
    else if (isProjectData=3) {
      return projectData[2].blurb
    }
    else if (isProjectData=4) {
      return projectData[3].blurb
    }
    else if (isProjectData=5) {
      return projectData[4].blurb
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const handleGoHome = () => setCurrentPage('Home');

  console.log("Click Num= " + isProjectData);
  const styles = {
    body: {
        backgroundColor: "rgb(40 40 44)",
        color: "#ffffff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        // add gradient border for just top left and bottom right corners
        
    },
    mainContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "90%",
      width: "90%",
      backgroundColor: "rgb(40 40 44)",
      padding: "40px",
      fontFamily: "Montserrat",
      zIndex: "1",
      
    },
    borderGradient: {
      border: "2px solid transparent",
      backgroundImage: "linear-gradient(to right, #d53a9d, #743ad5, #743ad5,#743ad5,#743ad5,#d53a9d, transparent 400px), linear-gradient(to top, #d53a9d,#743ad5,#743ad5, #743ad5, #d53a9d, transparent 400px), linear-gradient(to left, #d53a9d, #743ad5, #743ad5,#d53a9d, transparent 400px), linear-gradient(to bottom, #d53a9d, #743ad5, #743ad5,#743ad5,#d53a9d, transparent 400px)",
      backgrounOrigin: "border-box",
      backgroundSize: "100% 20px, 20px 100%, 100% 20px, 20px 100%",
      backgroundPosition: "top left, top right, bottom right, bottom left",
      backgroundRepeat: "no-repeat",
      borderRadius: "15px",
    },
    borderGradientLeft: {
      position: "absolute",
      height: "60px",
      width: "21px",
      left: "0",
      top: "350px",
      zIndex: "1",
      backgroundImage: "linear-gradient(to bottom right, transparent 50%, rgb(40 40 44) 50%)",
    },
    borderGradientBot: {

      position: "absolute",
      height: "21px",
      width: "60px",
      left: "350px",
      top: "0",
      zIndex: "1",
      backgroundImage: "linear-gradient(to bottom right, transparent 50%, rgb(40 40 44) 50%)",
    },
    borderGradientRight: {
      
      position: "absolute",
      height: "60px",
      width: "20px",
      right: "0",
      bottom: "350px",
      zIndex: "1",
      backgroundImage: "linear-gradient(to top left, transparent 50%, rgb(40 40 44) 50%)",

    },
    borderGradientTop: {
      position: "absolute",
      height: "21px",
      width: "60px",
      right: "350px",
      bottom: "0",
      zIndex: "1",
      backgroundImage: "linear-gradient(to top left, transparent 50%, rgb(40 40 44) 50%)",
    },
};
  return (
    <div style = {styles.body}>
      {/* We are passing the currentPage from state and the function to update it */}
      <div style = {Object.assign(styles.mainContainer, styles.borderGradient)} >
        <div style={styles.borderGradientLeft}></div>
        <div style={styles.borderGradientTop}></div>
        <div style={styles.borderGradientRight}></div>
        <div style={styles.borderGradientBot}></div>
        {/* <div style={styles.borderGradient2}></div> */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <p>Paragraph Details - {renderText()}</p>
      <Footer />
      </div>
      
    </div>
  );
}
