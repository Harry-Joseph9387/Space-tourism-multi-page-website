import React,{useState} from 'react'
import crewbg from "../assets/crew/background-crew-desktop.jpg"
import crew1 from "../assets/crew/image-douglas-hurley.webp"
import crewmob1 from "../assets/crew/image-douglas-hurley.png"

import crew2 from "../assets/crew/image-mark-shuttleworth.webp"
import crewmob2 from "../assets/crew/image-mark-shuttleworth.png"

import crew3 from "../assets/crew/image-victor-glover.webp"
import crewmob3 from "../assets/crew/image-victor-glover.png"

import crew4 from "../assets/crew/image-anousheh-ansari.webp"

import crewmob4 from "../assets/crew/image-anousheh-ansari.png"

const crewdatat= [
  {
    name: "Douglas Hurley",
    images: {
        png: crewmob1,
      webp: crew1
    }
    ,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: crewmob2,
      webp: crew2
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    name: "Victor Glover",
    images: {
      png: crewmob3,
      webp: crew3
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: crewmob4,
      webp: crew4
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }]
const Crew = () => {
  const [crew,setCrew]=useState("Douglas Hurley")
  return (
    <>
      {crewdatat.map((eachcrew)=>(
        <div>
          {eachcrew.name==crew && 
            <div className="">
              <img src={crewbg} className='absolute top-0 w-full h-screen' alt="" />
              <div className="top-0 w-full h-screen absolute">
                <h2 className="text-slate-600 absolute top-0 text-center  w-full crewh2">02 <span className="text-white">MEET YOUR CREW</span></h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-end  lg:justify-center relative crew-main h-screen w-screen lg:gap-40 ">
                  <img className={`${eachcrew.name=="Douglas Hurley"?"ml-10 lg:ml-0" :""} absolute  top-0 lg:order-2  `} src={eachcrew.images.webp} alt="" />
                  <div className="crew-text absolute flex flex-col items-center lg:items-start  top-0 text-white text-center lg:text-start lg:w-1/3 ">
                    <ul className="absolute z-10 flex gap-5">
                      <li><button onClick={()=>{setCrew("Douglas Hurley")}}></button></li>
                      <li><button onClick={()=>{setCrew("Mark Shuttleworth")}}></button></li>
                      <li><button onClick={()=>{setCrew("Victor Glover")}}></button></li>
                      <li><button onClick={()=>{setCrew("Anousheh Ansari")}}></button></li>
                    </ul>
                    <h4 className="text-slate-400 lg:text-xl">COMMANDER</h4>
                    <h1 className="text-3xl lg:text-5xl mt-3">{eachcrew.name}</h1>
                    <p className="text-sm mt-5 lg:text-base">{eachcrew.bio}</p>
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

export default Crew