import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import "../../styles/style.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence} from 'framer-motion';


  

const styles = {
  homeContainer: {
    position: 'relative',
    width: '90%',
    top: '25%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    zIndex: "4",
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

export default function Contact() {

  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;


  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'name') {
    setName(inputValue);
  } else {
    setMessage(inputValue);
  }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
  setName('');
  setEmail('');
  setMessage('');
  setErrorMessage('');
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateEmail(email) && name && message) {
    emailjs.sendForm('service_r9r5ns9', 'template_8odozon', form.current, 'S8TvsmWNYPtihrTWI')
      .then((result) => {
          console.log(result.text);
          console.log("Email sent successfully")
      }, (error) => {
          console.log(error.text);
      });
    }
    else {
      console.log ("Name: " + name + " Email: " + email + " Message: " + message);
      console.log("Email not sent")
    }
  };

  return (
    <AnimatePresence>
    <motion.div style={styles.homeContainer}
    initial={{ x: "100vw", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: 'spring', stiffness: 70 }}
    exit={{ x: -400, opacity: 0, transition: { duration: 0.4 } }}
    >
      <h1 style={styles.h1Container}>Contact</h1>
      <div style={styles.pContainer}>
      <form className="form" ref={form} onSubmit={sendEmail}>
      <p className = "inputHeading">Name:</p>
      <input
          className = "formName"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <p className = "inputHeading">Email:</p>
        <input
          className = "formEmail"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <p className = "inputHeading">Message:</p>
        <textarea
          className = "formMessage"
          rows = "5"
          cols = "50"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <input className="buttonForm" type="submit" value="Submit" onClick={handleFormSubmit} />
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

  </motion.div>
  </AnimatePresence>
  );
}
