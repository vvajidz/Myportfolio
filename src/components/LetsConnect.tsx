import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Card } from "@/ui/card";

const LetsConnect = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-transparent text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground font-playfair" data-aos="fade-up">Let's Connect</h2>
        <p className="text-xl text-primary-foreground/90 mb-12 font-light" data-aos="fade-up" data-aos-delay="100">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="p-6 bg-primary-foreground hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-semibold mb-1">Email</p>
            <a href="mailto:vvajidz56@gmail.com" className="text-accent hover:underline">
              vvajidz56@gmail.com
            </a>
          </Card>
          <Card className="p-6 bg-primary-foreground hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-semibold mb-1">Phone</p>
            <a href="tel:+917025800254" className="text-accent hover:underline">
              +91 70258 00254
            </a>
          </Card>
          <Card className="p-6 bg-primary-foreground hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="400">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-semibold mb-1">Location</p>
            <p className="text-muted-foreground">Kerala, Malappuram</p>
          </Card>
          <Card className="p-6 bg-primary-foreground hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="500">
            <Linkedin className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-semibold mb-1">LinkedIn</p>
            <a 
              href="https://linkedin.com/in/abdul-vajid-2a225a312" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Connect with me
            </a>
          </Card>
        </div>
        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <p className="text-primary-foreground/80 mb-4 font-light">Languages: English | Malayalam | Hindi</p>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;