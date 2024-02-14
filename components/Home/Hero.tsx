import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className=''>
            <div className='
            md:flex justify-between 
            items-center'>

                <div >
                    <h2 className='
                        text-[40px] md:text-[60px] font-bold
                        '>Premium Car Rental in Your Area</h2>

                    <p className='
                        mt-3
                    '>
                        Book the selected car effortlessly,<br />
                        Pay for driving only, <br />
                        <span className='font-semibold'>Book The Car Naw.</span>
                    </p>
                    <button className='
                mt-5
                hover:bg-blue-700
                bg-blue-500
                font-semibold
                 px-5 cursor-pointer
                p-3 rounded-full text-white 
            '>Explore Cars</button>

                </div>
                <div className='md:mt-5 '>
                    <Image src='/hero.png' alt='hero'
                        width={900}
                        height={900}
                    />

                </div>

            </div>
        </div>
    )
}

export default Hero