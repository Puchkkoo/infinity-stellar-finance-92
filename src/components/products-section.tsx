
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Box, FileText, LayoutGrid, MessagesSquare } from "lucide-react";

export function ProductsSection() {
  const products = [
    {
      name: "Flamingo",
      description: "Modern brokerage firm with advanced trading tools and features",
      icon: <Box className="w-10 h-10 text-pink-500" />,
      color: "bg-pink-500",
      link: "/flamingo"
    },
    {
      name: "Synapse",
      description: "Productivity app designed for modern financial professionals",
      icon: <LayoutGrid className="w-10 h-10 text-purple-500" />,
      color: "bg-purple-500", 
      link: "/synapse"
    },
    {
      name: "Sponge",
      description: "Community app connecting financial customers worldwide",
      icon: <MessagesSquare className="w-10 h-10 text-blue-500" />,
      color: "bg-blue-500",
      link: "/sponge"
    },
    {
      name: "The Indian Street",
      description: "News and articles focused on finance and market trends",
      icon: <FileText className="w-10 h-10 text-green-500" />,
      color: "bg-green-500",
      link: "/indian-street"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Explore our suite of modern financial products designed to empower your financial journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-0">
                <div className={`w-16 h-16 rounded-full ${product.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <CardTitle className="text-2xl font-serif">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-6">
                <Button variant="ghost" size="sm" asChild>
                  <Link to={product.link} className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
