
import { FileAudio } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
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
            <FileAudio className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2 drop-shadow-md group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-white/90 drop-shadow-md max-w-[90%]">{service.description}</p>
                <div className="mt-3 flex items-center font-medium text-sm opacity-0 group-hover:opacity-100 transform -translate-x-5 group-hover:translate-x-0 transition-all duration-300">
                  Explore <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="absolute top-0 right-0 m-4 bg-white/90 dark:bg-infinity-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-3 group-hover:translate-y-0">
                <div className="w-8 h-8 flex items-center justify-center">
                  {service.title === "Equity" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 15L11 11L15 15L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {service.title === "F&O" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V17M12 7V17M16 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 13H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {service.title === "International Investing" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 3C14.5 6 15.5 9 15.5 12C15.5 15 14.5 18 12 21" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 3C9.5 6 8.5 9 8.5 12C8.5 15 9.5 18 12 21" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                  {service.title === "Tax Reports" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {service.title === "Portfolio Management" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 13V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 16.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 13H6C5.44772 13 5 13.4477 5 14V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V14C19 13.4477 18.5523 13 18 13Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                  {service.title === "Coming Soon" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
