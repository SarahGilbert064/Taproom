import React from 'react';

function Header() {
  const myStyledHeader = {
    backgroundColor: '#D27810',
    border: '12px black',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '30%/ 100%'
  }
  return (
    <React.Fragment>
      <div style={myStyledHeader}>
        <h3>Welcome to the Taproom.</h3>
        <h4>Sit back, relax, and enjoy a pint of malty goodness.</h4>
      </div>
    </React.Fragment>
  );
}

export default Header;