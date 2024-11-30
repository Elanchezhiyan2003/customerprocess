import React from 'react'
import One from '@/assets/resources/one.jpeg'
import Two from '@/assets/resources/two.jpeg'
import Three from '@/assets/resources/three.jpeg'
import Four from '@/assets/resources/four.jpeg'
import Five from '@/assets/resources/five.jpeg'
import Six from '@/assets/resources/six.jpeg'
import { Button } from './button'
import Myprofile from '@/assets/profile.png'

const resource = () => {
  return (
    <div className='xl:container xl:mx-auto'>
        <div className='space-y-4'>
            <h1 className=' inset-0 flex justify-center items-center text-5xl font-bold'>Useful <span className='font-extralight'>Resources</span></h1>
            <p className='inset-0  flex  justify-center items-center text-xl'>Discover our useful resources and read articles on different categories</p>
        </div>
        <div className='inset-0 flex flex-wrap gap-10 justify-center items-center  space-y-2 mt-10 pb-10 '>
            <div className="box-1 w-72 h-82 pb-2 rounded-2xl  bg-black bg-opacity-5">
                <a href="" className=''>
                    <img src={One} className='object-cover rounded-t-2xl ' alt="" />
                    <Button className=' mt-2 mx-4 rounded-3xl'>Analytics</Button>
                    <div className='w-60 h-auto mx-4 -mt-5 rounded-lg space-y-4 ' >
                    <h4 className='flex px-1 mt-2 md:mt-10 text-lg md:text-xl font-semibold'>5 Great Web Design Resources</h4>
                    <p className=' flex px-1 mt-2 md:mt-10 text-left'>Est placeat perspicia</p>
                    <div className='flex mt-3'>
                    <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
                        <div className='pl-2 pt-1'>
                            <span className="font-bold ">Anna Oneal</span>
                            <p className="text-xs  md:text-sm">March 28,2023 <span className='font-bold'>.</span> 4 min read </p>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            <div className="box-1 w-72 h-82 pb-2 rounded-2xl  bg-black bg-opacity-5">
                <a href="" className=''>
                    <img src={Two} className='object-cover rounded-t-2xl ' alt="" />
                    <Button className=' mt-2 mx-4 rounded-3xl'>Analytics</Button>
                    <div className='w-60 h-auto mx-4 -mt-5 rounded-lg space-y-4 ' >
                    <h4 className='flex px-1 mt-2 md:mt-10 text-lg md:text-xl font-semibold'>5 Great Web Design Resources</h4>
                    <p className=' flex px-1 mt-2 md:mt-10 text-left'>Est placeat perspicia</p>
                    <div className='flex mt-3'>
                    <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
                        <div className='pl-2 pt-1'>
                            <span className="font-bold ">Anna Oneal</span>
                            <p className="text-xs  md:text-sm">March 28,2023 <span className='font-bold'>.</span> 4 min read </p>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            <div className="box-1 w-72 h-82 pb-2 rounded-2xl  bg-black bg-opacity-5">
                <a href="" className=''>
                    <img src={Three} className='object-cover rounded-t-2xl ' alt="" />
                    <Button className=' mt-2 mx-4 rounded-3xl'>Analytics</Button>
                    <div className='w-60 h-auto mx-4 -mt-5 rounded-lg space-y-4 ' >
                    <h4 className='flex px-1 mt-2 md:mt-10 text-lg md:text-xl font-semibold'>5 Great Web Design Resources</h4>
                    <p className=' flex px-1 mt-2 md:mt-10 text-left'>Est placeat perspicia</p>
                    <div className='flex mt-3'>
                    <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
                        <div className='pl-2 pt-1'>
                            <span className="font-bold ">Anna Oneal</span>
                            <p className="text-xs  md:text-sm">March 28,2023 <span className='font-bold'>.</span> 4 min read </p>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            <div className="box-1 w-72 h-82 pb-2 rounded-2xl  bg-black bg-opacity-5">
                <a href="" className=''>
                    <img src={Four} className='object-cover w-72 h-40 rounded-t-2xl ' alt="" />
                    <Button className=' mt-2 mx-4 rounded-3xl'>Analytics</Button>
                    <div className='w-60 h-auto mx-4 -mt-5 rounded-lg space-y-4 ' >
                    <h4 className='flex px-1 mt-2 md:mt-10 text-lg md:text-xl font-semibold'>5 Great Web Design Resources</h4>
                    <p className=' flex px-1 mt-2 md:mt-10 text-left'>Est placeat perspicia</p>
                    <div className='flex mt-3'>
                    <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
                        <div className='pl-2 pt-1'>
                            <span className="font-bold ">Anna Oneal</span>
                            <p className="text-xs  md:text-sm">March 28,2023 <span className='font-bold'>.</span> 4 min read </p>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            <div className="box-1 w-72 h-82 pb-2 rounded-2xl  bg-black bg-opacity-5">
                <a href="" className=''>
                    <img src={Five} className='object-cover w-72 h-40 rounded-t-2xl ' alt="" />
                    <Button className=' mt-2 mx-4 rounded-3xl'>Analytics</Button>
                    <div className='w-60 h-auto mx-4 -mt-5 rounded-lg space-y-4 ' >
                    <h4 className='flex px-1 mt-2 md:mt-10 text-lg md:text-xl font-semibold'>5 Great Web Design Resources</h4>
                    <p className=' flex px-1 mt-2 md:mt-10 text-left'>Est placeat perspicia</p>
                    <div className='flex mt-3'>
                    <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
                        <div className='pl-2 pt-1'>
                            <span className="font-bold ">Anna Oneal</span>
                            <p className="text-xs  md:text-sm">March 28,2023 <span className='font-bold'>.</span> 4 min read </p>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            <div className="box-1 w-72 h-82 pb-2 rounded-2xl  bg-black bg-opacity-5">
                <a href="" className=''>
                    <img src={Six} className='object-cover rounded-t-2xl ' alt="" />
                    <Button className=' mt-2 mx-4 rounded-3xl'>Analytics</Button>
                    <div className='w-60 h-auto mx-4 -mt-5 rounded-lg space-y-4 ' >
                    <h4 className='flex px-1 mt-2 md:mt-10 text-lg md:text-xl font-semibold'>5 Great Web Design Resources</h4>
                    <p className=' flex px-1 mt-2 md:mt-10 text-left'>Est placeat perspicia</p>
                    <div className='flex mt-3'>
                    <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
                        <div className='pl-2 pt-1'>
                            <span className="font-bold ">Anna Oneal</span>
                            <p className="text-xs  md:text-sm">March 28,2023 <span className='font-bold'>.</span> 4 min read </p>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default resource;