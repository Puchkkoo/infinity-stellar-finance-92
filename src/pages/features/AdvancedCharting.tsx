
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { LineChart } from "lucide-react";

const AdvancedCharting = () => {
  return (
    <FeaturePageTemplate
      title="Advanced Charting"
      subtitle="Sophisticated technical analysis tools for data-driven trading decisions"
      icon={<LineChart className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "Infinity's Advanced Charting platform provides professional-grade technical analysis tools designed for traders who demand precision, customization, and depth in their market analysis.",
        "Our charting system combines powerful visualization capabilities with hundreds of technical indicators, drawing tools, and pattern recognition features to help you identify opportunities and make informed trading decisions.",
        "Whether you're a day trader, swing trader, or long-term investor, our advanced charting tools adapt to your strategy and provide the insights you need to navigate the markets with confidence."
      ]}
      image="https://images.unsplash.com/photo-1642543348772-28711d6c1ffd?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Professional-Grade Tools",
          description: "Access over 100 technical indicators, drawing tools, and chart types used by professional traders."
        },
        {
          title: "Multi-Timeframe Analysis",
          description: "Analyze price action across multiple timeframes simultaneously with synchronized charts."
        },
        {
          title: "Advanced Pattern Recognition",
          description: "Automatically identify chart patterns, candlestick formations, and technical setups in real-time."
        },
        {
          title: "Custom Indicator Builder",
          description: "Create and backtest your own custom technical indicators and trading systems."
        },
        {
          title: "Cross-Market Analysis",
          description: "Compare correlations and relationships between different assets, sectors, and markets."
        },
        {
          title: "Cloud Synchronization",
          description: "Access your saved charts, templates, and studies across all your devices."
        }
      ]}
      howItWorks={[
        {
          step: "Select Your Chart Type",
          description: "Choose from a variety of chart types including candlestick, bar, line, Heikin Ashi, Renko, and more. Each chart type offers different perspectives on price action to suit your analysis style."
        },
        {
          step: "Apply Technical Indicators",
          description: "Add technical indicators from our extensive library covering momentum, trend, volatility, volume, and custom categories. Layer multiple indicators to create a comprehensive technical view."
        },
        {
          step: "Utilize Drawing Tools",
          description: "Apply precision drawing tools including Fibonacci retracements, Elliott Wave counts, pitchforks, and geometric shapes to identify key levels and patterns."
        },
        {
          step: "Set Up Alerts",
          description: "Create price, indicator, and pattern alerts to notify you when specific market conditions occur, allowing you to act quickly on trading opportunities."
        },
        {
          step: "Save & Share Analysis",
          description: "Save your chart layouts as templates for future use or share your technical analysis with colleagues and the Infinity trading community."
        }
      ]}
      useCases={[
        {
          title: "Day Trading & Scalping",
          description: "Utilize tick charts, time-based intraday charts, and momentum indicators to identify short-term trading opportunities with precise entries and exits."
        },
        {
          title: "Swing Trading",
          description: "Analyze daily and weekly timeframes with trend, momentum, and volatility indicators to capture intermediate price movements and optimize position sizing."
        },
        {
          title: "Options Analysis",
          description: "Integrate options data with charts to visualize implied volatility, open interest, and options flow alongside price action for comprehensive derivatives trading."
        },
        {
          title: "Long-Term Investment Analysis",
          description: "Apply technical analysis to monthly and quarterly charts to identify major market cycles, secular trends, and potential turning points for strategic asset allocation."
        }
      ]}
    />
  );
};

export default AdvancedCharting;
