import React,{useState} from 'react'

import technologybgd from "../assets/technology/background-technology-desktop.jpg"
import technologybgm from "../assets/technology/background-technology-mobile.jpg"

import img1l from "../assets/technology/image-launch-vehicle-landscape.jpg"
import img1p from "../assets/technology/image-launch-vehicle-portrait.jpg"

import img2l from "../assets/technology/image-spaceport-landscape.jpg"
import img2p from "../assets/technology/image-spaceport-portrait.jpg"

import img3p from "../assets/technology/image-space-capsule-portrait.jpg"
import img3l from "../assets/technology/image-space-capsule-landscape.jpg"

const technology=[
    {
      name: "Launch vehicle",
      images: {
        portrait: img1p,
        landscape:img1l
      },
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      name: "Spaceport",
      images: {
      portrait:img2p,
        landscape:img2l
      },
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      name: "Space capsule",
      images: {
        portrait:img3p,
        landscape:img3l
      },
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]
const Technology = () => {
  const [term,setTerm]=useState("Launch vehicle")
  console.log(term)
  return (
    <>
      {technology.map((x)=>(
        <div className="">
            {x.name==term &&
              <div className=" absolute top-0 w-screen h-screen">
                <picture>
                  <source srcSet={technologybgd} media="(min-width:1024px)"/>
                  <img src={technologybgm} className='w-screen h-screen absolute top-0' alt="" />
                </picture>
                <h2 className="absolute text-slate-600 text-center w-full lg:w-1/3 text-xl h2">03 <span className='text-white'>SPACE LAUNCH 101</span></h2>
                <div className="relative flex flex-col lg:flex-row lg:gap-20 justify-center  h-screen items-center lg:items-end technology-main">
                  <img src={x.images.portrait} className="absolute lg:order-1   " alt="" />
                  
                  <ul className='flex lg:flex-col gap-10 lg:gap-5 lg:h-1/2 absolute text-white z-10'>
                    <li><button onClick={()=>{setTerm("Launch vehicle")}}>1</button></li>
                    <li><button onClick={()=>{setTerm("Spaceport")}}>2</button></li>
                    <li><button onClick={()=>{setTerm("Space capsule")}}>3</button></li>
                  </ul>
                  <div className="technology-text text-white lg:w-1/3 lg:h-1/2   absolute text-center lg:text-start">
                    <h4 className="">THE TERMINOLOGY</h4>
                    <h1 className="text-4xl mb-2 lg:text-5xl">{x.name}</h1>
                    <p className='text-base lg:text-lg'>{x.description}</p>
                  </div>
                </div>
              </div>}
        </div>
        
      ))}
    </>
  )
}

export default Technology