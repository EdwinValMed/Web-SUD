import React from "react";
import Slider from "infinite-react-carousel";
/* import style from "./Slider.module.css"; */
import "./Slider.css";

const Sliderr = ({ images }) => {
  return (
    <section className="slider">
      <h1 className="slider__title">Carousel con infinite-react-carousel</h1>
      <Slider className="slider__content">
        {images.map((images) => (
          <div key={images.id} className="slider__content--item">
            <img src={images.images} alt={images.title} />
            <p className="slider-description">{images.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sliderr;
