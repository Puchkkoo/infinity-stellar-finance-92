
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Mail, MapPin, Phone, Contact as ContactIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-10 md:py-20 bg-gradient-to-b from-background to-infinity-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
                <ContactIcon className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions or need assistance? Our team is here to help. Reach out to us using any of the methods below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Send us a Message</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>
                      
                      <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Contact Information</CardTitle>
                    <CardDescription>Reach out to us directly using the information below.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-infinity-600 dark:text-infinity-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Headquarters</h3>
                        <p className="text-muted-foreground">
                          Infinity Tower, 123 Financial District,<br />
                          Mumbai, Maharashtra 400051,<br />
                          India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-infinity-600 dark:text-infinity-400" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+91 (22) 1234-5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-infinity-600 dark:text-infinity-400" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">contact@infinityfinance.com</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-3">Office Hours</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-infinity-600 dark:text-infinity-400 mr-2" />
                        <CardTitle className="text-lg">Location Map</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
                        {/* Placeholder for map - could be replaced with an actual map component */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Interactive map would be displayed here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default Contact;
