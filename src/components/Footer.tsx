import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons
import ShinyButton from '@/components/ui/shiny-button'
import ShineBorder from "@/components/ui/shine-border";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

export default function Footer() {
    return (
        <div className="min-h-72 bg-background flex items-center justify-center py-7 px-4 md:px-10" id="footer">
            <ShineBorder
                className="relative flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center overflow-hidden rounded-lg border p-6 shadow-xl z-10"
                color={['#d5c596', '#ffbe7b', '#f3be16']}
            >
                <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center">
                        cyberol.codes
                    </h2>
                    <div className="text-center">
                        <h3 className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
                            Interested in collaborating or want to know more about my work? Reach out to me directly!
                        </h3>

                        <div className="flex justify-center items-center space-x-4">
                            <a
                                href="tel:+917017714872"
                                target="_blank"
                                style={{textDecoration: 'none'}}
                            >
                                <ShinyButton text="Contact Me"/>
                            </a>
                            <CopyEmailButton/>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mb-8 mt-10 relative z-10">
                        <a
                            href="https://github.com/sarthakpriyadarshi" // Replace with your GitHub URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-xl"
                        >
                            <FaGithub
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition duration-300"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sarthakpriyadarshi" // Replace with your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-xl"
                        >
                            <FaLinkedin
                                className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition duration-300"/>
                        </a>
                    </div>
                    <h3 className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4 text-center">
                        Made with ❤️ and Next.js by Sarthak Priyadarshi © 2024
                    </h3>
                </div>
            </ShineBorder>
        </div>

    );
}
