
import { TfiList } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'


export const NavBar = () =>{
const [toggle, setToggle] = useState(true);



  // DOWNLOAD LOGO IMAGE
  const [logo, setLogo] = useState('');

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const imageRef = ref(storage, 'images/logo.png'); // Replace with the actual path to your image in Firebase Storage
      try {
        const url = await getDownloadURL(imageRef);
        setLogo(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="NavBar-Wrapper w-full flex justify-center items-center flex-col sticky top-0">
      <div className="QuickLink-Wrapper w-full h-fit bg-purple-950 py-2">
      <div className="QickLinks my-0 mx-auto w-5/6 text-white flex justify-between items-center ">
            <div className="Contacts flex gap-x-10  justify-start items-center text-sm">
                <p className=" flex justify-start items-center gap-x-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffff" className="w-5 h-5 cursor-pointer">
  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" />
</svg>
<span className="Text cursor-pointer">+234-9043970401</span>
</p>
                <p className=" flex justify-start items-center gap-x-2 cursor-pointer">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffff" className="w-5 h-5 cursor-pointer">
  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
</svg>
<span className="Text">raniem57@gmail.com</span>
</p>
            </div>
            <div className="SocialLinks flex justify-end items-center gap-4">
            <a href="https://wa.me/message/XK26GM4NE2IXL1" target="_blank"><i className="fa-brands fa-whatsapp wp-icon cursor-pointer BtnScale"></i></a>
            <a href="https://web.facebook.com/profile.php?id=61550826716588" target="_blank"><i className="fa-brands fa-facebook-f fb-icon cursor-pointer BtnScale"></i></a>
            <a href="https://www.instagram.com/phenomenalwt01/?hl=en" target="_blank"><i className="fa-brands fa-instagram ig-icon cursor-pointer BtnScale"></i></a>
            <a href="https://www.linkedin.com/in/omoefe-bazunu-651b72203" target="_blank"><i className="fa-brands fa-linkedin-in ld-icon cursor-pointer BtnScale"></i></a>
            </div>
        </div>
      </div>
      <div className="NavBar-Wrapper bg-purple-900 w-full">
        <div className="NavBar-Bg  my-0 mx-auto w-5/6 flex justify-between items-center h-20">
          <div className="Logo flex justify-start items-center gap-4">
          <img src={logo} alt="pwt-logo" className="w-14" />
          <h1 className="text-white text-xl font-bold">PHENOMENAL WORLD TRADE</h1>
          </div>
          <div className="NavLinks text-whit my-0 h-full text-white" >
            <ul className="flex justify-end items-center gap-y-8 h-full p-0 m-0 cursor-pointer">
              <li className="list-none no-underline h-full flex items-center"><NavLink to="/" className="active">HOME</NavLink></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#Services">SERVICES</a></li>
              <li className="list-none no-underline h-full flex items-center"><NavLink to="/ProjectsPage">PROJECTS</NavLink></li>
              <li className="list-none no-underline h-full flex items-center"><NavLink to="/BlogHome">BLOG</NavLink></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#About">ABOUT US</a></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#Contact">CONTACT US</a></li>
            </ul>
          </div>
          <div className="MenuIcon  text-white cursor-pointer hidden justify-center relative">
            {toggle? <TfiList size = {40} onClick = {() => setToggle(false)} /> 
            : <TfiClose size = {40} onClick = {() => setToggle(true)}/> }
          </div>

        </div>
       
      </div>
      {!toggle && (
                  <div className='Bar flex flex-col scale-up-tr  w-fit h-fit pt-10 pb-28 bg-purple-800 px-2 absolute right-0 top-24' >
                      <ul className='menu-link text-xl text-md px-4 text-white text-end w-fit text-nowrap flex justify-center flex-col align-center gap-y-4 font-light py-2'>
                        <li className=" border-b-2 border-slate-300 pb-5 w-48"><NavLink to="/">HOME</NavLink></li>
                        <li className=" border-b-2 border-slate-300 pb-5 w-48"><a href="#Services">SERVICES</a></li>
                        <li className=" border-b-2 border-slate-300 pb-5 w-48"><NavLink to="/ProjectsPage">PROJECTS</NavLink></li>
                        <li className="border-b-2 border-slate-300 pb-5 w-48"><NavLink to="/BlogHome">BLOG</NavLink></li>
                        <li className=" border-b-2 border-slate-300 pb-5 w-48"><a href="#About">ABOUT US</a></li>
                        <li className=" pb-5 w-48"><a href="#Contact">CONTACT US</a></li>
                       </ul>
                  </div>
                  
              )
              }
        
    </div>
  )
}
