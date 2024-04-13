
export const HeroSection = () => {
  return (
    <div className="HeroSection-Wrapper flex justify-start items-center w-full  h-fit ">
        <div className="Hero-Inner py-20 px-52 h-full text-white w-full flex justify-center items-center gap-y-1 flex-col bg-cover bg-center bg-no-repeat">
            <h1 className="text-wrap text-4xl text-center font-bold">GET THE BEST OF BOTH WORLDS WITH QUALITY AND AFFORDABILITY.</h1>
            <p className="pText text-wrap w-11/12 text-xl text-center mt-5 mb-5">We make sure to give our clients value that makes them come back for more patronage as well as recommend our services.</p>
            <div className="Btn-border py-1 px-4 border-white border rounded-3xl">
                <p className="CTA-Btn bg-yellow-400 px-12 py-2 rounded-3xl text-slate-800 font-medium cursor-pointer">GET STARTED</p>
            </div>
        </div>
    </div>
  )
}
