import React, { useEffect, useState} from 'react'
import { dbase } from '../firebase'
import { getDoc, doc } from 'firebase/firestore'
import BlogResponse from './BlogResponse';
import BlogPageAds from './BlogPageAds';

function BlogPostDetails() {
  const [BlogId, setBlogId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // First fetch function
            const docRef = doc(dbase, 'BlogDetailsId', 'qGIpu9ggQodYAEZealK8');
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              const creds = docSnap.data();
              const categ = creds.category;
              console.log(categ);
              const postId = creds.docID;
              console.log(postId);
      
              // Second fetch function (should run after the first fetch function)
              const colRef = doc(dbase, categ, postId);
              const colDocSnap = await getDoc(colRef);
              
              if (colDocSnap.exists()) {
                const BlogPost = colDocSnap.data()
                console.log(BlogPost)
                const id = colDocSnap.id
                setBlogId(id)
                const author = BlogPost.author;
                const date = BlogPost.date;
                const mainTitle = BlogPost.mainTitle;
                const sub1 = BlogPost.subTitle1
                const p1 = BlogPost.p1
                // const ul1 = BlogPost.ul1
                // const ol1 = BlogPost.ol1
                const sub2 = BlogPost.subTitle2
                const p2 = BlogPost.p2
                // const ul2 = BlogPost.ul2
                // const ol2 = BlogPost.ol2
                const sub3 = BlogPost.subTitle3
                const p3 = BlogPost.p3
                // const ul3 = BlogPost.ul3
                // const ol3 = BlogPost.ol3
                const sub4 = BlogPost.subTitle4
                const p4 = BlogPost.p4
                // const ul4 = BlogPost.ul4
                // const ol4 = BlogPost.ol4
                const sub5 = BlogPost.subTitle5
                const p5 = BlogPost.p5
                // const ul5 = BlogPost.ul5
                // const ol5 = BlogPost.ol5
                const sub6 = BlogPost.subTitle6
                const p6 = BlogPost.p6
                const sub7 = BlogPost.subTitle7
                const p7 = BlogPost.p7
                const sub8 = BlogPost.subTitle8
                const p8 = BlogPost.p8
                const sub9 = BlogPost.subTitle9
                const p9 = BlogPost.p9;
                const sub10 = BlogPost.subTitle10
                const p10 = BlogPost.p10;
                const sub11 = BlogPost.subTitle11
                const p11 = BlogPost.p11;
                const sub12 = BlogPost.subTitle12
                const p12 = BlogPost.p12;
                const sub13 = BlogPost.subTitle13
                const p13 = BlogPost.p13
                const bLineTitle = BlogPost.bLineTitle
                const bLine = BlogPost.bLine
                const Blogauthor = document.getElementById('author').innerText = author
                const BlogDate = document.getElementById('date').innerText = date
                const BlogTitle = document.getElementById('mainTitle').innerText = mainTitle
                const Blogsub1 = document.getElementById('sub1').innerText = sub1
                const Blogp1 = document.getElementById('p1').innerText = p1
                const Blogsub2 = document.getElementById('sub2').innerText = sub2
                const Blogp2 = document.getElementById('p2').innerText = p2
                const Blogsub3 = document.getElementById('sub3').innerText = sub3
                const Blogp3 = document.getElementById('p3').innerText = p3
                const Blogsub4 = document.getElementById('sub4').innerText = sub4
                const Blogp4 = document.getElementById('p4').innerText = p4
                const Blogsub5 = document.getElementById('sub5').innerText = sub5
                const Blogp5 = document.getElementById('p5').innerText = p5
                const Blogsub6 = document.getElementById('sub6').innerText = sub6
                const Blogp6 = document.getElementById('p6').innerText = p6
                const Blogsub7 = document.getElementById('sub7').innerText = sub7
                const Blogp7 = document.getElementById('p7').innerText = p7
                const Blogsub8 = document.getElementById('sub8').innerText = sub8
                const Blogp8 = document.getElementById('p8').innerText = p8
                const Blogsub9 = document.getElementById('sub9').innerText = sub9
                const Blogp9 = document.getElementById('p9').innerText = p9
                const Blogsub10 = document.getElementById('sub10').innerText = sub10
                const Blogp10 = document.getElementById('p5').innerText = p10
                const Blogsub11 = document.getElementById('sub11').innerText = sub11
                const Blogp11 = document.getElementById('p11').innerText = p11
                const Blogsub12 = document.getElementById('sub12').innerText = sub12
                const Blogp12 = document.getElementById('p12').innerText = p12
                const Blogsub13 = document.getElementById('sub13').innerText = sub13
                const Blogp13 = document.getElementById('p13').innerText = p13
                const BlogbLineTitle = document.getElementById('bLineTitle').innerText = bLineTitle
                const BlogbLine = document.getElementById('bLine').innerText = bLine
              } else {
                console.log('Document does not exist in the secondary collection');
              }
            } else {
              console.log('Document does not exist in the primary collection');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

      
        fetchData();

      }, []);


  return (
    <div className="Blog-Wrapper flex gap-10 justify-start h-full w-5/6 my-0 mx-auto py-12 ">
    <div className="BlogPosts h-fit w-full mb-12 ">
      <div className="Post mb-5 pr-8 pb-5  border-b border-slate-300">
          <h2 className="BlogTitle mb-2 font-semibold flex flex-col text-3xl text-gray-600 border-b border-slate-300 pb-2" id="mainTitle"></h2>
          <p className="Date text-gray-500 mb-12 text-sm"><span id='author'></span> |  <span id='date'></span></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
          <h3 className='p1Title subTitle mb-2 text-xl font-medium text-gray-600' id='sub1'></h3>
          <p className='paragraph-one my-3 text-gray-600' id='p1'></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
          <h3 className='p2Title subTitle text-xl font-medium text-gray-600' id='sub2'></h3>
          <p className='p2 my-3 text-gray-600' id='p2'></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
          <h3 className='p3Title text-xl font-medium text-gray-600' id='sub3'></h3>
          <p className='p3 my-3 text-gray-600' id='p3'></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
          <h3 className='p4Title text-xl font-medium text-gray-600' id='sub4'></h3>
          <p className='p4 my-3 text-gray-600' id='p4'></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
          <h3 className='p5Title text-xl font-medium text-gray-600' id='sub5'></h3>
          <p className='p5 my-3 text-gray-600' id='p5'></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p6Title text-xl font-medium text-gray-600' id='sub6'></h3>
              <p className='p6 my-3 text-gray-600' id='p6'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p7Title text-xl font-medium text-gray-600' id='sub7'></h3>
              <p className='p7 my-3 text-gray-600' id='p7'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p8Title text-xl font-medium text-gray-600' id='sub8'></h3>
              <p className='p8 my-3 text-gray-600' id='p8'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p9Title text-xl font-medium text-gray-600' id='sub9'></h3>
              <p className='p9 my-3 text-gray-600' id='p9'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p10Title text-xl font-medium text-gray-600' id='sub10'></h3>
              <p className='p10 my-3 text-gray-600' id='p10'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p11Title text-xl font-medium text-gray-600' id='sub11'></h3>
              <p className='p11 my-3 text-gray-600' id='p11'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p12Title text-xl font-medium text-gray-600' id='sub12'></h3>
              <p className='p12 my-3 text-gray-600' id='p12'></p>
              <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
              <h3 className='p13Title text-xl font-medium text-gray-600' id='sub13'></h3>
              <p className='p13 my-3 text-gray-600' id='p13'></p>
          <img src="" alt="" className=" w-96 bg-slate-300 h-64 my-8 hidden" />
          <h3 className='bottomLineTitle mb-2 font-medium text-xl text-gray-600' id='bLineTitle'></h3>
          <p className='bottomLine mb-5 text-gray-600' id='bLine'></p>
      </div>
      <BlogResponse id={BlogId} />
    </div>
    <BlogPageAds />

</div>
  )
}

export default BlogPostDetails