import React, { useEffect, useState } from 'react'

function CarFiltersOption({carsList,setBrand,orderCarList}:any) {

    const [brandList,setBrandList]=useState<any>();
    const BrandSet = new Set()
    

    useEffect(()=>{
        if(carsList){
            fisterCarList();
        }
    },[carsList])
    const fisterCarList=()=>{
        carsList.forEach((element:any)=> {
            BrandSet.add(element.carBrand);
        });
        // console.log(BrandSet)
        setBrandList(Array.from(BrandSet))

    }
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div className='mr-5'>
                <h2 className='text[30px] font-bold'>Cars Catalog</h2>
                <h2>Explore our Cars you might likes</h2>
            </div>
            <div className='flex gap-5'>
                <select className="select
                 bg-white select-bordered w-full md:block max-w-xs hidden "
                 onChange={(e)=>orderCarList(e.target.value)}>
                    <option disabled selected>Price</option>
                    <option value={-1} >Min to Max</option>
                    <option value={1}>Max to Min</option>
                </select>

                

                <select className="select bg-white select-bordered w-full max-w-xs"
                    onChange={(e)=>setBrand(e.target.value)
                    }
                    
                    >
                    <option disabled selected>ManuFactural</option>
                        {/* {console.log("brand list",brandList)} */}
                        {brandList&&brandList.map((brand:string, index:number)=>(
                            <option key={index}>{brand}</option>
                            // console.log(brandList)

                            
                        ))}
                    
                    
                    
                    
                </select>
            </div>

        </div>
    )
}

export default CarFiltersOption 