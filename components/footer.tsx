export default function Footer() {
    return (
        <footer className="w-full py-6 bg-black text-white text-center mt-16 border-t border-white/20">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-sm">&copy; 2025 | Zero Rights Reserved :)</p>
                <nav className="mt-2">
                    <ul className="flex space-x-6 text-sm">
                        <li>
                            <a href="#aboutme" className="hover:underline">About Me</a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:underline">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
