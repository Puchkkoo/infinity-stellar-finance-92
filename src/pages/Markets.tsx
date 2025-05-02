
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MarketsOverview } from "@/components/markets-overview";

const Markets = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-10 md:py-20 bg-gradient-to-b from-background to-infinity-950/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Global Markets</h1>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Explore real-time market data from major financial markets around the world. Click on different regions to view detailed information.
            </p>
          </div>
        </section>
        
        <MarketsOverview />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Market Insights</h2>
              <p className="section-subtitle">
                In-depth analysis and insights from our expert financial analysts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                <h3 className="text-xl font-bold mb-2">Market Trends</h3>
                <p className="text-muted-foreground mb-4">
                  Stay ahead of market movements with our trend analysis and forecasting tools. Our experts analyze patterns and predict potential market shifts.
                </p>
                <a href="#" className="text-infinity-600 dark:text-infinity-400 font-medium">Learn more →</a>
              </div>
              
              <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                <h3 className="text-xl font-bold mb-2">Economic Calendar</h3>
                <p className="text-muted-foreground mb-4">
                  Never miss important economic events that impact markets worldwide. Our comprehensive calendar keeps you informed of all key dates.
                </p>
                <a href="#" className="text-infinity-600 dark:text-infinity-400 font-medium">Learn more →</a>
              </div>
              
              <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                <h3 className="text-xl font-bold mb-2">Research Reports</h3>
                <p className="text-muted-foreground mb-4">
                  Access in-depth research reports covering various sectors, companies, and market conditions to make informed investment decisions.
                </p>
                <a href="#" className="text-infinity-600 dark:text-infinity-400 font-medium">Learn more →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Markets;
