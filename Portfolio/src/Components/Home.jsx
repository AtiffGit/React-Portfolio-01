import React from 'react'
import HeroImg from "../assets/heroImagee.jpg";
import { GoArrowRight } from "react-icons/go";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className=' flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Website Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro similique Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.consectetur.</p>
            <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio 
                    <span className=' group-hover:rotate-90 duration-300'> <GoArrowRight size={25} className='ml-2'/></span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImg} alt="Image" className='rounded-2xl  mx-auto w-2/3 md:w-full'  />
        </div>
      </div>
    </div>
  )
}

export default Home
