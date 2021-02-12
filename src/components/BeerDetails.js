import React from "react";
import PropTypes from "prop-types";


function BeerDetails(props) {
  const { beer, onClickingDelete, onClickingBuy } = props;
  
  return(
    <React.Fragment>
      <h1>Beer Details:</h1>
      <h3>Name: {beer.name}</h3>
      <h3>Brand: {beer.brand}</h3>
      <h4>Price: {beer.price}</h4>
      <h4>Pints Remaining: {beer.pints}</h4>
      <h4>ABV: {beer.alcoholContent}</h4>
      <br/>
      <button onClick = {() => onClickingDelete(beer.id) }>Discontinue Beer</button>
      <br/>
      <button onClick = {() => onClickingBuy() }>Buy a Pint</button>
      <hr/>
    </React.Fragment>
  );
}

BeerDetails.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default BeerDetails;