import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Donations App*",
    description: "[Group Project] A full-stack Android application that connects donors with recipients, streamlining the process of item donations through an intuitive mobile interface.",
    technologies: ["Android Studio", "Java", "PHP", "MySQL"],
    demoLink: "https://example.com/donations-app"
  },
  {
    title: "Speech Therapy Management System*",
    description: "[Group Project] A comprehensive web platform that facilitates speech therapy session management, featuring a modern interface and robust backend functionality.",
    technologies: ["Next.js", "TypeScript", "C#", "MySQL"],
    demoLink: "https://example.com/speech-therapy"
  },
  {
    title: "Obstacle Dodging Game",
    description: "An engaging 2D space adventure game built with Python, challenging players to navigate through procedurally generated obstacles while managing ship resources.",
    technologies: ["Pygame", "Python"],
    demoLink: "https://example.com/obstacle-game"
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio showcasing projects and skills, built with Next.js and styled with Tailwind CSS, featuring smooth animations and responsive design.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn"],
    demoLink: "https://example.com/portfolio"
  },
  {
    title: "Snake AI*",
    description: "I made a snake ai using A* for pathfinding",
    technologies: ["Java"],
    demoLink: "https://example.com/obstacle-game"
  },
];

export default function Projects() {
  return (
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Title with gradient and glow */}
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-md">
            Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 mb-6"></div>

          {/* Carousel - with better mobile spacing */}
          <div className="w-full relative">
            <Carousel className="w-full max-w-3xl md:max-w-4xl mx-auto" opts={{ loop: true }}>
              <CarouselContent className="flex">
                {projects.map((project, index) => (
                    <CarouselItem key={index} className="sm:basis-full lg:basis-1/2 px-6 md:px-2">
                      <Card className="h-auto relative overflow-hidden backdrop-blur-lg bg-white/10 border border-white/10
                    hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0
                      hover:opacity-100 transition-opacity duration-500" />
                        <CardContent className="p-4 md:p-6 relative z-10 h-full flex flex-col">
                          {/* Project Title */}
                          <CardTitle className="text-lg md:text-xl font-semibold text-white mb-2">{project.title}</CardTitle>

                          {/* Project Description */}
                          <CardDescription className="text-sm md:text-base text-gray-300 flex-grow">
                            {project.description}
                          </CardDescription>

                          {/* Technologies Used */}
                          <div className="flex flex-wrap gap-1 md:gap-2 mt-4">
                            {project.technologies.map((tech, techIndex) => (
                                <Badge
                                    key={techIndex}
                                    variant="secondary"
                                    className="text-xs md:text-sm px-2 md:px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md
                              border border-white/10 text-white transition-all duration-300
                              hover:scale-105 hover:shadow-lg rounded-lg"
                                >
                                  {tech}
                                </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20" />
              </div>
              <div className="block md:hidden">
                <CarouselPrevious className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20 h-8 w-8" />
                <CarouselNext className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20 h-8 w-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
  );
}