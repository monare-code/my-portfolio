import { Metadata } from 'next'
import Header from '@/components/header'
import Introduction from '@/components/introduction'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import AboutMe from "@/components/aboutme";
//import Footer from "@/components/footer";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: 'MS - Computer Science Portfolio',
    description: 'Final year computer science student portfolio showcasing skills and projects.',
}

export default function Home() {
    return (
        <>
            <Toaster position="bottom-right" />
            <Header/>
            <main className="relative min-h-screen pt-16">
                <div className="fixed top-0 left-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

                <div className="container mx-auto">
                    <Introduction/>
                    <hr className="border-t border-white opacity-50 w-4/5 mx-auto"/>
                    <section id="aboutme" className="py-20 scroll-mt-[80px]">
                        <AboutMe/>
                    </section>
                    <hr className="border-t border-white opacity-50 w-4/5 mx-auto"/>
                    <section id="skills" className="py-20 scroll-mt-[80px]">
                        <Skills/>
                    </section>
                    <hr className="border-t border-white opacity-50 w-4/5 mx-auto"/>
                    <section id="projects" className="py-20 scroll-mt-[80px]">
                        <Projects/>
                    </section>
                    <hr className="border-t border-white opacity-50 w-4/5 mx-auto"/>
                    <section id="contact" className="py-20 scroll-mt-[80px]">
                        <Contact/>
                    </section>
                </div>
            </main>
            {/*<Footer/>*/}
        </>
    );
}
