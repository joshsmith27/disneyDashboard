import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ParkCard.css';

class ParkCard extends Component {
  render() {
      let content;
      if(!isNaN(this.props.average)){
         content =  <Link className="ParkCardLink" to={`/details/${this.props.parkName}`}>
            <div className="park-name">
                {this.props.park}
            </div>
            <div className="average-card">
                <sup>Avg Wait</sup> 
                <br/>
                {this.props.average} <span className="min">min</span> 
            </div>
        </Link>
      }else{
        content = <div className="ParkCardLink">
            <div className="park-name">
                {this.props.park}
            </div>
            <div className="average-card">
                <sup>This Park Is <br/> <span className="min">Closed</span></sup> 
            </div>
        </div>
      }

    return (
        <div className="ParkCard">
            {content}
        </div>
    );
  }
}

export default ParkCard;