
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChartBarIcon, 
  Briefcase, 
  Banknote, 
  Globe, 
  Zap, 
  BookOpen,
  TrendingUp,
  Smartphone
} from "lucide-react";

// Mock blog data by category
const blogCategories = {
  "markets": {
    title: "Markets",
    description: "Analysis and insights on global and Indian market trends, movements, and strategies.",
    icon: <ChartBarIcon className="h-6 w-6 text-green-600 dark:text-green-400" />,
    color: "green",
    posts: [
      {
        title: "The Impact of Rising Tariffs on Global Markets",
        excerpt: "An analysis of how recent tariff changes are reshaping international trade dynamics and market behavior.",
        date: "May 2, 2025",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        slug: "rising-tariffs-global-markets",
        readTime: "8 min read"
      },
      {
        title: "Emerging Markets: Opportunities Beyond BRICS",
        excerpt: "Exploring investment opportunities in the next generation of emerging economies beyond the traditional BRICS nations.",
        date: "April 25, 2025",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        slug: "emerging-markets-beyond-brics",
        readTime: "10 min read"
      },
      {
        title: "Volatility Strategies for Retail Investors",
        excerpt: "How individual investors can navigate and potentially profit from periods of market turbulence.",
        date: "April 18, 2025",
        image: "https://images.unsplash.com/photo-1468254095679-bbcba94a7066?q=80&w=1000&auto=format&fit=crop",
        slug: "volatility-strategies-retail",
        readTime: "7 min read"
      },
      {
        title: "Sector Rotation: Timing Your Investments",
        excerpt: "Understanding how economic cycles affect different sectors and how investors can position themselves accordingly.",
        date: "April 10, 2025",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
        slug: "sector-rotation-timing-investments",
        readTime: "9 min read"
      }
    ]
  },
  "economy": {
    title: "Economy",
    description: "Deep dives into economic trends, policy changes, and their impacts on businesses and investments.",
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    color: "blue",
    posts: [
      {
        title: "Understanding Modern Economic Recessions",
        excerpt: "A deep dive into the changing nature of economic downturns in the 21st century global economy.",
        date: "April 28, 2025",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
        slug: "understanding-modern-recessions",
        readTime: "12 min read"
      },
      {
        title: "India's Economic Growth: Challenges and Opportunities",
        excerpt: "Analyzing the factors driving India's economic trajectory and the obstacles that need to be overcome.",
        date: "April 22, 2025",
        image: "https://images.unsplash.com/photo-1465778893442-d6565d7cf596?q=80&w=1000&auto=format&fit=crop",
        slug: "india-economic-growth-challenges",
        readTime: "11 min read"
      },
      {
        title: "The Gig Economy and Its Economic Implications",
        excerpt: "Examining how the rise of gig work is reshaping labor markets and economic indicators.",
        date: "April 15, 2025",
        image: "https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?q=80&w=1000&auto=format&fit=crop",
        slug: "gig-economy-implications",
        readTime: "9 min read"
      }
    ]
  },
  "corporate": {
    title: "Corporate",
    description: "Updates on corporate strategies, mergers and acquisitions, leadership changes, and business innovations.",
    icon: <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    color: "purple",
    posts: [
      {
        title: "ESG Integration in Corporate Strategy",
        excerpt: "How leading companies are incorporating environmental, social, and governance factors into their core business strategies.",
        date: "May 1, 2025",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
        slug: "esg-corporate-strategy",
        readTime: "10 min read"
      },
      {
        title: "The Evolution of Corporate Leadership",
        excerpt: "Exploring how leadership styles and expectations are changing in response to global challenges.",
        date: "April 24, 2025",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1000&auto=format&fit=crop",
        slug: "evolution-corporate-leadership",
        readTime: "8 min read"
      }
    ]
  },
  "technology": {
    title: "Technology",
    description: "Insights on emerging technologies and their applications in finance and investment management.",
    icon: <Smartphone className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" />,
    color: "fuchsia",
    posts: [
      {
        title: "The Future of Digital Finance: Trends to Watch",
        excerpt: "Exploring emerging technologies and innovations shaping the future of financial services.",
        date: "April 23, 2025",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
        slug: "future-digital-finance-trends",
        readTime: "10 min read"
      },
      {
        title: "Quantum Computing and Financial Markets",
        excerpt: "Understanding the potential impacts of quantum computing on trading, risk management, and security.",
        date: "April 16, 2025",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
        slug: "quantum-computing-financial-markets",
        readTime: "13 min read"
      }
    ]
  },
  "trade": {
    title: "Trade",
    description: "Analysis of global trade patterns, agreements, conflicts, and their impacts on markets.",
    icon: <TrendingUp className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    color: "amber",
    posts: [
      {
        title: "The New Silk Road: China's Belt and Road Initiative",
        excerpt: "Analyzing the economic implications of China's massive infrastructure development strategy.",
        date: "April 30, 2025",
        image: "https://images.unsplash.com/photo-1473445195882-8a39763ae0d4?q=80&w=1000&auto=format&fit=crop",
        slug: "new-silk-road-belt-road-initiative",
        readTime: "11 min read"
      },
      {
        title: "Supply Chain Resilience in a Post-Pandemic World",
        excerpt: "How global trade networks are evolving to handle disruptions and ensure business continuity.",
        date: "April 20, 2025",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
        slug: "supply-chain-resilience-post-pandemic",
        readTime: "9 min read"
      }
    ]
  },
  "banking": {
    title: "Banking",
    description: "Updates on banking sector trends, regulations, innovations, and financial inclusion initiatives.",
    icon: <Banknote className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    color: "emerald",
    posts: [
      {
        title: "Digital Banking Transformation",
        excerpt: "How traditional banks are reinventing themselves for the digital age and competing with fintech challengers.",
        date: "April 29, 2025",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000&auto=format&fit=crop",
        slug: "digital-banking-transformation",
        readTime: "8 min read"
      },
      {
        title: "The Role of Central Banks in Modern Economies",
        excerpt: "Examining how central banks' policies and mandates are evolving in response to new economic challenges.",
        date: "April 21, 2025",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop",
        slug: "central-banks-modern-economies",
        readTime: "12 min read"
      }
    ]
  },
  "energy": {
    title: "Energy",
    description: "Coverage of energy markets, renewable transitions, policy changes, and investment opportunities.",
    icon: <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
    color: "orange",
    posts: [
      {
        title: "The Energy Transition: Investment Implications",
        excerpt: "Analyzing how the shift to renewable energy is creating new investment opportunities and risks.",
        date: "April 27, 2025",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
        slug: "energy-transition-investment-implications",
        readTime: "10 min read"
      },
      {
        title: "Green Hydrogen: The Next Energy Revolution?",
        excerpt: "Exploring the potential of hydrogen as a clean energy carrier and its economic viability.",
        date: "April 19, 2025",
        image: "https://images.unsplash.com/photo-1501263008192-3ab5f9e4499a?q=80&w=1000&auto=format&fit=crop",
        slug: "green-hydrogen-energy-revolution",
        readTime: "9 min read"
      }
    ]
  },
  "global": {
    title: "Global",
    description: "Perspectives on international events, geopolitical developments, and their financial impacts.",
    icon: <Globe className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
    color: "sky",
    posts: [
      {
        title: "Geopolitical Risk and Portfolio Management",
        excerpt: "Strategies for investors to assess and manage exposure to international political developments.",
        date: "April 26, 2025",
        image: "https://images.unsplash.com/photo-1519834053753-af5f5357d3a6?q=80&w=1000&auto=format&fit=crop",
        slug: "geopolitical-risk-portfolio-management",
        readTime: "11 min read"
      },
      {
        title: "Demographic Shifts and Global Investment Trends",
        excerpt: "How changing population patterns around the world are shaping economic growth and investment opportunities.",
        date: "April 17, 2025",
        image: "https://images.unsplash.com/photo-1526629337492-e4191dc38b1a?q=80&w=1000&auto=format&fit=crop",
        slug: "demographic-shifts-investment-trends",
        readTime: "10 min read"
      }
    ]
  }
};

