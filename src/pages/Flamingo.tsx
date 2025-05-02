
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box } from "lucide-react";

const Flamingo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-pink-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-pink-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center rounded-full bg-pink-100 p-2 dark:bg-pink-900/40 mb-4">
                  <Box className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-infinity-600">Flamingo</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  A modern brokerage platform designed for today's investors. Experience seamless trading with powerful tools and competitive pricing.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg">
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-infinity-900/30 rounded-lg overflow-hidden shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Trading interface visualization</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 dark:bg-pink-800/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Advanced Trading Tools</h2>
              <p className="section-subtitle">
                All the tools you need for informed investing decisions
              </p>
            </div>
            
            <Tabs defaultValue="charts" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="charts">Charts</TabsTrigger>
                <TabsTrigger value="screener">Screener</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
              
              <TabsContent value="charts" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Advanced Charting</h3>
                        <p className="text-muted-foreground">
                          Interactive charts with over 100+ indicators and drawing tools
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="screener" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Stock Screener</h3>
                        <p className="text-muted-foreground">
                          Find stocks that match your criteria with our powerful screener
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Portfolio Analytics</h3>
                        <p className="text-muted-foreground">
                          Track, manage and analyze your investments in one place
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-pink-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Pricing Plans</h2>
              <p className="section-subtitle">
                Transparent pricing designed to suit investors of all levels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Basic</h3>
                    <div className="text-3xl font-bold mb-4">₹0</div>
                    <p className="text-muted-foreground mb-6">Perfect for beginners</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Free equity delivery
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Basic charting
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        5 watchlists
                      </li>
                    </ul>
                    
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-pink-200 dark:border-pink-800 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase px-3 py-1 rounded-full w-max mx-auto mb-4">Popular</div>
                    <h3 className="text-xl font-bold mb-2">Pro</h3>
                    <div className="text-3xl font-bold mb-4">₹299<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                    <p className="text-muted-foreground mb-6">For active traders</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Everything in Basic
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced charting
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        20 watchlists
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Stock screener
                      </li>
                    </ul>
                    
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Premium</h3>
                    <div className="text-3xl font-bold mb-4">₹999<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                    <p className="text-muted-foreground mb-6">For professional traders</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Everything in Pro
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        API access
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Algo trading
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Dedicated support
                      </li>
                    </ul>
                    
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Flamingo;
