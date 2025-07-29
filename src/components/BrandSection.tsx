import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, DollarSign, Calendar, Target, Users2 } from "lucide-react";
import OdishaTourismBg from "@/assets/OdishaTourismBg.jpg";
import HandloomBg from "@/assets/HandloomBg.jpg";
import TechStartBg from "@/assets/TechStartBg.jpeg";


const BrandSection = () => {
  const collaborationOpportunities = [
    {
      id: 1,
      brand: "Odisha Tourism Board",
      title: "Showcase Hidden Gems of Odisha",
      budget: "₹50,000 - ₹1,00,000",
      duration: "3 months",
      category: "Travel & Tourism",
      description: "Partner with us to create authentic content showcasing Odisha's unexplored destinations and cultural heritage.",
      requirements: ["Travel Content", "Cultural Stories", "Video Content"],
      location: "Across Odisha",
      deadline: "15 days left",
      applicants: 23
    },
    {
      id: 2,
      brand: "Local Handloom Co.",
      title: "Traditional Textiles Campaign",
      budget: "₹25,000 - ₹50,000",
      duration: "2 months",
      category: "Fashion & Lifestyle",
      description: "Help us promote authentic Odia handloom products and traditional weaving techniques to younger audiences.",
      requirements: ["Fashion Content", "Behind-the-scenes", "Styling Tips"],
      location: "Sambalpur & Berhampur",
      deadline: "7 days left",
      applicants: 18
    },
    {
      id: 3,
      brand: "TechStart Bhubaneswar",
      title: "Digital Innovation Stories",
      budget: "₹75,000 - ₹1,25,000",
      duration: "4 months",
      category: "Technology",
      description: "Document the growing tech ecosystem in Odisha and inspire young entrepreneurs through your storytelling.",
      requirements: ["Tech Reviews", "Startup Stories", "Educational Content"],
      location: "Bhubaneswar",
      deadline: "20 days left",
      applicants: 31
    }
  ];
  const backgroundImages: Record<number, string> = {
  1: OdishaTourismBg,
  2: HandloomBg,
  3: TechStartBg,
};


  return (
    <section id="brands" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Brand Collaboration</span>
            <span className="block text-foreground">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover exciting partnerships with brands that value authentic storytelling and cultural representation
          </p>
        </div>

        {/* Collaboration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {collaborationOpportunities.map((opportunity, index) => (
         <Card
  key={opportunity.id}
  className="relative overflow-hidden p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-card"
  style={{ animationDelay: `${index * 0.15}s` }}
>
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
    <img
      src={backgroundImages[opportunity.id]}
      alt={`${opportunity.brand} background`}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10"></div>
    {/* Place ALL existing content inside this div */}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Building2 size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{opportunity.brand}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {opportunity.category}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{opportunity.deadline}</div>
                  <div className="text-xs text-accent font-medium">{opportunity.applicants} applied</div>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {opportunity.title}
              </h4>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {opportunity.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign size={16} className="text-primary" />
                  <span className="font-semibold text-foreground">{opportunity.budget}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-muted-foreground">{opportunity.duration} campaign</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-muted-foreground">{opportunity.location}</span>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Target size={16} className="text-primary" />
                  Requirements
                </h5>
                <div className="flex flex-wrap gap-2">
                  {opportunity.requirements.map((req, reqIndex) => (
                    <Badge key={reqIndex} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button variant="gradient" className="w-full">
                Apply Now
              </Button>
            </Card>
          ))}
        </div>

        {/* Brand CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Campaign?
            </h3>
            <p className="text-lg mb-8 text-white/90">
              Connect with authentic Odia creators who understand your brand values and can deliver genuine engagement with local audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Post Campaign
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Browse Influencers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;