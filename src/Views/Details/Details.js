import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions';
import Header from '../../Shared/Header/Header';
import './Details.css';
import {DisneyLogo} from '../../Shared/DisneyLogo/DisneyLogo';
import WaitTimeCard from './Components/WaitTimeCard/WaitTimeCard';
import OpenClose from './Components/OpenClose/OpenClose';
import AverageWait from './Components/AverageWait/AverageWait';

class Details extends Component {
  componentDidMount(){
    this.props.getWaitTimes(this.props.match.params.name)
  }
  render() {
    let rides = [];
    if(this.props.details.allRides){
      rides = this.props.details.allRides.map((ride)=>{
        return <WaitTimeCard key={ride.name}/>
      })
    }
    if(typeof this.props.details === "string"){
      return (
        <div className="Details">
          <Header/>
          <DisneyLogo name={this.props.match.params.name}/>
          <h1>This Park <br/> Is Closed</h1>
        </div>
      );
    }else{
      return (
        <div className="Details">
          <Header/>
          <DisneyLogo name={this.props.match.params.name}/>
          <AverageWait average={this.props.details.average}/>
          <OpenClose open={this.props.details.open} close={this.props.details.close}/>
          {rides}
        </div>
      );
    }

  }
}

export default connect(state => state, Actions)(Details);