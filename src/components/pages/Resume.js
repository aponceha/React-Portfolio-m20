import React from 'react';
import resume from '../../assets/aphresume.pdf';
import { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';




const styles = {
  homeContainer: {
    position: 'relative',
    maxHeight: '65%',
    width: '75%',
    top: '25%',
    left: '12%',
    zIndex: '2',
    
    // overflowX: "scroll",
  },
  pContainer: {
    backgroundImage: "linear-gradient(to bottom, #d53a9d, #743ad5,#d53a9d)",
    backgrounOrigin: "border-box",
    backgroundSize: "3px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    paddingLeft: "18px",
    maxHeight: '85%',
    overflowY: "scroll",
  },

  h1Container: {
    paddingLeft: "20px",
    color: "rgb(186, 191, 202)",
  },
};

export default function Blog() {

  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.h1Container}>Resume</h1>
      <div style={styles.pContainer}>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js'>
          <Viewer fileUrl={resume} />
        </Worker>
      </div>
    </div>
  );
}
