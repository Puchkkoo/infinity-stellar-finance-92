
import { ServicePageTemplate } from "@/components/service-page-template";

const FuturesOptions = () => {
  return (
    <ServicePageTemplate
      title="Futures & Options Trading"
      subtitle="Access futures and options with advanced risk management tools"
      description={[
        "Take your trading to the next level with Infinity's comprehensive Futures & Options platform. Our F&O trading services provide sophisticated tools and analytics to help you execute complex derivative strategies with confidence.",
        "Whether you're hedging risk or seeking leveraged opportunities, our platform offers the depth, liquidity, and precision tools you need for successful derivatives trading.",
        "With advanced risk management features and real-time market data, you can make informed decisions and manage your positions effectively."
      ]}
      image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Advanced Strategy Builder",
          description: "Create and test complex option strategies with our intuitive visual strategy builder."
        },
        {
          title: "Real-time Greeks",
          description: "Monitor option Greeks and implied volatility in real-time to make precise trading decisions."
        },
        {
          title: "Multi-leg Orders",
          description: "Execute multi-leg option strategies as a single order for better fills and reduced slippage."
        },
        {
          title: "Risk Analytics",
          description: "Visualize risk profiles across different price scenarios with advanced risk analytics."
        },
        {
          title: "Historical Volatility Analysis",
          description: "Make informed decisions with comprehensive historical volatility data and trends."
        },
        {
          title: "Margin Calculator",
          description: "Accurately calculate required margins before placing trades to optimize capital usage."
        }
      ]}
      differences={[
        {
          title: "Strategy-Centric Platform",
          description: "Our platform is built around strategies, not just individual trades, empowering you to think holistically about your market approach."
        },
        {
          title: "Advanced Risk Management",
          description: "Our proprietary risk management system helps you monitor and manage risk across your entire derivatives portfolio."
        },
        {
          title: "Institutional-Grade Tools",
          description: "Access the same sophisticated tools and analytics used by professional traders and institutions."
        },
        {
          title: "Education and Support",
          description: "Comprehensive learning resources and expert support to help you navigate the complex world of derivatives trading."
        }
      ]}
      faqs={[
        {
          question: "Are there any additional charges for F&O trading?",
          answer: "Our F&O trading charges are transparent and competitive. We charge a flat fee per lot for futures and options contracts, with no hidden costs."
        },
        {
          question: "What margin requirements do you have for F&O trading?",
          answer: "We follow exchange-mandated SPAN margin requirements for F&O positions. Our real-time margin calculator can help you determine exact requirements before placing trades."
        },
        {
          question: "Can I trade options strategies directly on your platform?",
          answer: "Yes, our platform features an advanced strategy builder that allows you to create, analyze, and execute complex options strategies as a single order."
        },
        {
          question: "Do you provide F&O analytics and research?",
          answer: "Absolutely. We offer comprehensive derivatives research, including volatility analysis, open interest interpretation, and strategy recommendations from our expert analysts."
        }
      ]}
    />
  );
};

export default FuturesOptions;
