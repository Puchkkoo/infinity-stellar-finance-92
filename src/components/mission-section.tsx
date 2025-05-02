
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function MissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Our Mission</h2>
          
          <p className="text-2xl md:text-3xl font-serif text-foreground/90 mb-8 leading-relaxed">
            "When Finance Stops, We Take Over."
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            At Infinity, we are committed to empowering individuals and shaping the future of global finance through innovative technology, exceptional service, and unwavering integrity.
          </p>
          
          <Button size="lg" asChild>
            <Link to="/mission">Learn More About Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
