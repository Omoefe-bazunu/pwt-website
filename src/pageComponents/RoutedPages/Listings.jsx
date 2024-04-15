import { Link } from "react-router-dom"
export const Listings = ({title, About1, About2, desc1, desc2, Cost}) => {
  return (
    <div className="Listings-Wrapper w-full h-fit mb-10 mt-16 flex flex-col">
        <div className="Lft flex flex-col gap-3 w-full  ">
                <div className="Title1 justify-start flex gap-3 items-center">
                    <p className="TitleText1 text-purple-900 w-fit text-nowrap font-medium cursor-pointer uppercase">{title}</p>
                    <div className=" h-px bg-purple-900 w-full flex-grow"></div>
                </div>
            <div className="Image bg-cover bg-no-repeat bg-center flex justify-end items-end pb-3 pr-4 w-full h-72 bg-slate-500 border-b-2 border-purple-900">
                <p className="Cost text-purple-800 bg-white rounded-3xl py-2 px-4 w-fit text-xs font-medium">PRICE: NGN{Cost}</p>
            </div>
        </div>
        <div className="Rgt flex flex-col justify-start items-start  w-full gap-3 h-full">
            <div className="Info flex flex-col w-full gap-1">
                <div className="Title2 justify-start flex gap-3 items-center">
                    <p className="TitleText text-purple-900 w-fit text-nowrap font-medium cursor-pointer uppercase">{About1}</p>
                    <div className=" h-px bg-purple-900 w-full flex-grow"></div>
                </div>
                <div className="Title22 h-px bg-purple-900 flex-grow hidden "></div>
                <p className="Description1 text-wrap pr-5">{desc1}</p>
            </div>
            <div className="Review flex flex-col w-full gap-1 ">
            <div className="Title3 justify-start flex gap-3 items-center">
                <p className="TitleText text-purple-900 w-fit text-nowrap font-medium cursor-pointer uppercase">{About2}</p>
                <div className=" h-px bg-purple-900 w-full flex-grow"></div>
            </div>
                <div className="Title22 h-px bg-purple-900 w-full flex-grow hidden"></div>
                <p className="Description2 text-wrap pr-10">{desc2}</p>
            </div>
        </div>
        <div className="mainListing w-full flex place-items-center gap-x-5 mb-12 mt-5">
              <div className="line h-px w-full bg-purple-950 flex-grow"></div>
              <h3 className="bg-purple-900 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer"><Link to="/BooksPaymentPage">Get this Book</Link></h3>
              <div className="line h-px w-full bg-purple-950 "></div>
        </div>

    </div>
  )
}
