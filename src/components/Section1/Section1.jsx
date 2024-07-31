import './Section1.css'
import image from "../../../public/image1.png"
const Section1 = () => {
  return (
    <section className='Section1'>
        <div className="Section1_LeftSide">
            <img src={image} alt="" />
        </div>
        <div className="Section1_RightSide">
            <h2>What your BMI result means</h2>
            <p>
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                Maintaining a healthy weight may lower your chances of experiencing
                health issues later on, such as obesity and type 2 diabetes. Aim for
                a nutritious diet with reduced fat and sugar content, incorporating 
                ample fruits and vegetables. Additionally, strive for regular physical
                activity, ideally about 30 minutes daily for five days a week.
            </p>
        </div>
    </section>
  )
}

export default Section1