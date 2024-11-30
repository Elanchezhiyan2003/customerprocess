import { Button } from './components/ui/button';
import MyImage from './assets/Home.png';
import Home from './components/ui/Home';
import Features from './components/ui/features';
import Review from './components/ui/review';
import Resources from '@/components/ui/resource';
import Land from '@/components/ui/land';
import About from '@/components/about';

const App = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row xl:container xl:mx-auto  justify-between px-4 md:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div>
            <img className="object-contain h-10 md:h-12" src={MyImage} alt="" />
          </div>
          <div className=" container sticky md:flex gap-4 md:gap-6 py-4 md:py-0 justify-center">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">About us</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mt-4 md:mt-0 items-center">
          <Button className="px-4 py-2 text-sm md:text-base rounded-3xl">Book a demo</Button>
          <Button className="text-black pb-4  px-2 py-2 w-8 h-8 border-2 border-black rounded-black rounded-3xl bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 bg-white text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            
          </Button>
          <Button className="text-black pb-4  px-2 py-2 w-8 h-8 border-2 border-black rounded-black rounded-3xl bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Display mobile menu for navigation links */}
      <div className="flex md:hidden gap-4 justify-center py-2">
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">About us</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

      <Home />
      <Features />
      <Review />
      <Resources/>
      <Land/>
      <About/>

    </>
  );
};

export default App;
