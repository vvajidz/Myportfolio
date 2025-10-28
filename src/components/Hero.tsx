import { Button } from "@/ui/button";
import TextPressure from '../../components/TextPressure';
import ShinyText from '../../components/ShinyText';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 sm:px-6 lg:px-8">
      {/* Responsive container for TextPressure */}
      <div className="w-full max-w-6xl mx-auto relative h-[200px] sm:h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
        <TextPressure
          text="ABDUL VAJID"
          fontFamily='Playfair Display'
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={120} // Reduced for mobile
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        />
      </div>
      
      {/* Responsive text */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 text-gray-100 tracking-wider sm:tracking-widest">
        MERN STACK DEVELOPER
      </p>
      
      {/* Responsive button container */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Button
          onClick={() => scrollToSection("contact")}
          size="lg"
          className="w-full sm:w-auto border-1 border-white bg-black hover:bg-gray-900 font-poppins px-6 sm:px-8 py-3 text-sm sm:text-base"
        >
          <ShinyText 
            text="Get in touch" 
            disabled={false} 
            speed={3} 
            className="text-sm sm:text-base" 
          />
        </Button>
        <Button
          onClick={() => scrollToSection("projects")}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-2 border-white bg-black hover:bg-gray-900 font-poppins px-6 sm:px-8 py-3 text-sm sm:text-base"
        >
          <ShinyText 
            text="View Projects" 
            disabled={true} 
            speed={3} 
            className="text-sm sm:text-base" 
          />
        </Button>
      </div>
    </section>
  );
};

export default Hero;