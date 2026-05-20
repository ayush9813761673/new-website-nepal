import { motion } from "framer-motion";

const brands = [
  "Nexus Drive", "Quantum Scale", "Vortex Media", "Apex Flow", "Stellar CRM",
  "Veritas Ops", "CloudPeak", "PrimeEdge", "VeloCity", "Zenith Group",
  "CoreAxis", "SwiftPath"
];

const BrandsTrust = () => {
  return (
    <section className="py-16 px-6 bg-background relative overflow-hidden border-y border-border/10">
      <div className="container mx-auto">
        <motion.p
          className="text-center text-sm text-muted-foreground/60 mb-10 uppercase tracking-widest font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Brands That Trust Us
        </motion.p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          />

          <div className="flex animate-marquee gap-12 items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 rounded-xl border border-border/20 bg-card/20 text-muted-foreground/50 font-semibold text-sm whitespace-nowrap hover:text-foreground hover:border-primary/20 transition-all duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsTrust;
