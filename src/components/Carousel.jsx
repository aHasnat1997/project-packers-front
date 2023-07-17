import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={goToPrevSlide}>
        Prev
      </button>
      <div className="slide">{slides[currentIndex]}</div>
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
