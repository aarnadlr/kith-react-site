import React from 'react';
import './Header.css';
import styled from 'styled-components';
import KithLogo from '../KithLogo';
import { screen } from '../../css/media-queries';


const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: Space Mono;
  text-align: center;

  /* padding: 100px; */
  /* background: transparent; */
`

const HorizontalNav = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction:column; */
  text-align: center;
  align-items: center;
  @media ${screen.width700} {
    flex-wrap: nowrap;
    
  }
  @media ${screen.width800} {
   padding: 0 80px;
   /* justify-items: between; */
  }
`


const NavItem = styled.p`
  clear: both;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin: 0;
  padding: 20px;
  width: 50%;
  float:left;
  border: 0px solid gray;
  /* visibility: hidden; */
  @media ${screen.width700} {

    /* width: calc(100% / 8); */
  }
  @media ${screen.width800} {
    width:100%;
    /* text-align: left; */
    margin: 50px 0 100px 0;
    padding:0;
    font-size: .8rem;
  }

`




const Header = () => (
  <Container>

    <KithLogo />

    <HorizontalNav className="">

      
      <NavItem className='hoverMagenta' >Men</NavItem>
      <NavItem className='hoverMagenta' >Women</NavItem>
      <NavItem className='hoverMagenta' >Kids</NavItem>
      <NavItem className='hoverMagenta' >Treats</NavItem>


      <NavItem className='hoverMagenta' >Blog</NavItem>
      <NavItem className='hoverMagenta' >Art</NavItem>
      <NavItem className='hoverMagenta' >Locations</NavItem>
      <NavItem className='hoverMagenta' >About</NavItem>

    </HorizontalNav>

  </Container>
);


export default Header;
