import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import blog1 from "../assets/Blog1.jpg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Odia Creators Are Revolutionizing Digital Marketing in Eastern India",
      excerpt: "Discover how local influencers are creating authentic content that resonates with audiences across Odisha and beyond, driving real business results.",
      category: "Industry Insights",
      author: "Priya Sharma",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: "2.3K",
      image: Blog1Img,
      featured: true,
    },
    {
      id: 2,
      title: "Traditional Crafts Meet Modern Influence: A Success Story",
      excerpt: "Learn how heritage handicraft brands are leveraging influencer partnerships to reach global markets while preserving cultural authenticity.",
      category: "Success Stories",
      author: "Raj Patel",
      date: "March 12, 2024",
      readTime: "7 min read",
      views: "1.8K",
       image: Blog2Img,
    },
    {
      id: 3,
      title: "Building Community: The Power of Micro-Influencers in Odisha",
      excerpt: "Why brands are shifting focus to micro-influencers and how smaller creators are driving higher engagement rates in local markets.",
      category: "Strategy",
      author: "Anita Das",
      date: "March 10, 2024",
      readTime: "6 min read",
      views: "1.5K",
      image: Blog3Img,
    },
    {
      id: 4,
      title: "Tourism Revival: How Influencers Are Showcasing Hidden Gems",
      excerpt: "Explore how travel content creators are putting Odisha's lesser-known destinations on the map and boosting local tourism.",
      category: "Travel & Culture",
      author: "Suman Nayak",
      date: "March 8, 2024",
      readTime: "8 min read",
      views: "3.1K",
      image: Blog4Img,
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4"></div>
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest from Our
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated with industry insights, success stories, and tips for creating authentic content that connects
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 animate-fade-in">
         {/* Featured Post */}
<div className="mb-12 animate-fade-in">
  <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 border-0 shadow-card">
    <div className="md:flex">
      {/* Left: Image + overlay */}
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
        <img
          src={blogPosts[0].image}
          alt={blogPosts[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <Badge className="absolute top-4 left-4 bg-white/90 text-primary font-semibold">
          Featured
        </Badge>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-50">📱</div>
        </div>
      </div>

      {/* Right: Text content */}
      <div className="md:w-1/2 p-8">
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary">{blogPosts[0].category}</Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {blogPosts[0].date}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {blogPosts[0].readTime}
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} />
              {blogPosts[0].views}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
          {blogPosts[0].title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {blogPosts[0].excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{blogPosts[0].author}</span>
          </div>
          <Button variant="gradient" className="group">
            Read More
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  </Card>
</div>

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.id}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
             <div className="h-48 relative overflow-hidden">
  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>


              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Eye size={12} />
                    {post.views}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>By {post.author}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:shadow-glow">
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
