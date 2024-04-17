import { ServiceBox } from "./ServiceBox";
import { CTABtn } from "./CTABtn";
import { SectionHeader } from "./SectionHeader"
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'



export const ServicesSection = () => {
      
  // DOWNLOAD LOGO IMAGE
  //SERVICE1 - WEB DESIGN
  const [webImage, setwebImage] = useState('');

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const imageRef = ref(storage, 'images/services/webdesign.jpg'); // Replace with the actual path to your image in Firebase Storage
      try {
        const url = await getDownloadURL(imageRef);
        setwebImage(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Run this effect only once when the component mounts


      //SERVICE3 - WRITING
      const [ExcelImage, setExcelImage] = useState('');

      useEffect(() => {
        // Function to fetch the image from Firebase Storage
        const fetchImage = async () => {
          const imageRef = ref(storage, 'images/services/excel.jpg'); // Replace with the actual path to your image in Firebase Storage
          try {
            const url = await getDownloadURL(imageRef);
            setExcelImage(url); // Set the downloaded image URL as the background
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
    
        fetchImage();
      }, []); // Run this effect only once when the component mounts


    //SERVICE3 - WRITING
    const [CvImage, setCvImage] = useState('');

    useEffect(() => {
      // Function to fetch the image from Firebase Storage
      const fetchImage = async () => {
        const imageRef = ref(storage, 'images/services/cv.jpg'); // Replace with the actual path to your image in Firebase Storage
        try {
          const url = await getDownloadURL(imageRef);
          setCvImage(url); // Set the downloaded image URL as the background
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };
  
      fetchImage();
    }, []); // Run this effect only once when the component mounts
  

    const WebFeatures = ['Responsive UI', 'Serach Engine Friendly', 'Zero Downtime', 'Continuous maintenance'];
    const DataAnalysisFeatures = ['Complete Solution', 'Simple Reusable Templates', 'Physical/Remote Tutorial'];
    const WritingFeatures = ['Professional CV/RESUME', 'Business Proposal', 'Ads copies and Web Contents']
  return (
    <div id="Services" className="Services-Wrapper flex justify-start items-center flex-col h-fit w-full bg-yellow-50">
        <div className="Services-Inner w-5/6 mb-24c ">
            <SectionHeader header="OUR SERVICES" />
            <p className="Intro text-center mt-3">Get the best of quality and affordability with our remote services. We take away distance barrier 
by maintaining a strong communication with you on your preferred platform, giving you constant 
updates about the progress and receiving your inputs till the job is completed to your taste.</p>
            <div className="Service-Boxes-Wrapper place-items-center mt-10 grid W-full">
                <ServiceBox ServiceTitle="WEBSITE DESIGN" list={WebFeatures} ServiceBox="Box1" bgImage={webImage} />
                <ServiceBox ServiceTitle="BUSINESS DATA ANALYSIS" list={DataAnalysisFeatures} ServiceBox="Box2" bgImage={ExcelImage}  />
                <ServiceBox ServiceTitle="WRITING" list={WritingFeatures} ServiceBox="Box3" bgImage={CvImage} />
            </div>
            <Link to="/ContactPage"><CTABtn title="GET STARTED" /></Link>
        </div>
    </div>
  )
}
