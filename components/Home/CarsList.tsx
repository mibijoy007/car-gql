import React from 'react'
import CarCard from './CarCard'

function CarsList(props:any) {

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 '>
        {props.carsList.map((car:any, index:number)=>(
            <div>
                <CarCard car={car}/>
                
            </div>
        ))}
        
    </div>
  )
}

export default CarsList