
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { BarChart2 } from "lucide-react";

const AlgoTrading = () => {
  return (
    <FeaturePageTemplate
      title="Algorithmic Trading"
      subtitle="Deploy automated trading strategies based on predefined parameters and market conditions"
      icon={<BarChart2 className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "Infinity's algorithmic trading platform empowers traders to automate their strategies and execute trades with precision and speed that manual trading simply cannot match.",
        "Our platform provides the infrastructure, tools, and flexibility to develop, backtest, and deploy sophisticated trading algorithms across multiple asset classes.",
        "Whether you're a quantitative trader, a technical analyst looking to automate your setups, or an investor seeking to remove emotion from trading decisions, our algo trading platform offers the capabilities you need."
      ]}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Eliminate Emotional Bias",
          description: "Algorithms execute trades based on predefined rules, removing emotional decision-making from trading."
        },
        {
          title: "Execute with Speed & Precision",
          description: "Execute complex strategies across multiple markets in milliseconds with perfect precision."
        },
        {
          title: "Backtest & Optimize",
          description: "Test your strategies against historical data to validate and refine before deploying with real capital."
        },
        {
          title: "Diversify Trading Approaches",
          description: "Run multiple strategies simultaneously across different market conditions and asset classes."
        },
        {
          title: "Exploit Market Inefficiencies",
          description: "Capitalize on small price discrepancies and short-lived market inefficiencies at scale."
        },
        {
          title: "Trade 24/7",
          description: "Your algorithms can monitor and trade markets around the clock, even while you sleep."
        }
      ]}
      howItWorks={[
        {
          step: "Define Your Strategy",
          description: "Create your trading strategy using our intuitive strategy builder or code it directly using Python or JavaScript. Define entry/exit conditions, position sizing, risk parameters, and execution logic."
        },
        {
          step: "Backtest & Optimize",
          description: "Test your strategy against historical market data to assess its performance. Analyze key metrics like returns, drawdowns, and Sharpe ratio. Optimize parameters to improve results."
        },
        {
          step: "Paper Trading",
          description: "Deploy your strategy in a simulated environment with real market data but virtual money. This allows you to validate performance in current market conditions without risking capital."
        },
        {
          step: "Live Deployment",
          description: "When satisfied with your strategy's performance, deploy it to live markets. Set risk limits and monitoring parameters to ensure safe operation."
        },
        {
          step: "Monitor & Refine",
          description: "Track your algorithm's performance in real-time through our comprehensive dashboard. Receive alerts for significant events or performance deviations. Continuously refine your strategy based on new data and changing market conditions."
        }
      ]}
      useCases={[
        {
          title: "Technical Analysis Automation",
          description: "Automate strategies based on technical indicators like moving averages, RSI, MACD, and chart patterns to execute trades precisely when your conditions are met."
        },
        {
          title: "Statistical Arbitrage",
          description: "Exploit price differences between related securities by automatically detecting and trading statistical anomalies that quickly disappear."
        },
        {
          title: "Trend Following",
          description: "Automatically identify and follow market trends, entering positions when trends establish and exiting when they show signs of reversal."
        },
        {
          title: "Market Making",
          description: "Provide liquidity to markets by continuously quoting buy and sell prices, profiting from the bid-ask spread while managing inventory risk."
        }
      ]}
    />
  );
};

export default AlgoTrading;
