
import { Award, BarChart2, Lock, Smartphone, BookOpen } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BarChart2 className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Algo Trading",
      description: "Deploy automated trading strategies based on predefined parameters and market conditions"
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Advanced Charting",
      description: "Professional-grade charting tools with over 100 indicators and drawing tools"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Mobile Trading",
      description: "Trade on the go with our feature-rich mobile applications for iOS and Android"
    },
    {
      icon: <Lock className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Bank-Grade Security",
      description: "Enterprise-level security protocols to protect your investments and personal data"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Learning Resources",
      description: "Comprehensive educational content to help you make informed investment decisions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Award className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Advanced tools and capabilities that set our platform apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-infinity-100 dark:bg-infinity-900/40">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
