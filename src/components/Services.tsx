import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, MessageCircle, Calendar, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: UserCheck,
    title: "Smart Lead Qualification",
    description: "Converts inquiries into warm, actionable leads. Filters serious prospects with AI-powered conversations.",
  },
  {
    icon: MessageCircle,
    title: "Automated Follow-Ups",
    description: "Personalized messages over multiple days. Ensures no lead slips through the cracks.",
  },
  {
    icon: Calendar,
    title: "Instant Call Booking",
    description: "Syncs with your calendar. Confirms appointments without you lifting a finger.",
  },
  {
    icon: BarChart3,
    title: "Daily Reports",
    description: "Email or dashboard updates on new leads, booked calls, and status. Quick glance, total control.",
  },
];

const Services = () => {
  return (
    <section id="features" className="py-24 px-6 bg-background relative">
      {/* Decorative orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Lead Generation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to automate your lead management and focus on closing deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:border-primary/20 transition-all duration-500 border-border/30 bg-card/40 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
