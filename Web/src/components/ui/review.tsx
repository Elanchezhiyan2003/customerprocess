import React from 'react'
import Trust from '@/assets/trustpilot.png'
import Star from '@/assets/star.png'
import Myprofile from '@/assets/profile.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const review = () => {
  return (
    <div className='bg-black xl:container xl:mx-auto bg-opacity-5 w-auto h-auto '>
      <div className='  -mt-14'>
        <h1 className='text-black w-auto h-16 text-5xl inset-0 flex justify-center items-center -mt-18 '>Nothing less than excellent</h1>
        <div className='w-auto h-24 inset-0 flex justify-center items-center'>
          <div className='flex flex-wrap gap-3'>
            <img className='object-contain size-44' src={Trust} alt=""/>
            <img className='object-contain  h-7 mt-20' src={Star} alt=""/>
          </div>
        </div>
          <div className='inset-0 flex justify-center items-center -mt-4'>
            <h2 className='text-black text-xl'>Reviews 4 ,317 <span className='text-2xl font-semibold'>Excellent</span></h2>
          </div>
      
<Carousel className='m-16 pb-10 '>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className='w-80 h-auto m-4 rounded-xl p-5 bg-white'>
            <img className='object-contain  h-7 ' src={Star} alt=""/>
            <p className='mt-3'>“I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”</p>
          <div className='flex mt-3'>
            <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
            <div className='pl-2 pt-1'>
            <span className="font-bold text-black">Anna Carlson</span>
            <p className="text-xs text-slate-500 md:text-sm">CEO, United Data Ltd</p>
            </div>
          </div>
          </div></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className='w-80 h-auto m-4 p-5 rounded-xl bg-white'>
            <img className='object-contain  h-7 ' src={Star} alt=""/>
            <p className='mt-3'>“I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”</p>
          <div className='flex mt-3'>
            <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
            <div className='pl-2 pt-1'>
            <span className="font-bold text-black">Anna Carlson</span>
            <p className="text-xs text-slate-500 md:text-sm">CEO, United Data Ltd</p>
            </div>
          </div>
          </div></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className='w-80 h-auto m-4 p-5 rounded-xl bg-white'>
            <img className='object-contain  h-7 ' src={Star} alt=""/>
            <p className='mt-3'>“I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”</p>
          <div className='flex mt-3'>
            <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
            <div className='pl-2 pt-1'>
            <span className="font-bold text-black">Anna Carlson</span>
            <p className="text-xs text-slate-500 md:text-sm">CEO, United Data Ltd</p>
            </div>
          </div>
          </div></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className='w-80 h-auto m-4 p-5 rounded-xl bg-white'>
            <img className='object-contain  h-7 ' src={Star} alt=""/>
            <p className='mt-3'>“I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”</p>
          <div className='flex mt-3'>
            <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
            <div className='pl-2 pt-1'>
            <span className="font-bold text-black">Anna Carlson</span>
            <p className="text-xs text-slate-500 md:text-sm">CEO, United Data Ltd</p>
            </div>
          </div>
          </div></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className='w-80 h-auto m-4 p-5 rounded-xl bg-white'>
            <img className='object-contain  h-7 ' src={Star} alt=""/>
            <p className='mt-3'>“I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”</p>
          <div className='flex mt-3'>
            <img className='"h-10 md:h-14' src={Myprofile} alt=""/>
            <div className='pl-2 pt-1'>
            <span className="font-bold text-black">Anna Carlson</span>
            <p className="text-xs text-slate-500 md:text-sm">CEO, United Data Ltd</p>
            </div>
          </div>
          </div></CarouselItem>
  </CarouselContent>
  <div className=' relative justify-end items-end '>
  <CarouselPrevious />
  <CarouselNext />
  </div>
</Carousel>
      </div>

    </div>
  )
}

export default review;