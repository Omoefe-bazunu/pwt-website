        import { SectionHeader } from "./SectionHeader"

        export const ProjectsSection = () => {
        return (
            <div className="ProjectsSection-Wrapper flex justify-center items-center w-full h-fit bg-white">
                <div className="Projects-Inner w-5/6 mb-24">
                    <SectionHeader header="OUR PROJECTS"/>
                    <div className="Intro w-full mt-16 flex justify-start flex-col">
                        <h3 className="text-3xl text-wrap">TAKE THE TIME TO EXPLORE SOME OF THE PROJECTS WE HAVE COMPLETED FOR DIFFERENT CLIENTS</h3>
                        <div className="Partition h-px bg-purple-900 w-full mt-5 mb-5"></div>
                    </div>
                    <div className="Main grid items-center mb-12">
                        <div className="ProjectsDisplay flex flex-col justify-start items-center ">
                            <div className="ProjectImages grid items-center grid-cols-2 gap-1 w-full">
                                <div className="Image1 h-64 w-full bg-cover bg-center bg-no-repeat bg-slate-600 border-b-2 border-purple-900"></div>
                                <div className="Image2 h-full w-full bg-cover bg-center bg-no-repeat border-b-2 border-purple-900"></div>
                                <div className="Image3 h-64 w-full bg-cover bg-center bg-no-repeat bg-slate-600 border-b-2 border-purple-900"></div>
                            </div>
                            <div className="ProjectsBtn w-full flex place-items-center gap-x-5 mt-12 mb-12">
                                <div className="line1 h-px w-full bg-purple-950 flex-grow hidden"></div>
                                <h3 className="bg-purple-900 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">SEE MORE PROJECTS</h3>
                                <div className="line2 h-px w-full bg-purple-950 "></div>
                            </div>
                        </div>
                        <div className="ShortStatement h-full flex flex-col justify-start items-center ">
                        </div>
                    </div>
                    
                </div>
            </div>
        )
        }
