import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../CarBooking/BookingModal'

function CarsList(props: any) {
  const [selectedCar,setselectedCar]=useState<any>([]);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-4 '>
      {props.carsList.map((car: any, index: number) => (
        <div key={index} 
          onClick={()=>{(document as any).getElementById('my_modal_4').showModal();
          setselectedCar(car)}}>
          
          <CarCard car={car} />

        </div>
      ))}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal ">
         <BookingModal car={selectedCar}/>
      </dialog>




    </div>
  )
}

export default CarsList