import { Listings } from "./Listings"
import { PageHeader } from "./PageHeader"

export const ProjectsPage = () => {

// PROJECTS DETAILS
    const Project1 = {
        title: "RESUME",
        briefInformation:  "If, you’re using 64 bit then just click the link at the very top that says, “Click here to download” so you can download the latest git version with the most recent updates. But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading.",
        clientReview: "But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading"
    }

    // FUNCTION THAT RUNS OUTPUTS THE DETAILS - DO NOT TAMPER
  return (
    <div className="ProjectsPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="ProjectsPage-Inner w-5/6">
            <PageHeader header="OUR PROJECTS"/>
            <Listings title = {Project1.title} About1 = "PROJECT BRIEF INFORMATION" About2 ="CLIENT'R REVIEW" desc1 ={Project1.briefInformation} desc2 = {Project1.clientReview}/>
        </div>
    </div>
  )
}
