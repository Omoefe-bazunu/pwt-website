
import { BooksTemplates } from "./BooksTemplates"
import { CTABtn } from "./CTABtn"
import { SectionHeader } from "./SectionHeader"
import { Link } from "react-router-dom"

import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'


export const FeaturedSection = () => {

  // DOWNLOAD PROJECTS IMAGE
  //BOOK1 - BUSINESS
  const [startBusiness, setStartBusiness] = useState('');

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const imageRef = ref(storage, 'images/books/business.jpg'); // Replace with the actual path to your image in Firebase Storage
      try {
        const url = await getDownloadURL(imageRef);
        setStartBusiness(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Run this effect only once when the component mounts


      //BOOK2 -SAVE
      const [saveMoney, setSaveMoney] = useState('');

      useEffect(() => {
        // Function to fetch the image from Firebase Storage
        const fetchImage = async () => {
          const imageRef = ref(storage, 'images/books/save.jpg'); // Replace with the actual path to your image in Firebase Storage
          try {
            const url = await getDownloadURL(imageRef);
            setSaveMoney(url); // Set the downloaded image URL as the background
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
    
        fetchImage();
      }, []); // Run this effect only once when the component mounts


    //BOOK3 - DEBTS
    const [payDebt, setPayDebt] = useState('');

    useEffect(() => {
      // Function to fetch the image from Firebase Storage
      const fetchImage = async () => {
        const imageRef = ref(storage, 'images/books/debts.jpg'); // Replace with the actual path to your image in Firebase Storage
        try {
          const url = await getDownloadURL(imageRef);
          setPayDebt(url); // Set the downloaded image URL as the background
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };
  
      fetchImage();
    }, []); // Run this effect only once when the component mounts

        //BBOK4 - MONEY LESSONS
        const [moneyLessons, setMoneyLessons] = useState('');

        useEffect(() => {
          // Function to fetch the image from Firebase Storage
          const fetchImage = async () => {
            const imageRef = ref(storage, 'images/books/moneylessons.jpg'); // Replace with the actual path to your image in Firebase Storage
            try {
              const url = await getDownloadURL(imageRef);
              setMoneyLessons(url); // Set the downloaded image URL as the background
            } catch (error) {
              console.error('Error fetching image:', error);
            }
          };
      
          fetchImage();
        }, []); // Run this effect only once when the component mounts




  return (
    <div className="Featured-Wrapper flex justify-start items-center flex-col h-fit w-full bg-yellow-50">
        <div className="Featured-Inner w-5/6 m-24">
            <SectionHeader header="FEATURED" />
            <p className="Intro text-center mt-3">Do you love reading books about Finance, Storytelling, Business, Mental Health, Relationship and Cooking? Check out our featured collections of quality content books by seasoned authors to keep you inspired, informed, guided and entertained. </p>
            <div className="FeaturedBooks grid place-items-center mt-10">
                <BooksTemplates  id="Book1" BgImg={startBusiness}/>
                <BooksTemplates id="Book2" BgImg={saveMoney}/>
                <BooksTemplates id="Book3" BgImg={payDebt}/>
                <BooksTemplates id="Book4" BgImg={moneyLessons}/>
            </div>
            <Link to="/BooksPage" className="font-semibold text-purple-800 cursor-pointer"><CTABtn title="SEE COLLECTION"  /></Link>
        </div>
    </div>
  )
}
