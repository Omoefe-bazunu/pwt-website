import { NavLink } from "react-router-dom"
import { SectionHeader } from "./SectionHeader"
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'

export const ProjectsSection = () => {

 // DOWNLOAD PROJECTS IMAGE

   //PROJECT1 - LAURAFLYER
   const [LauraflyerImage, setLauraFlyerImage] = useState('');

   useEffect(() => {
     // Function to fetch the image from Firebase Storage
     const fetchImage = async () => {
       const imageRef = ref(storage, 'images/projects/lauraflyer.jpg'); // Replace with the actual path to your image in Firebase Storage
       try {
         const url = await getDownloadURL(imageRef);
         setLauraFlyerImage(url); // Set the downloaded image URL as the background
       } catch (error) {
         console.error('Error fetching image:', error);
       }
     };
 
     fetchImage();
   }, []); // Run this effect only once when the component mounts

      //PROJECT2 - AKFlyer
      const [smAKImage, setSmAKImage] = useState('');

      useEffect(() => {
        // Function to fetch the image from Firebase Storage
        const fetchImage = async () => {
          const imageRef = ref(storage, 'images/projects/akk.jpg'); // Replace with the actual path to your image in Firebase Storage
          try {
            const url = await getDownloadURL(imageRef);
            setSmAKImage(url); // Set the downloaded image URL as the background
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
    
        fetchImage();
      }, []); // Run this effect only once when the component mounts

        //PROJECT3 - ENGINE
  const [engineImage, setEngineImage] = useState('');

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const imageRef = ref(storage, 'images/projects/engine.jpg'); // Replace with the actual path to your image in Firebase Storage
      try {
        const url = await getDownloadURL(imageRef);
        setEngineImage(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Run this effect only once when the component mounts



        return (
            <div id="Projects" className="ProjectsSection-Wrapper flex justify-center items-center w-full h-fit bg-white">
                <div className="Projects-Inner w-5/6 mb-24">
                    <SectionHeader header="OUR PROJECTS"/>
                    <div className="Intro w-full mt-16 flex justify-start flex-col">
                        <h3 className="text-3xl text-wrap">TAKE THE TIME TO EXPLORE SOME OF THE PROJECTS WE HAVE COMPLETED FOR DIFFERENT CLIENTS</h3>
                        <div className="Partition h-px bg-purple-900 w-full mt-5 mb-5"></div>
                    </div>
                    <div className="ProjectsMain grid items-center mb-12 w-full">
                        <div className="ProjectsDisplay flex flex-col justify-start items-center ">
                            <div className="ProjectImages grid items-center w-full">
                                <div className="Image1 h-72 w-full bg-cover bg-center bg-no-repeat bg-slate-600 border-b-2 border-purple-900" style={{ backgroundImage: `url(${LauraflyerImage})` }}></div>
                                <div className="Image2 h-full w-full bg-cover bg-center bg-no-repeat border-b-2 border-purple-900" style={{ backgroundImage: `url(${smAKImage})` }}></div>
                                <div className="Image3 h-72 w-full bg-cover bg-center bg-no-repeat bg-slate-600 border-b-2 border-purple-900" style={{ backgroundImage: `url(${engineImage})` }}></div>
                            </div>
                            <div className="ProjectsBtn w-full flex place-items-center gap-x-5 mt-12">
                                <div className="line1 h-px w-full bg-purple-950 flex-grow hidden"></div>
                                <h3 className="bg-purple-900 BtnScale px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"><NavLink to="/ProjectsPage">SEE MORE PROJECTS</NavLink></h3>
                                <div className="line2 h-px w-full bg-purple-950 "></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
        }
