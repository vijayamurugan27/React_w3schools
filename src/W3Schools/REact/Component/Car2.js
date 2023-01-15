import React from 'react';
////props in constructor
class Car2 extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
        return <h2>I am a {this.props.model} car.!</h2>;
      }
    }

export default Car2;