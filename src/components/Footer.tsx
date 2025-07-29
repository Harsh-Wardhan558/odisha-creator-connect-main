import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-white/80 mb-8">
              Get the latest updates on collaboration opportunities and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold">OdishaInfluence</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Empowering Odisha's digital identity by connecting authentic creators with meaningful brand partnerships. 
              Building a community that celebrates our rich culture while driving innovation.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Youtube size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">For Influencers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">For Brands</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-white/60" />
                <span className="text-white/80">Bhubaneswar, Odisha</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white/60" />
                <span className="text-white/80">hello@odishainfluence.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-white/60" />
                <span className="text-white/80">+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 OdishaInfluence. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;