const getCategoryColorClasses = (category: string) => {
  const colorMap: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string}} = {
    green: {bg: 'bg-green-100', text: 'text-green-600', darkBg: 'dark:bg-green-900/30', darkText: 'dark:text-green-400'},
    blue: {bg: 'bg-blue-100', text: 'text-blue-600', darkBg: 'dark:bg-blue-900/30', darkText: 'dark:text-blue-400'},
    purple: {bg: 'bg-purple-100', text: 'text-purple-600', darkBg: 'dark:bg-purple-900/30', darkText: 'dark:text-purple-400'},
    fuchsia: {bg: 'bg-fuchsia-100', text: 'text-fuchsia-600', darkBg: 'dark:bg-fuchsia-900/30', darkText: 'dark:text-fuchsia-400'},
    amber: {bg: 'bg-amber-100', text: 'text-amber-600', darkBg: 'dark:bg-amber-900/30', darkText: 'dark:text-amber-400'},
    emerald: {bg: 'bg-emerald-100', text: 'text-emerald-600', darkBg: 'dark:bg-emerald-900/30', darkText: 'dark:text-emerald-400'},
    orange: {bg: 'bg-orange-100', text: 'text-orange-600', darkBg: 'dark:bg-orange-900/30', darkText: 'dark:text-orange-400'},
    sky: {bg: 'bg-sky-100', text: 'text-sky-600', darkBg: 'dark:bg-sky-900/30', darkText: 'dark:text-sky-400'},
  };
  
  const categoryData = blogCategories[category as keyof typeof blogCategories];
  return categoryData ? colorMap[categoryData.color] : colorMap['green'];
};

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryData, setCategoryData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [otherCategories, setOtherCategories] = useState<string[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setIsLoading(true);
    setTimeout(() => {
      const fetchedCategory = blogCategories[category as keyof typeof blogCategories];
      setCategoryData(fetchedCategory);
      
      // Get other categories for the sidebar
      const others = Object.keys(blogCategories).filter(key => key !== category);
      setOtherCategories(others);
      
      setIsLoading(false);
    }, 500);
  }, [category]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col w-full max-w-6xl mx-auto p-6">
            <div className="h-10 bg-muted rounded w-1/3 mb-8"></div>
            <div className="h-4 bg-muted rounded w-2/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-6">Sorry, the blog category you're looking for doesn't exist.</p>
            <Link to="/indian-street" className="text-infinity-600 hover:text-infinity-700 dark:text-infinity-400 dark:hover:text-infinity-300">
              Return to Indian Street
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const colorClasses = getCategoryColorClasses(category as string);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className={`py-16 ${colorClasses.bg} ${colorClasses.darkBg}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`inline-flex items-center justify-center rounded-full ${colorClasses.bg} ${colorClasses.darkBg} p-4 mb-6`}>
                {categoryData.icon}
              </div>
              <h1 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${colorClasses.text} ${colorClasses.darkText}`}>
                {categoryData.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {categoryData.description}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {categoryData.posts.map((post: any, index: number) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <CardDescription className={`text-sm font-medium ${colorClasses.text} ${colorClasses.darkText}`}>
                            {categoryData.title}
                          </CardDescription>
                          <CardDescription className="text-sm">
                            {post.date}
                          </CardDescription>
                        </div>
                        <CardTitle className="text-xl font-serif">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        <Button variant="ghost" size="sm" className={`${colorClasses.text} ${colorClasses.darkText}`} asChild>
                          <Link to={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-1/4">
                <div className="sticky top-24">
                  <h3 className="text-xl font-serif font-bold mb-6">Explore Other Categories</h3>
                  <div className="space-y-4">
                    {otherCategories.map((cat) => {
                      const catData = blogCategories[cat as keyof typeof blogCategories];
                      const catColor = getCategoryColorClasses(cat);
                      return (
                        <Link 
                          key={cat}
                          to={`/blog/category/${cat}`}
                          className={`flex items-center p-3 rounded-lg ${catColor.bg} ${catColor.darkBg} hover:opacity-90 transition-opacity`}
                        >
                          <div className="mr-3">
                            {catData.icon}
                          </div>
                          <div>
                            <div className={`font-medium ${catColor.text} ${catColor.darkText}`}>
                              {catData.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {catData.posts.length} articles
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  
                  <div className="mt-12 p-6 border rounded-lg bg-infinity-50/50 dark:bg-infinity-900/20">
                    <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stay updated with the latest insights and analysis from Indian Street.
                    </p>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-infinity-500"
                      />
                      <Button className="rounded-l-none">
                        Subscribe
                      </Button>
                    </div>
                  </div>
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

export default BlogCategory;
