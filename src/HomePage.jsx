import { AboutUsSection } from "./pageComponents/Homepage/AboutUsSection"
import { ContactUsSection } from "./pageComponents/Homepage/ContactUsSection"
import { FeaturedSection } from "./pageComponents/Homepage/FeaturedSection"
import { HeroSection } from "./pageComponents/Homepage/HeroSection"
import { ProjectsSection } from "./pageComponents/Homepage/ProjectsSection"
import { ServicesSection } from "./pageComponents/Homepage/ServicesSection";

export const HomePage = () => {
  return (
    <div className="HomePage w-full">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutUsSection />
        <ContactUsSection />
        <FeaturedSection />
    </div>
  )
}

