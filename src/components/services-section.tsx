
import { Rocket } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Equity",
      description: "Trade in stocks across major global exchanges with competitive pricing",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      title: "F&O",
      description: "Access futures and options with advanced risk management tools",
      color: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      title: "International Investing",
      description: "Diversify your portfolio with investments across global markets",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      title: "Tax Reports",
      description: "Automated tax reporting tools to simplify your financial compliance",
      color: "bg-gradient-to-br from-red-500 to-pink-500"
    },
    {
      title: "Portfolio Management",
      description: "Expert portfolio management services tailored to your financial goals",
      color: "bg-gradient-to-br from-infinity-500 to-infinity-700"
    },
    {
      title: "Coming Soon",
      description: "New innovative services are on their way to enhance your experience",
      color: "bg-gradient-to-br from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-20 bg-infinity-50/50 dark:bg-infinity-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Rocket className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive financial services designed to meet your diverse investment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="feature-card group relative overflow-hidden"
            >
              <div className={`absolute inset-0 ${service.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-xl`}></div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
