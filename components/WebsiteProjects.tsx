import Link from 'next/link'
import React from 'react'

const projects = [
  {
    src: "/websites/datequest.webm",
    title: "DateQuest",
    desc: "A website to ask your crush on a date!",
    href: "https://date-quest-qy.vercel.app/"
  },
  {
    src: "/websites/sikasep.webm",
    title: "SiKasep (Organization)",
    desc: "KSEP ITB's internal website",
    href: "https://sikasep.com/"
  },
  {
    src: "/websites/sre.webm",
    title: "SRE ITB (Organization)",
    desc: "SRE ITB's website",
    href: "https://sreitb.com/"
  },
  {
    src: "/websites/seasalon.webm",
    title: "SEASalon",
    desc: "Salon management website",
    href: "https://sea-salon-five.vercel.app/"
  },
  {
    src: "/websites/infestitb2024.webm",
    title: "INFEST ITB 2024 (Organization)",
    desc: "Annual Event by KSEP ITB Website",
    href: "https://infestitb2024.com//"
  },
  {
    src: "/websites/cardfusion.webm",
    title: "CardFusion",
    desc: "A customer management relationship website",
    href: "https://card-fusion-crm.vercel.app"
  }
]

const WebsiteProjects = () => {
  return (
    <div className='space-y-8'>
      <h3 className='text-2xl font-black' data-aos="fade-up">Website Projects</h3>
      <ul className='flex flex-wrap justify-between gap-y-6'>
          {projects.map((item, index) => {
            return (
              <li key={index} data-aos="zoom-in">
                <Link href={item.href} className='space-y-2 w-full flex flex-col items-center justify-center '>
                  <video
                    autoPlay
                    muted
                    loop
                    className="rounded-lg w-[365px]"
                  >
                    <source src={item.src} type="video/webm" />
                  </video>
                  <div>
                    <p className='font-semibold text-center max-w-[300px]'>{item.title}</p>
                    <p className='font-regular text-gray-700 text-center max-w-[300px]'>{item.desc}</p>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default WebsiteProjects