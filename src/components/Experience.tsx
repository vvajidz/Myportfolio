import { Card } from "@/ui/card";
import { Badge } from "@/ui/badge";

const Experience = () => {
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
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white font-playfair" data-aos="fade-up">Experience</h2>
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
  );
};

export default Experience;