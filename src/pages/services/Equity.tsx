
import { ServicePageTemplate } from "@/components/service-page-template";

const Equity = () => {
  return (
    <ServicePageTemplate
      title="Equity Trading"
      subtitle="Trade in stocks across major global exchanges with competitive pricing"
      description={[
        "Experience premium equity trading services with Infinity's cutting-edge platform. Our equity trading service provides you with seamless access to markets around the world, empowering you to build and manage your portfolio with confidence.",
        "With real-time market data, advanced trading tools, and competitive pricing, you can make informed investment decisions that align with your financial goals.",
        "Whether you're a beginner or an experienced trader, our platform offers the right tools and resources for your investment journey."
      ]}
      image="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Competitive Brokerage",
          description: "Industry-leading pricing structure with transparent fees and no hidden charges."
        },
        {
          title: "Advanced Order Types",
          description: "From simple market orders to complex conditional orders, our platform supports all your trading needs."
        },
        {
          title: "Seamless Experience",
          description: "Trade across web, desktop, and mobile apps with a consistent and intuitive interface."
        },
        {
          title: "Real-time Analytics",
          description: "Make informed decisions with access to real-time market data and insightful analytics."
        },
        {
          title: "Research Reports",
          description: "Access comprehensive research reports and recommendations from our expert analysts."
        },
        {
          title: "Basket Orders",
          description: "Create and execute multiple orders simultaneously for efficient portfolio management."
        }
      ]}
      differences={[
        {
          title: "Technology-First Approach",
          description: "Unlike traditional brokers, we built our platform from the ground up with modern technology, ensuring reliability, speed, and innovation."
        },
        {
          title: "Transparent Pricing",
          description: "We believe in complete transparency. Our fee structure is straightforward with no hidden charges or surprise costs."
        },
        {
          title: "Robust Infrastructure",
          description: "Our trading infrastructure is built to handle high-frequency trading with minimal latency and maximum uptime."
        },
        {
          title: "Personalized Experience",
          description: "Our AI-driven platform adapts to your trading style and preferences, providing a truly customized experience."
        }
      ]}
      faqs={[
        {
          question: "How do I open an equity trading account?",
          answer: "Opening an equity trading account with Infinity is a simple, paperless process that takes just minutes. Visit our sign-up page, complete the KYC verification process, and you'll be ready to trade."
        },
        {
          question: "What are your brokerage charges for equity trading?",
          answer: "We offer competitive brokerage plans starting as low as 0.03% per trade. Visit our pricing page for detailed information about our various plans."
        },
        {
          question: "Which exchanges can I trade on through your platform?",
          answer: "Our platform gives you access to major stock exchanges across the world, including NSE, BSE, NYSE, NASDAQ, LSE, and more."
        },
        {
          question: "Do you provide margin trading facilities?",
          answer: "Yes, we offer margin trading facilities with competitive interest rates for eligible customers. The margin limits depend on your trading history and risk assessment."
        }
      ]}
    />
  );
};

export default Equity;
