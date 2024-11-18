"use client";

import useInkCursor from "@/hooks/inkCursor";
import { useRef } from "react";
import Hero from '@/components/Hero';
import Certification from '@/components/Certification';
import Education from '@/components/Education';
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Main() {
    const inkCursorComponent = useInkCursor();
    const containerRef = useRef(null); // Create a ref for the container

    return (
        <div ref={containerRef} className="relative">
            {/* Sections */}
            <Hero />
            <TechStack />
            <Certification />
            <Experience />
            <Education />
            <Footer />
            {/* Ink Cursor */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
                {inkCursorComponent}
            </div>
        </div>
    );
}
