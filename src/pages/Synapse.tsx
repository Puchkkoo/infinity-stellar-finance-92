
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ArrowRight, 
  Check, 
  Clock, 
  Users, 
  FileText, 
  Lock,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

const Synapse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-white/20 dark:to-infinity-900/30">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-infinity-100 text-infinity-700 dark:bg-infinity-900/40 dark:text-infinity-400">
                  Productivity Reimagined
                </div>
                
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  Your All-in-One <span className="text-infinity-600 dark:text-infinity-400">Productivity</span> Solution
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Synapse connects your team, tasks, and documents in one unified workspace designed for peak performance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="rounded-full" asChild>
                    <Link to="/register">
                      Start Free Trial
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    <Link to="/synapse/task-management">
                      Explore Features
                    </Link>
                  </Button>
                </div>
                
                <div className="pt-6 flex items-center gap-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-infinity-${i*100} flex items-center justify-center text-xs font-bold text-white`}>
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">10,000+</span> teams already using Synapse
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-infinity-100 dark:border-infinity-800/30">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop"
                    alt="Synapse Dashboard" 
                    className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-medium text-white/80">Synapse Dashboard</p>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">Visualize Your Workflow</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-infinity-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Key Features</h2>
              <p className="section-subtitle">
                Tools designed to boost your productivity and streamline collaboration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Task Management"
                description="Organize tasks with customizable workflows, priorities, and deadlines."
                icon={<Clock className="w-8 h-8 text-infinity-600 dark:text-infinity-400" />}
                link="/synapse/task-management"
              />
              
              <FeatureCard
                title="Team Collaboration"
                description="Connect your team with real-time messaging, file sharing, and comments."
                icon={<Users className="w-8 h-8 text-infinity-600 dark:text-infinity-400" />}
                link="/synapse/team"
              />
              
              <FeatureCard
                title="Document Management"
                description="Create, edit, and organize documents with version history and permissions."
                icon={<FileText className="w-8 h-8 text-infinity-600 dark:text-infinity-400" />}
                link="/synapse/documents"
              />
              
              <FeatureCard
                title="Calendar & Events"
                description="Schedule meetings, set reminders, and coordinate team availability."
                icon={<Calendar className="w-8 h-8 text-infinity-600 dark:text-infinity-400" />}
                link="/synapse/calendar"
              />
              
              <FeatureCard
                title="Advanced Security"
                description="Enterprise-grade security with role-based access control and encryption."
                icon={<Lock className="w-8 h-8 text-infinity-600 dark:text-infinity-400" />}
                link="/features/security"
              />
              
              <FeatureCard
                title="Notifications & Alerts"
                description="Stay updated with customizable notifications across all your devices."
                icon={<Bell className="w-8 h-8 text-infinity-600 dark:text-infinity-400" />}
                link="/synapse/notifications"
              />
            </div>
          </div>
        </section>
        
        {/* Integration Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Seamless Integrations</h2>
              <p className="section-subtitle">
                Connect Synapse with your favorite tools and services
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" },
                { name: "Google Drive", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" },
                { name: "GitHub", logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" },
                { name: "Zoom", logo: "https://download.logo.wine/logo/Zoom_Video_Communications/Zoom_Video_Communications-Logo.wine.png" },
                { name: "Microsoft Teams", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" },
                { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" }
              ].map((integration, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-infinity-900/30 hover:shadow-md transition-shadow duration-200">
                  <img 
                    src={integration.logo} 
                    alt={integration.name} 
                    className="w-12 h-12 object-contain"
                  />
                  <p className="mt-3 text-sm font-medium">{integration.name}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full">
                View All Integrations <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 bg-infinity-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Simple, Transparent Pricing</h2>
              <p className="section-subtitle">
                Choose the plan that fits your team's needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                tier="Starter"
                price="$9"
                description="Perfect for individuals and small teams getting started."
                features={[
                  "Up to 5 team members",
                  "Basic task management",
                  "1GB storage per user",
                  "Standard support",
                  "Basic integrations"
                ]}
                buttonText="Start Free Trial"
                buttonVariant="outline"
              />
              
              <PricingCard
                tier="Professional"
                price="$29"
                description="Advanced features for growing teams and businesses."
                features={[
                  "Up to 50 team members",
                  "Advanced task management",
                  "10GB storage per user",
                  "Priority support",
                  "Advanced integrations",
                  "Custom fields & workflows"
                ]}
                buttonText="Start Free Trial"
                buttonVariant="default"
                highlighted={true}
              />
              
              <PricingCard
                tier="Enterprise"
                price="Contact Us"
                description="Custom solutions for large organizations with complex needs."
                features={[
                  "Unlimited team members",
                  "Complete feature access",
                  "Unlimited storage",
                  "24/7 dedicated support",
                  "Custom integrations",
                  "Advanced security & compliance",
                  "Dedicated success manager"
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Teams of all sizes trust Synapse to boost their productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Synapse has transformed how our team collaborates. We've cut meeting time by 40% while improving productivity.",
                  author: "Sarah Johnson",
                  role: "Project Manager, TechCorp",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  quote: "The document management and task tracking features have been game-changers for our remote team's workflow.",
                  author: "Michael Chen",
                  role: "CTO, StartupNext",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  quote: "We evaluated several productivity tools, but Synapse stood out for its intuitive interface and comprehensive feature set.",
                  author: "Emily Rodriguez",
                  role: "Operations Director, Global Innovations",
                  avatar: "https://randomuser.me/api/portraits/women/68.jpg"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white dark:bg-infinity-900/30 p-8 rounded-xl shadow-sm border border-infinity-100 dark:border-infinity-800/30">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-infinity-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-xl text-infinity-100 mb-8">
                Join thousands of teams already using Synapse to streamline their productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full bg-white text-infinity-900 hover:bg-infinity-100">
                  <Link to="/register">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  link
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white dark:bg-infinity-900/30 p-6 rounded-xl border border-infinity-100 dark:border-infinity-800/30 hover:shadow-md transition-all duration-200 h-full group">
        <div className="mb-4 p-3 rounded-full bg-infinity-100 dark:bg-infinity-800/30 inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-infinity-600 dark:group-hover:text-infinity-400 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center text-infinity-600 dark:text-infinity-400 font-medium">
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

const PricingCard = ({
  tier,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false
}: {
  tier: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
}) => {
  return (
    <div className={`bg-white dark:bg-infinity-900/30 rounded-xl p-8 border ${
      highlighted 
        ? "border-infinity-500 dark:border-infinity-400 shadow-lg shadow-infinity-200/20 dark:shadow-infinity-400/10 relative" 
        : "border-infinity-100 dark:border-infinity-800/30"
    } h-full flex flex-col`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-infinity-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{tier}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Contact Us" && <span className="text-muted-foreground">/month per user</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="flex-grow mb-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant={buttonVariant} 
        size="lg" 
        className={`w-full rounded-full ${highlighted ? "bg-infinity-600 hover:bg-infinity-700 text-white" : ""}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Synapse;
