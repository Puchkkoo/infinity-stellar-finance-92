
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const services = [
    {
      title: "Equity",
      description: "Trade in stocks across major global exchanges with competitive pricing",
      color: "bg-gradient-to-br from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop",
      url: "/services/equity"
    },
    {
      title: "F&O",
      description: "Access futures and options with advanced risk management tools",
      color: "bg-gradient-to-br from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1642543348772-28711d6c1ffd?q=80&w=1000&auto=format&fit=crop",
      url: "/services/fno"
    },
    {
      title: "International Investing",
      description: "Diversify your portfolio with investments across global markets",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop",
      url: "/services/international"
    },
    {
      title: "Tax Reports",
      description: "Automated tax reporting tools to simplify your financial compliance",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
      url: "/services/tax-reports"
    },
    {
      title: "Portfolio Management",
      description: "Expert portfolio management services tailored to your financial goals",
      color: "bg-gradient-to-br from-infinity-500 to-infinity-700",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      url: "/services/portfolio-management"
    },
    {
      title: "Coming Soon",
      description: "New innovative services are on their way to enhance your experience",
      color: "bg-gradient-to-br from-gray-500 to-gray-700",
      image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1000&auto=format&fit=crop",
      url: "/services/coming-soon"
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
            <Link 
              key={service.title} 
              to={service.url}
              className="feature-card group relative overflow-hidden rounded-xl h-64 flex flex-col justify-end hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
              </div>
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2 drop-shadow-md">{service.title}</h3>
                <p className="text-white/90 drop-shadow-md">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
