'use client';

import { headerItems, projects } from "@/constants/constant";
import Image from "next/image";

const Projects: React.FC = () => {
    return (
        <section
            id={headerItems.projects.page}
            className="md:h-screen flex flex-col text-center justify-center items-center my-40"
        >
            <h1 className={"text-6xl my-6"}>Projects</h1>
            <div className="flex break-words text-center mt-3 flex-wrap justify-center items-center">
                {
                    Object.keys(projects).map(project => (
                        <div
                            key={project}
                            className="bg-white shadow-lg rounded-lg overflow-hidden m-4 p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={projects[project as keyof Projects].image}
                                alt="project image"
                                width={500}
                                height={600}
                                className="cursor-pointer rounded-md"
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;
