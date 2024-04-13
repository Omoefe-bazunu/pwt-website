import { SectionHeader } from "./SectionHeader"

export const AboutUsSection = () => {
  return (
    <div className="AboutUs-Wrapper w-full bg-yellow-50 flex justify-center items-center">
        <div className="AboutUs-Inner w-5/6 flex flex-col items-center mb-24">
            <SectionHeader header="ABOUT US"/>
            <div className="Main flex justify-start gap-5 mt-10">
                <div className="pwtImg bg-cover bg-center bg-no-repeat h-52 w-full "></div>
                <p className="r-16 text-wrap">Phenomenal World Trade is a digital solutions providing company that specialize in provididing quality, and affordable digital servicesto individuals and groups in specific areas as <span className=" font-semibold">WEB DESIGN, BUSINESS DATA ANALYSIS, WRTITING,</span> etc. We offer bothremote and onsite services, so distance is never a barrier. <br /> Our values revolve around <span className=" font-semibold">Quality, Timeliness,and Relationship building.</span>
                </p>
            </div>
        </div>
    </div>
  )
}
