import React, { useState } from 'react';

function CelsiusToFahrenheitConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      setCelsius(celsiusValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div>
      <h2>Celsius to Fahrenheit Converter</h2>
      <div>
        <label>
          Celsius:
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
          />
        </label>
        <span>°C</span>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </label>
        <span>°F</span>
      </div>
    </div>
  );
}

export default CelsiusToFahrenheitConverter;
