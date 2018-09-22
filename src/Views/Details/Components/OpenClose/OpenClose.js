import React, { Component } from 'react';

import './OpenClose.css';

class OpenClose extends Component {
  render() {
    return (
      <div className="OpenClose">
        <div>
            <h4>Opened Today At</h4>
            <br/>
            {this.props.open}
        </div>
        <div className="close">
            <h4>Closes Today At</h4>
            <br/>
            {this.props.close}
        </div>
      </div>
    );
  }
}

export default OpenClose;