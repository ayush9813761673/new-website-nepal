import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background sphere */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Ready to stop{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              wasting time on leads?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let Flowstra AI handle the heavy lifting while you focus on what you do best — closing deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group bg-gradient-primary animate-button-glow transition-all duration-300 text-base px-8 py-6 rounded-full"
              onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Flowstra AI Setup Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 text-base px-8 py-6 rounded-full hover:bg-card/50 transition-all"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
