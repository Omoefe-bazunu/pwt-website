
import { useState, useEffect } from 'react';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { dbase } from '../firebase';
import { collection, orderBy, query, onSnapshot, where} from "firebase/firestore";

function BlogResponse(id) {
  const [Comments, setComments] = useState(null)
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(dbase, 'BlogComments'), {
        comment: formData.comment,
        name: formData.name,
        email: formData.email,
        postId: id,
        CreatedAt: serverTimestamp()
      })
      console.log('COMMENT SUBMITTED')
      //Reset the form
      setFormData({
        comment: '',
        name: '',
        email: ''

      });

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

// FETCHING THE COMMENTS IN REAL TIME
const fetchComment = () => {
  const q = query(collection(dbase, 'BlogComments'), where("postId", "==", id), orderBy('CreatedAt'));
  onSnapshot(q, (snapshot) => {
    const comments = []; 
    snapshot.docs.forEach((doc) => {
      const comment = { id: doc.id, ...doc.data() };
      comments.push(comment);
    });
    setComments(comments);
  });
}

useEffect(() => {
  fetchComment();
}, [id]);




  return (
    <div>
        <div className="Reactions mb-12 flex justify-start gap-5 pt-3">
            <p className="Likes flex justify-start items-center gap-3 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 cursor-pointer">
  <path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
</svg>
<span>113</span>
            </p>
          <p className=" Dislikes flex justify-start items-center gap-3 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 cursor-pointer">
  <path d="M10.325 3H12v5c-.663 0-1.219.466-1.557 1.037a4.02 4.02 0 0 1-1.357 1.377c-.478.292-.907.706-.989 1.26v.005a9.031 9.031 0 0 0 0 2.642c.028.194-.048.394-.224.479A2 2 0 0 1 5 13c0-.812.08-1.605.234-2.371a.521.521 0 0 0-.5-.629H3C1.896 10 .99 9.102 1.1 8.003A19.827 19.827 0 0 1 2.18 3.215C2.45 2.469 3.178 2 3.973 2h2.703a2 2 0 0 1 .632.103l2.384.794a2 2 0 0 0 .633.103ZM14 2a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Z" />
</svg>
<span>13</span>
          </p>
          </div>
          <div className="comments mb-5 w-full">
                <div className="head border-b border-slate-300 pb-3 font-medium text-gray-600">COMMENTS</div>
                {Comments && (
                  <div>
                    {Comments.map(item => (
                      <div key={item.email} className="commentList mt-5 border-b border-slate-300 pb-3">
                        <p className="userComment text-gray-600">{item.comment}</p>
                        <p className="userName italic pt-1 text-gray-500">--  {item.name}</p>
                      </div>
                    ))}
                  </div>
                )}

          </div>
          <div className="CommentsForm w-full fit mt-12 flex flex-col gap-10 ">
              <div className="header text-2xl italic text-gray-500">Leave a Comment</div>
              <form className=' flex flex-col gap-5 justify-start my-0 mx-auto w-full' onSubmit={handleSubmit}>
                <textarea type='text' placeholder='Your Comment' name='comment'  value={formData.comment} onChange={handleChange} className=" outline-none py-3 px-5 border-b border-slate-300"/>
                <input  type='text' placeholder='Name' name='name'  value={formData.name} onChange={handleChange} className=" outline-none py-3 px-5 border-b border-slate-300"/>
                <input type='text' placeholder='Email' name='email'  value={formData.email} onChange={handleChange} className=" outline-none py-3 px-5 border-b border-slate-300"/>
                <button type='submit' className="Comment-Btn py-4 px-5 mb-24 cursor-pointer bg-amber-600 font-medium text-white w-fit text-nowrap text-sm mt-5">POST COMMENT</button>
            </form>
          </div>

    </div>
  )
}

export default BlogResponse