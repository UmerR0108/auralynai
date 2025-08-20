import React, { useEffect, useRef } from 'react';

const AnimatedCosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars array
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Animation variables
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'hsla(268, 83%, 8%, 1)');
      gradient.addColorStop(0.5, 'hsla(222, 84%, 4%, 1)');
      gradient.addColorStop(1, 'hsla(260, 60%, 6%, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star, index) => {
        // Update star position
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }

        // Twinkle effect
        star.opacity = 0.3 + Math.sin(time * star.twinkleSpeed + index) * 0.5;

        // Draw star
        ctx.save();
        ctx.globalAlpha = Math.max(0, star.opacity);
        ctx.fillStyle = `hsl(268, 83%, ${70 + Math.sin(time + index) * 20}%)`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.save();
          ctx.globalAlpha = star.opacity * 0.3;
          ctx.fillStyle = `hsl(268, 83%, 80%)`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // Draw nebula clouds
      for (let i = 0; i < 3; i++) {
        const x = (canvas.width * 0.3 * i) + Math.sin(time * 0.5 + i) * 100;
        const y = canvas.height * 0.4 + Math.cos(time * 0.3 + i) * 50;
        
        const nebulaGradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
        nebulaGradient.addColorStop(0, `hsla(${260 + i * 20}, 80%, 60%, 0.1)`);
        nebulaGradient.addColorStop(1, 'hsla(268, 83%, 30%, 0)');
        
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(x - 200, y - 200, 400, 400);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedCosmicBackground;