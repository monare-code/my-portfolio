'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {toast} from "sonner";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)

            // Detect which section is in view
            const sections = ["aboutme", "skills", "projects", "contact"]
            let currentSection = ""

            for (const section of sections) {
                const el = document.getElementById(section)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section
                        break
                    }
                }
            }

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const email = "mc.selahle@gmail.com"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            toast.success("Email copied to clipboard!", {
                description: "You can now paste it anywhere.",
            })
        }).catch(err => {
            console.error('Failed to copy: ', err);
            toast.error("Failed to copy email");
        });
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-2 md:py-4">
                {/* Mobile View: Show name with labeled buttons */}
                <div className="flex flex-wrap items-center justify-between h-auto py-2 md:h-20 md:hidden">
                    <span className="text-xl font-medium text-white font-['League_Spartan'] mb-2 sm:mb-0">monare selahle</span>

                    {/* Mobile buttons with labels */}
                    <div className="flex items-center space-x-3 mt-1">
                        {/* Email copy button */}
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center px-3 py-2 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-lg"
                            aria-label="Copy email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span className="text-sm font-bold">Email</span>
                        </button>

                        {/* CV download button */}
                        <a
                            href="/myresume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-blue-500/50 hover:shadow-lg"
                            aria-label="Download CV"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span className="text-sm font-bold">CV</span>
                        </a>
                    </div>
                </div>

                {/* Desktop View: Full header */}
                <div className="hidden md:flex items-center justify-between h-20">
                    {/* Email and Copy Button Section */}
                    <div className="flex flex-row items-center justify-between gap-5">
                        <div
                            className="flex items-center space-x-4 bg-gray-100 pl-7 px-1.5 py-1.5 rounded-full shadow-md">
                            <span className="text-base items-center font-medium">{email}</span>
                            <button
                                onClick={copyToClipboard}
                                className="px-11 py-2 text-base font-bold bg-white rounded-full transition-all duration-300
                                shadow-md hover:shadow-purple-500/50 hover:shadow-xl hover:scale-105"
                            >
                                Copy
                            </button>
                        </div>

                        {/* CV Button with Glow */}
                        <div className="flex items-center space-x-4 bg-gray-100 px-1.5 py-3.5 rounded-full shadow-md">
                            <div>
                                <a
                                    href="/myresume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-3 text-base font-bold bg-white rounded-full shadow-md transition-all duration-300
                                    hover:shadow-blue-500/50 hover:shadow-xl hover:scale-105"
                                >
                                    CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <nav>
                        <ul className="flex space-x-6 text-xl font-sans font-normal tracking-wide transition-colors duration-300 text-white">
                            {[
                                {name: "ABOUT ME", href: "#aboutme"},
                                {name: "SKILLS", href: "#skills"},
                                {name: "PROJECTS", href: "#projects"},
                                {name: "CONTACT ME", href: "#contact"}
                            ].map((item) => (
                                <li key={item.name} className="relative">
                                    <Link
                                        href={item.href}
                                        className={`relative group font-medium transition-all duration-300 ${
                                            activeSection === item.href.replace("#", "")
                                                ? "text-white"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        {/* Gradient on hover */}
                                        <span
                                            className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                            {item.name}
                                        </span>

                                        {/* Active Page Underline */}
                                        {activeSection === item.href.replace("#", "") && (
                                            <span
                                                className="absolute left-0 bottom-[-4px] h-[3px] w-6 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Centered Divider Line Below Header */}
            <div className="container mx-auto px-4">
                <div className="w-full h-[1px] bg-gray-300"></div>
            </div>
        </header>
    )
}