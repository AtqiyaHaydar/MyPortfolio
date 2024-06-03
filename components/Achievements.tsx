import React from 'react'

const achievements = [
  {
    name: "Finalist in INTUITIVA UI/UX Competition 2024",
    company: "March 2024",
  },
  {
    name: "1st Place in Codefest Hackathon Competition 2023",
    company: "January 2024",
  },
]

const Achievements = () => {
  return (
    <div className='w-full space-y-8' data-aos="fade-up">
      <h3 className='text-2xl font-black'> 
        Achievements
      </h3>
      <ul className='flex flex-col gap-y-6'>
        {achievements.map((item, index) => {
          return (
            <li key={index} className='flex flex-row items-center gap-x-12' data-aos="fade-up">
              <div className='h-[15px] w-[15px] rounded-[50px] bg-black' />
              <div className=''>
                <p className='font-semibold text-[18px]'>{item.name}</p>
                <p className='text-[16px] '>{item.company}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Achievements