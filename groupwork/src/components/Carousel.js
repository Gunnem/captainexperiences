import React, { Component } from "react";
import Image from "./Image";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

// this is super gross...
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/profile_pic.jpg";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      index: 0,
      translate: 0
    };
  }

  slideWidth = () => {
    return document.querySelector(".image").clientWidth;
  };

  calculateTranslate = () => {
    return -(this.state.images.length - 1) * this.slideWidth();
  };

  resetImages = () => {
    this.setState({
      index: 0,
      translate: 0
    });
  };

  goLeft = () => {
    const { index, images } = this.state;

    if (index === 0) {
      return this.setState({
        index: images.length - 1,
        translate: this.calculateTranslate()
      });
    }

    this.setState(prevState => {
      const { index, translate } = prevState;
      return {
        index: index - 1,
        translate: translate + this.slideWidth()
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

  // not really necessary in this scenario
  // just trying to simulate data loaded from a db
  componentDidMount() {
    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11
    ];
    this.setState({
      images: [...images]
    });
  }

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
