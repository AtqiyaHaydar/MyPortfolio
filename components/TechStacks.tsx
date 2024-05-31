import React from 'react'
import Image from 'next/image'

const logos = [
  {
    src: "/logo/nextjs-original.png"
  },
  {
    src: "/logo/react-original.png"
  },
  {
    src: "/logo/typescript-original.png"
  },
  {
    src: "/logo/javascript-original.png"
  },
  {
    src: "/logo/tailwindcss-plain.png"
  },
  {
    src: "/logo/mysql-plain.png"
  },
  {
    src: "/logo/postgresql-plain.png"
  },
  {
    src: "/logo/mongodb-plain.png"
  },
  {
    src: "/logo/prisma-logo-3805665B69-seeklogo.com.png"
  },
  {
    src: "/logo/python-original.png"
  },
  {
    src: "/logo/java-original.png"
  },
  {
    src: "/logo/go-original-wordmark.png"
  },
  {
    src: "/logo/c-original.png"
  },
  {
    src: "/logo/cplusplus-original.png"
  },
  {
    src: "/logo/csharp-original.png"
  },
  {
    src: "/logo/github-original.png"
  },
  {
    src: "/logo/gitlab-original.png"
  },
]

const TechStacks = () => {
  return (
    <div className='w-full space-y-8' data-aos="fade-up">
      <h3 className='text-2xl font-black'>
        Technology Stacks
      </h3>
      <ul className='max-w-[750px] flex flex-row flex-wrap gap-4'>
        {logos.map((item, index) => {
          return (
            <li key={index} className='p-4 rounded-lg transition-all' data-aos="zoom-in">
              <Image src={item.src} alt="Logo" height={50} width={50} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TechStacks