import React, { useState } from 'react'

function CarCard(props:any) {
    const [car, setCar] = useState(props.car)
  return (
    <div>
        {car.name}
    </div>
  )
}

export default CarCard