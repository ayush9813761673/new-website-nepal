import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Lightning from "@/components/ui/lightning";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Large sphere/globe */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] z-[2]">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.04) 40%, transparent 70%)",
              boxShadow:
                "0 0 120px 40px hsl(var(--primary) / 0.08), inset 0 -60px 80px hsl(var(--background))",
              border: "1px solid hsl(var(--primary) / 0.08)",
            }}
          />
          {/* Top arc highlight */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Lightning beam inside sphere */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] z-[3] opacity-40 rounded-full overflow-hidden">
          <Lightning hue={215} xOffset={0} speed={0.8} intensity={1} size={1} />
        </div>

        {/* Bottom fade to background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%] z-[4]"
          style={{
            background: "linear-gradient(to top, hsl(var(--background)), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-card/30 backdrop-blur-sm text-sm text-muted-foreground">
              AI sales systems that work 24/7 to capture every lead
              <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground">
            Your 24/7 Digital{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Assistant
            </span>
            {" "}for Leads & Bookings
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop chasing leads. Let Flowstra AI qualify, follow up, and book appointments
            automatically — so you focus on closing deals.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-strong transition-all duration-300 text-base px-8 py-6 rounded-full group"
              onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
              <div className="ml-3 flex items-center gap-2 pl-3 border-l border-primary-foreground/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm opacity-80">2 Spots Left</span>
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 text-base px-8 py-6 rounded-full hover:bg-card/50 transition-all cursor-pointer"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Client Wins
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground/60 pt-8"
          >
            Trusted by 31+ businesses to accelerate their sales
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
