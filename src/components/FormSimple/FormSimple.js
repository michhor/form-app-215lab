import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormSimple.module.css';

const FormSimple = (props) =>{ 
  const onButtonEvent = () => {
    console.log("Log from FormSimple");
  };
  return(  <div className={styles.FormSimple}>
    <h2>Simple form for {props.name}, {props.dataS.surname}, {props.dataS.age}</h2>
    <form >
      <p>First name: <input type = "text" name = "first_name" /></p>
      <p>Last name: <input type = "text" name = "last_name" /></p>   
    </form>
    <button id="okButton" onClick={onButtonEvent}>OK</button>
    <button id="cancelButton">CANCEL</button>
  </div>);
 };

FormSimple.propTypes = {};

FormSimple.defaultProps = {};

export default FormSimple;
