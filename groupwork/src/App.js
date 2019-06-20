<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/accordion';
import Accordion from './components/accordion';
=======
import React from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect;

import "./App.css";
>>>>>>> e2dd4ae74ca98d5c0a56623fc8c472c5c8575290

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Accordion />
=======
      <Nav />
      <div className="image-carousel">
        <Zoom>
        <Carousel />
        </Zoom>
      </div>
>>>>>>> e2dd4ae74ca98d5c0a56623fc8c472c5c8575290
    </div>
  );
}

export default App;
