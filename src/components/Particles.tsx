"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

interface ParticlesBackgroundProps {
  particleColor?: string;
  particleAmount?: number;
  particleSize?: number;
  moveSpeed?: number;
  connectParticles?: boolean;
  connectionColor?: string;
  connectionDistance?: number;
  background?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  particleColor = "#FFD700",
  particleAmount = 80,
  particleSize = 3,
  moveSpeed = 0.5,
  connectParticles = true,
  connectionColor = "#FFD700",
  connectionDistance = 100,
  background = "transparent",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleAmount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * particleSize + 1,
        speedX: Math.random() * (moveSpeed * 2) - moveSpeed,
        speedY: Math.random() * (moveSpeed * 2) - moveSpeed,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off the walls
        if (p.x > canvas.width || p.x < 0) {
          p.speedX = -p.speedX;
        }
        if (p.y > canvas.height || p.y < 0) {
          p.speedY = -p.speedY;
        }

        // Draw particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        if (connectParticles) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              ctx.beginPath();
              ctx.strokeStyle = connectionColor;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = 1 - distance / connectionDistance;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    particleColor,
    particleAmount,
    particleSize,
    moveSpeed,
    connectParticles,
    connectionColor,
    connectionDistance,
    background,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
