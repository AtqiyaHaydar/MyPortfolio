import React from 'react'
import Image from 'next/image'

const logos = [
  {
    src: "/logo/figma-original.png"
  },
  {
    src: "/logo/canva-original.png"
  }
]

const DesignTools = () => {
  return (
    <div className='w-full space-y-8' data-aos="fade-up">
      <h3 className='text-2xl font-black'>
        My Design Tools
      </h3>
      <ul className='max-w-[750px] flex flex-row flex-wrap gap-4'>
        {logos.map((item, index) => {
          return (
            <li key={index} className='p-4 rounded-lg transition-all' data-aos="zoom-in">
              <Image src={item.src} alt="Logo" height={50} width={50}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DesignTools