
import React from "react";
import { dbase } from "../firebase";
import { updateDoc, doc} from 'firebase/firestore';
import { Link } from "react-router-dom";
import BlogResponse from "./BlogResponse";
import BlogPageAds from "./BlogPageAds";

function BlogTemplate({main, sub1, p1, sub2, p2,  postId, sub3, p3, sub4, p4, sub5, p5,  sub6, p6, sub7, p7, sub8, p8, sub9, p9, sub10, p10, sub11, p11, sub12, p12, sub13, p13, bLineTitle, bLine, otherPosts, Img1, category, date, author}) {

    const   updateDocLink = (id) => {
        const IdRef = doc(dbase, 'BlogDetailsId', `qGIpu9ggQodYAEZealK8`)
        updateDoc(IdRef, {
            category: category,
            docID: id
        }).then(() => {
            console.log(`UPDATED BLOGDETAILS IDS`)
        })
    
        }

  return (
    <div className="Blog-Wrapper flex gap-10 justify-start h-full w-5/6 my-0 mx-auto py-12 ">
        <div className="BlogPosts h-fit w-full mb-12">
          <div className="Post mb-2 pr-8 pb-5 border-b border-slate-400 ">
              <h2 className="BlogTitle mb-2 font-semibold flex flex-col text-3xl text-gray-600 border-b border-slate-300 pb-2">{main}</h2>
              <p className="Date text-gray-500 mb-12 text-sm"><span>{author}</span> | <span>{date}</span></p>
              <img src={Img1} alt="" className=" w-96 bg-slate-300 h-64 mb-8" />
              <h3 className='p1Title subTitle mb-2 text-xl font-medium text-gray-600'>{sub1}</h3>
              <p className='p1 my-3 text-gray-600 whitespace-pre-wrap'>{p1}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p2Title subTitle text-xl font-medium text-gray-600'>{sub2}</h3>
              <p className='p2 my-3 text-gray-600 whitespace-pre-wrap'>{p2}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p3Title text-xl font-medium text-gray-600'>{sub3}</h3>
              <p className='p3 my-3 text-gray-600 whitespace-pre-wrap'>{p3}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p4Title text-xl font-medium text-gray-600'>{sub4}</h3>
              <p className='p4 my-3 text-gray-600 whitespace-pre-wrap'>{p4}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p5Title text-xl font-medium text-gray-600'>{sub5}</h3>
              <p className='p5 my-3 text-gray-600 whitespace-pre-wrap'>{p5}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p6Title text-xl font-medium text-gray-600'>{sub6}</h3>
              <p className='p6 my-3 text-gray-600 whitespace-pre-wrap'>{p6}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p7Title text-xl font-medium text-gray-600'>{sub7}</h3>
              <p className='p7 my-3 text-gray-600 whitespace-pre-wrap'>{p7}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p8Title text-xl font-medium text-gray-600'>{sub8}</h3>
              <p className='p8 my-3 text-gray-600 whitespace-pre-wrap'>{p8}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p9Title text-xl font-medium text-gray-600'>{sub9}</h3>
              <p className='p9 my-3 text-gray-600 whitespace-pre-wrap '>{p9}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p10Title text-xl font-medium text-gray-600'>{sub10}</h3>
              <p className='p10 my-3 text-gray-600 whitespace-pre-wrap'>{p10}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p11Title text-xl font-medium text-gray-600'>{sub11}</h3>
              <p className='p11 my-3 text-gray-600 whitespace-pre-wrap'>{p11}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p12Title text-xl font-medium text-gray-600'>{sub12}</h3>
              <p className='p12 my-3 text-gray-600 whitespace-pre-wrap'>{p12}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p13Title text-xl font-medium text-gray-600'>{sub13}</h3>
              <p className='p13 my-3 text-gray-600 whitespace-pre-wrap'>{p13}</p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='bottomLineTitle mb-2 font-medium text-xl text-gray-600'>{bLineTitle}</h3>
              <p className='bottomLine mb-5 text-gray-600 whitespace-pre-wrap'>{bLine}</p>
          </div>
           <BlogResponse id = {postId} category = {category} />
          <div className="Other-Posts flex-col">
            <h1 className=' text-2xl mb-5 font-medium  text-gray-600 border-b border-slate-400 pb-1'>OTHER RELATED POSTS</h1>
          {otherPosts && (otherPosts.map((post) => (
          <div key={post.mainTitle} className=' Other-Posts flex mb-10 border-b border-slate-300  pb-4 w-full'>
            <img src="" alt="" className=" w-full h-52 bg-fuchsia-200 mr-5 hidden"/>
            <div className="Text flex flex-col gap-5">
              <h3 className='Title text-lg font-medium text-gray-600' id='Title'>{post.mainTitle}</h3>
              <p className=" text-gray-600">
                {post.excerpt}<br />
                <Link to='/BlogHome/BlogPostDetails'>
                  <span className=' text-slate-700 cursor-pointer font-medium' id ='singleDoc' onClick={() => {updateDocLink(post.id)}}>
                    Click for Full Content...
                  </span>
                </Link>
              </p>
            </div>
         </div>
        )))}
          </div>
        </div>
        <BlogPageAds />
        

    </div>
  )
}

export default BlogTemplate