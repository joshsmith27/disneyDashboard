import React, { Component } from 'react';

import './WaitTimeCard.css';

class WaitTimeCard extends Component {
  render() {
    return (
      <div className="WaitTimeCard">
        <div className="waitTimeCardName">
          {this.props.name}
        </div>
        <div className="waitTimeCardAvg">
          Wait Time
          <br/>
          {this.props.waitTime}
        </div>
      </div>
    );
  }
}

export default WaitTimeCard;