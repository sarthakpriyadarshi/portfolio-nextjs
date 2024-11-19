"use client";

import Lenis from "@studio-freight/lenis";
import useInkCursor from "@/hooks/inkCursor";
import { useRef, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Certification from "@/components/Certification";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import { NavigationMenu } from "@/components/NavigationMenu";
import LoadingScreen from "@/components/ui/LoadingScreen";
import 'react-perfect-scrollbar/dist/css/styles.css';
import Particles from '@/components/ui/particles'

export default function Main() {
    const inkCursorComponent = useInkCursor();
    const containerRef = useRef(null);

    const lenis = useRef<Lenis | null>(null);

    // State to check if the device is desktop
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Function to check if the device is desktop
        const checkDesktopDevice = () => {
            setIsDesktop(window.innerWidth > 768); // You can adjust this breakpoint as needed
        };

        // Initial check
        checkDesktopDevice();

        // Add event listener for resizing
        window.addEventListener('resize', checkDesktopDevice);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', checkDesktopDevice);
        };
    }, []);

    useEffect(() => {
        lenis.current = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        });

        const animate = (time: number) => {
            lenis.current?.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            lenis.current?.destroy();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative ">
            <LoadingScreen />
            {/* Sections wrapped with SimpleBar */}
            <NavigationMenu lenis={lenis} />
            <Hero />
            <TechStack />
            <Certification />
            <Experience />
            <Education />
            <Project />
            <Footer />

            {/* Ink Cursor - Hidden on smaller devices */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
                {inkCursorComponent}
            </div>

            {/* Particles only rendered on desktop devices */}
            {isDesktop && (
                <Particles
                    className="absolute inset-0"
                    quantity={550}
                    ease={80}
                    size={0.8}
                    color="#ffffff"
                    refresh
                />
            )}
        </div>
    );
}
