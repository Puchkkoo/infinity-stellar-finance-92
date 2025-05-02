
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { BookOpen } from "lucide-react";

const LearningResources = () => {
  return (
    <FeaturePageTemplate
      title="Learning Resources"
      subtitle="Comprehensive educational content to develop your trading and investing skills"
      icon={<BookOpen className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "Infinity's Learning Resources provide a structured educational journey for investors and traders at every skill level, from complete beginners to seasoned professionals looking to refine specific strategies.",
        "Our comprehensive library includes on-demand courses, interactive tutorials, webinars, market insights, and personalized learning paths designed to build your knowledge and confidence in the financial markets.",
        "Unlike generic financial content, our educational resources are practical, actionable, and directly integrated with our trading platform, allowing you to apply concepts immediately in real or simulated trading environments."
      ]}
      image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Structured Learning Paths",
          description: "Follow carefully designed educational journeys tailored to your experience level and investing goals."
        },
        {
          title: "Interactive Tutorials",
          description: "Learn by doing with hands-on tutorials that guide you through actual platform features and trading scenarios."
        },
        {
          title: "Expert-Led Webinars",
          description: "Participate in live and on-demand webinars conducted by professional traders, analysts, and financial experts."
        },
        {
          title: "Certification Programs",
          description: "Earn credentials that demonstrate your mastery of specific trading strategies and financial concepts."
        },
        {
          title: "Market Analysis & Research",
          description: "Access daily market insights, sector analyses, and strategy recommendations from our research team."
        },
        {
          title: "Trading Simulators",
          description: "Practice trading in realistic market scenarios without risking real capital while you build your skills."
        }
      ]}
      howItWorks={[
        {
          step: "Assess Your Knowledge",
          description: "Take our comprehensive assessment to identify your current knowledge level and areas for improvement. This helps us recommend the most relevant educational content for your needs."
        },
        {
          step: "Choose Your Learning Path",
          description: "Select from specialized learning tracks including Beginner Investing, Advanced Trading Strategies, Technical Analysis, Fundamental Analysis, Options Trading, and more."
        },
        {
          step: "Engage With Content",
          description: "Access multimedia lessons including video tutorials, interactive guides, quizzes, and practical exercises designed to reinforce key concepts and trading skills."
        },
        {
          step: "Apply Knowledge in Practice",
          description: "Use our paper trading simulator to apply what you've learned in realistic market conditions, building confidence before committing real capital."
        },
        {
          step: "Join the Community",
          description: "Participate in discussion forums, study groups, and mentorship programs to learn from peers and experienced traders in our educational community."
        }
      ]}
      useCases={[
        {
          title: "New Investor Onboarding",
          description: "Complete beginners can follow our Investing Fundamentals path to build a solid foundation in market basics, asset types, and investing principles."
        },
        {
          title: "Strategy Specialization",
          description: "Experienced traders can dive deep into specific approaches like swing trading, options strategies, or algorithmic trading through advanced courses."
        },
        {
          title: "Market Analysis Skills",
          description: "Develop proficiency in technical analysis, fundamental research, or quantitative methods through specialized tutorials and practice scenarios."
        },
        {
          title: "Professional Development",
          description: "Financial professionals can expand their expertise and earn continuing education credits through our certified advanced programs and masterclasses."
        }
      ]}
    />
  );
};

export default LearningResources;
