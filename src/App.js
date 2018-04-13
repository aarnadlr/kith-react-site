import React, { Component } from 'react';
import shoeArray from './Components/shoeArray';
import FlightCards from './Components/FlightCards';
import TopFixedNav from './Components/TopFixedNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './css/entry.css';


class App extends Component {
  render() {
    return (
      <div >
        <TopFixedNav />
        <Header />
        <FlightCards shoes={shoeArray} />
        <Footer />
      </div>
    );
  }
}

export default App;


