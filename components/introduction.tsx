import Image from 'next/image'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Introduction() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Left Side: Text Section */}
                    <div className="text-center md:text-left md:flex-1">
                        <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">Hi, </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">I am Monare</h2>

                        {/* BIG Gradient Text */}
                        <h2 className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Final Year Computer Science Student
                        </h2>

                        {/*description*/}
                        <p className="max-w-6xl text-white mx-auto mb-8 font-mono text-base md:text-xl">
                            "I am a final-year Bachelor of Science student at Wits University, majoring in Computer Science,
                            Computer Applications, and Information Systems.
                            Throughout my studies, I have developed a strong passion for software development, system analysis, the software development life cycle (SDLC),
                            mobile and web development, and machine learning.
                            As a student, I am continually learning and improving my skills, and I look forward to exploring even more in the field :).
                            There's still much
                            more to come."
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <Button variant="outline" size="icon" asChild>
                                <a href="https://github.com/monare-code" target="_blank" rel="noopener noreferrer">
                                    <GithubIcon className="h-6 w-6" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href="https://www.linkedin.com/in/monare-selahle" target="_blank" rel="noopener noreferrer">
                                    <LinkedinIcon className="h-6 w-6" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side: Bigger Profile Image with a Cool Shape */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                        {/* Background Shape */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 scale-125"></div>

                        {/* Profile Image */}
                        <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-3xl shadow-lg border-4 border-gray-700">
                            <Image
                                src="/profile.png"
                                alt="MS"
                                width={384}
                                height={384}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>

                        {/* "YES, THAT IS ME" Text */}
                        <p className="hidden md:block text-center text-white font-mono text-lg md:text-xl mt-4">
                            Hello!
                        </p>
                    </div>


                </div>
            </div>

        </section>
    )
}
