
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function NewsSection() {
  const articles = [
    {
      title: "The Impact of Rising Tariffs on Global Markets",
      excerpt: "An analysis of how recent tariff changes are reshaping international trade dynamics and market behavior.",
      date: "May 2, 2025",
      category: "Markets",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      slug: "rising-tariffs-global-markets"
    },
    {
      title: "Understanding Modern Economic Recessions",
      excerpt: "A deep dive into the changing nature of economic downturns in the 21st century global economy.",
      date: "April 28, 2025",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      slug: "understanding-modern-recessions"
    },
    {
      title: "The Future of Digital Finance: Trends to Watch",
      excerpt: "Exploring emerging technologies and innovations shaping the future of financial services.",
      date: "April 23, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
      slug: "future-digital-finance-trends"
    }
  ];

  return (
    <section className="py-20 bg-infinity-50/50 dark:bg-infinity-950/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
              <Book className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
            </div>
            <h2 className="section-title mb-0">News & Blogs</h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/indian-street" className="flex items-center">
              View all articles <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardDescription className="text-sm font-medium text-infinity-600 dark:text-infinity-400">
                    {article.category}
                  </CardDescription>
                  <CardDescription className="text-sm">
                    {article.date}
                  </CardDescription>
                </div>
                <CardTitle className="text-xl font-serif">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-infinity-700 dark:text-infinity-400" asChild>
                  <Link to={`/blog/${article.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
