import React from 'react'

const Education = () => {
  return (
    <div className='w-full space-y-8' data-aos="fade-up">
      <h3 className='text-2xl font-black'>Education</h3>
      <div className='flex flex-row items-center gap-x-12'>
        <div className='h-[15px] w-[15px] rounded-[50px] bg-black' />
        <div>
          <p className='font-semibold text-[18px]'>Institut Teknologi Bandung</p>
          <p className='text-[16px] '>Undergraduate Informatics Engineering Student</p>
          <p className='text-[14px] text-gray-500'>Class of 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Education