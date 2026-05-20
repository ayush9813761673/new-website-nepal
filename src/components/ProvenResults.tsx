import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "312%",
    label: "Average ROI Increase",
    description: "Our clients see massive returns within the first 90 days of implementation.",
  },
  {
    icon: Users,
    metric: "50K+",
    label: "Leads Qualified",
    description: "Automated qualification that never sleeps, processing leads around the clock.",
  },
  {
    icon: Clock,
    metric: "< 2 min",
    label: "Average Response Time",
    description: "Instant engagement means no lead goes cold while you sleep.",
  },
  {
    icon: Target,
    metric: "89%",
    label: "Booking Conversion",
    description: "Smart follow-ups that turn cold inquiries into booked appointments.",
  },
];

const ProvenResults = () => {
  return (
    <section id="results" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/40 bg-card/30 text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Real-time results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Proven Results That{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers don't lie. Here's the impact Flowstra AI delivers for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group relative p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05) 0%, transparent 70%)" }}
              />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <result.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {result.metric}
                </div>
                <div className="text-sm font-semibold text-primary mb-2">
                  {result.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
