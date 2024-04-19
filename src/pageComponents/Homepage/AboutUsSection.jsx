import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react';
import { SectionHeader } from "./SectionHeader"

export const AboutUsSection = () => {

    // DOWNLOAD BACKGROUND IMAGE
    const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const imageRef = ref(storage, 'images/profile.jpg'); // Replace with the actual path to your image in Firebase Storage
      try {
        const url = await getDownloadURL(imageRef);
        setBackgroundImage(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Run this effect only once when the component mounts



  return (
    <div id="About" className="AboutUs-Wrapper w-full bg-yellow-50 flex justify-center items-center">
        <div className="AboutUs-Inner w-5/6 flex flex-col items-center mb-24">
            <SectionHeader header="ABOUT US"/>
            <div className="Main flex justify-start gap-5 mt-10">
                <div className="pwtImg bg-cover bg-center bg-no-repeat h-72 w-full bg-slate-500" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <p className="r-16 text-wrap">Phenomenal World Trade is a company that provides digital solutions to individuals and groups for business and non-business purposes. Our services include <span className=" font-semibold">WEBSITE DESIGN AND DEVELOPMENT, BUSINESS DATA ANALYSIS, WRITING OF CV/RESUME and COVER/APPLICATION LETTERS </span> as well as <span className=" font-semibold">MARKETING and ADS DESIGN</span>. We offer both remote and onsite services, so distance is never a barrier. <br /> Our values includes<span className=" font-semibold"> Quality, Timeliness, and Relationship building.</span>
                </p>
            </div>
        </div>
    </div>
  )
}
