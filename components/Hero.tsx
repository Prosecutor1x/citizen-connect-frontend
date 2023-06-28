import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-screen'>
           <img src='/hero.png'/>
           <h1 className='absolute top-1/4 left-8 text-white text-6xl'>Citizen <br/>Connect</h1>
        </div>
    )
}

export default Hero