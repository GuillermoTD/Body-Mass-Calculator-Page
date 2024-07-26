import { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <div className="bmi-calculator">
      <div className="bmi-title">
        <h3>Enter your details below</h3>
      </div>

      <div className="bmi-options">
        <label className="input-label" onChange={(e) => setToogle(!toogle)}>
          <input type="radio" name="options" />
          Metric
        </label>

        <label className="input-label" onChange={(e) => setToogle(!toogle)}>
          <input type="radio" name="options" />
          Imperial
        </label>
      </div>

      {toogle ? (
        <div className="bmi-inputs">
          <div class="input-container">
            <input type="text" />
            <span>cm</span>
          </div>
          <div class="input-container">
            <input type="text" />
            <span>kg</span>
          </div>
        </div>
      ) : (
        <>
          <div className="bmi-inputs">
            <div className="input-container">
              <input type="text" />
              <span>ft</span>
            </div>
            <div className="input-container">
              <input type="text" />
              <span>in</span>
            </div>
          </div>
          <div className="bmi-inputs">
            <div className="input-container">
              <input type="text" />
              <span>st</span>
            </div>
            <div className="input-container">
              <input type="text" />
              <span>lbs</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BMICalculator;
