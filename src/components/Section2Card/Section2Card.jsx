import { UtensilsCrossed } from 'lucide-react'
import React from 'react'
import "./Section2Card.css"

const Section2Card = ({icon,color,title,description}) => {
  return (
    <div className='Section2Card'>

      <div className="Section2Card__Icon">
        {icon}
      </div>

      <h3 className="Section2Card__Title">
        {title}
      </h3>

      <p className="Section2Card">
        {description}
      </p>
      
    </div>
  )
}


export default Section2Card