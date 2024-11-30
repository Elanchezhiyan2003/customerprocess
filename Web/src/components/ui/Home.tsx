import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './button';
import Myprofile from '@/assets/profile.png';
import Message from '@/assets/message.png';
import backimg from '@/assets/backimg.png';
import Round from '@/assets/round.png'
import Proline from '@/assets/proline.png'
import Invert from '@/assets/invert.png'
import Hitech from '@/assets/hitech.png'
import Flash from '@/assets/Flash.png'
const Home = () => {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  useEffect(() => {
   
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
 
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
    );

     
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)', delay: 0.6 }
    );

     
    gsap.fromTo(
      imageRefs.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col overflow-y-hidden md:flex-row xl:container xl:mx-auto  py-8 md:py-12 px-4 md:px-0 ">
        <div>
          <div className="ml-0 md:ml-14 text-center md:text-left">
            <h1
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold"
            >
              Simplify your customer acquisition Process
            </h1>
            <p
              ref={paraRef}
              className="mt-4 md:mt-10 text-lg md:text-xl"
            >
              Power natural language processing capabilities that can understand and respond to customer inquiries in real-time & improve customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 py-6 md:py-8 items-center md:items-start ml-0 md:ml-8">
            <Button
              ref={el => buttonRefs.current[0] = el}
              className="rounded-full px-4 py-2"
            >
              Get Started Free
            </Button>
            <Button
              // ref={el => buttonRefs.current[1] = el}
              className="rounded-3xl bg-white hover:text-white text-black border-2 border-black px-4 py-2"
            >
              Book a Demo
            </Button>
          </div>
          <div className="flex items-center justify-center md:justify-start ml-0 md:ml-8">
            <img
              ref={el => imageRefs.current[0] = el}
              className="h-10 md:h-14"
              src={Myprofile}
              alt="Profile"
            />
            <div className="px-2 md:px-4 mt-1">
              <p className="text-xs md:text-sm">15 min discovery call</p>
              <p className="font-semibold text-xs md:text-sm">
                Talk with a <span className="font-bold">specialist</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0 flex justify-center md:block">
          <img
            ref={el => imageRefs.current[1] = el}
            className="w-11/12 md:w-full -mt-20 md:-mt-36"
            src={backimg}
            alt="Background"
          />
          <img
            ref={el => imageRefs.current[2] = el}
            className="absolute object-contain -top-24 pt-24 right-12 w-8/12"
            src={Message}
            alt="Message"
          />
        </div>
      </div>
      <div className="bg-black w-full xl:container xl:mx-auto  h-12 md:h-16 -mt-8 md:-mt-12 text-white flex items-center justify-around px-2 md:px-8">
        <a href="" className='flex'><img src={Proline} className='size-6' alt="" />Proline</a>
        <a href="" className='flex'> <img src={Round} className='size-6' alt="" /> DevWise</a>
        <a href="" className='flex'><img src={Invert} className='size-6' alt="" />Invert</a>
        <a href=""className='flex'><img src={Proline} className='size-6' alt="" /> ProLine</a>
        <a href="" className='flex'><img src={Hitech} className='size-6' alt="" />Hitech</a>
        <a href="" className='flex'> <img className='size-6' src={Flash} alt="" />Flash</a>
      </div>
    </>
  );
};

export default Home;