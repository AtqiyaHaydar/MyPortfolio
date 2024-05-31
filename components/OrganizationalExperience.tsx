import React from 'react'

const experiences = [
  {
    name: "Director Of Operations",
    company: "KSEP ITB",
    time: "March 2024 - Present"
  },
  {
    name: "UI/UX Designer",
    company: "SkillUp",
    time: "March 2024 - Present"
  },
  {
    name: "UI/UX Designer (Best Staff of UI/UX Division)",
    company: "ITB Fair",
    time: "March 2024 - May 2024"
  },
  {
    name: "IT Associate (Best Assocaite of IT Division)",
    company: "SRE ITB",
    time: "January 2023 - March 2024"
  },
  {
    name: "Operations Staff (Man of The Moment of Operations Division)",
    company: "KSEP ITB",
    time: "March 2023 - January 2024"
  },
  {
    name: "IT Staff (Best Staff of IT Division)",
    company: "Parade Wisuda ITB",
    time: "September 2023 - October 2024"
  },
  {
    name: "Vice Director of INFEST Operations",
    company: "INFEST by KSEP ITB",
    time: "April 2023 - September 2024"
  }
]

const OrganizationalExperience = () => {
  return (
    <div className='w-full space-y-8' data-aos="fade-up">
      <h3 className='text-2xl font-black'> 
        Organizational Experiences
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

export default OrganizationalExperience