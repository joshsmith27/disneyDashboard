import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';
import BestPark from './Components/BestPark/BestPark'
import ParkCard from './Components/ParkCard/ParkCard'
import Header from '../../Shared/Header/Header'
const BaseUrl = 'https://disneydashboardapi.herokuapp.com/api/'



class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      parkInfo: {},
      closingString: '',
      parks: []
    }
  }
  componentDidMount(){
    axios.get(`${BaseUrl}best_park`)
      .then((response)=>{
        if(typeof response.data === "string"){
          this.setState({
            closingString: response.data
           });
        }else{
          this.setState({
            parkInfo: response.data
           });
        }
        return axios.get(`${BaseUrl}all_parks`)
      })
      .then((response)=>{
        const parks = response.data.map((park)=>{
          switch(park.name){
            case'disneyAnimalKingdom':
              park.park = 'Animal Kingdom'
              break;
            case'disneyEpcot':
              park.park = 'Epcot'
              break;
            case'disneyMagicKingdom':
              park.park = 'Magic Kingdom'
              break;
            case'disneyHollywoodStudios':
              park.park = 'Hollywood Studios'
              break;
            default:
              break;
          }
          return park;
        })
        this.setState({
          parks:parks
        })
      })
  }

  render() {

    let parksComponents = this.state.parks.map((park)=>{
     return <ParkCard key={park.name} parkName={park.name} park={park.park} average={park.average} />
    })
    let body
    if(this.state.closingString){
      body = <h1 className="all-parks-closed">The <br/> Parks <br/> Are <br/> Closed</h1>
    }else{
      if(this.state.parkInfo.parkInfo){
        body = <div className="dashboard-body">
            <BestPark 
            bestPark={this.state.parkInfo.name} 
            longestRide={this.state.parkInfo.parkInfo.longest.name} 
            shortestRide={this.state.parkInfo.parkInfo.shortest.name} 
            shortestRideTime={this.state.parkInfo.parkInfo.shortest.waitTime} 
            longestRideTime={this.state.parkInfo.parkInfo.longest.waitTime} 
            bestParkAverage={this.state.parkInfo.parkInfo.average}
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

export default Dashboard;