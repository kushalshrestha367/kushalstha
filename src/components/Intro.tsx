"use client";
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Intro: React.FC = () => {
    return (
        <section id={headerItems.home.page}
            className="h-screen flex flex-col md:flex-row md:text-start text-center justify-center items-center text-xl "
        >
            <div>
                <Image
                    src={userInfo.picture}
                    alt="dp"
                    width={300}
                    height={300}
                    className="rounded-full shadow-2xl mt-10"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className='text-7xl uppercase hidden md:block'>Web Developer</h1>
                <h1 className="text-2xl mt-5 md:text-3xl">
                    Hi, I&apos;m <span className="text-blue-700 text-3xl md:text-3xl ">{userInfo.name}</span>
                </h1>
                <p
                    className="mt-4 mb-4 text-base text-bold md:text-base lg:text-lg"
                    dangerouslySetInnerHTML={{ __html: userInfo.heading }}
                />

                <ScrollLink
                    to={headerItems.projects.page}
                    className="px-4 py-2 cursor-pointer rounded-md border border-black bg-teal-600 text-neutral-100 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                    spy={true}
                    smooth={true}
                >
                    Projects
                </ScrollLink>
                <div className="mt-10">
                    <h1 className="font-bold text-xl mb-4">&nbsp;Find me on:</h1>
                    {/* Center icons in mobile view */}
                    <div className="flex justify-center md:justify-start space-x-6">
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
            </div>
        </section>
    );
}

export default Intro;
