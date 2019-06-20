import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect;

import "./App.css";

function App() {
  return (
    <div className="App">
      <Accordion />
      <Nav />
      <div className="image-carousel">
        <Zoom>
        <Carousel />
        </Zoom>
      </div>
    </div>
  );
}

export default App;
