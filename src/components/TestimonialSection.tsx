import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import manImage from "@/assets/man.jpg";
import girlImage from "@/assets/girl.jpg";
import girl2Image from "@/assets/girl2.jpg";
import man2Image from "@/assets/man2.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sanjay Kumar",
      role: "Marketing Director",
      company: "Heritage Hotels Odisha",
      content: "OdishaInfluence helped us connect with authentic local creators who truly understood our brand. The cultural sensitivity and genuine engagement we received was outstanding. Our booking rates increased by 40% during the campaign period.",
      rating: 5,
      avatar: "SK",
      image: manImage, 
    },
    {
      id: 2,
      name: "Meera Patel",
      role: "Founder",
      company: "Artisan Collective",
      content: "Working with influencers through this platform was seamless. They matched us with creators who genuinely appreciated handcrafted products. The content quality and authentic storytelling exceeded our expectations completely.",
      rating: 5,
      avatar: "MP",
      image: girlImage,
    },
    {
      id: 3,
      name: "Ravi Mohapatra",
      role: "Content Creator",
      company: "@raviodisha",
      content: "As a creator, this platform has opened doors to meaningful collaborations with brands that align with my values. The support team is incredible, and the opportunities are genuinely exciting and culturally relevant.",
      rating: 5,
      avatar: "RM",
       image: man2Image, 
    },
    {
      id: 4,
      name: "Dr. Anita Swain",
      role: "Cultural Curator",
      company: "Odisha Cultural Foundation",
      content: "The platform beautifully bridges traditional Odia culture with modern digital marketing. The creators here are not just influencers; they're cultural ambassadors who promote our heritage authentically.",
      rating: 5,
      avatar: "AS",
      image : girl2Image,
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories &
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from brands and creators who have built meaningful partnerships through our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 shadow-card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full"></div>
              
              {/* Quote Icon */}
              <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {testimonial.image ? (
  <img 
    src={testimonial.image} 
    alt={testimonial.name} 
    className="w-12 h-12 rounded-full object-cover" 
  />
) : (
  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
    {testimonial.avatar}
  </div>
)}

                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Building Trust Through Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-white/80">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-white/80">Repeat Collaborations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;