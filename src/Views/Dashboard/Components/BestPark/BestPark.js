import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DisneyLogo} from '../../../../Shared/DisneyLogo/DisneyLogo'
import './BestPark.css';



class BestPark extends Component {
  render() {

    return (
      <div className="BestPark">
        <div className="title">
          <h3 className="bestParkTitle">Best Park</h3>
          <DisneyLogo name={this.props.bestPark}/>
        </div>
        <div className="best-park-table">
          <div className="info">
            <p className="best-Park-Name">Average Wait Time</p>
            <p>{this.props.bestParkAverage} <sub className="min">min</sub> </p>
          </div>
          <div className="info">
            <p className="best-Park-Name">{this.props.shortestRide}</p>
            <p>{this.props.shortestRideTime} <sub className="min"> min</sub> </p>
          </div>
          <div className="info">
            <p className="best-Park-Name">{this.props.longestRide}</p>
            <p>{this.props.longestRideTime} <sub className="min">min</sub> </p>
          </div>
        </div>
        <Link className="see-more min" to={`/details/${this.props.bestPark}`}>See More Details</Link>
      </div>
    );
  }
}

export default BestPark;