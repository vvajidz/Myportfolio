"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/ui/badge";

const FeaturedProjects = () => {
  const projects = [
    {
      name: "RENTWISE",
      subtitle: "Luxury Home Renting Platform",
      link: "https://rentwise-gilt.vercel.app/",
      image: "https://i.pinimg.com/736x/6b/5b/a8/6b5ba8f6a459d49c4c44a9816271a60e.jpg", // optional: replace with your actual preview
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB"],
      desc: "A full-stack luxury property rental platform with filtering, maps, and smooth UI.",
    },
    {
      name: "LOCAFY",
      subtitle: "Trusted Home Service Platform (Ongoing)",
      link: "https://locafyy.netlify.app/",
      image: "https://i.pinimg.com/736x/e2/12/54/e212542390df219a376927321857a00c.jpg",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Cloudinary", "Docker"],
      desc: "Home service booking platform with microservice-based backend and OAuth auth.",
    },
    {
      name: "AJFAN PIZZA",
      subtitle: "Modern Food Delivery Platform",
      link: "www.ajfanpizaa.in",
      image: "https://i.pinimg.com/736x/10/db/f4/10dbf4b93b01cfc0860e60996e8025d5.jpg",
      tech: ["Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
      desc: "Interactive pizza ordering app with real-time order updates and sleek UI.",
    },
    {
      name: "DENTA",
      subtitle: "Dental Clinic Appointment System",
      link: "https://denta-ecru.vercel.app/",
      image: "https://i.pinimg.com/736x/94/94/b1/9494b1709d50822dc1cd2d97c0fd21f6.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
      desc: "Elegant dental appointment booking platform with doctor scheduling and forms.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-transparent text-white">
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-4xl md:text-6xl font-bold mb-12 text-center font-playfair"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {projects.map((project, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody className="bg-gray-50 dark:bg-zinc-900 relative group/card border dark:border-white/[0.1] border-black/[0.1] w-[20rem] sm:w-[22rem] rounded-2xl p-5 hover:shadow-2xl transition-all duration-300">
                <CardItem translateZ="50" className="text-2xl font-bold text-neutral-800 dark:text-white">
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm text-neutral-500 dark:text-neutral-300 mt-1"
                >
                  {project.subtitle}
                </CardItem>

                <CardItem translateZ="80" className="w-full mt-4">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-primary text-primary text-[10px] px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-xs text-neutral-500 dark:text-neutral-300 mt-3"
                >
                  {project.desc}
                </CardItem>

                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-1.5 rounded-md bg-red-300 text-black dark:bg-white hover:opacity-80 transition"
                  >
                    Visit →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="text-xs px-3 py-1.5 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
                  >
                    Details
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
