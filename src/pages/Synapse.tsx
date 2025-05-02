
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Calendar, FileText, Users, BarChart3, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Synapse = () => {
  const demoFeatures = [
    {
      name: "Task View",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
      description: "Organize tasks with priority levels and deadlines"
    },
    {
      name: "Calendar View",
      imageSrc: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000&auto=format&fit=crop",
      description: "Schedule events and set reminders"
    },
    {
      name: "Document Management",
      imageSrc: "https://images.unsplash.com/photo-1568993539991-42505c363324?q=80&w=1000&auto=format&fit=crop",
      description: "Store and organize your files securely"
    }
  ];
  
  const handleDemoClick = () => {
    toast.success("Demo mode activated! You're now viewing Synapse in interactive demo mode.");
  };

  const handleGetStartedClick = () => {
    window.location.href = "/register";
  };

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
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleGetStartedClick}>
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleDemoClick}>
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-infinity-900/30 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" 
                      alt="Synapse app interface" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-600/20 dark:bg-purple-500/30 backdrop-blur-sm p-3 rounded-lg">
                          <Calendar className="h-6 w-6 text-purple-800 dark:text-purple-300" />
                        </div>
                        <div className="bg-purple-600/20 dark:bg-purple-500/30 backdrop-blur-sm p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-purple-800 dark:text-purple-300" />
                        </div>
                        <div className="bg-purple-600/20 dark:bg-purple-500/30 backdrop-blur-sm p-3 rounded-lg">
                          <Users className="h-6 w-6 text-purple-800 dark:text-purple-300" />
                        </div>
                      </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop" 
                    alt="Task Management" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-infinity-950/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-bold text-white">Task Management</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Organize your financial tasks with our intuitive task management system. Set priorities, deadlines, and track progress.
                  </p>
                  <Link to="/synapse/task-management" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2070&auto=format&fit=crop" 
                    alt="Calendar Integration" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-infinity-950/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-bold text-white">Calendar Integration</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Never miss an important financial event or meeting. Seamlessly integrate with your existing calendars.
                  </p>
                  <Link to="/synapse/calendar" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1568993539991-42505c363324?q=80&w=2070&auto=format&fit=crop" 
                    alt="Document Management" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-infinity-950/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-bold text-white">Document Management</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Store, organize, and securely share financial documents with clients and team members.
                  </p>
                  <Link to="/synapse/documents" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Interactive Demo</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience how Synapse can transform your workflow with our interactive demo
              </p>
            </div>
            
            <Tabs defaultValue="tasks" className="w-full mb-16">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              
              {demoFeatures.map((feature, index) => (
                <TabsContent key={index} value={feature.name.toLowerCase().split(' ')[0]} className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                        <img 
                          src={feature.imageSrc}
                          alt={feature.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                        <div className="text-center relative z-10">
                          <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                            {feature.description}
                          </p>
                          <Button className="bg-purple-600 hover:bg-purple-700">Try {feature.name}</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Synapse?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Synapse is designed specifically for financial professionals, with features that make your workflow more efficient
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-infinity-900/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Financial Focus</h3>
                <p className="text-muted-foreground">
                  Unlike generic productivity tools, Synapse is built specifically for financial workflows with specialized templates and features.
                </p>
              </div>
              
              <div className="bg-white dark:bg-infinity-900/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connects with all your favorite tools including our Flamingo trading platform for unified workflow management.
                </p>
              </div>
              
              <div className="bg-white dark:bg-infinity-900/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-level encryption and compliance features ensure your sensitive financial data remains secure and protected.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-purple-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Synapse dashboard" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold mb-6">Ready to boost your productivity?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of financial professionals who have transformed their workflow with Synapse. Get started today with a 14-day free trial.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleGetStartedClick}>
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleDemoClick}>
                    Schedule Demo
                  </Button>
                </div>
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
