        import { SectionHeader } from "./SectionHeader"

        export const ProjectsSection = () => {
        return (
            <div className="ProjectsSection-Wrapper flex justify-center items-center w-full h-fit bg-white">
                <div className="Projects-Inner w-5/6">
                    <SectionHeader header="OUR PROJECTS"/>
                    <div className="Main grid grid-cols-2 items-center gap-5  mt-16 mb-12">
                        <div className="ProjectsDisplay flex flex-col justify-start items-center ">
                            <div className="ProjectImages grid items-center grid-cols-2 gap-1 w-full">
                                <div className="Image1 h-64 w-full bg-cover bg-center bg-no-repeat bg-slate-600 border-b-2 border-purple-900"></div>
                                <div className="Image2 h-full w-full bg-cover bg-center bg-no-repeat border-b-2 border-purple-900"></div>
                                <div className="Image3 h-64 w-full bg-cover bg-center bg-no-repeat bg-slate-600 border-b-2 border-purple-900"></div>
                            </div>
                            <div className="MoreProjectsBtn  flex justify-start items-center gap-5 w-full mt-5">
                                <p className="SeeMoreText text-purple-900 w-fit text-nowrap font-semibold cursor-pointer">SEE MORE PEOJECTS</p>
                                <div className=" h-px bg-purple-900 w-full flex-grow"></div>
                            </div>
                        </div>
                        <div className="ShortStatement h-full flex flex-col justify-start items-center ">
                            <h3 className="text-3xl text-wrap pr-8">TAKE THE TIME TO EXPLORE THE PROJECTS WE HAVE COMPLETED FOR DIFFERENT CLIENTS</h3>
                            <div className="Partition h-px bg-purple-900 w-full mt-5 mb-5"></div>
                            <p className="pr-16 text-wrap ">We continue to maintain a strong and growing customer base because we alowas proritizwe value in every project we are working on to provide our clients with nearly the best of theservice they paid for and make sure they arecomfortable with the final result.</p>
                            <div className="CTABtn flex justify-start items-center w-full gap-5 mt-10">
                                <h3 className="bg-purple-900 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">GET STARTED</h3>
                                <div className="line h-px w-full bg-purple-950 "></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
        }
