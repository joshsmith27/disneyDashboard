import React, {Component} from 'react';
import disneyMagicKingdomLogo from '../../assests/Magic_Kingdom_Logo.png'
import disneyAnimalKingdomLogo from '../../assests/Animal_Kingdom_Logo.png'
import disneyEpcotLogo from '../../assests/Epcot_Logo.png'
import disneyHollywoodStudiosLogo from '../../assests/Hollywood_Studios_Logo.png'

import './DisneyLogo.css'

export const DisneyLogo = (props) => {
    let img;
    switch(props.name){
      case 'disneyHollywoodStudios':
        img = disneyHollywoodStudiosLogo
        break; 
      case 'disneyEpcot':
        img = disneyEpcotLogo
        break; 
      case 'disneyAnimalKingdom':
        img = disneyAnimalKingdomLogo
        break; 
      case 'disneyMagicKingdom':
        img = disneyMagicKingdomLogo
        break; 
    }
    return (
        <div className="park-logo" style={{backgroundImage:`url(${img})`}}></div>
    )
}
