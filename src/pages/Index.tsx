import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { Badge } from "@/ui/badge";
import profileImage from "@/assets/profile.jpg";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "@/components/About";

const Index = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Redux", "Zustand", "Formik"],
    backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Axios"],
    tools: ["GitHub", "Vercel", "Docker", "Cloudinary", "OAuth 2.0", "Postman", "Agile/Scrum", "Trello"]
  };

  const experiences = [
    {
      company: "Bridgeon Solutions",
      role: "Frontend Developer Intern",
      period: "2025 – Present",
      highlights: [
        "Contributed to real-world web projects with full-stack development using React, Node.js, Express, and MongoDB",
        "Built responsive UI components with React.js, TypeScript, and Tailwind CSS following modular architecture",
        "Implemented state management using Redux & Zustand for complex workflows",
        "Collaborated in Agile sprints with version control via Git/GitHub and daily stand-ups"
      ]
    },
    {
      company: "Keltron",
      role: "On-Job Training",
      period: "2021 – 2023",
      highlights: [
        "Gained practical exposure to HTML5, CSS, JavaScript, and Python in a professional environment",
        "Developed small-scale web applications using Django",
        "Strengthened foundations in responsive web design and frontend development best practices"
      ]
    }
  ];

  const projects = [
    {
      name: "RENTWISE",
      subtitle: "Luxury Home Renting Platform",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Built a full-featured property rental platform with modern UI/UX and advanced filtering",
        "Designed reusable components and responsive layouts for seamless user experience",
        "Integrated API routes and optimized React rendering for performance and scalability"
      ]
    },
    {
      name: "LOCAFY",
      subtitle: "Trusted Home Service Platform (Ongoing)",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Cloudinary", "Multer", "Docker"],
      description: [
        "Designed a microservice-based architecture ensuring scalability and modularity",
        "Enabled service providers to upload media, manage listings, and track bookings",
        "Integrated Google & Facebook OAuth for authentication",
        "Deployed services via Docker containers for consistent environment setup"
      ]
    }
  ];

  const education = [
    {
      degree: "Advanced Diploma in Cyber Defense",
      institution: "RedTeam Hacker Academy",
      period: "2023 – 2024",
      details: [
        "Specialized in Ethical Hacking, Digital Forensics, and Network Security",
        "Hands-on training in penetration testing, malware analysis, and incident response"
      ]
    },
    {
      degree: "Junior Software Development",
      institution: "Government Vocational Higher Secondary School, Vengara",
      period: "2021 – 2023",
      details: [
        "Focused on frontend web development fundamentals using HTML, CSS, and JS",
        "Developed understanding of responsive design principles and UI building"
      ]
    }
  ];

  const certifications = [
    "EC-Council Certified Ethical Hacker (CEH)",
    "Skill India NSQF — Junior Software Developer",
    "Advanced Diploma in Cyber Defense (RedTeam Hacker Academy)",
    "On-Job Training — Keltron"
  ];

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary-foreground font-playfair">AV</h2>
            <div className="hidden md:flex gap-6">
              {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-primary via-primary to-accent">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.2} scale={1.05}>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-primary-foreground order-2 md:order-1" data-aos="fade-right">
            <div className="space-y-2">
              <p className="text-lg md:text-xl tracking-wider uppercase font-light">Portfolio</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-playfair">
                ABDUL<br />VAJID
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
              MERN Stack Developer 
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="secondary"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={() => scrollToSection("projects")}
                variant="outline"
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary-foreground shadow-2xl">
              <img 
                src={profileImage} 
                alt="Abdul Vajid"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </Tilt>
      </section>

      {/* About Section */}

      <AboutSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary font-playfair" data-aos="fade-up">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary font-playfair" data-aos="fade-up">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent font-playfair">{exp.company}</h3>
                    <p className="text-xl text-primary font-light">{exp.role}</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-4 bg-background">
  <div className="container mx-auto max-w-6xl">
    <h2
      className="text-4xl md:text-6xl font-bold mb-12 text-primary font-playfair"
      data-aos="fade-up"
    >
      Featured Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareMaxOpacity={0.2}
          scale={1.05}
        >
          <Card
            className="p-8 bg-card hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-3xl font-bold text-accent mb-2 font-playfair">
              {project.name}
            </h3>
            <p className="text-lg text-muted-foreground mb-4 font-light">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="border-primary text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-2">
              {project.description.map((desc, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Tilt>
      ))}
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary font-playfair" data-aos="fade-up">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-xl font-bold text-accent mb-2 font-playfair">{edu.degree}</h3>
                <p className="text-lg text-primary mb-1 font-light">{edu.institution}</p>
                <Badge className="bg-primary text-primary-foreground mb-4">{edu.period}</Badge>
                <ul className="space-y-2 mt-4">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="text-accent mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-card" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold text-accent mb-6 font-playfair">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-accent">
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

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto text-center text-primary-foreground">
          <p>&copy; 2025 Abdul Vajid. All rights reserved.</p>
          <p className="text-sm mt-2 text-primary-foreground/80">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
