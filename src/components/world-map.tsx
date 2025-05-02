
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function WorldMap() {
  // Sample market data
  const markets = {
    india: { 
      name: "Indian Markets", 
      index: "NIFTY 50", 
      value: "21,843.24", 
      change: "+1.25%",
      description: "India's premier stock market index representing the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange."
    },
    usa: { 
      name: "USA Markets", 
      index: "S&P 500", 
      value: "5,143.12", 
      change: "+0.75%",
      description: "The Standard & Poor's 500 is a stock market index tracking the stock performance of 500 large companies listed on exchanges in the United States."
    },
    europe: { 
      name: "European Markets", 
      index: "STOXX 600", 
      value: "512.34", 
      change: "+0.42%",
      description: "The STOXX Europe 600 represents large, mid and small capitalization companies across 17 countries of the European region."
    },
    china: { 
      name: "Chinese Markets", 
      index: "Shanghai", 
      value: "3,291.19", 
      change: "-0.18%",
      description: "The Shanghai Composite Index is a stock market index of all stocks that are traded at the Shanghai Stock Exchange."
    },
    japan: { 
      name: "Japanese Markets", 
      index: "Nikkei 225", 
      value: "39,523.55", 
      change: "+1.10%",
      description: "The Nikkei 225 is a stock market index for the Tokyo Stock Exchange, representing the top 225 blue chip companies listed on the TSE."
    },
    uk: { 
      name: "UK Markets", 
      index: "FTSE 100", 
      value: "8,142.18", 
      change: "+0.38%",
      description: "The Financial Times Stock Exchange 100 Index is a share index of the 100 companies listed on the London Stock Exchange with the highest market capitalization."
    },
    germany: { 
      name: "German Markets", 
      index: "DAX", 
      value: "18,321.05", 
      change: "+0.62%",
      description: "The DAX is a blue chip stock market index consisting of the 40 major German companies trading on the Frankfurt Stock Exchange."
    },
    brazil: { 
      name: "Brazilian Markets", 
      index: "Bovespa", 
      value: "129,324.15", 
      change: "-0.22%",
      description: "The Bovespa Index is the benchmark index of about 60 stocks that are traded on the B3 (Brasil Bolsa Balcão), representing the Brazilian economy."
    },
    australia: { 
      name: "Australian Markets", 
      index: "ASX 200", 
      value: "7,835.45", 
      change: "+0.91%",
      description: "The S&P/ASX 200 index is a market-capitalization weighted and float-adjusted stock market index of stocks listed on the Australian Securities Exchange."
    }
  };

  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  // Function to determine the position of clickable hotspots on the map
  const getMarketPosition = (market: string) => {
    switch (market) {
      case 'india':
        return 'top-[45%] left-[68%]';
      case 'usa':
        return 'top-[35%] left-[22%]';
      case 'europe':
        return 'top-[30%] left-[50%]';
      case 'china':
        return 'top-[40%] left-[75%]';
      case 'japan':
        return 'top-[38%] left-[82%]';
      case 'uk':
        return 'top-[25%] left-[45%]';
      case 'germany':
        return 'top-[28%] left-[50%]';
      case 'brazil':
        return 'top-[65%] left-[32%]';
      case 'australia':
        return 'top-[70%] left-[85%]';
      default:
        return '';
    }
  };

  // Function to determine marker color based on change value
  const getMarkerColor = (market: string) => {
    const change = markets[market as keyof typeof markets]?.change;
    if (!change) return 'bg-gray-400';
    
    return change.startsWith('+') ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className="relative w-full aspect-[16/9] bg-infinity-100 dark:bg-infinity-900/30 rounded-xl overflow-hidden">
      {/* World map image */}
      <img 
        src="/lovable-uploads/e5337efd-8bfa-4ae7-9c77-4dc1b265c84a.png" 
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-infinity-100/40 dark:to-infinity-900/50"></div>

      {/* Market hotspots */}
      {Object.keys(markets).map((market) => (
        <Popover key={market}>
          <PopoverTrigger asChild>
            <button
              className={`absolute ${getMarketPosition(market)} w-5 h-5 md:w-6 md:h-6 rounded-full ${getMarkerColor(market)} animate-pulse shadow-lg hover:w-7 hover:h-7 md:hover:w-8 md:hover:h-8 transition-all duration-200 z-10 border-2 border-white/70`}
              onClick={() => setSelectedMarket(market)}
              aria-label={markets[market as keyof typeof markets]?.name}
            />
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0 backdrop-blur-sm bg-white/90 dark:bg-infinity-900/90 border border-infinity-200 dark:border-infinity-700 shadow-xl rounded-xl overflow-hidden">
            <div className="relative overflow-hidden">
              <div className={`absolute inset-0 opacity-10 ${getMarkerColor(market)} blur-md`}></div>
              <div className="p-4 space-y-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getMarkerColor(market)}`}></div>
                  <h3 className="font-serif font-bold text-xl text-infinity-800 dark:text-infinity-200">
                    {markets[market as keyof typeof markets]?.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {markets[market as keyof typeof markets]?.index}
                </p>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">
                    {markets[market as keyof typeof markets]?.value}
                  </p>
                  <p className={`font-medium text-lg ${markets[market as keyof typeof markets]?.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {markets[market as keyof typeof markets]?.change}
                  </p>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-infinity-200 dark:via-infinity-700 to-transparent my-2"></div>
                
                <p className="text-sm text-muted-foreground mt-2">
                  {markets[market as keyof typeof markets]?.description}
                </p>
                
                <div className="pt-2">
                  <a 
                    href={`/markets?region=${market}`} 
                    className="text-infinity-600 dark:text-infinity-400 font-medium hover:underline flex items-center group"
                  >
                    View detailed analysis
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-infinity-900/80 backdrop-blur-sm p-3 rounded-lg text-xs shadow-lg border border-infinity-200 dark:border-infinity-700">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-green-500 border border-white/70"></div>
          <span className="font-medium">Positive growth</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-white/70"></div>
          <span className="font-medium">Negative growth</span>
        </div>
      </div>
    </div>
  );
}
