
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Smartphone } from "lucide-react";

const MobileTrading = () => {
  return (
    <FeaturePageTemplate
      title="Mobile Trading"
      subtitle="Full-featured trading and portfolio management in the palm of your hand"
      icon={<Smartphone className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "Infinity's mobile trading platform brings the complete power of our desktop experience to your smartphone or tablet, allowing you to stay connected to the markets and manage your investments from anywhere.",
        "Unlike limited mobile apps that offer only basic functionality, our mobile platform provides comprehensive trading capabilities, advanced charting, real-time data, and complete account management—all optimized for touch interfaces and on-the-go use.",
        "Whether you're commuting, traveling, or simply away from your desk, our mobile platform ensures you never miss a trading opportunity or important market move."
      ]}
      image="https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Complete Trading Functionality",
          description: "Execute any type of trade with the same advanced order types available on our desktop platform."
        },
        {
          title: "Real-Time Market Data",
          description: "Access streaming quotes, charts, and news with minimal latency on both Wi-Fi and cellular connections."
        },
        {
          title: "Advanced Mobile Charting",
          description: "Perform technical analysis with our touch-optimized charts featuring indicators, drawing tools, and multiple timeframes."
        },
        {
          title: "Biometric Security",
          description: "Secure your trading account with fingerprint or facial recognition while maintaining quick access."
        },
        {
          title: "Customizable Alerts",
          description: "Set price, news, and technical alerts that notify you instantly on your mobile device."
        },
        {
          title: "Cross-Device Synchronization",
          description: "Seamlessly transition between desktop and mobile with synchronized watchlists, settings, and layouts."
        }
      ]}
      howItWorks={[
        {
          step: "Download & Authenticate",
          description: "Download the Infinity mobile app from the App Store or Google Play Store. Securely log in with your existing Infinity credentials or create a new account directly from the app."
        },
        {
          step: "Personalize Your Experience",
          description: "Customize your mobile dashboard with the markets, watchlists, and tools you use most frequently. Set your preferred display options and notification preferences."
        },
        {
          step: "Monitor Markets & Positions",
          description: "View real-time quotes, charts, and news for the assets you're tracking. Monitor your current positions, orders, and portfolio performance with comprehensive analytics."
        },
        {
          step: "Research & Analyze",
          description: "Conduct in-depth research using our mobile-optimized screeners, fundamental data, technical charts, and news resources to inform your trading decisions."
        },
        {
          step: "Execute Trades",
          description: "Place trades using our intuitive order entry system supporting all order types, durations, and conditions. Confirm and track orders with real-time status updates."
        }
      ]}
      useCases={[
        {
          title: "On-The-Go Trading",
          description: "React quickly to market-moving news and opportunities even when you're away from your desk, ensuring you never miss an important trading moment."
        },
        {
          title: "Portfolio Monitoring",
          description: "Keep a constant eye on your investments with real-time portfolio valuation, position performance, and risk metrics accessible anywhere."
        },
        {
          title: "Research During Commutes",
          description: "Make productive use of travel time by researching investment ideas, analyzing charts, and reading market news and analyst reports."
        },
        {
          title: "Quick Account Management",
          description: "Manage deposits, withdrawals, and account settings without needing computer access, making administrative tasks more convenient."
        }
      ]}
    />
  );
};

export default MobileTrading;
