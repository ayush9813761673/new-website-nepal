import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Leads Qualified Daily" },
  { value: "95%", label: "Booking Rate" },
  { value: "3x", label: "Faster Follow-Up" },
  { value: "24/7", label: "Always Active" },
];

const Stats = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden border-y border-border/20">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)), hsl(var(--card) / 0.5), hsl(var(--background)))",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
