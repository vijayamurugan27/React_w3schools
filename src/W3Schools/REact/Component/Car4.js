import React from 'react';

class Car4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "red",
        
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.color}</h1>
         
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
  
  export default Car4;