import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black  py-6 mt-10 w-full">
            <div className="w-full flex flex-col items-center px-4 md:px-10">
                <p className="md:text-xl">&copy; {new Date().getFullYear()} Kushal Shrestha. All rights reserved.</p>

                {/* Social Media Links */}
                <div className="flex mt-3 space-x-4">
                    <Link href="https://facebook.com" target="_blank">
                        <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
                    </Link>
                    <Link href="https://github.com" target="_blank">
                        <Github className="w-6 h-6 hover:text-gray-400 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
