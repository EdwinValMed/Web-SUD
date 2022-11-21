import React from "react";
import Slider from "infinite-react-carousel";

const Carousel = ({ images }) => {
  return;
  <section className="slider">
    <h1 className="slider__title">esto es un carousel</h1>

    <Slider className="slider__content">
      {images.map((image) => (
        <div key={image.id} className="slider__content--item">
          <img src={image.image} alt={image.title} />
          <p className="slider-description">{image.title}</p>
        </div>
      ))}
    </Slider>
  </section>;
};

export default Carousel;