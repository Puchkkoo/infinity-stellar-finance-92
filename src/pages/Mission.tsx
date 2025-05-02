
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const Mission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-background to-infinity-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Our Mission</h1>
              <div className="text-2xl md:text-3xl font-serif text-center text-foreground/90 mb-8 leading-relaxed">
                "When Finance Stops, We Take Over."
              </div>
              
              <div className="space-y-12">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    At Infinity, our mission is to revolutionize the financial landscape through cutting-edge technology and unwavering commitment to our customers. We believe that financial services should be accessible, transparent, and empowering for everyone.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our journey is guided by a deep commitment to innovation and excellence. We strive to build financial tools and platforms that not only meet the current needs of our customers but anticipate the future of finance in an increasingly digital world.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Core Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Innovation</h3>
                      <p className="text-muted-foreground">
                        We constantly push the boundaries of what's possible in financial technology, developing solutions that transform how people interact with financial services.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Integrity</h3>
                      <p className="text-muted-foreground">
                        We conduct our business with unwavering honesty, transparency, and ethical standards, ensuring that our customers can trust us with their financial needs.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Inclusion</h3>
                      <p className="text-muted-foreground">
                        We believe in democratizing finance, making sophisticated financial tools and services accessible to everyone regardless of their background or experience level.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Impact</h3>
                      <p className="text-muted-foreground">
                        We measure our success not just by our financial performance, but by the positive difference we make in our customers' financial lives and in the global financial ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Our Vision for the Future</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We envision a future where financial services are seamlessly integrated into people's lives, where complex financial decisions are simplified through intelligent technology, and where everyone has the tools and knowledge to achieve financial well-being.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through our suite of products - Flamingo, Synapse, Sponge, and The Indian Street - we are building an ecosystem that supports every aspect of our customers' financial journey, from everyday trading to deep market insights, from productivity tools to community support.
                  </p>
                </div>
                
                <div className="border-t border-border pt-12">
                  <h2 className="text-2xl font-serif font-bold mb-4">Our Commitment to You</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    When traditional finance falls short, when markets become unpredictable, when complexity threatens to overwhelm - that's when Infinity steps in. Our motto, "When Finance Stops, We Take Over," is more than just words; it's our promise to be there for our customers through every financial challenge and opportunity.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are committed to continuous innovation, exceptional service, and unwavering dedication to our customers' financial success. This is not just what we do; it's who we are.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xl font-serif italic">
                    "At Infinity, we don't just adapt to the future of finance; we create it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
