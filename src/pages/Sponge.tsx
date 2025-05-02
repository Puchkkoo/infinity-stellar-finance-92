
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Sponge = () => {
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "SJ",
      content: "Just made my first international stock purchase through Flamingo! The process was amazingly smooth.",
      likes: 24,
      comments: 5,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "Raj Patel",
      avatar: "RP",
      content: "Anyone else following the tech sector this quarter? Seeing some interesting trends in semiconductor stocks.",
      likes: 37,
      comments: 12,
      time: "4 hours ago"
    },
    {
      id: 3,
      author: "Alex Chen",
      avatar: "AC",
      content: "Just finished the Advanced Portfolio Management course on Infinity. Highly recommend for intermediate investors!",
      likes: 18,
      comments: 3,
      time: "8 hours ago"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-blue-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-2 dark:bg-blue-900/40 mb-4">
                  <MessagesSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-infinity-600">Sponge</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  A community app connecting financial customers worldwide. Share insights, learn, and grow together.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Join Community
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-infinity-900/30 rounded-lg overflow-hidden shadow-xl p-6">
                    <div className="space-y-6">
                      {posts.map((post) => (
                        <div key={post.id} className="bg-background rounded-lg p-4 shadow-sm">
                          <div className="flex items-center space-x-3 mb-3">
                            <Avatar>
                              <AvatarFallback>{post.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{post.author}</div>
                              <div className="text-xs text-muted-foreground">{post.time}</div>
                            </div>
                          </div>
                          <p className="text-sm mb-3">{post.content}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span className="mr-4">{post.likes} Likes</span>
                            <span>{post.comments} Comments</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Community Features</h2>
              <p className="section-subtitle">
                Connect, learn, and grow with our global financial community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Discussion Forums</h3>
                    <p className="text-muted-foreground text-sm">
                      Engage in thoughtful discussions about markets, investments, and financial strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Learning Resources</h3>
                    <p className="text-muted-foreground text-sm">
                      Access community-curated educational content, from beginner guides to advanced strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Expert Mentorship</h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with experienced investors and financial professionals for guidance.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Events & Webinars</h3>
                    <p className="text-muted-foreground text-sm">
                      Participate in live discussions, webinars, and Q&A sessions with industry experts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponge;
