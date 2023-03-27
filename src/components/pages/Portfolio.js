import React from 'react';
import Cards from '../Cards';
import '../../styles/style.css';
import {motion, AnimatePresence, stagger} from 'framer-motion';
import projects from '../../assets/projects.json';
import { useState } from 'react';
import Modal from '../Modal';

const styles = {
  homeContainer: {
    width: '100%',
    height: '100%',
    backgroundImage: "linear-gradient(to bottom, #d53a9d, #743ad5,#d53a9d)",
    backgroundOrigin: "border-box",
    backgroundSize: "3px, 100%",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingLeft: "18px",
  },
  pContainer: {
    backgroundImage: "linear-gradient(to bottom, #d53a9d, #743ad5,#d53a9d)",
    backgroundOrigin: "border-box",
    backgroundSize: "3px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingLeft: "18px",
    height: "fit-content",

  },

  h1Container: {
    paddingLeft: "20px",
    color: "rgb(186, 191, 202)",
  },
};

export default function Porfolio(props) {


  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);


  const containerVariants = {
    hidden: {
      backgroundColor: "hsl(0, 0%, 29%)",
      opacity: 1,
      scale: 0.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      backgroundColor: "hsl(0, 0%, 100%)",
      transition: {  
        delay: 1.5,
        duration: 0.5,
        when: 'beforeChildren', staggerChildren: 0.05,
        staggerDirection: 1,
        delay: 0.5,
      },

    },
    exit: {
      scale: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };


  return (

    <div className="portBody">
      <div className="portBtnDiv">
        <button className="btn btn-primary" onClick={() => 
        {props.setViewCards("0");
        console.log(props.viewCards);
        props.handleGoHome();
      }}>Back to Site</button>
      </div>
      <AnimatePresence
      >
      <motion.div className="cardContainer"
      initial="hidden"
      animate="visible"
      exit="exit"
      key={props.viewCards}
        variants={containerVariants}
      >
        {projects.map((project, index) => {
          const img = `pCards p${index+1}`
          return (
            <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => modalOpen ? close() : open()}
        >
          <motion.div className= {img}>
          </motion.div>
          <AnimatePresence>
          {modalOpen && <motion.div className="descriptionBox"
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          exit= {{ y: 250, transition: { duration: 0.2 } }}
          key={img}
          
          >
              <h1 className="projh1">{project.title}</h1>
              <p className="pContainer"> {project.blurb}
              </p>
              <div className="link-div"> 
                {project.links.Site && <a href={project.links.Site} className="link-header cardlinks">View Site</a>}
                {project.links.Github && <a href={project.links.Github} className="link-header cardlinks">Github</a>}
                {project.links.Video && <a href={project.links.Video} className="link-header cardlinks">Video</a>}
              </div>
            </motion.div>}
          </AnimatePresence>
            
        </motion.div>
          )}) }
        
        
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

// <motion.div className="pBorder"
        // variants = {cardVariants}
        // whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        // whileTap={{ scale: 0.9 }}
        // onClick={() => modalOpen ? close() : open()}
        // >
        //   <motion.div className="pCards p7">
        //   </motion.div>
        //   <AnimatePresence>
        //   {modalOpen && <motion.div className="descriptionBox"
        //   initial={{ y: 250 }}
        //   animate={{ y: 0 }}
        //   exit= {{ y: 250, transition: { duration: 0.2 } }}
        //   key="box"
          
        //   >
        //       <h1 className="projh1">{projects[0].title}</h1>
        //       <p className="pContainer"> {projects[0].blurb}
        //       </p>
        //       <div className="link-div"> 
        //         {projects[0].links.Site && <a href={projects[0].links.Site} className="link-header cardlinks">View Site</a>}
        //         {projects[0].links.Github && <a href={projects[0].links.Github} className="link-header cardlinks">Github</a>}
        //         {projects[0].links.Video && <a href={projects[0].links.Video} className="link-header cardlinks">Video</a>}
        //       </div>
        //     </motion.div>}
        //   </AnimatePresence>
            
        // </motion.div>


        {/* <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p8">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p2">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p10">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p4">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p1">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p6">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p3">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p11">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p12">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p5">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div>
        <motion.div className="pBorder"
        variants = {cardVariants}
        whileHover={{ scale: 1.0, cursor: "pointer", y: -10 }}
        whileTap={{ scale: 0.9 }}
        ><div className="pCards p9">
        <div className="descriptionBox">
          <h1 className="projh1">Project 1</h1>
          <p className="pContainer"> Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi 
          </p>
        </div>
      </div></motion.div> */}