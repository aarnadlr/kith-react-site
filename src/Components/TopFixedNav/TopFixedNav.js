import React from 'react';
import styled from 'styled-components';
import './TopFixedNav.css'
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {faUser, faSearch, faShoppingCart } from '@fortawesome/fontawesome-free-solid/';

fontawesome.library.add(faSearch, faUser, faShoppingCart);



const Container = styled.div`
  display: block;
  width: 100vw;
  margin: 0;
  background: rgba(255,255,255, .95);
  font-family: 'Space Mono';
  z-index:2;
  position: fixed;
  
`



const TopFixedNav = () => (

  <Container className='flex justify-end items-center'>

  <div id="SearchSet" className='gray flex items-center hoverMagenta'>
    <p className=' mr2 f7 navItem ' >Search</p>
    <FontAwesomeIcon className=' mr4 f7 navItem ' icon="search"/>
  </div>

    <FontAwesomeIcon className='gray mr4 f7 navItem hoverMagenta' icon="user"/>
    <FontAwesomeIcon className='gray mr4 f7 navItem hoverMagenta' icon="shopping-cart"/>


  </Container>

);


export default TopFixedNav;
