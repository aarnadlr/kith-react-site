import React, { Component } from 'react'
// Media queries:
import { screen } from '../../css/media-queries';
// import './FlightCards.css';
import styled from 'styled-components';
import '../../css/palx/palx-master.css';
// import classNames from 'classnames';
// var classNames = require('classnames');

const uuidv4 = require('uuid/v4');




const Container = styled.div`

  /* font-family: 'Space Mono', monospace; */
  /* font-weight: 400; */
  /* font-weight: 700; */

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  /* font-weight: 600; */
  /* font-weight: 800; */

  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  @media ${screen.width600} {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  @media ${screen.width1200} {
    margin-left: 9rem;
    margin-right: 9rem;
  }
`

const Card = styled.div`
  background: white;
  margin: .5rem 1rem .5rem 1rem;
  padding: 2.5rem;
  transition: all .3s ease;

  &:hover{
  transform: translateY(-7px);
  }
  /* LARGER THAN MOBILE */
  @media ${screen.width600} {
    margin: 1rem 1rem 1rem 1rem;

    /* margin-left: 80px; */
    /* margin-right: 80px; */
  }
`


const TextWrapper = styled.div`
  /* position: relative;
  left:15px; */
`

const Brand = styled.p`
  /* font-family: 'Space Mono', monospace; */
  /* font-weight: 400; */
  /* font-weight: 700; */

  font-family: 'Work Sans';
  /* font-weight: 400; */
  /* font-weight: 600; */
  font-weight: 800;
  font-size: 1rem;
`

const Model = styled.p`
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  /* font-weight: 700; */
  font-size: .9rem;
  /* font-family: 'Work Sans'; */
  /* font-weight: 400; */
  /* font-weight: 600; */
  /* font-weight: 800; */
`



const Price = styled.p`
font-size: .9rem;
  color: var(--indigo4);
  position: absolute;
  top:5px;
  right:20px;
`;

const Color = styled.p`
  font-size: .8rem;
    font-weight: 600;
  color: ${(props) => props.makeColor};
`;

const BuyNow = styled.span`
  display: inline-block;
  clear: both;
  /* float: left; */
  margin-top: 20px;
  text-transform: uppercase;
  font-size: .7rem;
  font-weight: 600;
    /* font-weight: 800; */
  /* color: ${(props) => props.makeColor}; */
  /* color: red; */
  padding: .5rem 1rem;
  border: 2px solid ${(props) => props.makeColor};
  border-radius:7px;
  transition: all .3s ease;
  &:hover{
    background: var(--indigo4);
    color: white;
    border: 2px solid var(--indigo4);
    /* transform: translateY(-5px); */
    transform: scale(1.1);
  }
`


export default class FlightCards extends Component {

  render = (props) => (
    <Container>
      {this.props.shoes.map(function(shoe) {
        return(

        
          <Card key={uuidv4()} className="relative">
            <img className="" src={shoe.img} alt="" />

            <Price id="price" className="">${shoe.price}</Price>

            <TextWrapper>
              <Brand id="brand" className="">{shoe.brand}</Brand>
              <Model id="model" className="">{shoe.model}</Model>
              {/* <p id="code" className="f9 mt4 light-silver">{shoe.code}</p> */}
              <Color id="color" className='' makeColor={shoe.makeColor}>{shoe.color}</Color>
              <BuyNow className=''>Buy now</BuyNow>
              
            </TextWrapper>

          </Card>


        )
      })}
    </Container>
  )
}

