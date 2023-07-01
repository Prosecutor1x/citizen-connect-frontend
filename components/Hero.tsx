import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-screen'>
            <img src='/hero.png' />
            <section className='absolute top-1/4 left-8'>
                <h1 className=' text-white text-6xl leading-[5rem] font-semibold'>Citizen <br/>Connect</h1>
                <p className='text-white text-lg'>An Online Platform to submit your local propblems<br /> directly to th government officials.</p>
            </section>

        </div>
    )
}

export default Hero