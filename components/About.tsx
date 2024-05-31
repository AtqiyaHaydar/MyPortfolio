import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className='w-full h-[350px] flex flex-col mt-[75px] md:mt-0 gap-y-12 md:gap-y-0 md:flex-row items-center justify-between'>
      <div className='text-center md:text-left space-y-6' data-aos="fade-right">
        <h1 className='text-gray-700'>
          A second year informatics student at ITB.
        </h1>
        <h3 className='font-bold text-4xl max-w-[500px]'>
          I'm really into creating software and designing apps that are both fun to use and look great.
        </h3>
      </div>
      <video
        autoPlay
        muted
        loop
        className="h-[300px] w-[300px]"
        data-aos="fade-left"
      >
        <source src="/yuta.webm" type="video/webm" />
      </video>
    </div>
  )
}

export default About