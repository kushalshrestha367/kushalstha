'use client';

import { headerItems, projects } from "@/constants/constant";
import Image from "next/image";

const Projects: React.FC = () => {
    return (
        <section
            id={headerItems.projects.page}
            className="container max-w-6xl mx-auto px-4 flex flex-col text-center justify-center items-center my-20"
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl my-6 mb-10">Projects</h1>
            {/* Grid layout for responsive images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-8">
                {Object.keys(projects).map((project) => (
                    <div
                        key={project}
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:scale-105 transition-transform duration-300"
                    >
                        <Image
                            src={projects[project as keyof Projects].image}
                            alt="project image"
                            width={500}
                            height={600}
                            className="cursor-pointer rounded-md w-full h-auto"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
