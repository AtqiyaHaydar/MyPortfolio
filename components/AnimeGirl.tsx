import Image from 'next/image'
import React from 'react'

import Anime from '@/public/anime.svg';

const AnimeGirl = () => {
  return (
    <div className='py-24 my-24 w-full flex items-center justify-center'>
      <Image 
        src={Anime}
        alt='Anime'
        height={250}
        width={250}
      />
    </div>
  )
}

export default AnimeGirl