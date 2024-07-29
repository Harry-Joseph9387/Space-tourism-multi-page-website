import React from 'react'
import {Link} from "react-router-dom"
import headermainbg from "../assets/home/background-home-desktop.jpg"
import headermainbg2 from "../assets/home/background-home-mobile.jpg"
const Headerbody = () => {
  return (
    <>
    <picture>
      <source media="(max-width:768px)" srcSet={headermainbg2}/>
    <img src={headermainbg} className='w-full absolute top-0 z-1 h-screen ' alt="" />
    </picture>
    <div className="absolute flex  justify-around items-center md:bottom-2/5 bottom-60 md:bottom-32 md:flex-row flex-col  lg:px-32 px-12 text-white opacity-70   h-80">
        <div className="text lg:w-2/6 md:w-1/2 w-3/4 md:text-start text-center ">
            <p className="mainheader-text text-xl">SO,YOU WANT TO TRAVEL TO</p>
            <h1 className='mainheader-text md:text-8xl text-6xl my-5 text-slate-100 opacity-1'>SPACE</h1>
            <p className="mainheader-para ">Let's face it?If you wnat to go to space,you might as well genuinely go to outer space and not hover kind of on the edge of it.Well sit back and relaxe because we"ll give you a truly out of this world experience</p>
        </div>
        <div className="explore text-3xl text-black  md:mt-0 mt-5 animate-pulse">
            <Link to="/destination">
              <button className="bg-white md:px-24 md:py-32 px-8 py-16 rounded-full">EXPLORE</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Headerbody