import React from './react';
import PropTypes from "prop-types";

function Beer(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBeerClicked(props.id)}>
        <h3>{props.brand} Presents:</h3>
        <h3>{props.name}</h3>
        <h3>{props.pints}</h3>
        <h4> Cost per Pint: {props.price} </h4>
        <p> ABV: {props.alcoholContent} </p>
      </div>
    </React.Fragment>
  );
}

Beer.PropTypes = {
  name: PropTypes.string,
  brand: PropTypes.string, 
  price: PropTypes.string,
  pints: PropTypes.number,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}

export default Beer;
