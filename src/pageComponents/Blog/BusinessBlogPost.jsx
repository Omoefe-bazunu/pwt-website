import BlogTemplatePage from "./BlogTemplatePage";
import { dbase } from "../firebase";
import { collection, orderBy, query, getDocs, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
// import { storage } from "../firebase";
// import { ref, getDownloadURL } from "firebase/storage";

function BusinessBlogPost() {

     // DOWNLOAD SERVICE IMAGE
  //BLOGIMGAE1
  const [Image1, setImage1] = useState('');

  // useEffect(() => {
  //   // Function to fetch the image from Firebase Storage
  //   const fetchImage = async () => {
  //     const imageRef = ref(storage, 'images/BlogPostImages/cvMain.jpg'); // Replace with the actual path to your image in Firebase Storage
  //     try {
  //       const url = await getDownloadURL(imageRef);
  //       setImage1(url); // Set the downloaded image URL as the background
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   };

  //   fetchImage();
  // }, []); // Run this effect only once when the component mounts


      // //BLOGIMAGE2
      // const [Image2, setImage2] = useState('');

      // useEffect(() => {
      //   // Function to fetch the image from Firebase Storage
      //   const fetchImage = async () => {
      //     const imageRef = ref(storage, 'images/BlogPostImages/excel.jpg'); // Replace with the actual path to your image in Firebase Storage
      //     try {
      //       const url = await getDownloadURL(imageRef);
      //       setImage2(url); // Set the downloaded image URL as the background
      //     } catch (error) {
      //       console.error('Error fetching image:', error);
      //     }
      //   };
    
      //   fetchImage();
      // }, []); // Run this effect only once when the component mounts

    const [firstPost, setFirstPost] = useState(null);
    const [Posts, setPosts] = useState(null);
    const category = 'Business'

            const fetchData = async () => {
                // const q = query(collection(dbase, 'Business'), orderBy('CreatedAt'));
                // const querySnapshot = await getDocs(q);
                // querySnapshot.forEach((doc) => {
                //   const post = { id: doc.id, ...doc.data() };
                //   setFirstPost(post);
                //   return; 
                // });

                const q = query(collection(dbase, 'Business'), orderBy('CreatedAt'));
                onSnapshot(q, (snapshot) => {
                  snapshot.docs.forEach((doc) => {
                     const post = { id: doc.id, ...doc.data() };
                     setFirstPost(post);
                     return; 
                })
              
                });


                // FETING THE OTHER DATA
                const queryOtherData = await getDocs(q);
                let OtherPosts = [];
                let isFirst = false;
                queryOtherData.forEach((doc) => {
                if (isFirst) {
                    isFirst = true;
                } else {
                   OtherPosts.push({ id: doc.id, ...doc.data() });
                }
                });
                OtherPosts.pop();
                setPosts(OtherPosts);
                
              };

              useEffect(() => {
                fetchData()
                console.log(firstPost);
              },[]);


  return (
    <div> {firstPost && (<BlogTemplatePage postId = {firstPost.id} main = {firstPost.mainTitle} sub1 ={firstPost.subTitle1} p1 = {firstPost.p1} sub2 = {firstPost.subTitle2} p2 = {firstPost.p2}
        sub3 = {firstPost.subTitle3} p3 = {firstPost.p3} sub4 = {firstPost.subTitle4} p4 = {firstPost.p4}  sub5 = {firstPost.subTitle5} p5 = {firstPost.p5} sub6 = {firstPost.subTitle6} p6 = {firstPost.p6} sub7 = {firstPost.subTitle7} p7 = {firstPost.p7} sub8 = {firstPost.subTitle8} p8 = {firstPost.p8} sub9 = {firstPost.subTitle9} p9 = {firstPost.p9} sub10 = {firstPost.subTitle10} p10 = {firstPost.p10} sub11 = {firstPost.subTitle11} p11 = {firstPost.p11} sub12 = {firstPost.subTitle12} p12 = {firstPost.p12} sub13 = {firstPost.subTitle13} p13 = {firstPost.p13}   
        bLineTitle = {firstPost.bLineTitle} bLine = {firstPost.bLine} otherPosts = {Posts} category = {category} date = {firstPost.date} Img1 = {Image1}
         />)}
         
    </div>
  )
}

export default BusinessBlogPost