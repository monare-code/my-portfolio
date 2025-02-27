import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    image: "/images/donations-app.png",
    demoLink: "https://example.com/donations-app"
  },
  {
    title: "Speech Therapy Management System*",
    description: "[Group Project] A comprehensive web platform that facilitates speech therapy session management, featuring a modern interface and robust backend functionality.",
    technologies: ["Next.js", "TypeScript", "C#", "MySQL"],
    image: "/images/speech-therapy.png",
    demoLink: "https://example.com/speech-therapy"
  },
  {
    title: "Obstacle Dodging Game",
    description: "An engaging 2D space adventure game built with Python, challenging players to navigate through procedurally generated obstacles while managing ship resources.",
    technologies: ["Pygame", "Python"],
    image: "/images/obstacle-game.png",
    demoLink: "https://example.com/obstacle-game"
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio showcasing projects and skills, built with Next.js and styled with Tailwind CSS, featuring smooth animations and responsive design.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio.png",
    demoLink: "https://example.com/portfolio"
  }
];

export default function Projects() {
  return (
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title with gradient and glow */}
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-md">
            Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 mb-6"></div>

          {/* Carousel */}
          <Carousel className="relative w-full max-w-5xl mx-auto" opts={{ loop: true }}>
            <CarouselContent className="flex">
              {projects.map((project, index) => (
                  <CarouselItem key={index} className="sm:basis-full lg:basis-1/2 px-2">
                    <Card className="h-auto relative overflow-hidden backdrop-blur-lg bg-white/10 border border-white/10
                  hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0
                    hover:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-6 relative z-10 h-full flex flex-col">
                        {/* Project Image */}
                        <div className="w-full h-40 sm:h-48 lg:h-60 bg-cover bg-center rounded-lg mb-4"
                             style={{ backgroundImage: `url(${project.image})` }}></div>

                        {/* Project Title */}
                        <CardTitle className="text-xl font-semibold text-white mb-2">{project.title}</CardTitle>

                        {/* Project Description */}
                        <CardDescription className="text-gray-300 flex-grow">
                          {project.description}
                        </CardDescription>

                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, techIndex) => (
                              <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md
                            border border-white/10 text-white transition-all duration-300
                            hover:scale-105 hover:shadow-lg rounded-lg"
                              >
                                {tech}
                              </Badge>
                          ))}
                        </div>

                        {/* Demo Link */}
                        <div className="mt-6">
                          <Button asChild variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20
                        transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </section>
  );
}
