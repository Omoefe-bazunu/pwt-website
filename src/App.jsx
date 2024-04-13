import { AboutUsSection } from "./pageComponents/Homepage/AboutUsSection";
import { ContactUsSection } from "./pageComponents/Homepage/ContactUsSection";
import { HeroSection } from "./pageComponents/Homepage/HeroSection";
import { NavBar } from "./pageComponents/Homepage/NavBar";
import { ProjectsSection } from "./pageComponents/Homepage/ProjectsSection";
import { ServicesSection } from "./pageComponents/Homepage/ServicesSection";


const App = () => {
  return (

    <div className='App bg-red-700 h-screen flex flex-col w-full jusify-center items-center overflow-x-hidden'>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutUsSection />
      <ContactUsSection />
      {/* <div className="Wrapper bg-white my-0 mx-auto w-5/6 text-center">
        WELCOME
      </div> */}
    </div>
  )
}

export default App;