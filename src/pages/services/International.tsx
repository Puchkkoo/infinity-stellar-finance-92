
import { ServicePageTemplate } from "@/components/service-page-template";

const International = () => {
  return (
    <ServicePageTemplate
      title="International Investing"
      subtitle="Diversify your portfolio with investments across global markets"
      description={[
        "Expand your investment horizon with Infinity's International Investing platform. Access global markets, diverse assets, and investment opportunities from around the world—all from a single, streamlined platform.",
        "Our international investing services make global diversification simple, with transparent pricing, thorough research, and robust trading tools designed for both novice and experienced global investors.",
        "We handle the complexity of currency conversion, international regulations, and tax documentation, allowing you to focus solely on building a diversified global portfolio."
      ]}
      image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Global Market Access",
          description: "Trade in 30+ international markets across North America, Europe, Asia, and emerging markets."
        },
        {
          title: "Fractional Shares",
          description: "Invest in high-value international stocks with fractional share purchasing, starting from just $1."
        },
        {
          title: "24/7 Trading",
          description: "Access different markets during their active hours with our round-the-clock trading platform."
        },
        {
          title: "Automated Currency Conversion",
          description: "Seamless currency conversion at competitive exchange rates with full transparency."
        },
        {
          title: "International ETFs & Funds",
          description: "Access curated international ETFs, index funds, and actively managed funds for simplified global exposure."
        },
        {
          title: "Cross-Border Tax Optimization",
          description: "Automated tax documentation and optimization strategies for international investments."
        }
      ]}
      differences={[
        {
          title: "Truly Global Platform",
          description: "Unlike competitors limited to a few major markets, we provide access to developed and emerging markets worldwide."
        },
        {
          title: "Local Market Insights",
          description: "Benefit from our team of regional experts providing localized research and market analysis for informed investing."
        },
        {
          title: "Simplified Cross-Border Investing",
          description: "Our platform handles regulatory compliance, currency conversion, and international tax documentation automatically."
        },
        {
          title: "Competitive Global Pricing",
          description: "Enjoy some of the industry's lowest commissions and fees for international trades, with no hidden charges."
        }
      ]}
      faqs={[
        {
          question: "What international markets can I access?",
          answer: "Our platform provides access to 30+ international markets including major exchanges in North America, Europe, Asia-Pacific, and select emerging markets. This includes NYSE, NASDAQ, LSE, Tokyo, Hong Kong, Frankfurt, Toronto, and many more."
        },
        {
          question: "How are currency conversions handled?",
          answer: "We handle currency conversions automatically at competitive rates whenever you trade in foreign markets. You can view the applied exchange rate before confirming any transaction, and we also offer multi-currency accounts for frequent international traders."
        },
        {
          question: "Are there additional fees for international trading?",
          answer: "While international trades may include exchange fees and currency conversion costs, we keep our pricing transparent and competitive. All applicable fees are clearly displayed before you confirm any trade, with no hidden charges."
        },
        {
          question: "How do you handle international tax implications?",
          answer: "Our platform automates much of the tax documentation required for international investing, including W-8BEN forms for US securities. We also provide year-end tax statements that detail foreign tax paid, which may be eligible for tax credits in your home country."
        }
      ]}
    />
  );
};

export default International;
