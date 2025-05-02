
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog data - in a real app, this would come from a backend
const blogPosts = {
  "rising-tariffs-global-markets": {
    title: "The Impact of Rising Tariffs on Global Markets",
    excerpt: "An analysis of how recent tariff changes are reshaping international trade dynamics and market behavior.",
    date: "May 2, 2025",
    category: "Markets",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min read",
    author: "Rahul Sharma",
    content: `
      <p class="mb-4">Global markets are currently experiencing significant shifts as countries around the world implement new tariff policies. These changes are reshaping trade dynamics and causing ripple effects across various sectors, from consumer goods to industrial materials.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Understanding Tariff Impacts</h2>
      <p class="mb-4">Tariffs, at their core, are taxes imposed on imported goods and services. When a country raises tariffs, it increases the cost of importing specific products, which can have several consequences:</p>
      
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">Higher consumer prices for imported goods</li>
        <li class="mb-2">Potential protective effects for domestic industries</li>
        <li class="mb-2">Risks of retaliatory measures from trading partners</li>
        <li class="mb-2">Disruption of global supply chains</li>
      </ul>
      
      <p class="mb-4">Recent data suggests that the global economy is adapting to these changes, but not without friction. Supply chains built over decades on the assumption of relatively free trade are being reconsidered and, in some cases, restructured entirely.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Market Implications</h2>
      <p class="mb-4">Financial markets have responded with increased volatility as investors assess the long-term implications of these policy shifts. Sectors with high exposure to international trade have seen the most significant impact, with share prices fluctuating as new tariff announcements emerge.</p>
      
      <p class="mb-4">For example, the technology sector, with its globally integrated supply chains, has experienced substantial price movements. Companies that rely heavily on components manufactured across multiple countries are now facing higher input costs and logistical challenges.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Looking Forward</h2>
      <p class="mb-4">The future trajectory of global markets will largely depend on how these trade tensions evolve. Some analysts predict a gradual normalization as economies adjust to the new reality, while others warn of potential escalation if diplomatic solutions aren't found.</p>
      
      <p class="mb-4">Investors should consider diversifying their portfolios to mitigate risks associated with trade-sensitive assets and monitor developments in trade negotiations closely. Companies, meanwhile, may need to rethink their supply chain strategies to build in greater resilience against future tariff changes.</p>
    `
  },
  "understanding-modern-recessions": {
    title: "Understanding Modern Economic Recessions",
    excerpt: "A deep dive into the changing nature of economic downturns in the 21st century global economy.",
    date: "April 28, 2025",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    readTime: "12 min read",
    author: "Priya Mehta",
    content: `
      <p class="mb-4">Economic recessions have taken on new characteristics in the 21st century, differing in important ways from historical patterns. The interconnectedness of global markets, the rise of digital economies, and the changing nature of employment all contribute to how modern recessions unfold and how they affect different segments of society.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">The Evolution of Economic Downturns</h2>
      <p class="mb-4">Classical recessions were typically triggered by specific events: monetary policy tightening, oil price shocks, or financial crises. While these factors remain relevant, modern recessions often involve complex interactions between multiple sectors and are amplified by global connections.</p>
      
      <p class="mb-4">The 2008 financial crisis marked a turning point in our understanding of recessions. What began as a problem in the U.S. housing market quickly became a global financial crisis, demonstrating how contagion effects can spread rapidly across borders and asset classes.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Digital Economies and Recessions</h2>
      <p class="mb-4">The growing importance of digital economies has introduced new dynamics to economic cycles. Tech-driven sectors may respond differently to traditional recession triggers, sometimes showing resilience when conventional industries struggle. However, they can also experience their own unique vulnerabilities, as seen in the dot-com crash of the early 2000s.</p>
      
      <p class="mb-4">Data suggests that digital infrastructure has become increasingly important during economic downturns, providing alternative channels for economic activity when physical channels are constrained. This was particularly evident during recent global disruptions.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Inequality and Recession Impacts</h2>
      <p class="mb-4">Modern recessions have been characterized by uneven impacts across different demographic groups. Research shows that economic downturns often exacerbate existing inequalities, with recovery benefits typically flowing first to those with greater financial resources and flexibility.</p>
      
      <p class="mb-4">This uneven distribution of recession costs has political and social implications, potentially contributing to the rising populism and social tensions observed in many countries following economic crises.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Policy Responses</h2>
      <p class="mb-4">Government and central bank responses to recessions have evolved significantly. The toolbox now includes not just interest rate adjustments, but quantitative easing, targeted stimulus programs, and direct support to specific sectors or demographics.</p>
      
      <p class="mb-4">These expanded policy approaches reflect a growing understanding of the complex nature of modern recessions and the need for multi-faceted responses that address both financial system stability and real economic activity.</p>
    `
  },
  "future-digital-finance-trends": {
    title: "The Future of Digital Finance: Trends to Watch",
    excerpt: "Exploring emerging technologies and innovations shaping the future of financial services.",
    date: "April 23, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
    readTime: "10 min read",
    author: "Vikram Singh",
    content: `
      <p class="mb-4">The financial services landscape is undergoing a profound transformation driven by technological innovation. From blockchain to artificial intelligence, new technologies are reshaping how financial products are created, delivered, and consumed. This evolution promises greater efficiency and accessibility but also raises important questions about security, regulation, and inclusion.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Decentralized Finance (DeFi)</h2>
      <p class="mb-4">Decentralized finance, or DeFi, represents one of the most significant developments in the financial technology space. Built primarily on blockchain platforms, DeFi applications aim to recreate traditional financial services in a decentralized manner, without relying on central intermediaries like banks or brokerages.</p>
      
      <p class="mb-4">The DeFi ecosystem has grown exponentially, with applications ranging from lending and borrowing to insurance and asset management. While still relatively small compared to traditional finance, DeFi's rapid growth suggests it could become an important component of the global financial system.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">AI-Powered Financial Services</h2>
      <p class="mb-4">Artificial intelligence and machine learning are transforming nearly every aspect of financial services. From algorithmic trading to credit scoring, these technologies enable more sophisticated analysis of financial data and more personalized financial products.</p>
      
      <p class="mb-4">Banks and financial institutions are increasingly using AI to detect fraud, assess risk, and enhance customer service. Robo-advisors, powered by AI, are making investment management more accessible to a broader range of individuals by lowering costs and reducing minimum investment thresholds.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Embedded Finance</h2>
      <p class="mb-4">Embedded finance refers to the integration of financial services into non-financial platforms and applications. This trend is blurring the lines between financial and non-financial companies and creating new distribution channels for financial products.</p>
      
      <p class="mb-4">Examples include e-commerce platforms offering payment plans, ride-sharing apps providing insurance, and social media platforms facilitating peer-to-peer payments. Embedded finance is making financial services more contextual and convenient, reaching consumers at the point of need rather than requiring them to separately engage with financial institutions.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Regulatory Technology (RegTech)</h2>
      <p class="mb-4">As financial services become more complex and globally interconnected, regulatory compliance has become increasingly challenging. RegTech leverages technologies like AI, machine learning, and blockchain to help financial institutions meet regulatory requirements more efficiently and effectively.</p>
      
      <p class="mb-4">From automated reporting to real-time compliance monitoring, RegTech solutions are helping financial institutions navigate the complex regulatory landscape while reducing costs and minimizing risks of non-compliance.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">Looking Forward</h2>
      <p class="mb-4">The future of digital finance will likely be characterized by continued innovation and disruption. Traditional financial institutions will need to adapt and evolve, either by developing their own technological capabilities or partnering with fintech companies.</p>
      
      <p class="mb-4">For consumers, these changes promise greater choice, convenience, and potentially lower costs. However, they also raise important questions about privacy, security, and financial inclusion that will need to be addressed by both industry participants and regulators.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    setIsLoading(true);
    setTimeout(() => {
      const fetchedPost = blogPosts[slug as keyof typeof blogPosts];
      setPost(fetchedPost);
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col w-full max-w-4xl mx-auto p-6">
            <div className="h-10 bg-muted rounded w-3/4 mb-8"></div>
            <div className="h-80 bg-muted rounded mb-8"></div>
            <div className="h-4 bg-muted rounded w-full mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-4"></div>
            <div className="h-4 bg-muted rounded w-5/6 mb-8"></div>
            <div className="h-6 bg-muted rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-4"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">Sorry, the article you're looking for doesn't exist or has been moved.</p>
            <Link to="/indian-street" className="text-infinity-600 hover:text-infinity-700 dark:text-infinity-400 dark:hover:text-infinity-300 flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Indian Street
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="w-full h-[40vh] relative">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-10 relative z-10">
            <div className="text-white">
              <Link 
                to={`/blog/category/${post.category.toLowerCase()}`}
                className="inline-block px-3 py-1 bg-infinity-600/80 text-white text-xs uppercase tracking-wide rounded mb-4"
              >
                {post.category}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 max-w-3xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-8 border-t">
                <Link 
                  to="/indian-street"
                  className="flex items-center text-infinity-600 hover:text-infinity-700 dark:text-infinity-400 dark:hover:text-infinity-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Indian Street
                </Link>
              </div>
            </div>
          </div>
        </article>
        
        <section className="py-16 bg-infinity-50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .map(([key, relatedPost]: [string, any]) => (
                  <Link 
                    key={key}
                    to={`/blog/${key}`}
                    className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[16/9]">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-infinity-600 dark:text-infinity-400 mb-2">
                        {relatedPost.category}
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
