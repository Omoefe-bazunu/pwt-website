
import { Listings } from "./Listings"
import { PageHeader } from "./PageHeader"
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react';

export const BooksPage = () => {

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





// BOOK DETAILS
const Book1 = {
    title: "WHY YOU SHOULD START YOUR OWN BUSINESS",
    Cost: "2,000",
    aboutTheBook:  '"Why You Should Start Your Own Business" is a book that exposes the powerful reasons that motivated me to quit my job with one of the highest paying Insurance companies in Nigeria to start my own business.The book contains five (5) solid reasons why remaining as a salary earner is not the best bus-stop for you and how you can gradually exit your job without any issues in between your transition moment.The book also unveils where you can start from once you make up your mind to exit the 9 to 5 circle in order to start your own business.',
    aboutTheAuthor: "Lucky Johnson is an Entrepreneur, an Investor, and a Wealth Creation Coach. He is graduate of accounting with uncanny mastery of finance and business principles.He has trained over 1,000 youths on financial management and wealth creation across cities like Port Harcourt, Asaba, Benin, Ondo, Ibadan, and other parts of Nigeria.He is the Creator of the Stocks and Shares Investment Masterclass (SASIM) course on Selar.With experienced of over a decade on matters of money management, investment, and wealth creation, he has garnered the trust of over 5,000 followers on Facebook and an active mentorship platform of 500+ students.Lucky Johnson is currently married and with a lovely son.",
    selarLink: "https://selar.co/p/unvt?affiliate=541361"
}


const Book2 = {
  title: "HOW TO SAVE YOUR MONEY EFFECTIVELY",
  Cost: "2,000",
  aboutTheBook:  '"How to Save Your Money Effectively" is a book that exposes 10 principles that anyone including you can use to save money and accumulate a lot of funds to actualize your dreams in life.This book is a product of my personal experience of struggling with saving just N5,000 at the end of the month to accumulating hundreds of thousands to millions within 12 months. Of course, it did not start that way. The principles in this book were my companion until I could save as a habit every month without thinking.I am sure they will work for you too no matter how much you currently earn. The principles can be streamlined to fit any financial situation. Study them and take actions now so you can be on your way to accumulating hundreds of dollars to millions within a short time.',
  aboutTheAuthor: "Lucky Johnson is an Entrepreneur, an Investor, and a Wealth Creation Coach. He is graduate of accounting with uncanny mastery of finance and business principles.He has trained over 1,000 youths on financial management and wealth creation across cities like Port Harcourt, Asaba, Benin, Ondo, Ibadan, and other parts of Nigeria.He is the Creator of the Stocks and Shares Investment Masterclass (SASIM) course on Selar.With experienced of over a decade on matters of money management, investment, and wealth creation, he has garnered the trust of over 5,000 followers on Facebook and an active mentorship platform of 500+ students.Lucky Johnson is currently married and with a lovely son.",
  selarLink: "https://selar.co/p/zc8b?affiliate=5nz301"
}

const Book3 = {
  title: "HOW TO PAY OFF DEBTS FASTER",
  Cost: "2,000",
  aboutTheBook:  '"How to Pay Off Debt Faster" is a book born out of a personal experience of struggling with debt for almost 5 years.  After reading several materials and studying how most millionaires and billionaires across the globe came out of debt, I decided to take the bull (the debt) by the horn.Thankfully, the principles I found worked. The exact same principles I used to come out of debt are the things I have documented in this book.I want to assure you that they will work for you too if you study and apply them diligently in your own life.',
  aboutTheAuthor: "Lucky Johnson is an Entrepreneur, an Investor, and a Wealth Creation Coach. He is graduate of accounting with uncanny mastery of finance and business principles.He has trained over 1,000 youths on financial management and wealth creation across cities like Port Harcourt, Asaba, Benin, Ondo, Ibadan, and other parts of Nigeria.He is the Creator of the Stocks and Shares Investment Masterclass (SASIM) course on Selar.With experienced of over a decade on matters of money management, investment, and wealth creation, he has garnered the trust of over 5,000 followers on Facebook and an active mentorship platform of 500+ students.Lucky Johnson is currently married and with a lovely son.",
  selarLink: "https://selar.co/p/5c2q?affiliate=b1v9y4"
}

const Book4 = {
  title: "MONEY LESSONS YOU SHOULD NEVER NELECT",
  Cost: "500",
  aboutTheBook: "Money is essential to daily living but you don't easily find it in every pocket that walks the street under the heat of the sun because not many who make money knows how to use it. This book will give you some timely practical lessons to help manage your money.",
  aboutTheAuthor: "Omoefe Bazunu, the author of this insightful book is a writer who specializes in writing about business, personal finance, ads copies and web content. He is the founder of Phenomenal World Trade and currently the manager. He is also a web devloper and is the brain behind the official website of Phenomenal World Trade as well as other major web projects. He is currently based in Delta State Oghara.",
  selarLink: "https://selar.co/3ihc"
}


// FUNCTION THAT RUNS OUTPUTS THE DETAILS - DO NOT TAMPER
  return (
    <div className="BooksPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="Booksage-Inner w-5/6">
            <PageHeader header="BOOK COLLECTIONS"/>
            <Listings ListedImage={startBusiness} title = {Book1.title} Cost={Book1.Cost} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book1.aboutTheBook} desc2 = {Book1.aboutTheAuthor} selar = {Book1.selarLink} />
            <Listings ListedImage={saveMoney} title = {Book2.title} Cost={Book2.Cost} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book2.aboutTheBook} desc2 = {Book2.aboutTheAuthor} selar = {Book2.selarLink} />
            <Listings ListedImage={payDebt} title = {Book3.title} Cost={Book3.Cost} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book3.aboutTheBook} desc2 = {Book3.aboutTheAuthor} selar = {Book3.selarLink} />
            <Listings ListedImage={moneyLessons} title = {Book4.title} Cost={Book4.Cost} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book4.aboutTheBook} desc2 = {Book4.aboutTheAuthor} selar = {Book4.selarLink} />
        </div>
    </div>
  )
}
