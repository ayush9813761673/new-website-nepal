import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Flowstra AI doubled my leads in the first week! I can't believe I was handling everything manually before.",
    author: "Ramesh Kumar",
    role: "Realtor, Mumbai Properties",
  },
  {
    quote: "I finally have time to focus on coaching. Flowstra handles all the DMs and books qualified calls automatically.",
    author: "Sita Sharma",
    role: "Life Coach & Entrepreneur",
  },
  {
    quote: "The automated follow-ups are a game-changer. No more missed opportunities or forgotten leads.",
    author: "Arjun Patel",
    role: "Real Estate Agent",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Loved by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about their transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="bg-card/40 border-border/30 hover:border-primary/20 transition-all duration-500 h-full">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border/30 pt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
