import React, { useEffect, useRef } from 'react';

const GrainyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate grainy effect with noise
    const generateGrain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame

      // Draw random noise for grainy effect
      for (let i = 0; i < canvas.width; i++) {
        for (let j = 0; j < canvas.height; j++) {
          const gray = Math.random() * 50 + 20; // Random gray shades
          ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
          ctx.fillRect(i, j, 1, 1);
        }
      }
    };

    // Draw moving grid lines
    let offset = 0;
    const drawGrid = () => {
      const gridSpacing = 40;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;
      
      // Draw vertical lines
      for (let x = offset; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = offset; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      offset += 1; // Move the grid lines
      if (offset > gridSpacing) {
        offset = 0; // Reset position to create continuous movement
      }
    };

    const animate = () => {
      generateGrain(); // Create the grain texture
      drawGrid(); // Draw grid lines with movement
      requestAnimationFrame(animate); // Keep animating
    };

    animate(); // Start animation

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[-1]" />;
};

export default GrainyBackground;
