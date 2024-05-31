import React from 'react'

const experiences = [
  {
    name: "Program Associate",
    company: "TechFusion",
    time: "March 2024 - Present"
  },
  {
    name: "Director of Operations",
    company: "Kelompok Studi Ekonomi dan Pasar Modal ITB",
    time: "March 2024 - Present",
  },
  {
    name: "UI/UX Designer Intern",
    company: "Datare",
    time: "November 2024 - January 2024"
  }
]

const Experiences = () => {
  return (
    <div className='w-full space-y-8' data-aos="fade-up">
      <h3 className='text-2xl font-black'> 
        Experiences
      </h3>
      <ul className='flex flex-col gap-y-6'>
        {experiences.map((item, index) => {
          return (
            <li key={index} className='flex flex-row items-center gap-x-12' data-aos="fade-up">
              <div className='h-[15px] w-[15px] rounded-[50px] bg-black' />
              <div className=''>
                <p className='font-semibold text-[18px]'>{item.name}</p>
                <p className='text-[16px] '>{item.company}</p>
                <p className='text-[14px] text-gray-500'>{item.time}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Experiences