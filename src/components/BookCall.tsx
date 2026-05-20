import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Free 30-minute strategy session",
  "Custom AI growth roadmap for your business",
  "No commitment — just insights",
  "See your projected ROI with real numbers",
];

const BookCall = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Limited spots available this month
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Ready to See How Much More You Could Be{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Earning?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a free strategy call with our AI growth experts. We'll audit your sales funnel
            and show you exactly where Flowstra AI can plug the gaps.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group bg-gradient-primary hover:shadow-strong transition-all duration-300 text-base px-8 py-6 rounded-full"
              onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/50">
            No credit card required · 100% free · Takes 2 minutes to book
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
