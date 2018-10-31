import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions';
import Header from '../../Shared/Header/Header';
import './Details.css';
import {DisneyLogo} from '../../Shared/DisneyLogo/DisneyLogo';
import WaitTimeCard from './Components/WaitTimeCard/WaitTimeCard';
import OpenClose from './Components/OpenClose/OpenClose';
import AverageWait from './Components/AverageWait/AverageWait';
import axios from 'axios';
const BaseUrl = 'https://disneydashboardapi.herokuapp.com/api/'

class Details extends Component {
  componentDidMount(){
    debugger
    axios.get(`${BaseUrl}wait_times/${this.props.match.params.name}`)
      .then((response)=>{
        debugger
        this.props.setWaitTimes(this.props.match.params.name, response.data)	
      })
      
  }
  render() {
    let rides = [];
    if(this.props[this.props.match.params.name].allRides){
      rides = this.props[this.props.match.params.name].allRides.filter(x=>x.waitTime > 0).map((ride)=>{
        return <WaitTimeCard key={ride.name} name={ride.name} waitTime={ride.waitTime}/>
      })
    }
    rides.push(<WaitTimeCard key={'unkown'} name={`All Other Rides`} waitTime={0}/>)
    if(typeof this.props[this.props.match.params.name] === "string"){
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
          <div className="Details-container">
              <DisneyLogo name={this.props.match.params.name}/>
              <AverageWait average={this.props.details.average}/>
              <OpenClose open={this.props.details.open} close={this.props.details.close}/>
              <div className="rides-Container">
                {rides}
              </div>
          </div>
        </div>
      );
    }

  }
}

export default connect(state => state, Actions)(Details);