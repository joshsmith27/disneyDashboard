import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';
import {connect} from 'react-redux';
import BestPark from './Components/BestPark/BestPark'
import ParkCard from './Components/ParkCard/ParkCard'
import Header from '../../Shared/Header/Header'
import {
  UPDATE_PARKS, 
  UPDATE_BEST_PARK, 
} from '../../Redux/constraints';
const BaseUrl = `http://localhost:8070/api/`



class Dashboard extends Component {
  componentDidMount(){
    if(!this.props.BestPark.parkInfo && typeof this.props.BestPark !== "string"){
      axios.get(`${BaseUrl}best_park`)
        .then((response)=>{
          this.props.dispatch({type:UPDATE_BEST_PARK, payload: response.data});
          return axios.get(`${BaseUrl}all_parks`)
        })
        .then((response)=>{
          this.props.dispatch({type:UPDATE_PARKS, payload: response.data});
        })
    }
  }


  render() {
    let parksComponents = this.props.Parks.map((park)=>{
     return <ParkCard key={park.name} parkName={park.name} park={park.park} average={park.average} />
    })
    let body
    if( typeof this.props.BestPark === "string"){
      body = <h1 className="all-parks-closed">The <br/> Parks <br/> Are <br/> Closed</h1>
    }else{
      if(this.props.BestPark.parkInfo){
        body = <div className="dashboard-body">
            <BestPark 
            bestPark={this.props.BestPark.name} 
            longestRide={this.props.BestPark.parkInfo.longest.name} 
            shortestRide={this.props.BestPark.parkInfo.shortest.name} 
            shortestRideTime={this.props.BestPark.parkInfo.shortest.waitTime} 
            longestRideTime={this.props.BestPark.parkInfo.longest.waitTime} 
            bestParkAverage={this.props.BestPark.parkInfo.average}
          />
          <div className="parks-list">
            {parksComponents}
          </div>
          
        </div>
        

      }else{
        body = <div>Loading...</div>
      }
    }

    return (
      <div className="Dashboard">
        <Header/>
        {body}
      </div>
    )

  }
}

export default connect(state => state)(Dashboard);