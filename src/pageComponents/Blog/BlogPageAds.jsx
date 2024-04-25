import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function BlogPageAds() {
    const AdsTexts = {
        ad1: 'NEW TO EXCEL or seeking to pursue a career in BUSINESS DATA ANALYSIS? Get this GREAT COURSE with carefully crafted video lessons and A FREE MENTORSHIP from the creator himself. ',
        ad2: ' LEARN to create official documents as LETTERS, REPORTS, CV/RESUMEs, TESTIMONIALS, SEMINARs etc with Microsoft WORD from beginner to advanced from this VIDEO COURSE',
        ad3: '',
        ad4: '',
        ad5: '',
        ad6: '',
    }

 // DOWNLOAD ADS1 IMAGE
  //ADS1
  const [ads1Image, setads1Image] = useState('');

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const imageRef = ref(storage, 'images/BlogAds/ads1.jpg'); // Replace with the actual path to your image in Firebase Storage
      try {
        const url = await getDownloadURL(imageRef);
        setads1Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Run this effect only once when the component mounts


      //ADS2
      const [ads2Image, setads2Image] = useState('');

      useEffect(() => {
        // Function to fetch the image from Firebase Storage
        const fetchImage = async () => {
          const imageRef = ref(storage, 'images/BlogAds/ads2.jpg'); // Replace with the actual path to your image in Firebase Storage
          try {
            const url = await getDownloadURL(imageRef);
            setads2Image(url); // Set the downloaded image URL as the background
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
    
        fetchImage();
      }, []); // Run this effect only once when the component mounts


    // //ADS3
    // const [ads3Image, setads3Image] = useState('');

    // useEffect(() => {
    //   // Function to fetch the image from Firebase Storage
    //   const fetchImage = async () => {
    //     const imageRef = ref(storage, 'images/BlogAds/ads3.jpg'); // Replace with the actual path to your image in Firebase Storage
    //     try {
    //       const url = await getDownloadURL(imageRef);
    //       setads3Image(url); // Set the downloaded image URL as the background
    //     } catch (error) {
    //       console.error('Error fetching image:', error);
    //     }
    //   };
  
    //   fetchImage();
    // }, []); // Run this effect only once when the component mounts

    //     //ADS4
    //     const [ads4Image, setads4Image] = useState('');

    //     useEffect(() => {
    //       // Function to fetch the image from Firebase Storage
    //       const fetchImage = async () => {
    //         const imageRef = ref(storage, 'images/BlogAds/ads4.jpg'); // Replace with the actual path to your image in Firebase Storage
    //         try {
    //           const url = await getDownloadURL(imageRef);
    //           setads4Image(url); // Set the downloaded image URL as the background
    //         } catch (error) {
    //           console.error('Error fetching image:', error);
    //         }
    //       };
      
    //       fetchImage();
    //     }, []); // Run this effect only once when the component mounts

    //             //ADS5
    //             const [ads5Image, setads5Image] = useState('');

    //             useEffect(() => {
    //               // Function to fetch the image from Firebase Storage
    //               const fetchImage = async () => {
    //                 const imageRef = ref(storage, 'images/BlogAds/ads5.jpg'); // Replace with the actual path to your image in Firebase Storage
    //                 try {
    //                   const url = await getDownloadURL(imageRef);
    //                   setads5Image(url); // Set the downloaded image URL as the background
    //                 } catch (error) {
    //                   console.error('Error fetching image:', error);
    //                 }
    //               };
              
    //               fetchImage();
    //             }, []); // Run this effect only once when the component mounts

    //     //ADS6
    //     const [ads6Image, setads6Image] = useState('');

    //     useEffect(() => {
    //       // Function to fetch the image from Firebase Storage
    //       const fetchImage = async () => {
    //         const imageRef = ref(storage, 'images/BlogAds/ads6.jpg'); // Replace with the actual path to your image in Firebase Storage
    //         try {
    //           const url = await getDownloadURL(imageRef);
    //           setads6Image(url); // Set the downloaded image URL as the background
    //         } catch (error) {
    //           console.error('Error fetching image:', error);
    //         }
    //       };
      
    //       fetchImage();
    //     }, []); // Run this effect only once when the component mounts


  return (
    <div>
        <div className="Ads grid grid-cols-1 py-8 px-5 justify-start items-start h-fit w-80 mb-12 gap-10 bg-indigo-50">
          <div>
                <div className="mainCTA w-full flex place-items-center gap-x-5 mt-2 px-4">
              <div className="line h-px w-full bg-gray-600 flex-grow"></div>
              <h3 className="buy px-5 py-2 bg-amber-300 text-center mb-3 w-fit text-nowrap text-gray-600 font-bold cursor-pointer text-sm">SPONSORED ADS</h3>
              <div className="line h-px w-full bg-gray-600 "></div>
              </div>
          </div>
          <div className='Ads-boxes'>
          <div className="Ad-wrapper w-full bg-white h-fit border-2  flex flex-col mb-10 justify-between items-center">
            <div className='Text w-full font-medium flex-grow h-52 text-center px-5 py-3 flex justify-center items-center text-gray-600'>{AdsTexts.ad1}</div>
            <img src={ads1Image} alt="" className="Ads1 w-full bg-slate-300 h-72 flex-grow bg-cover bg-no-repeat bg-center" />
            <div className="mainCTA w-full flex place-items-center gap-x-5 mt-2 px-4">
        <div className="line h-px w-full bg-gray-600 flex-grow"></div>
        <a href='#'><h3 className="buy px-5 py-2 bg-amber-300 text-center mb-3 w-fit text-nowrap text-gray-600 font-bold cursor-pointer text-sm">GET COURSE</h3></a>
        <div className="line h-px w-full bg-gray-600 "></div>
    </div>
          </div>
          <div className="Ad-wrapper w-full bg-white h-fit border-2  flex flex-col mb-10">
            <div className=' w-full Text font-medium flex-grow h-52 text-center px-5 py-3 flex justify-center items-center text-gray-600'>{AdsTexts.ad2}</div>
            <img src={ads2Image} alt="" className="Ads1 w-full bg-slate-300 h-72 flex-grow bg-cover bg-no-repeat bg-center" />
            <div className="mainCTA w-full flex place-items-center gap-x-5 mt-2 px-4">
        <div className="line h-px w-full bg-gray-600 flex-grow"></div>
        <a href='#'><h3 className=" buy px-5 py-2 bg-amber-300 mb-3 text-center w-fit text-nowrap text-gray-600 font-bold cursor-pointer text-sm">GET COURSE</h3></a>
        <div className="line h-px w-full bg-gray-600 "></div>
    </div>
          </div>
          {/* <div className="Ad-wrapper w-full bg-white h-fit border-2  flex flex-col mb-10">
            <div className=' w-full flex-grow h-52 text-center px-5 py-3 flex justify-center items-center text-gray-600'>{AdsTexts.ad3}</div>
            <img src={ads3Image} alt="" className="Ads3 w-full bg-slate-300 h-60 flex-grow bg-cover bg-no-repeat bg-center" />
          </div>
          <div className="Ad-wrapper w-full bg-white h-fit border-2  flex flex-col mb-10">
            <div className=' w-full flex-grow h-52 text-center px-5 py-3 flex justify-center items-center text-gray-600'>{AdsTexts.ad4}</div>
            <img src={ads4Image} alt="" className="Ads4 w-full bg-slate-300 h-60 flex-grow bg-cover bg-no-repeat bg-center" />
          </div>
          <div className="Ad-wrapper w-full bg-white h-fit border-2  flex flex-col mb-10">
            <div className=' w-full flex-grow h-52 text-center px-5 py-3 flex justify-center items-center text-gray-600'>{AdsTexts.ad5}</div>
            <img src={ads5Image} alt="" className="Ads5 w-full bg-slate-300 h-60 flex-grow bg-cover bg-no-repeat bg-center" />
          </div>
          <div className="Ad-wrapper w-full bg-white h-fit border-2  flex flex-col mb-10">
            <div className=' w-full flex-grow h-52 text-center px-5 py-3 flex justify-center items-center text-gray-600'>{AdsTexts.ad6}</div>
            <img src={ads5Image} alt="" className="Ads6 w-full bg-slate-300 h-60 flex-grow bg-cover bg-no-repeat bg-center" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BlogPageAds