import { useState } from "react";

function SingleSliderInput() {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    // Ensure the input value is within the valid range (0 to 100)
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    setSliderValue(value);
  };

  return (
    <>
      <label>Range: {sliderValue}</label>
      <input
        type="range"
        className="cursor-pointer"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <input
        className="mt-2 appearance-none rounded"
        value={sliderValue}
        onChange={handleInputChange}
      />
    </>
  );
}

export default SingleSliderInput;
