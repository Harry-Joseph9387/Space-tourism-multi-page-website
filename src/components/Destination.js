import React,{useState} from 'react'
import destinationbgdesktop from "../assets/destination/background-destination-desktop.jpg"
import destinationbgmobile from "../assets/destination/background-destination-mobile.jpg"

import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"
const info=[{
  title:"MOON",
  para:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance:"384,400 km",
  time:"3 days",
  image:moon
},{
  title:"MARS",
  para:"Dont forget to pack your hiking boots.You'll will need them  to tackle Olympus Mons,the tallest planetary mountain in  our solar system.It's two and a half times the size of  Everest!",
  distance:"225 mil. km",
  time:"9 months",
  image:mars
},{
  title:"EUROPA",
  para:'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  distance:"628 mil. km",
  time:"3 years",
  image:europa
},{
  title:"TITAN",
  para:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance:"1.6 bil. km",
  time:"7 years",
  image:titan
}]
const Destination = () => {
  const [planet,setPlanet]=useState("MOON") 
  return (
    <>
      {info.map((x)=>(
        <div>
          {
            x.title==planet && 
              <div className='absolute top-0 w-screen h-screen'>
                <picture className="">
                  <source srcSet={destinationbgdesktop} media="(min-width:1024px)" className="absolute w-full top-0 h-screen"/>
                  <img src={destinationbgmobile} alt="" className="absolute w-full top-0 h-screen" />
                </picture>
                <div className="relative destination h-screen flex flex-col items-center lg:items-start ">
                  <h2 className=" absolute lg:w-1/2 lg:text-center  lg:text-2xl text-slate-600 font-medium" style={{}}>01 <span className='pl-2 text-white'>PICK YOUR DESTINATION</span></h2>
                  
                  <div className=" sub-destination-container h-screen flex flex-col lg:flex-row items-center lg:justify-center lg:gap-24 relative  w-full">
                    <img src={x.image} alt="" className=" absolute  " style={{}} />
                    <div className="relative destination-text flex flex-col items-center justify-center lg:items-start  h-screen text-center lg:text-start " style={{}}>
                      <ul className="flex gap-5 absolute text-white z-10" style={{}}>
                        <li><button onClick={()=>{setPlanet("MOON")}}>MOON</button></li>
                        <li><button onClick={()=>{setPlanet("MARS")}}>MARS</button></li>
                        <li><button onClick={()=>{setPlanet("EUROPA")}}>EUROPA</button></li>
                        <li><button onClick={()=>{setPlanet("TITAN")}}>TITAN</button></li>
                      </ul>
                      <h1 className='text-white absolute text-5xl lg:text-7xl my-3' style={{}}>{x.title}</h1>
                      <p className='text-white text-sm absolute' style={{}}>{x.para}</p>
                      <hr className="absolute w-full mt-10 mb-4" style={{}} />
                      <div className=" flex subsub justify-center lg:justify-start gap-16 w-full absolute top-0 text-white" style={{}}>
                        <div className="">
                          <p>AVG.DISTANCE</p>
                          <h2>{x.distance}</h2>
                        </div>
                        <div className="">
                          <p>EST.TRAVEL TIME</p>
                          <h2>{x.time}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>        
        ))}
        
                     
    </>
  )
}

export default Destination