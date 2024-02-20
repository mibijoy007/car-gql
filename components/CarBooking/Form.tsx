import { CreatBooking, getStoreLocations } from '@/services';
import React, { useEffect, useState } from 'react'

function Form({car}:any) {
    const[storeLocation,setStoreLocation] = useState<any>([]);
    const [formValue,setFormValue]=useState({
        location:'',
        pickUpDate:'',
        dropOffDate:'',
        pickUpTime:'',
        dropOffTime:'',
        contactNumber:'',
        userName: "Durjoy",
        carId: ""
        
    })
    useEffect(()=>{
        getStoreLocation_();
    },[])

    useEffect(()=>{
        if(car){
            setFormValue({
                ...formValue,
                carId: car.id
                
                    
            });
        }
    },[car])
    const getStoreLocation_ = async()=>{
        const resp:any= await getStoreLocations();
        console.log(resp)
        setStoreLocation(resp?.storesLocations)
    }

    const handleChange=(event:any)=>{
        setFormValue({
            ...formValue,
            [event.target.name]:event.target.value
        });
    }

    const handleSubmit=async()=>{
        console.log(formValue)
        const resp = await CreatBooking(formValue)
    }

    return (
        <div>
            <div className='flex flex-col w-full mt-5 mb-5'>
                <label className='text-gray-400'>pickUp Location</label>
                <select className="select select-bordered w-full max-w-full bg-white text-black max-w-xs" 
                    name='location'
                    onChange={handleChange}
                    >
                    <option disabled selected>pickUp Location</option>
                    {storeLocation&&storeLocation.map((loc:any,index:number)=>(
                        <option key={index}>{loc?.address}</option>
                    ))}                    
                </select>
            </div>

            <div className='flex   mb-5'>
                <div className='flex flex-col w-full mr-5 '>
                    <label className='text-gray-400 bg-white '>Pick Up Date</label>
                    <input 
                    type="date" 
                    placeholder="Type here" 
                    name='pickUpDate'
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white  max-w-xs" />
                </div>
                
                <div className='flex flex-col  w-full '>
                <label className='text-gray-400'>Drop Off Date</label>
                <input 
                type="date" 
                placeholder="Type here" 
                name='dropOffDate'
                onChange={handleChange}
                className="input input-bordered w-full bg-white text-black max-w-xs" />

                </div>

            </div>

            <div className='flex   mb-5'>
                <div className='flex flex-col w-full mr-5 '>
                    <label className='text-gray-400 bg-white '>Pick Up Time</label>
                    <input 
                    type="time" 
                    placeholder="Type here" 
                    name='pickUpTime'
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white  max-w-xs" />
                </div>
                
                <div className='flex flex-col  w-full '>
                <label className='text-gray-400'>Drop Off Time</label>
                <input 
                type="time" 
                placeholder="Type here" 
                name='dropOffTime'
                onChange={handleChange}
                className="input input-bordered w-full bg-white text-black max-w-xs" />

                </div>

            </div>
            <div className='flex flex-col'>
                <label className='text-gray-400'>Contact Number</label>
                <input 
                type="text" 
                placeholder="Contact Number" 
                name='contactNumber'
                onChange={handleChange}
                className="input input-bordered  w-full max-w-full bg-white text-black max-w-xs" />
            </div>
            <div className="modal-action">
            <form method="dialog">
              <button className="bg-slate-200 hover:bg-slate-300 border-none mr-2 text-black btn">Close</button>
              {/* if there is a button, it will close the modal */}
              <button 
              className="
              bg-blue-500 hover:bg-blue-800 
              border-none ml-2 text-white btn"
              onClick={handleSubmit}
              >Save</button>
            </form>
          </div>

        </div>
        
    )
}

export default Form