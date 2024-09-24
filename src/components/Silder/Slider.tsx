import React, { useState } from 'react';
import { ISlider } from './ISlider';
import style from './Silder.module.scss';

const Slider: React.FC<ISlider> = ({ title, sliderStyles }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className={style.silderContainer}>
      <h1>{title}</h1>
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        style={sliderStyles}
      />
      <p>Current value: {sliderValue}</p>
    </div>
  );
};

export default Slider;
