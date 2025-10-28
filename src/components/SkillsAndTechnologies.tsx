import { useState } from "react";
import { Card } from "@/ui/card";
import { Badge } from "@/ui/badge";
import FallingText from "../../components/FallingText";
import LogoLoop from "../../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const SkillsAndTechnologies = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Zustand",
      "Formik",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Axios",
    ],
    tools: [
      "GitHub",
      "Vercel",
      "Docker",
      "Cloudinary",
      "OAuth 2.0",
      "Postman",
      "Agile/Scrum",
      "Trello",
    ],
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
      {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  ];

  const cardBaseClass =
    "p-6 bg-card hover:shadow-lg transition-all duration-250 relative overflow-hidden cursor-pointer";

  const makeJoined = (arr: string[]) => arr.join(" ");

  return (
    <section id="skills" className="py-20 px-4 bg-transparent text-white">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-6xl font-bold mb-12 text-white font-playfair"
          data-aos="fade-up"
        >
          Skills & Technologies
        </h2>

        {/* === SKILL CARDS === */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* FRONTEND */}
          <Card
            className={cardBaseClass}
            data-aos="fade-up"
            data-aos-delay="100"
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
            onTouchStart={() => setActiveCard(0)}
            onTouchEnd={() => setActiveCard(null)}
            onTouchCancel={() => setActiveCard(null)}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
              Frontend
            </h3>
            {activeCard === 0 ? (
              <div className="absolute inset-0 flex items-start justify-center p-6 z-10">
                <FallingText
                  text={makeJoined(skills.frontend)}
                  highlightWords={[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "Redux",
                  ]}
                  highlightClass="text-accent font-bold"
                  trigger="auto"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.8}
                  fontSize="1rem"
                  mouseConstraintStiffness={0.9}
                />
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </Card>

          {/* BACKEND */}
          <Card
            className={cardBaseClass}
            data-aos="fade-up"
            data-aos-delay="200"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            onTouchStart={() => setActiveCard(1)}
            onTouchEnd={() => setActiveCard(null)}
            onTouchCancel={() => setActiveCard(null)}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
              Backend
            </h3>
            {activeCard === 1 ? (
              <div className="absolute inset-0 flex items-start justify-center p-6 z-10">
                <FallingText
                  text={makeJoined(skills.backend)}
                  highlightWords={[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "PostgreSQL",
                  ]}
                  highlightClass="text-accent font-bold"
                  trigger="auto"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.8}
                  fontSize="1rem"
                  mouseConstraintStiffness={0.9}
                />
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </Card>

          {/* TOOLS */}
          <Card
            className={cardBaseClass}
            data-aos="fade-up"
            data-aos-delay="300"
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            onTouchStart={() => setActiveCard(2)}
            onTouchEnd={() => setActiveCard(null)}
            onTouchCancel={() => setActiveCard(null)}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
              Tools & Others
            </h3>
            {activeCard === 2 ? (
              <div className="absolute inset-0 flex items-start justify-center p-6 z-10">
                <FallingText
                  text={makeJoined(skills.tools)}
                  highlightWords={[
                    "Docker",
                    "Vercel",
                    "GitHub",
                    "Cloudinary",
                  ]}
                  highlightClass="text-accent font-bold"
                  trigger="auto"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.8}
                  fontSize="1rem"
                  mouseConstraintStiffness={0.9}
                />
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary" className="mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* === LOGO LOOP SECTION === */}
        <div
          className="mt-16 relative bg-transparent overflow-hidden"

        >
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTechnologies;
