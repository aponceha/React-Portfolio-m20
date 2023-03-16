import React from 'react';
import Cards from '../Cards';

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
    color: "rgb(186, 191, 202)",
  },
};

export default function About() {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.h1Container}>Portfolio</h1>
      <p style={styles.pContainer}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <Cards />
    </div>
  );
}
