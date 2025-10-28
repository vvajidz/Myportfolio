import { Card } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { ExternalLink } from "lucide-react";

const EducationAndCertification = () => {
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

  return (
    <section id="education" className="py-20 px-4 bg-transparent text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white font-playfair" data-aos="fade-up">Education & Certifications</h2>
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
  );
};

export default EducationAndCertification;