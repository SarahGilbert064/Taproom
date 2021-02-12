import React from 'react';
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type='text'
          name= 'name'
          placeholder= 'Name of Beer'/>
          <br/>
        <input
          type='text'
          name='brand'
          placeholder= 'Brand of Beer'/>
          <br/>
        <input
          type="text"
          name="price"
          placeholder= "Price of Beer"/>
          <br/>
        <input
          type='number'
          name='pints'
          placeholder= 'Pints Left in Keg(124/full)'/>
          <br/>
        <input
          type='text'
          name="alcoholContent"
          placeholder="ABV"/>
          <br/><br/>
        <button type='submit'>Add Beer To List</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;