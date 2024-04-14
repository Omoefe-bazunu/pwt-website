
export const Listings = ({title, About1, About2, desc1, desc2}) => {
  return (
    <div className="Listings-Wrapper w-full h-fit mb-24 mt-16">
        <div className="Lft flex flex-col gap-3 w-full  ">
                <div className="Title1 justify-start flex gap-3 items-center">
                    <p className="TitleText1 text-purple-900 w-fit text-nowrap font-medium cursor-pointer uppercase">{title}</p>
                    <div className=" h-px bg-purple-900 w-full flex-grow"></div>
                </div>
            <div className="Image bg-cover bg-no-repeat bg-center w-full h-72 bg-slate-500 border-b-2 border-purple-900"></div>
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

    </div>
  )
}
