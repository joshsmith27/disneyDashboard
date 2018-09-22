import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ParkCard.css';

class ParkCard extends Component {
  render() {

    return (
        <div className="ParkCard">
            <Link className="ParkCardLink" to={`/details/${this.props.parkName}`}>
                <div className="park-name">
                    {this.props.park}
                </div>
                <div className="average-card">
                    <sup>Avg Wait</sup> 
                    <br/>
                    {this.props.average} <span className="min">min</span> 
                </div>
            </Link>
        </div>
    );
  }
}

export default ParkCard;