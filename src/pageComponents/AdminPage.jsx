import { storage } from './firebase';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import {useState} from 'react'

export const AdminPage = () => {

  const [image, setImage] = useState(null);

  const handleFileChangeHERO = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUploadHERO = () => {
      const storageRef = ref(storage,`images/${image.name}`);
      uploadBytes(storageRef, image).then((snapshot) => {
          alert('UPLOADED');
      }).catch((error) => {
          console.log('ERROR WITH UPLOAD', error);
      });
  };

  // SERVICES
  const [image2, setImage2] = useState(null);

  const handleFileChangeSERVICES = (e) => {
      if (e.target.files[0]) {
        setImage2(e.target.files[0]);
      }
    };
  
    const handleUploadSERVICES = () => {
      const storageRef = ref(storage,`images/services/${image2.name}`);
      uploadBytes(storageRef, image2).then((snapshot) => {
          alert('UPLOADED');
      }).catch((error) => {
          console.log('ERROR WITH UPLOAD', error);
      });
  };

  // PROJECTS
  const [image3, setImage3] = useState(null);

  const handleFileChangePROJECTS = (e) => {
      if (e.target.files[0]) {
        setImage3(e.target.files[0]);
      }
    };
  
    const handleUploadPROJECTS = () => {
      const storageRef = ref(storage,`images/projects/${image3.name}`);
      uploadBytes(storageRef, image3).then((snapshot) => {
          alert('UPLOADED');
      }).catch((error) => {
          console.log('ERROR WITH UPLOAD', error);
      });
  };

  // BOOKS
  const [image4, setImage4] = useState(null);

  const handleFileChangeBOOK = (e) => {
      if (e.target.files[0]) {
        setImage4(e.target.files[0]);
      }
    };
  
    const handleUploadBOOK = () => {
      const storageRef = ref(storage,`images/books/${image4.name}`);
      uploadBytes(storageRef, image4).then((snapshot) => {
          alert('UPLOADED');
      }).catch((error) => {
          console.log('ERROR WITH UPLOAD', error);
      });
  };

    // BLOGADS
    const [imageads, setads] = useState(null);

    const handleFileChangeAds = (e) => {
        if (e.target.files[0]) {
          setads(e.target.files[0]);
        }
      };
    
      const handleUploadAds= () => {
        const storageRef = ref(storage,`images/BlogAds/${imageads.name}`);
        uploadBytes(storageRef, imageads).then((snapshot) => {
            alert('UPLOADED');
        }).catch((error) => {
            console.log('ERROR WITH UPLOAD', error);
        });
    };

        // BLOGPOST
        const [imageBlog, setBlog] = useState(null);

        const handleFileChangeBlog = (e) => {
            if (e.target.files[0]) {
              setBlog(e.target.files[0]);
            }
          };
        
          const handleUploadBlog= () => {
            const storageRef = ref(storage,`images/BlogImages/${imageBlog.name}`);
            uploadBytes(storageRef, imageBlog).then((snapshot) => {
                alert('UPLOADED');
            }).catch((error) => {
                console.log('ERROR WITH UPLOAD', error);
            });
        };
      
  

  return (
    <div className="AdminPage-Wrapper w-full justify-center items-start flex-grow bg-white flex" id='adminpage'>
    <div className="AdminPage-Inner w-5/6 mb-24">
    <input type='file' className="cursor-pointer w-full px-5 py-2 rounded-3xl bg-purple-400 mt-24 mb-10"  onChange={handleFileChangeHERO}/>
        <div className="w-full flex place-items-center gap-x-5 mb-12">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <button onClick={handleUploadHERO} className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">HERO SECTION</button>
                <div className="line h-px w-full bg-purple-950 "></div>
        </div>

        <input type='file' className="cursor-pointer w-full px-5 py-2 rounded-3xl bg-purple-400 mt-8 mb-10"  onChange={handleFileChangeSERVICES}/>
        <div className="w-full flex place-items-center gap-x-5 mb-12">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <button onClick={handleUploadSERVICES} className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"> SERVICES SECTION</button>
                <div className="line h-px w-full bg-purple-950 "></div>
        </div>

        <input type='file' className="cursor-pointer w-full px-5 py-2 rounded-3xl bg-purple-400 mt-8 mb-10"  onChange={handleFileChangePROJECTS}/>
        <div className="w-full flex place-items-center gap-x-5 mb-12">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <button onClick={handleUploadPROJECTS} className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"> PROJECTS SECTION/PAGE </button>
                <div className="line h-px w-full bg-purple-950 "></div>
        </div>

        <input type='file' className="cursor-pointer w-full px-5 py-2 rounded-3xl bg-purple-400 mt-8s mb-12"  onChange={handleFileChangeBOOK}/>
        <div className="w-full flex place-items-center gap-x-5">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <button onClick={handleUploadBOOK} className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"> BOOKS SECTION/PAGE</button>
                <div className="line h-px w-full bg-purple-950"></div>
        </div>

        <input type='file' className="cursor-pointer w-full px-5 py-2 rounded-3xl bg-purple-400 mt-8 mb-12"  onChange={handleFileChangeAds}/>
        <div className="w-full flex place-items-center gap-x-5">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <button onClick={handleUploadAds} className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"> ADS IMAGE</button>
                <div className="line h-px w-full bg-purple-950"></div>
        </div>

        
        <input type='file' className="cursor-pointer w-full px-5 py-2 rounded-3xl bg-purple-400 mt-8 mb-12"  onChange={handleFileChangeBlog}/>
        <div className="w-full flex place-items-center gap-x-5">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <button onClick={handleUploadBlog} className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"> BLOG POST IMAGE</button>
                <div className="line h-px w-full bg-purple-950"></div>
        </div>

        
    </div>
</div>
  )
}
