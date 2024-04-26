import { Link, Outlet } from "react-router-dom"
import { FiAlignJustify } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

export const BlogHome = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <div className="BlogPage-Wrapper w-full h-fit bg-white">
    {/* START OF NAVBER */}
        <div className="BlogLayout-Inner w-full bg-amber-300 top-24 sticky ">
            <div className="main w-5/6 my-0 mx-auto flex justify-between items-center">
                <div className='flex NavBar text-slate-700 justify-between items-center gap-5 h-12 w-full'>
                    <h1 className=" categories">CATEGORIES:</h1>
                    <ul className='flex  justify-end items-center text-slate-700 flex-grow cursor-pointer h-full w-full'>
                            <li className=' px-5 h-full flex items-center'><Link to="/BlogHome/">TECH</Link></li>
                            <li className=' px-5 h-full flex items-center'><Link to="/BlogHome/BusinessBlogPost">BUSINESS/FINANCE</Link></li>
                            <li className=' px-5 h-full flex items-center'><Link to="/BlogHome/CareerBlogPost">CAREER DEVELOPMENT</Link></li>
                    </ul>
                </div>
                <div className="MenuIcon Blog-Menu text-slate-700 cursor-pointer hidden justify-center relative">
                    {toggle? <FiAlignJustify  size = {40} onClick = {() => setToggle(false)} /> 
                    : <TfiClose size = {30} onClick = {() => setToggle(true)}/> }
                </div>
            </div>
        </div>
        {!toggle && (
                  <div className=' flex flex-col scale-up-tr  w-fit h-fit pt-10 pb-20 bg-amber-300 px-2 absolute right-12 top-55 ' >
                      <ul className='Blog-menu-link text-xl text-md px-4 text-slate-700 text-end w-fit text-nowrap flex justify-center flex-col align-center gap-y-4 py-2'>
                        <li className=" border-b-2 border-slate-700 font-medium pb-5 w-55 cursor-pointer"><Link to="/BlogHome/">TECH</Link></li>
                        <li className=" border-b-2 border-slate-700 font-medium pb-5 w-55 cursor-pointer"><Link to="/BlogHome/BusinessBlogPost">BUSINESS/FINANCE</Link></li>
                        <li className=" pb-5 w-55 cursor-pointer font-medium"><Link to="/BlogHome/CareerBlogPost">CAREER DEVELOPMENT</Link></li>
                       </ul>
                  </div>
                  
              )
              }
    {/* END OF NAVBER */}
        <Outlet />

    </div>  
  )
}
