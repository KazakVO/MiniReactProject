import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import img_1 from '../asserts/1.jpg';
import img_2 from '../asserts/2.jpg';
import img_3 from '../asserts/3.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
            height={832}
            className="d-block w-100"
            src={img_1}
            alt="image one"
          />
          <Carousel.Caption>
            <h2>City image</h2>
            <p>Описание первого слайда</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            height={832}
            className="d-block w-100"
            src={img_2}
            alt="image two"
          />
          <Carousel.Caption>
            <h2>Sea image</h2>
            <p>Описание второго слайда</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            height={832}
            className="d-block w-100"
            src={img_3}
            alt="image three"
          />
          <Carousel.Caption>
            <h2>Forest image</h2>
            <p>Описание третьего слайда</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}