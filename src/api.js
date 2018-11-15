import openSocket from 'socket.io-client';
import * as Actions from './Redux/Actions';
const socket = openSocket(`http://192.168.86.33:8070/park`);


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
