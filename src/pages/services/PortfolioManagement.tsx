
import { ServicePageTemplate } from "@/components/service-page-template";

const PortfolioManagement = () => {
  return (
    <ServicePageTemplate
      title="Portfolio Management"
      subtitle="Expert portfolio management services tailored to your financial goals"
      description={[
        "Infinity's Portfolio Management service combines sophisticated technology with human expertise to help you build, monitor, and optimize your investment portfolio in alignment with your unique financial objectives.",
        "Our approach balances risk management with growth opportunities, using data-driven analysis and personalized strategies designed for your specific time horizon, risk tolerance, and financial goals.",
        "Whether you're saving for retirement, building wealth, or planning for major life events, our portfolio management solutions provide the tools and guidance you need for confident investing."
      ]}
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Personalized Investment Strategy",
          description: "Customized portfolio construction based on your goals, time horizon, risk tolerance, and financial situation."
        },
        {
          title: "Dynamic Rebalancing",
          description: "Automated and advisor-guided rebalancing to maintain optimal asset allocation as markets change."
        },
        {
          title: "Tax-Efficient Management",
          description: "Strategic tax-loss harvesting and location optimization to enhance after-tax returns."
        },
        {
          title: "Comprehensive Performance Analysis",
          description: "Detailed reporting on portfolio performance, risk metrics, and goal progress with interactive visualizations."
        },
        {
          title: "Multi-Asset Class Exposure",
          description: "Access to diverse asset classes including equities, fixed income, alternatives, and private markets based on your eligibility."
        },
        {
          title: "Dedicated Advisory Support",
          description: "Personal relationship with financial advisors who understand your unique financial journey and goals."
        }
      ]}
      differences={[
        {
          title: "Hybrid Advisory Approach",
          description: "We combine sophisticated algorithms with human expertise, giving you the best of both worlds—technological efficiency with personalized human guidance."
        },
        {
          title: "Goals-Based Framework",
          description: "Our portfolio strategies are built around your specific life goals, not just generic risk categories, creating more meaningful investment experiences."
        },
        {
          title: "Institutional-Quality Research",
          description: "Access the same quality of research and investment opportunities typically reserved for institutional investors and high-net-worth clients."
        },
        {
          title: "Holistic Financial Planning",
          description: "Portfolio management is integrated with comprehensive financial planning for a unified approach to your financial life."
        }
      ]}
      faqs={[
        {
          question: "What is the minimum investment required?",
          answer: "Our Core Portfolio Management service starts at $25,000, while our Premium service tier for more complex needs begins at $250,000. We also offer Institutional services for organizations with $5 million or more to invest."
        },
        {
          question: "How are fees structured?",
          answer: "We believe in transparent, straightforward pricing. Our management fee is based on a percentage of assets under management, starting at 0.75% annually for our Core service and decreasing for larger portfolios. This fee includes portfolio management, rebalancing, tax optimization, and advisor access with no hidden charges."
        },
        {
          question: "Can I transfer my existing investments?",
          answer: "Yes, we make transferring existing investments simple. Our team will analyze your current holdings and create a transition plan that considers tax implications and aligns with your new investment strategy. In many cases, we can transfer assets in-kind without liquidating positions."
        },
        {
          question: "How often will my portfolio be reviewed?",
          answer: "Core portfolios are algorithmically monitored daily with quarterly advisor reviews. Premium portfolios receive monthly advisor reviews and on-demand portfolio consultations. All clients receive proactive outreach when market conditions or personal circumstances warrant strategy adjustments."
        }
      ]}
    />
  );
};

export default PortfolioManagement;
