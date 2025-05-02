import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessagesSquare, Users, BookOpen, Globe, Share2, BarChart3 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { toast } from "sonner";

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

  const communityCategories = [
    {
      title: "Market Analysis",
      description: "Discuss market trends, insights, and analysis with fellow investors",
      icon: <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      memberCount: "2.4k",
      postsPerDay: "43"
    },
    {
      title: "Beginner's Corner",
      description: "New to investing? Get guidance and advice from experienced community members",
      icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      memberCount: "5.7k",
      postsPerDay: "78"
    },
    {
      title: "International Markets",
      description: "Explore opportunities and insights in global financial markets",
      icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      memberCount: "1.9k",
      postsPerDay: "25"
    }
  ];

  const handleJoinClick = () => {
    toast.success("You've successfully joined the Sponge community!");
  };
  
  const handleLikePost = (postId: number) => {
    toast.success("Post liked successfully!");
  };
  
  const handleCommentPost = (postId: number) => {
    toast.success("Comment added successfully!");
  };

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
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleJoinClick}>
                    Join Community
                  </Button>
                  <Link to="/sponge/about">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-infinity-900/30 rounded-lg overflow-hidden shadow-xl p-6">
                    <div className="space-y-6">
                      {posts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-infinity-900/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
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
                            <button 
                              className="mr-4 flex items-center hover:text-blue-600 transition-colors"
                              onClick={() => handleLikePost(post.id)}
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                              </svg>
                              {post.likes} Likes
                            </button>
                            <button 
                              className="flex items-center hover:text-blue-600 transition-colors"
                              onClick={() => handleCommentPost(post.id)}
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                              </svg>
                              {post.comments} Comments
                            </button>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessagesSquare className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Discussion Forums</h3>
                    <p className="text-muted-foreground text-sm">
                      Engage in thoughtful discussions about markets, investments, and financial strategies.
                    </p>
                    <Link to="/sponge/forums" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                      Browse Forums
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Learning Resources</h3>
                    <p className="text-muted-foreground text-sm">
                      Access community-curated educational content, from beginner guides to advanced strategies.
                    </p>
                    <Link to="/sponge/resources" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                      Explore Resources
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Expert Mentorship</h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with experienced investors and financial professionals for guidance.
                    </p>
                    <Link to="/sponge/mentors" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                      Find Mentors
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Share2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Events & Webinars</h3>
                    <p className="text-muted-foreground text-sm">
                      Participate in live discussions, webinars, and Q&A sessions with industry experts.
                    </p>
                    <Link to="/sponge/events" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                      View Schedule
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Popular Communities</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of investors discussing market trends and strategies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {communityCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all border border-blue-100 dark:border-blue-900/20">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{category.memberCount} members</span>
                        <span>{category.postsPerDay} posts/day</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleJoinClick}>
                        Join Community
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Tabs defaultValue="trending" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
              
              <TabsContent value="trending" className="mt-6">
                <div className="grid grid-cols-1 gap-4">
                  {[1, 2, 3].map((post) => (
                    <Card key={post} className="hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">John Doe</div>
                            <div className="text-xs text-muted-foreground">3 hours ago in Market Analysis</div>
                          </div>
                        </div>
                        <h4 className="font-bold mb-2">What do you think about the recent Fed announcement?</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          I'm curious to hear everyone's thoughts on how the recent Federal Reserve announcement might impact growth stocks in the coming months...
                        </p>
                        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                              </svg>
                              42 Likes
                            </button>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                              </svg>
                              18 Comments
                            </button>
                          </div>
                          <button className="text-blue-600 hover:underline">Read More</button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recent" className="mt-6">
                <div className="grid grid-cols-1 gap-4">
                  {/* Similar content for Recent tab */}
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar>
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Maria Patel</div>
                          <div className="text-xs text-muted-foreground">Just now in Beginner's Corner</div>
                        </div>
                      </div>
                      <h4 className="font-bold mb-2">Best resources for learning technical analysis?</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        I'm new to technical analysis and looking for recommendations on good resources to learn from. Books, courses, or videos would all be helpful...
                      </p>
                      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center hover:text-blue-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                            </svg>
                            5 Likes
                          </button>
                          <button className="flex items-center hover:text-blue-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            3 Comments
                          </button>
                        </div>
                        <button className="text-blue-600 hover:underline">Read More</button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="featured" className="mt-6">
                <div className="grid grid-cols-1 gap-4">
                  {/* Content for Featured tab */}
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar>
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Alex Smith</div>
                          <div className="text-xs text-muted-foreground">Featured post - 2 days ago</div>
                        </div>
                      </div>
                      <h4 className="font-bold mb-2">In-depth analysis: Emerging markets in 2025</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        This comprehensive analysis looks at the potential growth opportunities in emerging markets over the next year, with a focus on Southeast Asia and Latin America...
                      </p>
                      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center hover:text-blue-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                            </svg>
                            128 Likes
                          </button>
                          <button className="flex items-center hover:text-blue-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            42 Comments
                          </button>
                        </div>
                        <button className="text-blue-600 hover:underline">Read More</button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-blue-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Join Our Growing Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with over 100,000 investors worldwide to share insights, learn from experts, and grow your financial knowledge
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleJoinClick}>
                Join Sponge Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponge;
