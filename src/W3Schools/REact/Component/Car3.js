////react Class component state
import React from 'react';

class Car3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",        
      };
    }
    
    render() {
      return (
        <div>
          <h1>My car name is {this.state.brand}</h1>

          
          
        </div>
      );
    }
  }
  
export default Car3;

