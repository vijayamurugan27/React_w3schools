import React, {useState} from 'react';


class Up1 extends React.Component {

    
    constructor(props) {
        super(props);        
        this.state = {
        favoritecolor: 'red'
    };
      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        return (
            <div>
                <h1>This one using getDerivedStateFromProps method - getDerivedStateFromProps()--not working</h1>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={(this.changeColor)}>Change color</button>
            </div>
          
        );
      }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       count: 0
    //     };
    //   }
    
    //   render() {
    //     return (
    //       <div>
    //         <p>You clicked {this.state.count} times</p>
    //         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    //           Click me
    //         </button>
    //       </div>
    //     );
    //   }
    // }
export default Up1;