import React from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="image-carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
