
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { BarChart2 } from "lucide-react";

const AlgoTrading = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom background for Algo Trading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-br from-indigo-900/20 to-purple-900/10 dark:from-indigo-900/30 dark:to-purple-900/20"></div>
        <div className="absolute top-[20vh] left-[-10vw] w-[50vh] h-[50vh] rounded-full bg-gradient-radial from-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute top-[10vh] right-[-5vw] w-[40vh] h-[40vh] rounded-full bg-gradient-radial from-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute w-full h-full opacity-30 mix-blend-overlay">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,100,255,0.1)" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full flex-grow">
        <FeaturePageTemplate
          title="Algorithmic Trading"
          subtitle="Deploy automated trading strategies based on predefined parameters and market conditions"
          icon={<BarChart2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
          description={[
            "Infinity's algorithmic trading platform empowers traders to automate their strategies and execute trades with precision and speed that manual trading simply cannot match.",
            "Our platform provides the infrastructure, tools, and flexibility to develop, backtest, and deploy sophisticated trading algorithms across multiple asset classes.",
            "Whether you're a quantitative trader, a technical analyst looking to automate your setups, or an investor seeking to remove emotion from trading decisions, our algo trading platform offers the capabilities you need."
          ]}
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
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
      </div>
    </div>
  );
};

export default AlgoTrading;
