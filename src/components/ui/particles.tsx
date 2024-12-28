'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface MousePosition {
   x: number;
   y: number;
}

function useMousePosition(): MousePosition {
   const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
         setMousePosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return mousePosition;
}

interface ParticlesProps {
   className?: string;
   quantity?: number;
   staticity?: number;
   ease?: number;
   size?: number;
   refresh?: boolean;
   color?: string;
   vx?: number;
   vy?: number;
}

function hexToRgb(hex: string): number[] {
   let cleanHex = hex.replace('#', '');

   if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map((char) => char + char).join('');
   }

   const hexInt = parseInt(cleanHex, 16);
   return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

const Particles: React.FC<ParticlesProps> = ({
                                                className = '',
                                                quantity = 100,
                                                staticity = 50,
                                                ease = 50,
                                                size = 0.4,
                                                refresh = false,
                                                color = '#ffffff',
                                                vx = 0,
                                                vy = 0,
                                             }) => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const canvasContainerRef = useRef<HTMLDivElement>(null);
   const context = useRef<CanvasRenderingContext2D | null>(null);
   const circles = useRef<Circle[]>([]);
   const mousePosition = useMousePosition();
   const mouse = useRef({ x: 0, y: 0 });
   const canvasSize = useRef({ w: 0, h: 0 });
   const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
   const rgb = hexToRgb(color);

   useEffect(() => {
      if (canvasRef.current) {
         context.current = canvasRef.current.getContext('2d');
      }

      initCanvas();
      window.addEventListener('resize', initCanvas);

      return () => {
         window.removeEventListener('resize', initCanvas);
      };
   }, [color, refresh]);

   useEffect(() => {
      const updateMouse = () => {
         if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;
            const x = mousePosition.x - rect.left - w / 2;
            const y = mousePosition.y - rect.top - h / 2;
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
               mouse.current.x = x;
               mouse.current.y = y;
            }
         }
      };
      updateMouse();
   }, [mousePosition]);

   const initCanvas = useCallback(() => {
      resizeCanvas();
      createParticles();
   }, []);

   const resizeCanvas = useCallback(() => {
      if (canvasContainerRef.current && canvasRef.current) {
         const { offsetWidth, offsetHeight } = canvasContainerRef.current;
         canvasSize.current = { w: offsetWidth, h: offsetHeight };

         canvasRef.current.width = offsetWidth * dpr;
         canvasRef.current.height = offsetHeight * dpr;
         canvasRef.current.style.width = `${offsetWidth}px`;
         canvasRef.current.style.height = `${offsetHeight}px`;

         if (context.current) {
            context.current.scale(dpr, dpr);
         }

         circles.current.length = 0;
      }
   }, [dpr]);

   interface Circle {
      x: number;
      y: number;
      translateX: number;
      translateY: number;
      size: number;
      alpha: number;
      targetAlpha: number;
      dx: number;
      dy: number;
      magnetism: number;
   }

   const createParticles = useCallback(() => {
      for (let i = 0; i < quantity; i++) {
         circles.current.push(generateCircle());
      }
      animate();
   }, [quantity]);

   const generateCircle = (): Circle => {
      const { w, h } = canvasSize.current;
      return {
         x: Math.random() * w,
         y: Math.random() * h,
         translateX: 0,
         translateY: 0,
         size: Math.random() * 2 + size,
         alpha: 0,
         targetAlpha: Math.random() * 0.6 + 0.1,
         dx: (Math.random() - 0.5) * 0.1,
         dy: (Math.random() - 0.5) * 0.1,
         magnetism: Math.random() * 4 + 0.1,
      };
   };

   const drawCircle = (circle: Circle) => {
      if (context.current) {
         const { x, y, translateX, translateY, size, alpha } = circle;
         context.current.beginPath();
         context.current.arc(x + translateX, y + translateY, size, 0, 2 * Math.PI);
         context.current.fillStyle = `rgba(${rgb.join(', ')}, ${alpha})`;
         context.current.fill();
      }
   };

   const animate = useCallback(() => {
      if (!context.current) return;

      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

      circles.current.forEach((circle) => {
         circle.x += circle.dx + vx;
         circle.y += circle.dy + vy;

         circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
         circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

         if (circle.alpha < circle.targetAlpha) {
            circle.alpha += 0.02;
         }

         drawCircle(circle);

         if (
             circle.x < -circle.size ||
             circle.x > canvasSize.current.w + circle.size ||
             circle.y < -circle.size ||
             circle.y > canvasSize.current.h + circle.size
         ) {
            Object.assign(circle, generateCircle());
         }
      });

      requestAnimationFrame(animate);
   }, [ease, staticity, vx, vy]);

   return (
       <div className={className} ref={canvasContainerRef} aria-hidden="true">
          <canvas ref={canvasRef} />
       </div>
   );
};

export default Particles;
