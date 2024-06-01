import React from 'react'
import Link from 'next/link'

const projects = [
  {
    src: "/designs/blissify.webm",
    title: "Blissify",
    desc: "A mental health mobile application",
    href: "https://www.figma.com/proto/CF7W83yUCMr2PSmt75o1UK/Blissify?page-id=0%3A1&node-id=188-8344&starting-point-node-id=188%3A8344&t=y8slQPllESOy4mmQ-1"
  },
  {
    src: "/designs/tatanen.webm",
    title: "Tatanen",
    desc: "An agriculture mobile application",
    href: "https://www.figma.com/proto/H3h6MQApX0JRJGssv6I4Eh/Tatanen-(UX-Design)?page-id=2%3A90&node-id=160-104&viewport=3%2C348%2C0.06&t=MhqnNqTK9wMbSRMo-1&scaling=min-zoom&starting-point-node-id=160%3A104&show-proto-sidebar=1"
  },
  {
    src: "/designs/finsense.webm",
    title: "FinSense",
    desc: "A financial mobile application",
    href: "https://www.figma.com/proto/H3h6MQApX0JRJGssv6I4Eh/Tatanen-(UX-Design)?page-id=2%3A90&node-id=160-104&viewport=3%2C348%2C0.06&t=MhqnNqTK9wMbSRMo-1&scaling=min-zoom&starting-point-node-id=160%3A104&show-proto-sidebar=1"
  },
]

const DesignProjects = () => {
  return (
    <div className='space-y-8'>
      <h3 className='text-2xl font-black' data-aos="fade-up">Design Projects</h3>
      <ul className='flex flex-wrap justify-around gap-y-12'>
          {projects.map((item, index) => {
            return (
              <li key={index} data-aos="zoom-in">
                <Link href={item.href} className='space-y-2 w-full flex flex-col items-center justify-center '>
                  <video
                    autoPlay
                    muted
                    loop
                    className="rounded-xl w-[250px]"
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

export default DesignProjects