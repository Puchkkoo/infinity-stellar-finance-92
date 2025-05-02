
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Lock } from "lucide-react";

const Security = () => {
  return (
    <FeaturePageTemplate
      title="Bank-Grade Security"
      subtitle="Enterprise-level security protocols to protect your investments and personal data"
      icon={<Lock className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "At Infinity, we understand that security is paramount when it comes to your financial data and assets. That's why we've implemented bank-grade security measures across our entire platform.",
        "Our multi-layered security approach combines cutting-edge technology, rigorous protocols, and continuous monitoring to ensure your assets and information remain protected at all times.",
        "We invest heavily in security infrastructure and regularly undergo independent security audits to maintain the highest standards of protection in the industry."
      ]}
      image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Military-Grade Encryption",
          description: "All data is secured with 256-bit encryption, the same standard used by military and financial institutions worldwide."
        },
        {
          title: "Two-Factor Authentication",
          description: "Add an extra layer of security with SMS, authenticator apps, or hardware security keys for account access."
        },
        {
          title: "Biometric Authentication",
          description: "Use fingerprint, face recognition, or other biometric methods to securely access your account on mobile devices."
        },
        {
          title: "Asset Protection",
          description: "Client assets are held in segregated accounts at partner custodians with SIPC insurance coverage up to regulatory limits."
        },
        {
          title: "24/7 Fraud Monitoring",
          description: "Advanced AI systems continuously monitor for suspicious activities and potential security threats."
        },
        {
          title: "Regular Security Audits",
          description: "Independent security experts regularly test our systems to identify and address potential vulnerabilities."
        }
      ]}
      howItWorks={[
        {
          step: "Secure Account Creation",
          description: "Our account creation process includes rigorous identity verification procedures to prevent unauthorized access and ensure compliance with KYC/AML regulations."
        },
        {
          step: "Layered Authentication",
          description: "Multiple authentication factors are required for login, with additional verifications for sensitive operations like withdrawals or changes to security settings."
        },
        {
          step: "Data Encryption",
          description: "All data, both in transit and at rest, is encrypted using industry-leading encryption standards. This ensures your personal and financial information remains protected at all times."
        },
        {
          step: "Continuous Monitoring",
          description: "Our security systems continuously monitor for unusual activities or potential threats. Any suspicious activities trigger immediate investigation and protective measures."
        },
        {
          step: "Regular Security Updates",
          description: "We maintain a proactive approach to security, regularly updating our systems and protocols to address emerging threats and vulnerabilities."
        }
      ]}
      useCases={[
        {
          title: "Secure Trading from Public Networks",
          description: "Trade with confidence even when connected to public Wi-Fi networks, knowing your connection is encrypted and secure."
        },
        {
          title: "Protected Access to Sensitive Financial Data",
          description: "Access your portfolio, transaction history, and financial reports with multiple layers of authentication ensuring only you can view your data."
        },
        {
          title: "Safe International Trading",
          description: "Execute trades on international exchanges with the same level of security and protection as domestic markets."
        },
        {
          title: "Secure Account Recovery",
          description: "In case you lose access to your authentication methods, our secure account recovery process verifies your identity before restoring account access."
        }
      ]}
    />
  );
};

export default Security;
