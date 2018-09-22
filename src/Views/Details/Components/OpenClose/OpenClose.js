import React, { Component } from 'react';

import './OpenClose.css';

class OpenClose extends Component {
  render() {
    return (
      <div className="OpenClose">
        <div>
            <h4>Opened Today At</h4>
            <br/>
            <h4>{new Date(this.props.open).toLocaleTimeString()}</h4>
        </div>
        <div className="close">
            <h4>Closes Today At</h4>
            <br/>
            <h4>{new Date(this.props.close).toLocaleTimeString()}</h4>
        </div>
      </div>
    );
  }
}

export default OpenClose;