import React from "react";
import { cn } from "@/lib/utils"; // For combining classNames
import { useEffect, useState } from "react";

const LoadingScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulating loading time (you can replace this with your actual loading logic)
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000); // Set 3 seconds for loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && (
                <div
                    className={cn(
                        "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",
                        "backdrop-blur-xl" // Add a backdrop blur effect
                    )}
                >
                    <div className="text-center text-white z-50">
                        <h2 className="text-xl font-bold mb-4">
                            Please hold on, we know dark theme is best!
                        </h2>
                        <p className="font-change">Just a moment, applying right there...</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoadingScreen;
