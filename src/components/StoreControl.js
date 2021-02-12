import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      selectedBeer: null
    };
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedBeer: null
      });
    } else {
      this.setState (prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage  // a , might go here
      }));
    }  
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({
      selectedBeer: selectedBeer
    });
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState ({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }


}


