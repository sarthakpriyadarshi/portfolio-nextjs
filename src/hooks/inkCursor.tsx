import React, { useRef, useEffect } from "react";

// Define types for pointer and trail points
interface Pointer {
    x: number | null;
    y: number | null;
}

interface TrailPoint {
    x: number;
    y: number;
    dx: number;
    dy: number;
}

const useInkCursor = () => {
    // Use references for the canvas, context, and other data
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const pointerRef = useRef<Pointer>({ x: null, y: null });
    const trailRef = useRef<TrailPoint[]>([]);
    const paramsRef = useRef({
        pointsNumber: 40,
        widthFactor: 0.3,
        mouseThreshold: 0.6,
        spring: 0.4,
        friction: 0.5,
    });

    useEffect(() => {
        // Initialize the pointer at the center of the screen
        pointerRef.current = {
            x: 0.5 * window.innerWidth,
            y: 0.5 * window.innerHeight,
        };

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d"); // Safe check for canvas context
        if (ctx) {
            ctxRef.current = ctx;
        }

        // Initialize trail array with points
        const trail = new Array(paramsRef.current.pointsNumber).fill(null).map(() => ({
            x: pointerRef.current.x ?? 0,
            y: pointerRef.current.y ?? 0,
            dx: 0,
            dy: 0,
        }));
        trailRef.current = trail;

        const updateMousePosition = (x: number, y: number) => {
            pointerRef.current.x = x;
            pointerRef.current.y = y;
        };

        const handleMouseMove = (e: MouseEvent) => {
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        };

        const setupCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const update = () => {
            if (ctxRef.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const gradient = ctxRef.current.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, "#df8216");
                gradient.addColorStop(1, "#ffbe7b");

                ctxRef.current.strokeStyle = gradient;

                trailRef.current.forEach((p, pIdx) => {
                    const prev = pIdx === 0 ? pointerRef.current : trailRef.current[pIdx - 1];
                    const spring = pIdx === 0 ? 0.4 * paramsRef.current.spring : paramsRef.current.spring;

                    p.dx += (prev.x! - p.x) * spring;  // Ensure 'x' and 'y' are not null using non-null assertion
                    p.dy += (prev.y! - p.y) * spring;
                    p.dx *= paramsRef.current.friction;
                    p.dy *= paramsRef.current.friction;
                    p.x += p.dx;
                    p.y += p.dy;
                });

                ctxRef.current.lineCap = "round";
                ctxRef.current.beginPath();
                ctxRef.current.moveTo(trailRef.current[0].x, trailRef.current[0].y);

                for (let i = 1; i < trailRef.current.length - 1; i++) {
                    const xc = 0.5 * (trailRef.current[i].x + trailRef.current[i + 1].x);
                    const yc = 0.5 * (trailRef.current[i].y + trailRef.current[i + 1].y);

                    ctxRef.current.quadraticCurveTo(trailRef.current[i].x, trailRef.current[i].y, xc, yc);
                    ctxRef.current.lineWidth = paramsRef.current.widthFactor * (paramsRef.current.pointsNumber - i);
                    ctxRef.current.stroke();
                }
                ctxRef.current.lineTo(trailRef.current[trailRef.current.length - 1].x, trailRef.current[trailRef.current.length - 1].y);
                ctxRef.current.stroke();

                window.requestAnimationFrame(update);
            }
        };

        setupCanvas();
        update();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("resize", setupCanvas);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("resize", setupCanvas);
        };

    }, []);

    return <canvas ref={canvasRef} className="h-screen w-screen" />;
};

export default useInkCursor;
