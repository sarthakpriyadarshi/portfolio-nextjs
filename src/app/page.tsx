"use client";

import useInkCursor from "@/hooks/inkCursor";
import { useRef } from "react";
import Hero from '@/components/Hero';
import Certification from '@/components/Certification';
import Education from '@/components/Education';
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import {NavigationMenu} from "@/components/NavigationMenu";

export default function Main() {
    const inkCursorComponent = useInkCursor();
    const containerRef = useRef(null); // Create a ref for the container
    return (

        <div ref={containerRef} className="relative">
            {/* Sections */}
            <NavigationMenu />
            <Hero/>
            <TechStack/>
            <Certification/>
            <Experience/>
            <Education/>
            <Project/>
            <Footer/>
            {/* Ink Cursor */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                {inkCursorComponent}
            </div>
        </div>
    );
}
