
import { BooksTemplates } from "./BooksTemplates"
import { CTABtn } from "./CTABtn"
import { SectionHeader } from "./SectionHeader"
import { Link } from "react-router-dom"

export const FeaturedSection = () => {

  return (
    <div className="Featured-Wrapper flex justify-start items-center flex-col h-fit w-full bg-yellow-50">
        <div className="Featured-Inner w-5/6 m-24">
            <SectionHeader header="FEATURED" />
            <p className="Intro text-center mt-3">Do you love reading books about Finance, Storytelling, Relationship and Cooking? Check out our featured collections of quality content books by seasoned authors to keep you inspired,informed. guided and entertained. </p>
            <div className="FeaturedBooks grid place-items-center mt-10">
                <BooksTemplates title="RIVER SIDE" id="Book1"/>
                <BooksTemplates title="HOPE" id="Book2"/>
                <BooksTemplates title="BIRTH PLACE" id="Book3"/>
                <BooksTemplates title="RISING FROM INSIDE" id="Book4"/>
            </div>
            <Link to="/BooksPage" className=" font-semibold text-purple-800 cursor-pointer"><CTABtn title="SEE COLLECTIONS"  /></Link>
        </div>
    </div>
  )
}
