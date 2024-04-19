import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'


export const FooterSection = () => {

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
    <div id="Footer" className="Footer-Wrapper flex justify-start items-center flex-col h-fit w-full bg-purple-900 ">
        <div className="Footer-Inner text-white flex justify-center items-center w/6 py-3 gap-5">
            <img src={logo} alt="pwt-logo" className="Logo w-24" />
            <div className="FooterTexts flex justify-center items-center w/6 py-10 flex-col">
                <h1>PHENOMENAL WORLD TRADE</h1>
                <p>...pioneering business evolution</p>
                <div className="SocialLinks FooterLinks justify-end items-center gap-4 mt-5 hidden ">
                <a href="https://wa.me/message/XK26GM4NE2IXL1" target="_blank"><i className="fa-brands fa-whatsapp wp-icon cursor-pointer BtnScale"></i></a>
            <a href="https://web.facebook.com/profile.php?id=61550826716588" target="_blank"><i className="fa-brands fa-facebook-f fb-icon cursor-pointer BtnScale"></i></a>
            <a href="https://www.instagram.com/phenomenalwt01/?hl=en" target="_blank"><i className="fa-brands fa-instagram ig-icon cursor-pointer BtnScale"></i></a>
            <a href="https://www.linkedin.com/in/omoefe-bazunu-651b72203" target="_blank"><i className="fa-brands fa-linkedin-in ld-icon cursor-pointer BtnScale"></i></a>
            </div>
            </div>
        </div>
    </div>
  )
}
