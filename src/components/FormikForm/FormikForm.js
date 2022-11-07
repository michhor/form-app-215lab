import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormikForm.module.css';
import { useFormik } from 'formik';

const FormikForm = () =>{
  const validate = (values)=>{
      const errors = {};
      if( !values.name ){
        errors.name = "A field is required!";
      } else if ( values.name.length < 2 ){
        errors.name = "A name is to short!";
      }

      if( !values.email ){
        errors.email = "A field is required!";
      } else if ( !values.email.includes('@') ) {
        errors.email = "This is not an email!";
      }

      //todo: other things...
      return errors;
  };
  const formik = useFormik({
    initialValues : {
      name:'',
      firstname:'',
      email:'',
      selectmy:''
    },
    validate,
    onSubmit : (values) =>{
      console.log('Submit event');
      console.log(JSON.stringify(values,null,1));
      //todo: wysyłanie danych dalej
    }
  })

  return(  <div className={styles.FormikForm}>
    <h1>Formik form</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input id='name' htmlFor='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.name} />
      { formik.touched.name && formik.errors.name ? <div className='errorform'>{formik.errors.name}</div> : null }
      <br />
      <label htmlFor='firstname'>First name: </label>
      <input id='firstname' htmlFor='firstname' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.firstname}  />
      { formik.touched.firstname && formik.errors.firstname ? <div className='errorform'>{formik.errors.firstname}</div> : null }
      <br />
      <label htmlFor='email'>e-mail: </label>
      <input id='email' htmlFor='email' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.email}  />
      { formik.touched.email && formik.errors.email ? <div className='errorform'>{formik.errors.email}</div> : null }
      <br />
      <label htmlFor='selectmy'>e-mail: </label>
      <select id='selectmy' htmlFor='selectmy' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.selectmy}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <button type='submite'>Send</button>
    </form>
  </div>);
};

FormikForm.propTypes = {};

FormikForm.defaultProps = {};

export default FormikForm;
