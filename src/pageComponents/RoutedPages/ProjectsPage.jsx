import { Listings } from "./Listings"
import { PageHeader } from "./PageHeader"
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react';

export const ProjectsPage = () => {

  // DOWNLOAD PROJECTS IMAGE
  //PROJECT1 - ENGINE
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


    //PROJECT3 - LAURA
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

        //PROJECT4 - TRAIN EXCEL
        const [trainImage, setTrainImage] = useState('');

        useEffect(() => {
          // Function to fetch the image from Firebase Storage
          const fetchImage = async () => {
            const imageRef = ref(storage, 'images/projects/train.jpg'); // Replace with the actual path to your image in Firebase Storage
            try {
              const url = await getDownloadURL(imageRef);
              setTrainImage(url); // Set the downloaded image URL as the background
            } catch (error) {
              console.error('Error fetching image:', error);
            }
          };
      
          fetchImage();
        }, []); // Run this effect only once when the component mounts

  

// PROJECTS DETAILS
    const Project1 = {
        title: "E-FLYER DESIGN (AK COMPANY LTD)",
        briefInformation:  "This is a SOCIAL MEDIA FLYER design that was done for a client in January, 2024. The clients is into Social Media Marketing and requested for a sleek design that puts out the company's services in a visually appealing and clear way to the public. The client left us to be creative with the concept but trusted a great result and we did not disappoint. The design was sketched up on paper and created on Adobe Photoshop by the designer. ",
        clientReview: '"Wow! I love it so much. Thank you."'
    }
    const Project2 = {
      title: "DATA TRACKING AND ANALYSIS TEMPLATE(JVN PRODUCTS NIG LTD)",
      briefInformation:  "This is a file nicknamed 'ENGINE FILE', (laughs), because of the role it was built to play for the company that used it. The file incorporates complex functions and tools in Microsoft Excel such as PIVOT TABLES, POWER QUERY, and more to form a reusable template made of up different sheets, each performing distinct functions but with a central goal, which was to retrieve external data from the company's website, transform the data, run calculations on the data, provide insights from the data, make forcast and track compliance. It was in effect meant to help the company's sales reps to achieve their respective monthly targets which translates to the achieving the company's overall target. This project was done in March, 2023.",
      clientReview: '"Impressive."'
  }

  const Project3 = {
    title: "PRIINTED FLYER DESIGN (LAURA CATERING SERVICES)",
    briefInformation:  "This is a flyer design that was done for printing and offline use. It was requested by a client who needed a short-sized flyer to use to promote their catering services by handing out to the public. The client did not have any concept in mind, so we were left to be creative with the concept and produce something unique. We stood to the task by giving the client a design that made a straight point but did not fail to register a great imagery in the public eye. The logo on the design was also created by us.",
    clientReview: '"This is nice. Thank you."'
}

const Project4 = {
  title: "DATA CLEANING (PRIVATE)",
  briefInformation:  "This project is a little task that was sent in by a client who needed some unwanted and duplicate data to be removed from the file. The task was done using Power Query in Excel and delivered to the satisfaction of the client.",
  clientReview: '"Thank you very much."'
}


  

    // FUNCTION THAT RUNS OUTPUTS THE DETAILS - DO NOT TAMPER
  return (
    <div className="ProjectsPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="ProjectsPage-Inner w-5/6 mb-24">
            <PageHeader header="OUR PROJECTS"/>
            <Listings title = {Project1.title} About1 = "PROJECT BRIEF INFORMATION" About2 ="CLIENT'S REVIEW" desc1 ={Project1.briefInformation} desc2 = {Project1.clientReview} ListedImage={smAKImage}/>
            <Listings title = {Project2.title} About1 = "PROJECT BRIEF INFORMATION" About2 ="CLIENT'S REVIEW" desc1 ={Project2.briefInformation} desc2 = {Project2.clientReview} ListedImage={engineImage}/>
            <Listings title = {Project3.title} About1 = "PROJECT BRIEF INFORMATION" About2 ="CLIENT'S REVIEW" desc1 ={Project3.briefInformation} desc2 = {Project3.clientReview} ListedImage={LauraflyerImage}/>
            <Listings title = {Project4.title} About1 = "PROJECT BRIEF INFORMATION" About2 ="CLIENT'S REVIEW" desc1 ={Project4.briefInformation} desc2 = {Project4.clientReview} ListedImage={trainImage}/>
        </div>
    </div>
  )
}
