import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black w-full relative pt-6 pb-4 mt-10">
            <div className="w-full flex flex-col items-center text-center px-4 sm:px-6 md:px-10 lg:px-16">
                {/* Copyright Text */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    &copy; {new Date().getFullYear()} Kushal Shrestha. All rights reserved.
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center items-center mt-4 space-x-5">
                    <Link href="https://www.facebook.com/kushal.shrestha.967806" target="_blank">
                        <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
                    </Link>
                    <Link href="https://www.instagram.com/kushalshrestha4279/profilecard/?igsh=Y205OGQ1MzI0MzBi" target="_blank">
                        <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
                    </Link>
                    <Link href="https://github.com/kushalshrestha367" target="_blank">
                        <Github className="w-6 h-6 hover:text-gray-400 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
