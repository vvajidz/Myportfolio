"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Card } from "@/ui/card";
import { Badge } from "@/ui/badge";

export default function AboutSection() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      // animate sequentially
      const sequence = async () => {
        await controls1.start("visible");
        await controls2.start("visible");
        await controls3.start("visible");
      };
      sequence();
    }
  }, [controls1, controls2, controls3, inView]);

  const fadeText = (text: string, controls: any) => (
    <motion.span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0.1, color: "rgba(127,29,29,0.3)" },
            visible: {
              opacity: 1,
              color: "rgb(127,29,29)",
              transition: { delay: index * 0.02, duration: 0.05 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section id="about" className="py-20 px-4 bg-secondary text-white">
      <div ref={ref} className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary font-playfair">
          About Me
        </h2>

        <Card className="p-8 bg-card text-lg leading-relaxed">
          <div className="space-y-4">
            <p>
              {fadeText(
                "I'm a passionate MERN Stack Developer with a strong foundation in both frontend and backend technologies. My journey in tech is complemented by specialized training in cybersecurity, giving me a unique perspective on building secure, scalable applications.",
                controls1
              )}
            </p>

            <p>
              {fadeText(
                "Currently working as a Frontend Developer Intern at Bridgeon Solutions, I've contributed to real-world projects using modern technologies like React, Next.js, TypeScript, and Node.js. I believe in writing clean, maintainable code and creating exceptional user experiences.",
                controls2
              )}
            </p>

            <p>
              {fadeText(
                "With certifications in ethical hacking and extensive hands-on experience in full-stack development, I bring both technical expertise and security awareness to every project I work on.",
                controls3
              )}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge className="bg-primary text-primary-foreground">
                1+ Years Experience
              </Badge>
              <Badge className="bg-accent text-accent-foreground">
                CEH Certified
              </Badge>
              <Badge className="bg-primary text-primary-foreground">
                Full-Stack Developer
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
