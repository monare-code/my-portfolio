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
                            I am Monare, a passionate and driven final-year Computer Science student with a keen interest in software development, artificial intelligence, and machine learning. Throughout my academic journey, I have honed my skills in various programming languages and technologies, with a particular focus on Java, C#, TypeScript, and Python. My educational background has provided me with a solid foundation in computer science principles, algorithms, and data structures, which I continuously apply to solve complex problems.
                        </p>
                        <p className="text-gray-300 mt-6">
                            Over the past few years, I have had the privilege of gaining hands-on experience through internships and projects that have allowed me to collaborate with talented professionals, work on real-world applications, and enhance my technical skills. I am particularly passionate about building scalable and efficient software solutions, optimizing system performance, and leveraging the power of data to create impactful applications.
                        </p>
                        <p className="text-gray-300 mt-6">
                            In addition to my technical abilities, I am a strong advocate for teamwork and collaboration. I believe in the power of collective problem-solving and enjoy working in dynamic, fast-paced environments where innovation thrives. I have always been eager to learn new technologies and methodologies, and I approach every project with a growth mindset.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}