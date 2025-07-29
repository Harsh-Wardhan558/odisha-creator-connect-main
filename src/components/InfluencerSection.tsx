import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Youtube, Users } from "lucide-react";
import influencer1 from "@/assets/influencer-1.jpg";
import influencer2 from "@/assets/influencer-2.jpg";
import influencer3 from "@/assets/influencer-3.jpg";

const InfluencerSection = () => {
  const influencers = [
    {
      id: 1,
      name: "Priya Sharma",
      bio: "Lifestyle & Culture Creator showcasing authentic Odisha traditions",
      image: influencer1,
      followers: "125K",
      category: "Lifestyle",
      rating: 4.9,
      socialMedia: {
        instagram: "@priya_odisha",
        youtube: "PriyaOdishaLife",
      }
    },
    {
      id: 2,
      name: "Raj Patel",
      bio: "Tech reviewer and digital entrepreneur from Bhubaneswar",
      image: influencer2,
      followers: "98K",
      category: "Technology",
      rating: 4.8,
      socialMedia: {
        instagram: "@rajtech_odisha",
        twitter: "@raj_techie",
      }
    },
    {
      id: 3,
      name: "Anita Das",
      bio: "Food blogger celebrating Odia cuisine and local restaurants",
      image: influencer3,
      followers: "156K",
      category: "Food & Travel",
      rating: 4.9,
      socialMedia: {
        instagram: "@anita_odiafood",
        youtube: "AnitaOdishaEats",
      }
    }
  ];

  return (
    <section id="influencers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Top Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect with Odisha's most influential content creators who authentically represent our culture and values
          </p>
        </div>

        {/* Influencer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {influencers.map((influencer, index) => (
            <Card 
              key={influencer.id} 
              className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20">
                  <img 
                    src={influencer.image} 
                    alt={influencer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ {influencer.rating}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{influencer.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{influencer.bio}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users size={16} />
                    <span className="font-semibold">{influencer.followers}</span>
                  </div>
                  <div className="bg-gradient-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    {influencer.category}
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  {influencer.socialMedia.instagram && (
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram size={16} className="text-white" />
                    </div>
                  )}
                  {influencer.socialMedia.youtube && (
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Youtube size={16} className="text-white" />
                    </div>
                  )}
                  {influencer.socialMedia.twitter && (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Twitter size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button variant="gradient" className="w-full">
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:shadow-glow">
            View All Influencers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;