'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const skillCategories = {
    "Programming Languages": {
        icon: "🚀",
        skills: ["Python", "Java", "TypeScript", "C++", "C#"]
    },
    "Web Technologies": {
        icon: "🌐",
        skills: ["React", "Next.js", "Tailwind CSS"]
    },
    "Data & Backend": {
        icon: "🗄️",
        skills: ["SQL", "Supabase", "PowerBI"]
    },
    "Development Tools/Skills": {
        icon: "🛠️",
        skills: ["Git", "SDLC"]
    },
    "Core Concepts": {
        icon: "🧠",
        skills: ["Data Structures", "Algorithms"]
    }
};

export default function Skills() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title with subtle glow and gradient */}
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-md">
                    Skills & Expertise
                </h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 mb-6"></div>

                <p className="text-center text-slate-400 mb-12">
                    A curated collection of my technical expertise and professional capabilities
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skillCategories).map(([category, { icon, skills }], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="relative overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10
                                hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0
                                    hover:opacity-100 transition-opacity duration-500" />
                                <CardContent className="p-6 relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{icon}</span>
                                        <h3 className="text-xl font-semibold text-white">{category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md
                                                    border border-white/10 text-white transition-all duration-300
                                                    hover:scale-105 hover:shadow-lg rounded-lg"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
