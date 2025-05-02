
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function WorldMap() {
  // Sample market data
  const markets = {
    india: { name: "Indian Markets", index: "NIFTY 50", value: "21,843.24", change: "+1.25%" },
    usa: { name: "USA Markets", index: "S&P 500", value: "5,143.12", change: "+0.75%" },
    europe: { name: "European Markets", index: "STOXX 600", value: "512.34", change: "+0.42%" },
    china: { name: "Chinese Markets", index: "Shanghai", value: "3,291.19", change: "-0.18%" },
    japan: { name: "Japanese Markets", index: "Nikkei 225", value: "39,523.55", change: "+1.10%" },
    uk: { name: "UK Markets", index: "FTSE 100", value: "8,142.18", change: "+0.38%" },
    germany: { name: "German Markets", index: "DAX", value: "18,321.05", change: "+0.62%" },
    brazil: { name: "Brazilian Markets", index: "Bovespa", value: "129,324.15", change: "-0.22%" },
    australia: { name: "Australian Markets", index: "ASX 200", value: "7,835.45", change: "+0.91%" }
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
      {/* World map SVG or image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M600,50 Q900,150 1100,200 Q1150,250 1100,400 Q900,550 600,550 Q300,550 100,400 Q50,250 100,200 Q300,150 600,50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
          />
          <path d="M300,200 Q400,150 500,200 Q600,250 700,200 Q800,150 900,200" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
          />
          <path d="M400,300 Q500,250 600,300 Q700,350 800,300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
          />
          <path d="M350,400 Q450,350 550,400 Q650,450 750,400" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
          />
        </svg>

        <img 
          src="https://images.unsplash.com/photo-1589519160732-57fc6e1dc2f8?q=80&w=1920&auto=format&fit=crop" 
          alt="World Map"
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
      </div>

      {/* Market hotspots */}
      {Object.keys(markets).map((market) => (
        <Popover key={market}>
          <PopoverTrigger asChild>
            <button
              className={`absolute ${getMarketPosition(market)} w-4 h-4 rounded-full ${getMarkerColor(market)} animate-pulse shadow-lg hover:w-6 hover:h-6 transition-all duration-200 z-10`}
              onClick={() => setSelectedMarket(market)}
              aria-label={markets[market as keyof typeof markets]?.name}
            />
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-lg">
                {markets[market as keyof typeof markets]?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {markets[market as keyof typeof markets]?.index}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">
                  {markets[market as keyof typeof markets]?.value}
                </p>
                <p className={`font-medium ${markets[market as keyof typeof markets]?.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {markets[market as keyof typeof markets]?.change}
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-md text-xs">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Positive growth</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span>Negative growth</span>
        </div>
      </div>
    </div>
  );
}
