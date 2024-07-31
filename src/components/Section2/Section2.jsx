import Section2Card from '../Section2Card/Section2Card'
import './Section2.css'
import { Dumbbell, MoonStar, UtensilsCrossed } from 'lucide-react'

const icons = [
  <Dumbbell style={{color:"#F21E84"}}/>, 
  <UtensilsCrossed style={{color:"#F69134"}}/>,
  <MoonStar style={{color:"#22C1C1"}} />, 
]

const texts = [
  {
    title:"Healthy eating",
    description:"Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    color:"red"
  },
  
  {
    title:"Regular exercise",
    description:"Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    color:"orange"
  },
  
  {
    title:"Adequate sleep",
    description:"Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    color:"aqua"
  },
  
]

const Section2 = () => {
  return (
    <section className='Section2'>
      <div className="Section2__Container">
          {
            texts.map((item,index)=>(
            <Section2Card 
                key={index} 
                title={item.title} 
                description={item.description} 
                color={item.color} 
                icon={icons[index]}
              />
            ))
          }
      </div>
    </section>
  )
}









export default Section2