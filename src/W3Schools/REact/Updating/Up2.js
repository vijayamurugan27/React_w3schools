import React from 'react';

class Up2 extends React.Component {
constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }

  // if the return value is false it wont update, and for True it will update.
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
        <h1>This one is using  method-shouldComponentUpdate() </h1>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
export default Up2;