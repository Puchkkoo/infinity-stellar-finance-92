
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GalaxyBackground } from "./galaxy-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-infinity-950/20 min-h-[90vh] flex items-center">
      {/* Animated galaxy background */}
      <GalaxyBackground />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-block">
            <div className="px-4 py-1 rounded-full bg-infinity-500/10 text-infinity-600 dark:text-infinity-400 text-sm font-medium animate-fade-in">
              The Future of Financial Technology
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-infinity-600 to-infinity-800 dark:from-infinity-400 dark:to-infinity-600">
              Infinity
            </span>
            <span> Financial Capital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Empowering individuals through innovative financial solutions. 
            Where modern technology meets traditional financial wisdom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/flamingo">Explore Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
           <div className="flex flex-col items-center">
              <div className="font-bold text-3xl sm:text-4xl mb-1"></div>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-3xl sm:text-4xl mb-1"></div>
              <p className="text-sm text-muted-foreground"></p>
            </div> 
            <div className="flex flex-col items-center">
              <div className="font-bold text-3xl sm:text-4xl mb-1">128+</div>
              <p className="text-sm text-muted-foreground">Global Markets</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-3xl sm:text-4xl mb-1">24/7</div>
              <p className="text-sm text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle wave divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
