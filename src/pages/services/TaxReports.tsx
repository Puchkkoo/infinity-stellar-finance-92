
import { ServicePageTemplate } from "@/components/service-page-template";

const TaxReports = () => {
  return (
    <ServicePageTemplate
      title="Tax Reports"
      subtitle="Automated tax reporting tools to simplify your financial compliance"
      description={[
        "Infinity's comprehensive tax reporting solution takes the stress out of investment tax compliance. Our platform automatically tracks, organizes, and reports your investment activities for seamless tax filing.",
        "Say goodbye to manual calculations and spreadsheets. Our sophisticated system captures every transaction, dividend, interest payment, and capital gain, providing you with accurate, audit-ready tax documents when you need them.",
        "Whether you're an individual investor or financial professional, our tax reporting tools help minimize your tax burden while ensuring full compliance with regulatory requirements."
      ]}
      image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Automated Transaction Tracking",
          description: "All investment activities are automatically captured and categorized for tax purposes."
        },
        {
          title: "Year-Round Tax Impact Visibility",
          description: "Monitor potential tax liabilities throughout the year, not just during tax season."
        },
        {
          title: "Multiple Statement Formats",
          description: "Generate reports in various formats including PDF, CSV, and formats compatible with popular tax software."
        },
        {
          title: "Tax-Loss Harvesting Suggestions",
          description: "Receive intelligent suggestions for tax-loss harvesting opportunities to optimize your tax position."
        },
        {
          title: "Historical Reports Archive",
          description: "Access up to seven years of historical tax documents in your secure account portal."
        },
        {
          title: "Professional Integration",
          description: "Seamlessly share reports with your accountant or tax professional with secure access links."
        }
      ]}
      differences={[
        {
          title: "True End-to-End Solution",
          description: "Unlike platforms that offer basic tax reporting, our solution covers every asset class from stocks to crypto, including complex situations like wash sales and corporate actions."
        },
        {
          title: "Proactive Tax Planning",
          description: "Our platform provides year-round tax insights and recommendations, not just retrospective reporting at tax time."
        },
        {
          title: "Audit Support",
          description: "In the event of an audit, we provide comprehensive documentation and dedicated support to help you navigate the process confidently."
        },
        {
          title: "International Tax Compliance",
          description: "For investors with cross-border assets, we handle complex international tax reporting requirements like FATCA and CRS compliance."
        }
      ]}
      faqs={[
        {
          question: "When will my tax documents be available each year?",
          answer: "We release preliminary tax documents by mid-January, with final versions available by early February, well ahead of most tax deadlines. You'll be notified via email and in-app alerts when your documents are ready."
        },
        {
          question: "Do your tax reports work with my tax software?",
          answer: "Yes, our tax reports are compatible with all major tax preparation software including TurboTax, H&R Block, TaxAct, and professional tax preparation software used by accountants."
        },
        {
          question: "How accurate are the tax calculations?",
          answer: "Our tax reporting system is regularly audited and updated to reflect the latest tax regulations. The system achieves over 99.9% accuracy for standard investment scenarios, with specialized support for complex situations."
        },
        {
          question: "Can I get help with interpreting my tax reports?",
          answer: "Absolutely. Our customer support team includes tax specialists who can explain your reports and answer questions. For premium clients, we offer one-on-one consultations with tax professionals for personalized guidance."
        }
      ]}
    />
  );
};

export default TaxReports;
