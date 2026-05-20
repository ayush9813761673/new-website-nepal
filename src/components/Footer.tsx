import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">Flowstra</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              24/7 digital assistant that qualifies leads, follows up automatically, and books appointments for you.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Features</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><button onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Lead Qualification</button></li>
              <li><button onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Auto Follow-Ups</button></li>
              <li><button onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Call Booking</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><button onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Pricing</button></li>
              <li><button onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Testimonials</button></li>
              <li><button onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/ayush-raj-yadav-062b17280" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-card border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center text-muted-foreground hover:text-primary cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/flowstra.ai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-card border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center text-muted-foreground hover:text-primary cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:support@flowstra.org" className="w-9 h-9 rounded-full bg-card border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center text-muted-foreground hover:text-primary cursor-pointer">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center text-sm text-muted-foreground/60">
          <p>&copy; 2025 Flowstra AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
