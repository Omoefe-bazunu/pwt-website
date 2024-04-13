import { AboutUsSection } from "./pageComponents/Homepage/AboutUsSection";
import { ContactUsSection } from "./pageComponents/Homepage/ContactUsSection";
import { FeaturedSection } from "./pageComponents/Homepage/FeaturedSection";
import { FooterSection } from "./pageComponents/Homepage/Footer";
import { HeroSection } from "./pageComponents/Homepage/HeroSection";
import { NavBar } from "./pageComponents/Homepage/NavBar";
import { ProjectsSection } from "./pageComponents/Homepage/ProjectsSection";
import { ServicesSection } from "./pageComponents/Homepage/ServicesSection";
import { BooksPage } from "./pageComponents/RoutedPages/BooksPage";
import { ProjectsPage } from "./pageComponents/RoutedPages/ProjectsPage";


const App = () => {
  return (

    <div className='App bg-red-700 h-screen flex flex-col w-full jusify-center items-center overflow-x-hidden'>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutUsSection />
      <ContactUsSection />
      <FeaturedSection />
      {/* <ProjectsPage /> */}
      {/* <BooksPage /> */}
      <FooterSection />
    </div>
  )
}

export default App;