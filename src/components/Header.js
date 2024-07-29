import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg"
import {CgClose} from "react-icons/cg"
const Header = () => {
    const [isOpen,setIsOpen]=useState(false)
    const open=function(){
        const element=document.querySelector(".header nav")
        element.classList.toggle("open")
        setIsOpen(true)
    }
  return (
    <>
        <div className='header relative z-10 px-10 py-14 '>
             <div className="flex items-center  justify-between ">
                <NavLink to="/">
                    <img src={logo} alt=""  className=""/>
                </NavLink>
                                        
                    <div className={`lg:hidden ${isOpen?" bg-black opacity-60 h-screen absolute left-0  w-full":""}`}></div>
                    
                    <div className="lg:hidden z-10">
                        {isOpen?<div className=""><button onClick={()=>{open() ;setIsOpen(false);}}><CgClose className='text-white '/></button></div>:<button onClick={()=>{open() ;setIsOpen(true);}}><CgMenuLeft className=" text-white h-14 w-10"/></button>}
                    </div>
            </div>
            <hr className=' top-20 left-44 z-10 absolute w-1/3 opacity-50 hidden lg:block' />

            <nav className=' lg:hidden text-black-400 py-2 nav1'>
                <ul className=' bg-white px-5 py-8 ' >
                    <li>
                        <NavLink to="/">
                            <h4>00<span>Home</span></h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">
                            <h4>01<span>Destination</span></h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew">
                            <h4>02<span>Crew</span></h4>
                        </NavLink>
                    </li>
                    <li className="mb-0">
                        <NavLink to="/technology">
                            <h4>03<span>Technology</span></h4>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className='lg:block hidden text-black-400 nav2 w-3/5 right-0 top-10 absolute  backdrop-blur-3xl text-white '>
                <ul className=' text-xl flex items-center  justify-start  gap-10 pl-24 p bg-transparent  '>
                    <li>
                        <NavLink to="/">
                            <h4>00<span>Home</span></h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">
                            <h4>01<span>Destination</span></h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew">
                            <h4>02<span>Crew</span></h4>
                        </NavLink>
                    </li>
                    <li className="mb-0">
                        <NavLink to="/technology">
                            <h4>03<span>Technology</span></h4>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Header