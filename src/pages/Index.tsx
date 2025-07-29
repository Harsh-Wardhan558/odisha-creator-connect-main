import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfluencerSection from "@/components/InfluencerSection";
import BrandSection from "@/components/BrandSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <InfluencerSection />
      <BrandSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
