import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For solopreneurs & small teams",
    price: "$499",
    period: "per month",
    setup: "$999 one-time setup",
    icon: Zap,
    popular: false,
    features: [
      "1 AI Sales Agent",
      "Smart lead qualification",
      "Automated follow-ups",
      "Calendar integration",
      "Email & SMS outreach",
      "Basic analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For scaling businesses",
    price: "$999",
    period: "per month",
    setup: "$1,999 one-time setup",
    icon: Sparkles,
    popular: true,
    features: [
      "3 AI Sales Agents",
      "Multi-channel outreach",
      "Advanced lead scoring",
      "Custom workflows",
      "WhatsApp + Instagram DMs",
      "Advanced analytics & reports",
      "Priority support",
      "Weekly strategy calls",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For high-volume teams",
    price: "Custom",
    period: "tailored to you",
    setup: "Custom onboarding",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited AI Agents",
      "Full custom branding",
      "Dedicated account manager",
      "Custom AI model training",
      "Multi-channel integration",
      "Advanced analytics suite",
      "24/7 priority support",
      "SLA & compliance",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Custom Solutions,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Custom Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every business is different. Choose a plan that fits your growth stage,
            or let us build something tailored just for you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card
                  className={`relative flex flex-col h-full border bg-card/40 backdrop-blur-sm transition-all duration-500 hover:shadow-lg group ${
                    plan.popular
                      ? "border-primary/50 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]"
                      : "border-border/30 hover:border-primary/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}

                  <CardContent className="flex-1 flex flex-col pt-8 pb-6">
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        plan.popular
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                        <p className="text-xs text-muted-foreground">{plan.tagline}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/{plan.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{plan.setup}</p>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
                      className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-button-glow"
                          : "border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      }`}
                    >
                      {plan.price === "Custom" ? "Book a Call" : "Get Started"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>

                    {/* Divider */}
                    <div className="border-t border-border/30 my-6" />

                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          All plans require a 3-month minimum commitment. Spots are strictly limited to ensure quality delivery.{" "}
          <button onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")} className="text-primary hover:underline font-medium cursor-pointer">
            Let's talk →
          </button>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
