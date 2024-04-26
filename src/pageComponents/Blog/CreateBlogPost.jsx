import { dbase } from "../firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

export const CreateBlogPost =() => {
    const [formData, setFormData] = useState({
        author: '',
        date: '',
        mainTitle: '',
        imageName: '',
        subTitle1: '',
        p1: '',
        subTitle2: '',
        p2: '',
        subTitle3: '',
        p3: '',
        subTitle4: '',
        p4: '',
        subTitle5: '',
        p5: '',
        subTitle6: '',
        p6: '',
        subTitle7: '',
        p7: '',
        subTitle8: '',
        p8: '',
        subTitle9: '',
        p9: '',
        subTitle10: '',
        p10: '',
        subTitle11: '',
        p11: '',
        subTitle12: '',
        p12: '',
        subTitle13: '',
        p13: '',
        bLineTitle: '',
        bLine: '',
        excerpt: '',
    
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const select = document.getElementById('select')
        const category = select.value;
        try {
          const docRef = await addDoc(collection(dbase, `${category}`), {
            author: formData.author,
            date: formData.date,
            mainTitle: formData.mainTitle,
            imageName: formData.imageName,
            subTitle1: formData.subTitle1,
            p1: formData.p1,
            subTitle2: formData.subTitle2,
            p2: formData.p2,
            subTitle3: formData.subTitle3,
            p3: formData.p3,
            subTitle4: formData.subTitle4,
            p4: formData.p4,
            subTitle5: formData.subTitle5,
            p5: formData.p5,
            subTitle6: formData.subTitle6,
            p6: formData.p6,
            subTitle7: formData.subTitle7,
            p7: formData.p7,
            subTitle8: formData.subTitle8,
            p8: formData.p8,
            subTitle9: formData.subTitle9,
            p9: formData.p9,
            subTitle10: formData.subTitle10,
            p10: formData.p10,
            subTitle11: formData.subTitle11,
            p11: formData.p11,
            subTitle12: formData.subTitle12,
            p12: formData.p12,
            subTitle13: formData.subTitle13,
            p13: formData.p13,
            bLineTitle: formData.bLineTitle,
            bLine: formData.bLine,
            excerpt: formData.excerpt,
            CreatedAt: serverTimestamp()
          });
         alert('SUBMITTED')
         setFormData({
          author: '',
          date: '',
          mainTitle: '',
          imageName: '',
          subTitle1: '',
          p1: '',
          subTitle2: '',
          p2: '',
          subTitle3: '',
          p3: '',
          subTitle4: '',
          p4: '',
          subTitle5: '',
          p5: '',
          subTitle6: '',
          p6: '',
          subTitle7: '',
          p7: '',
          subTitle8: '',
          p8: '',
          subTitle9: '',
          p9: '',
          subTitle10: '',
          p10: '',
          subTitle11: '',
          p11: '',
          subTitle12: '',
          p12: '',
          subTitle13: '',
          p13: '',
          bLineTitle: '',
          bLine: '',
          excerpt: '',
         })
          // Reset the form after successful submission if needed
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
    


  return (
    <div id='createBlog hidden'>
        <div className=' CreateForm w-full h-fit p-8'>
          <form id='Form' className='flex flex-col gap-3 w-8/12   my-0 mx-auto rounded-2xl p-5' onSubmit={handleSubmit}>
            <select type="text" name="Select" className='py-3 px-5 border-b border-amber-300 bg-inherit outline-none cursor-pointer' id='select'>
                <option value="Tech"  className=" bg-amber-300 cursor-pointer">Tech</option>
                <option value="Business" className=" bg-amber-300 cursor-pointer">Business</option>
                <option value="Career" className=" bg-amber-300 cursor-pointer">Career</option>
            </select>
            <input type="text" onChange={handleChange} name="author" placeholder='author full name' value={formData.author} className='py-3 px-5 border-b outline-none border-slate-300 bg-inherit'/>
            <input type="text" onChange={handleChange} name="date" placeholder='Blog Date - E.g March 24, 2024' value={formData.date} className='py-3 px-5 border-b outline-none border-slate-300 bg-inherit'/>
            <input type="text" onChange={handleChange} name="mainTitle" placeholder='Main-Title' value={formData.mainTitle} className='py-3 px-5 border-b outline-none border-slate-300 bg-inherit'/>
            <input type="text" onChange={handleChange} name="imageName" placeholder='Set as "imagename.jpg"' value={formData.imageName} className='py-3 px-5 border-b outline-none border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.excerpt} name="excerpt" placeholder='Excerpt - Short Description of content' className='py-3 px-5  outline-none border-b border-slate-300 bg-inherit'/>
            <input type="text" onChange={handleChange} value={formData.subTitle1} name="subTitle1" placeholder='First Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p1} name="p1" placeholder='First Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle2} name="subTitle2" placeholder='Second Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p2} name="p2" placeholder='Second Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle3} name="subTitle3" placeholder='Third Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p3} name="p3" placeholder='Third Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle4} name="subTitle4" placeholder='Fourth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p4} name="p4" placeholder='Fourth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle5} name="subTitle5" placeholder='Fifth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p5} name="p5" placeholder='Fifth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle6} name="subTitle6" placeholder='Sixth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p6} name="p6" placeholder='Sixth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle7} name="subTitle7" placeholder='Seventh Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p7} name="p7" placeholder='Seventh Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle8} name="subTitle8" placeholder='Eight Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p8} name="p8" placeholder='Eight Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle9} name="subTitle9" placeholder='Noneth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p9} name="p9" placeholder='Nineth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle10} name="subTitle10" placeholder='Tenth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p10} name="p10" placeholder='Tenth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle11} name="subTitle11" placeholder='Eleventh Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p11} name="p11" placeholder='Eleventh Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle12} name="subTitle12" placeholder='Twelfth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p12} name="p12" placeholder='Twelfth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <br />
            <input type="text" onChange={handleChange} value={formData.subTitle13} name="subTitle13" placeholder='Thirteenth Sub-Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.p13} name="p13" placeholder='Thirteenth Paragraph Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>

            {/* BOTTOM LINE */}
            <input type="text" onChange={handleChange} value={formData.bLineTitle} name="bLineTitle" placeholder='Bottom Line Title' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
            <textarea type="text" onChange={handleChange} value={formData.bLine} name="bLine" placeholder='Bottom Line Text' className='py-3 px-5 outline-none border-b border-slate-300 bg-inherit'/>
              <div className="mainCTA w-full flex place-items-center gap-x-5 mt-12 mb-12">
              <div className="line h-px w-full bg-amber-600 flex-grow"></div>
              <button type='submit' className="bg-amber-600 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">SUBMIT POST</button>
              <div className="line h-px w-full bg-amber-600 "></div>
           </div>
          </form>

        </div>
    </div>
  )
}
