import { Card } from "@/ui/card";
import ShinyText from "../../components/ShinyText";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-transparent text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-playfair" data-aos="fade-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div data-aos="fade-right">
            <p className="text-lg mb-6 leading-relaxed">
              <ShinyText
                text="I'm a passionate MERN Stack Developer with expertise in building modern, responsive web applications. My journey in web development combines technical skills with a keen eye for user experience."
                disabled={false}
                speed={10}
                className="text-lg"
              />
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              <ShinyText
                text="With experience in both frontend and backend technologies, I specialize in creating seamless, scalable solutions that deliver exceptional user experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web development."
                disabled={false}
                speed={10}
                className="text-lg"
              />
            </p>
            <p className="text-lg leading-relaxed">
              <ShinyText
                text="When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge in cybersecurity."
                disabled={false}
                speed={10}
                className="text-lg"
              />
            </p>
          </div>

          {/* Card Column */}
          <Card className="p-8 bg-card" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
              What I Do
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  Develop responsive web applications using React, Next.js, and
                  TypeScript
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  Build robust backend APIs with Node.js, Express, and
                  MongoDB/PostgreSQL
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  Implement modern UI/UX designs with Tailwind CSS and component
                  libraries
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  Optimize performance and ensure code quality through best
                  practices
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span>
                  Collaborate using Agile methodologies and version control with
                  Git
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
