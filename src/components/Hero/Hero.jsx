import './Hero.css';
import BMICalculator from '../BMICalculator/BMICalculator';

export default function Hero() {
  return (
    <div className="Hero">
      <div className="LeftSide">
        <div className="LeftSide__Container">
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
          <div className="LeftSide__Button">
            <button>More Info</button>
          </div>
        </div>
      </div>

      <div className="RightSide">
        <div className="RightSide__Container">
          <BMICalculator />
        </div>
      </div>
    </div>
  );
}
