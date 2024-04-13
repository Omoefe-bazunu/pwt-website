
import { FaeturedHeader } from "./SectionHeader"


export const FeaturedSection = () => {

  return (
    <div className="Featured-Wrapper flex justify-start items-center flex-col h-fit w-full bg-yellow-50">
        <div className="Services-Inner w-5/6 mt-12 ">
            <SectionHeader header="FEATURED" />
            <p className="Intro text-center mt-3">Do you love reading books about Finance, Storytelling, Relationship and Cooking?Check out our featured collections of quality content books by seasoned authors to keep you inspired,informed. guided and entertained. CLICK HERE to see the collection.</p>
            <div className="Books"></div>
        </div>
    </div>
  )
}
