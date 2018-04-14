import React from 'react';
import './Footer.css';
// import '../../css/font-awesome.min.css';
import styled from 'styled-components';
import '../../css/palx/palx-master.css';
import {screen} from '../../css/media-queries';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesome from '@fortawesome/react-fontawesome';
import {faFlag} from '@fortawesome/fontawesome-free-solid/';
import brands from '@fortawesome/fontawesome-free-brands/';

fontawesome.library.add(faFlag, brands);



const Container = styled.div`
  display: flex;

  /* flex-wrap: wrap; */
  justify-content: space-between;
  margin-top: 50px;
  padding: 50px 30px;
  font-size: 1.2rem;
  background: var(--gray2);

  .hide{
      display:none;
    }
  @media ${screen.width500} {
    /* font-size: .7rem; */
    padding: 50px 100px;
  }

@media ${screen.width700} {
    font-size: .8rem;
    padding: 50px 100px;
    .hide{
      display:block;
    }
  }
  @media ${screen.width800} {
   /* padding: 0 80px; */
   /* justify-items: between; */
  }
`

const BottomBorder = styled.div`
  background: var(--indigo4);
  height:15px;
`

const Footer = (props) => (
  <div>
  <Container className=''>
      <div id='' className='footer-col'>
        <p className=''>Men</p>
        <p className=''>Women</p>
        <p className=''>Kids</p>
        <p className=''>Treats</p>
      </div>
      <div id='' className='footer-col'>
        <p className=''>Blog</p>
        <p className=''>Art</p>
        <p className=''>Locations</p>
        <p className=''>Contact</p>
      </div>

      <div id='' className='footer-col hide'>
        <p className=''>About Us</p>
        <p className=''>Subscribe</p>
        <p className=''>Support</p>
        <p className=''>Press</p>
      </div>
      <div id='' className='footer-col hide'>
        <p className=''>Log In</p>
        <p className=''>Create Account</p>
        {/* <p className=''>_______</p> */}
       
        <div className='flex justify-between mt4'>
        <a href='https://www.facebook.com/Kithnyc/'><FontAwesome className='grow-large' size='2x' icon={["fab", "facebook"]}/></a>
        <a href='https://www.instagram.com/kith/'><FontAwesome className='grow-large'   size='2x' icon={["fab", "instagram"]}/></a>
        <a href='https://twitter.com/kithset'><FontAwesome className='grow-large'       size='2x' icon={["fab", "twitter"]}/></a>
        </div>
      </div>

  </Container>

  <BottomBorder/>
  </div>
);


export default Footer;
