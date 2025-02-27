export default function AboutMe() {
    const experiences = [
        {
            title: "Tutor",
            company: "Wits University",
            duration: "July 2024 - Nov 2024",
            description: "Tutoring C# to first year students.",
        },
        {
            title: "Java Developer Intern",
            company: "FNB",
            duration: "July 2024",
            description: "Developing, testing, and debugging Java applications, collaborated with senior developers on software solutions.",
        },
        {
            title: "Quantitative Analyst Intern",
            company: "Quantify Your Future",
            duration: "Jan 2024 - Feb 2024",
            description: "Had projects for different companies. Analysed data, built statistical models to support trading and risk management decisions.",
        },
        {
            title: "Java Developer and Systems Analyst Intern",
            company: "FNB",
            duration: "July 2023",
            description: "Exposed to 2 fields, analysed system requirements and collaborated with teams to enhance java applications,",
        }
    ];

    return (
        <section className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column - Experience and Education */}
                <div className="space-y-10 order-2 lg:order-1">
                    {/* Experience Section */}
                    <div>
                        <h3 className="text-3xl font-semibold text-white mb-4">Experience</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {experiences.map((exp, index) => (
                                <div key={index} className="border border-gray-600 p-4 rounded-lg">
                                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                                    <p className="text-gray-400">{exp.company} | {exp.duration}</p>
                                    <p className="text-gray-500">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mt-10">
                        <h3 className="text-3xl font-bold text-white mb-4">Education</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-4"></div>
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/60 transition-colors duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Bachelor of Science</h2>
                            <div className="mt-4 flex justify-between items-center">
                                <h2 className="text-xl py-2 font-semibold text-white">University of the Witwatersrand</h2>
                                <p className="text-gray-400">2022 - 2025</p>
                            </div>

                            {/* Majors Heading */}
                            <h4 className="text-lg font-semibold text-white mt-4">Majors:</h4>

                            {/* List of Majors */}
                            <div className="space-y-2 text-gray-400">
                                <p>~ Computer Science</p>
                                <p>~ Computer Applications</p>
                                <p>~ Information Systems</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column - About Me */}
                <div className="lg:sticky lg:top-32 h-fit order-1 lg:order-2">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-4"></div>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 space-y-6">
                            Hi again there :), I&#39;m Monare! My journey into the world of technology started at a young age when I became
                            fascinated with computers, apps, and how software can shape the way we live, work, and
                            connect. Inspired by my brother [slightly, lol], <a href="https://tebogoselahle.co.za" target="_blank"
                                                                className="text-blue-400 hover:underline">Tebogo
                            Selahle</a>, a software engineer, I developed a deep appreciation for problem-solving,
                            innovation, and the endless possibilities that come with writing code.
                        </p>
                        <p className="text-gray-300 mt-6">
                            Now in my final year as a Computer Science student, I have spent years sharpening my
                            technical skills and working on projects that transform ideas into functional, efficient,
                            and impactful solutions. My academic background has given me a strong foundation in
                            algorithms, data structures, and software development methodologies, which I continuously
                            apply to real-world scenarios. I am particularly passionate about artificial intelligence,
                            machine learning, and building scalable, high-performance applications that push the
                            boundaries of what technology can achieve.
                        </p>
                        <p className="text-gray-300 mt-6">
                            Over the past few years, I have gained valuable hands-on experience through internships,
                            personal projects, and collaborations with talented individuals. These experiences have
                            allowed me to work on real-world applications, optimize system performance, and explore
                            emerging technologies. I take pride in my ability to break down complex problems, design
                            creative solutions, and adapt to new challenges in a fast-paced environment.
                        </p>
                        <p className="text-gray-300 mt-6">
                            Beyond my technical expertise, I strongly believe in the power of teamwork, communication,
                            and continuous learning. I thrive in collaborative settings where ideas are shared,
                            innovation is encouraged, and problem-solving is a collective effort. Whether working on a
                            solo project or as part of a team, I bring a growth mindset and a strong drive to improve,
                            experiment, and push the limits of what’s possible.
                        </p>
                        <p className="text-gray-300 mt-6">
                            When I&#39;m not coding, I enjoy exploring new technologies, keeping up with the latest industry
                            trends, and engaging in discussions about the future of software development. I am always
                            open to new opportunities that allow me to expand my knowledge, contribute to meaningful
                            projects, and make a positive impact in the tech world.
                        </p>
                        <p className="text-gray-300 mt-6">
                            My ultimate goal is to evolve from a software developer into a product manager, where I can
                            combine my technical expertise with strategic thinking to build products that solve
                            real-world problems. With a passion for innovation and a drive to learn, I am excited for
                            the journey ahead in the ever-evolving landscape of technology.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}