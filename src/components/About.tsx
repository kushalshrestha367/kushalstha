"use client";
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import { useEffect, useState } from "react";

const About: React.FC = () => {
    const [aboutText, setAboutText] = useState<string>("");

    // This ensures that the dangerous HTML is injected only after component mounts.
    useEffect(() => {
        if (userInfo.about) {
            setAboutText(userInfo.about);
        }
    }, []);

    return (
        <section
            id={headerItems.about.page}
            className="md:h-full flex flex-col md:flex-row md:text-start text-center justify-center items-center"
        >
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-6xl my-6 ">About</h1>
                <h2 className="text-3xl my-4">Get to Know me!</h2>
                <p
                    className="[&>p]:mt-5 mt-4 mb-4 text-base text-bold md:text-base lg:text-lg"

                    dangerouslySetInnerHTML={{ __html: aboutText }}
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <Image
                    src={userInfo.picture}
                    alt="dp"
                    width={300}
                    height={300}
                    className="m-auto"
                />
                <div className="mt-3 w-3/4 break-words">
                    {userInfo.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
