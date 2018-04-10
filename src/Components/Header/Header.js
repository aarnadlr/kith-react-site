import React from 'react';
import './Header.css';
import styled from 'styled-components';
import KithLogo from '../KithLogo';

// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
// import {faFlag, faSquare } from '@fortawesome/fontawesome-free-solid/';

// fontawesome.library.add(faSquare, faCoffee, faFlag);

// const element = (
//   <FontAwesomeIcon icon={faCoffee} />
// )


const Container = styled.div`
  font-family: Space Mono;
  font-size: .8rem;
  padding: 100px;
  /* background: transparent; */
`

const HorizontalNav = styled.div`
`


const Header = () => (
  <Container>

    <HorizontalNav className="flex justify-between items-center">
    <p className='navItem hoverMagenta' >Men</p>
    <p className='navItem hoverMagenta' >Women</p>
    <p className='navItem hoverMagenta' >Kids</p>
    <p className='navItem hoverMagenta' >Treats</p>

    <KithLogo width={'100px'} />

    <p className='navItem hoverMagenta' >Blog</p>
    <p className='navItem hoverMagenta' >Art</p>
    <p className='navItem hoverMagenta' >Locations</p>
    <p className='navItem hoverMagenta' >About</p>
    </HorizontalNav>

  </Container>
);


export default Header;
