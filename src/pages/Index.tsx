import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
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
  );
};

export default Index;