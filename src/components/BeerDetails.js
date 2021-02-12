import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";

function BeerDetails(props) {

  return(
    <React.Fragment>
      <h1>Beer Details:</h1>
      <h3>Name: {beer.name}</h3>
      <h3>Brand: {beer.brand}</h3>
      <h4>Price: {beer.price}</h4>
      <h4>ABV: {beer.alcoholContent}</h4>
    </React.Fragment>
  );
}

BeerDetails.PropTypes = {
  beer: PropTypes.object,
}

export default BeerDetails;