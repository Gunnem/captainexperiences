import React from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect;

import "./App.css";

function App() {
  return (
    <div className="App">
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
