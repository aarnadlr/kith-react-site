import React, { Component } from 'react'
import './FlightCards.css';
const uuidv4 = require('uuid/v4');

export default class FlightCards extends Component {

  render = (props) => (
    <div>
      {this.props.shoes.map(function(shoe) {
        return(
          <div key={uuidv4()} className='ma5'>
            
            <img className='w100' src={shoe.img} alt=""/>
            <p id="brand">{shoe.brand}</p>
            <p id="model">{shoe.model}</p>
            <p id="price">{shoe.price}</p>
            <p id="color">{shoe.color}</p>

          </div>
        )
      })}
    </div>
  )
}

