import React from 'react'
import LandBack from '@/assets/resources/landback.png';
import { Button } from './button';

const land = () => {
  return (


    <div className='xl:container xl:mx-auto'>
        <div className='-mt-48'>
        <div className='relative top-72'>
            <h1 className='text-5xl w-7/12  mx-auto text-center my-16'>Take your audience to the next level starting today</h1>
        <Button className='mx-auto flex justify-center rounded-3xl' >Let's get started</Button>
        </div>
        <div className=''>
            <img className='object-contain w-12/12 h-full z-0' src={LandBack} alt="" />
        </div>
        </div>
    </div>
  )
}

export default land;