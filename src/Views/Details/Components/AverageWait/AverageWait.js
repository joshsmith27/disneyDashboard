import React, { Component } from 'react';

import './AverageWait.css';

class AverageWait extends Component {
  render() {
    return (
        <div className="AverageWait">
            <div>Average Wait Times</div>
            <div>{this.props.average} Minutes</div>
        </div>
    );
  }
}

export default AverageWait;