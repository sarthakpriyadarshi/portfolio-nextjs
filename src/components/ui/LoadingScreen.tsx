import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // For combining classNames
import GaugeCircle from "@/components/ui/gauge-circle"; // Import your GaugeCircle component

const LoadingScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0); // To track the loading progress

    // Simulate faster loading progress (you can replace this with your actual loading logic)
    useEffect(() => {
        const timer = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer); // Stop the interval when loading is complete
                    setIsLoading(false); // Hide the loading screen
                    return 100;
                }
                return prev + 20; // Increase progress by 20% every 300ms for faster loading
            });
        }, 300); // Simulate progress every 300ms for a faster loading speed

        return () => clearInterval(timer);
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
                    <div className="flex justify-center items-center flex-col">
                        {/* Show the GaugeCircle to indicate progress */}
                        <GaugeCircle
                            max={100}
                            min={0}
                            value={loadingProgress}
                            gaugePrimaryColor="rgb(223, 130, 22)" // Primary color for the gauge
                            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)" // Secondary color for the gauge
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default LoadingScreen;
