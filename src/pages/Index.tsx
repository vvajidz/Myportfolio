import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Squares from "../../components/Squares";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SkillsAndTechnologies from "@/components/SkillsAndTechnologies";
import logos from "@/components/logos";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import EducationAndCertification from "@/components/EducationAndCertification";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use both scrollIntoView and scroll-margin-top
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Add a backup setTimeout in case the smooth scroll is interrupted
      setTimeout(() => {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen font-poppins relative bg-black">
      {/* Background Squares */}
      <div className="fixed inset-0 z-0">
        <Squares 
          speed={0.5}
          squareSize={20}
          direction="diagonal"
          borderColor="#420000" /* grey-300 */
          hoverFillColor="#374151" /* grey-700 for better contrast */
        />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <AboutMe />
        <SkillsAndTechnologies />
        <Experience />
        <FeaturedProjects />
        <EducationAndCertification />
        <LetsConnect />
        <Footer />
      </div>
    </div>
  );
};

export default Index;