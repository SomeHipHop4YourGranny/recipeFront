import React from 'react';
import PropTypes from 'prop-types';
import './slider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider(props) {
  const { imgs } = props;
  return (
    <Carousel>
      {imgs.map((img) => (
        <div key={img._id}>
          <img src={img.img.src} alt="img" />
          <p className="legend">{img.img.title}</p>
        </div>
      ))}
    </Carousel>
  );
}

Slider.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.shape({})),
};
Slider.defaultProps = {
  imgs: [],
};

export default Slider;
