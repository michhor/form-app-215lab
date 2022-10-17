import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormRadio.module.css';

const FormRadio = () => (
  <div className={styles.FormRadio}>
    <h2>FormRadio Component</h2> 
    <form>
      <li>How satisfied were you with our service?
        <ul>
          <li><label htmlFor="vsat">Very satisfied</label> <input type="radio" name="satisfaction" id="vsat" value="vsat" defaultChecked="checked" /></li>
          <li><label htmlFor="sat">Satisfied</label> <input type="radio" name="satisfaction" id="sat" value="sat" /></li>
          <li><label htmlFor="dcare">Didn't care</label> <input type="radio" name="satisfaction" id="dcare" value="dcare" /></li>
          <li><label htmlFor="disat">Dissatisfied</label> <input type="radio" name="satisfaction" id="disat" value="disat" /></li>
          <li><label htmlFor="vdisat">Very dissatisfied</label> <input type="radio" name="satisfaction" id="vdisat" value="vdisat" /></li>
        </ul>
      </li>
    </form>
  </div>
);

FormRadio.propTypes = {};

FormRadio.defaultProps = {};

export default FormRadio;
