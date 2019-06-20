import React, { Component } from "react";
import Image from "./Image";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "http://lorempixel.com/400/200/sports/1/",
        "http://lorempixel.com/400/200/sports/2/",
        "http://lorempixel.com/400/200/sports/3/",
        "http://lorempixel.com/400/200/sports/5/",
        "http://lorempixel.com/400/200/sports/6/",
        "http://lorempixel.com/400/200/sports/7/",
        "http://lorempixel.com/400/200/sports/8/",
        "http://lorempixel.com/400/200/sports/9/",
        "http://lorempixel.com/400/200/sports/10/"
      ],
      index: 0,
      translate: 0
    };
  }

  slideWidth = () => {
    return document.querySelector(".image").clientWidth;
  };

  resetImages = () => {
    this.setState({
      index: 0,
      translate: 0
    });
  };

  goLeft = () => {
    const { index } = this.state;
    const width = this.slideWidth();

    if (index === 0) {
      return;
    }

    this.setState(prevState => {
      const { index, translate } = prevState;
      return {
        index: index - 1,
        translate: translate + width
      };
    });
  };

  goRight = () => {
    const width = this.slideWidth() * -1;
    const { images, index } = this.state;

    if (index === images.length - 1) {
      return this.resetImages();
    }

    this.setState(prevState => {
      const { index, translate } = prevState;
      return {
        index: index + 1,
        translate: translate + width
      };
    });
  };

  render() {
    const { goLeft, goRight } = this;
    const { translate } = this.state;
    const styles = {
      transform: `translateX(${translate}px)`,
      transition: "transform ease-out 0s"
    };

    return (
      <div className="carousel">
        <div className="wrapper" style={styles}>
          {this.state.images.map((image, i) => {
            return <Image key={i} image={image} />;
          })}
        </div>

        <LeftArrow goLeft={goLeft} />
        <RightArrow goRight={goRight} />
      </div>
    );
  }
}

export default Carousel;
