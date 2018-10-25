import openSocket from 'socket.io-client';
import * as Actions from './Redux/Actions';
const socket = openSocket('https://disneydashboardapi.herokuapp.com/park');


export const eventDispatcher = (dispatch) => {
  socket.on('parks', (info) => {
    dispatch(Actions.updateParks(info))
  });
  
  socket.on('best_park', (info) => {
    dispatch(Actions.updateBestPark(info))
  });
  
  socket.on('disneyMagicKingdom', (info) => {
      dispatch(Actions.updateMagicKingdom(info))
  });
  
  socket.on('disneyEpcot', (info) => {
    dispatch(Actions.updateEpcot(info))
  });
  
  socket.on('disneyAnimalKingdom', (info) => {
    dispatch(Actions.updateAnimalKingdom(info))
  });
  
  socket.on('disneyHollywoodStudios', (info) => {
    dispatch(Actions.updateHollywoodStudios(info))
  });
}
