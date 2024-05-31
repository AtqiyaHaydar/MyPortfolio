import React from 'react'

import { InstagramIcon } from 'lucide-react'
import { TwitterIcon } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import { Github } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full px-4 md:px-0 md:w-[750px] bg-white flex justify-between py-8' data-aos="fade-down">
      <h1 className='font-black text-3xl'>
        Atqiya.
      </h1>
      <div className='space-x-4 flex flex-row'> 
        <Link href="https://www.instagram.com/atqiyahaydar/" target='_blank'>
          <InstagramIcon />
        </Link>
        <Link href="https://x.com/atqiyahaydar/" target='_blank'>
          <TwitterIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/atqiyahaydar/" target='_blank'>
          <LinkedinIcon />
        </Link>
        <Link href="https://github.com/AtqiyaHaydar" target='_blank'>
          <Github />
        </Link>
      </div>
    </div>
  )
}

export default Header