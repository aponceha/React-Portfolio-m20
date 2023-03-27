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
import { motion, AnimatePresence } from 'framer-motion';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const [isProjectData, setIsProjectData] = useState("0");

  const [viewCards, setViewCards] = useState("0");

  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    localStorage.setItem('isProjectData', isProjectData);
    renderText();
  } , [isProjectData]);

  useEffect(() => {
    console.log("use effect: ");
    console.log(viewCards);
    renderPage();
  } , [viewCards]);
    

  const aboutMe = `My name is Albin Ponce-Ha. I am a full stack developer with 5+ years of experience in Data Analysis and 1 year of building web applications.
  I am a graduate of the UofT Full Stack Web Development Bootcamp. I am currently looking for a full time position in software development, software engineering, and data architexture.`

  const p1 = projectData || {};
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
      
    if (currentPage === 'Home') {

      return (
        <>
          <PortfolioPreview isProjectData={isProjectData} setIsProjectData={setIsProjectData} showHome={showHome} setShowHome={setShowHome}/>
        </>
      );
    }
    if (currentPage === 'Portfolio') {
      setViewCards("1");
    }
    if (currentPage === 'Resume') {
      return <Resume showHome={showHome} setShowHome={setShowHome}
              exit={{ x: -400, opacity: 0, transition: { duration: 0.4 } }}
      />;
    }
    return <Contact showHome={showHome} setShowHome={setShowHome}
            exit={{ x: -400, opacity: 0, transition: { duration: 0.4 } }}
    />;
  };
  
  const renderText = () => {

    if (isProjectData=="0"){
      return <Home option= {aboutMe} header="Welcome" links = "" showHome={showHome} setShowHome={setShowHome}/>
    }
    else if (isProjectData=="1") {
      return <Home option= {p1[0].blurb} header={p1[0].title} links = {p1[0].links} showHome={showHome} setShowHome={setShowHome}/>
    }
    else if (isProjectData=="2") {
      return <Home option= {p1[1].blurb}  header={p1[1].title} links = {p1[1].links} showHome={showHome} setShowHome={setShowHome}/>
    }
    else if (isProjectData=="3") {
      return <Home option= {p1[2].blurb}  header={p1[2].title} links = {p1[2].links} showHome={showHome} setShowHome={setShowHome}/>
    }
    else if (isProjectData=="4") {
      return <Home option= {p1[3].blurb}  header={p1[3].title} links = {p1[3].links} showHome={showHome} setShowHome={setShowHome}/>
    }
    else if (isProjectData=="5") {
      return <Home option= {p1[4].blurb}  header={p1[4].title} links = {p1[4].links} showHome={showHome} setShowHome={setShowHome}/>
    }
  };

  


  const handlePageChange = (page) => setCurrentPage(page);

  const handleGoHome = () => setCurrentPage('Home');


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
    <div
    key={viewCards}
    >
    {viewCards == "0" && <div style = {styles.body}>
      {/* Passing the currentPage from state and the function to update it */}
      <div style = {Object.assign(styles.mainContainer, styles.borderGradient)} >
        <div style={styles.borderGradientLeft}></div>
        <div style={styles.borderGradientTop}></div>
        <div style={styles.borderGradientRight}></div>
        <div style={styles.borderGradientBot}></div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} 
      isProjectData={isProjectData} setIsProjectData={setIsProjectData}
      showHome={showHome} setShowHome={setShowHome}
      />
          {renderPage()}
      {currentPage == 'Home' && renderText()}
      <Footer />
      </div>
      
    </div>}
    <AnimatePresence>
    <motion.div>
      {viewCards == "1" && <Portfolio viewCards={viewCards} setViewCards={setViewCards} handleGoHome={handleGoHome}/>}
    </motion.div>
    </AnimatePresence>
    </div>
  );
}
