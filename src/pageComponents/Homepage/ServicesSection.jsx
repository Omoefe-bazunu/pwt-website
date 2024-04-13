import { ServiceBox } from "./ServiceBox";
import { CTABtn } from "./CTABtn";
import { SectionHeader } from "./SectionHeader"


export const ServicesSection = () => {
    const WebFeatures = ['Responsive UI', 'Serach Engine Friendly', 'Zero Downtime', 'Continuous maintenance'];
    const DataAnalysisFeatures = ['Complete Solution', 'Simple Reusable Templates', 'Video Use-Guide'];
    const WritingFeatures = ['Professional CV/RESUME', 'Business Proposal', 'Ads copies and Web Contents']
  return (
    <div className="Services-Wrapper flex justify-start items-center flex-col h-fit w-full bg-yellow-50">
        <div className="Services-Inner w-5/6 mb-24c ">
            <SectionHeader header="OUR SERVICES" />
            <p className="Intro text-center mt-3">Get the best of quality and affordability with our remote services. We take away distance barrier 
by maintaining a strong communication with you on your preferred platform, giving you constant 
updates about the progress and receiving your inputs till the job is completed to your taste.</p>
            <div className="Service-Boxes-Wrapper place-items-center mt-10 grid grid-cols-3 W-full">
                <ServiceBox ServiceTitle="WEBSITE DESIGN" list={WebFeatures} ServiceImage="ServiceImage1"/>
                <ServiceBox ServiceTitle="BUSINESS DATA ANALYSIS" list={DataAnalysisFeatures} ServiceImage="ServiceImage2" />
                <ServiceBox ServiceTitle="WRITING" list={WritingFeatures} ServiceImage="ServiceImage3" />
            </div>
            <CTABtn title="GET STARTED" />
        </div>
    </div>
  )
}
