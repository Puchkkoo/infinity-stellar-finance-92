
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";

const Synapse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-purple-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-purple-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center rounded-full bg-purple-100 p-2 dark:bg-purple-900/40 mb-4">
                  <LayoutGrid className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-infinity-600">Synapse</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  A modern productivity app designed for financial professionals. Streamline your workflow and boost efficiency.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg">
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-infinity-900/30 rounded-lg overflow-hidden shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Synapse app interface visualization</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 dark:bg-purple-800/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Productivity Features</h2>
              <p className="section-subtitle">
                Tools designed to enhance your financial workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-4">Task Management</h3>
                <p className="text-muted-foreground">
                  Organize your financial tasks with our intuitive task management system. Set priorities, deadlines, and track progress.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-4">Calendar Integration</h3>
                <p className="text-muted-foreground">
                  Never miss an important financial event or meeting. Seamlessly integrate with your existing calendars.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-4">Document Management</h3>
                <p className="text-muted-foreground">
                  Store, organize, and securely share financial documents with clients and team members.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-4">Client Relationship</h3>
                <p className="text-muted-foreground">
                  Manage client information, interactions, and portfolios in one centralized location.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-4">Reporting</h3>
                <p className="text-muted-foreground">
                  Generate professional financial reports with customizable templates and automated data entry.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-4">Integrations</h3>
                <p className="text-muted-foreground">
                  Connect with other financial tools and services for a seamless workflow experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Synapse;
