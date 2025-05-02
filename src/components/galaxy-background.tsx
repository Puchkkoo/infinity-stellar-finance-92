
import { useEffect, useRef } from "react";

export function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const createStars = () => {
      // Clear existing stars first
      const existingStars = container.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.7 + 0.3;
        
        // Random animation delay
        const animDelay = Math.random() * 5;
        
        star.style.cssText = `
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          opacity: ${opacity};
          animation: star-blink 3s infinite ease-in-out;
          animation-delay: ${animDelay}s;
        `;
        
        container.appendChild(star);
      }
    };
    
    createStars();
    
    // Recreate stars when window resizes
    const handleResize = () => {
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Nebula-like gradients */}
      <div className="absolute w-1/2 h-1/2 top-0 left-0 rounded-full 
        bg-gradient-radial from-infinity-500/30 to-transparent 
        blur-[100px] transform -translate-x-1/2 -translate-y-1/3 animate-drift"></div>
      
      <div className="absolute w-1/2 h-1/2 bottom-0 right-0 rounded-full 
        bg-gradient-radial from-infinity-800/20 to-transparent 
        blur-[100px] transform translate-x-1/4 translate-y-1/3 animate-drift" 
        style={{ animationDelay: "-5s" }}></div>
      
      <div className="absolute w-1/3 h-1/3 top-1/2 left-1/2 rounded-full 
        bg-gradient-radial from-gold-500/20 to-transparent 
        blur-[80px] transform -translate-x-1/2 -translate-y-1/2 animate-drift" 
        style={{ animationDelay: "-10s" }}></div>
      
      {/* Galaxy spiral simulation */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
        border border-white/10 rounded-full opacity-10 animate-galaxy-spin"></div>
      
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 
        border border-white/10 rounded-full opacity-20 animate-galaxy-spin"
        style={{ animationDuration: '100s' }}></div>
      
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 
        border border-white/10 rounded-full opacity-30 animate-galaxy-spin"
        style={{ animationDuration: '80s' }}></div>
    </div>
  );
}
