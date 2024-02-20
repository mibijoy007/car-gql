import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaGasPump } from 'react-icons/fa'
import { PiEngineFill, PiSteeringWheelFill } from 'react-icons/pi'

function CarCard(props: any) {
    const [car, setCar] = useState <any>();
    useEffect(()=>{
        if(props.car){
            setCar(props.car)
        }

    },[props.car])
    return car&&(
        <div className='border-2 border-blue-500 rounded-md m-5 p-5 w-full max-w-[278px] justify-center'>
            <h2 className='text-[20px]
                font-medium mb-2'>{car.name}
            </h2>

            <h2 className='text-[20px]
                font-medium mb-2'>
                <span className='text-[12px] font-light text-black'>$</span>
                {car.price}
                <span className='text-[12px] text-black font-light'>/day</span>

            </h2>

            <Image 
            src={car.image?.url} 
            alt={car.name}
            width={250}
            height={150}
            className='w-[250px] h-[150px]
            mb-3 object-contain'
            />

            <div className='flex justify-around group-hover:hidden '>
                <div className='text-center text-gray-500 flex justify-between items-center '>
                    <PiSteeringWheelFill className='mr-1' />
                    <h2 className='line-clamp-5 text[14px] '>{car.carType}</h2>
                </div>

                
                <div className='text-center text-gray-500 flex justify-between items-center'>
                    <FaGasPump className='mr-1' />
                    <h2 className='line-clamp-5 text[14px] '> {car.carAvg} MPG</h2>
                </div>

            </div>
            <button className='
                bg-gradient-to-t
                from-blue-400 
                to-blue-700
                mt-5
                font-semibold
                px-5 cursor-pointer
                p-2 rounded-full text-white            
            '>Rent Now</button>
            


        </div>
    )
}

export default CarCard