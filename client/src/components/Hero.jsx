import React, { useState } from 'react'

export default function Hero() {

    const [content, setContent] = useState(
        {
            url: "https://images.pexels.com/photos/31125216/pexels-photo-31125216.jpeg"
        }
    )

    return (
        <div className=''>
        
            <div className= {`h-[70vh] md:h-[90vh] bg-cover bg-center bg-fixed`} style={{backgroundImage: `url(${content.url})`}}>
                
                <div className='max-w-3xl mx-auto px-4 h-full md:px-8 text-white relative z-2'>
                    <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>
                        
                        <div className='gap-4 flex items-center md:gap-8'>

                            <span className='h-[3px] w-10 md:w-20 bg-[#cd9d4b]'></span>

                            <h1 className='uppercase tracking-wide text-4xl md:text-7xl text-center oswald'>
                                ABOUT US
                            </h1>

                            <span className='h-[3px] w-10 md:w-20 bg-[#cd9d4b]'></span>

                        </div>

                        <h2 className='text-sm md:text-xl text-center'>
                        Need food and a good place to eat? Welcome to our humble place where you can eat
                        good food peacefully.
                        </h2>
                    
                    </div>
                </div>

            </div>

            <div className='absolute bg-[#161616] opacity-50 w-full h-full left-0 top-0 z-1'></div>

        </div>
        
    )
}
