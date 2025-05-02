
import { Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function RoadmapSection() {
  const roadmapItems = [
    {
      date: "April 2025",
      title: "Advanced Screener",
      description: "Powerful stock screening tools with custom criteria and filters"
    },
    {
      date: "June 2025",
      title: "Portfolio Analytics",
      description: "In-depth analysis of your portfolio performance and risk metrics"
    },
    {
      date: "August 2025",
      title: "Social Trading",
      description: "Follow and copy strategies from top-performing traders"
    },
    {
      date: "October 2025",
      title: "AI-Powered Insights",
      description: "Machine learning-based predictive analytics and recommendations"
    },
    {
      date: "Coming Soon",
      title: "More Features",
      description: "Stay tuned for more exciting features and enhancements",
      special: true
    },
  ];

  return (
    <section className="py-20 bg-infinity-50/50 dark:bg-infinity-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Calendar className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Roadmap</h2>
          <p className="section-subtitle">
            Our journey ahead: upcoming features and enhancements
          </p>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scrollbar-hide">
          {roadmapItems.map((item, index) => (
            <Card 
              key={index}
              className={`min-w-[280px] max-w-[280px] flex-shrink-0 hover:shadow-lg transition-all duration-300 ${
                item.special ? 'border-dashed border-2' : ''
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  {item.special ? (
                    <Star className="h-4 w-4 text-gold-400 mr-2" />
                  ) : null}
                  <CardDescription className="text-sm font-medium">{item.date}</CardDescription>
                </div>
                <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
