import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const stories = [
  {
    quote: "Before Flowstra, we were losing 60% of our leads to slow response times. Now our AI agent responds in under 30 seconds and books calls while we sleep.",
    author: "Marcus T.",
    role: "Founder, GrowthEngine Agency",
    metric: "3.5x more bookings",
    rating: 5,
    image: null,
  },
  {
    quote: "The ROI was visible from week one. Our lead-to-close ratio jumped from 8% to 23% — without hiring a single extra salesperson.",
    author: "Sarah Jenkins",
    role: "VP of Sales, TechStack Solutions",
    metric: "187% ROI in 60 days",
    rating: 5,
    image: null,
  },
  {
    quote: "I was skeptical about AI automation, but Flowstra proved me wrong. It handles follow-ups better than my best sales rep ever did.",
    author: "David K.",
    role: "Director of Ops, ScaleUp Consulting",
    metric: "95% follow-up rate",
    rating: 5,
    image: null,
  },
  {
    quote: "We went from manually managing 50 leads/day to effortlessly handling 300+ with higher conversion rates. Game changer.",
    author: "Elena R.",
    role: "Head of Revenue, B2B Outbound",
    metric: "6x lead capacity",
    rating: 5,
    image: null,
  },
  {
    quote: "The custom AI workflows Flowstra built for us integrate seamlessly with our CRM. It's like having a team of 10 SDRs on autopilot.",
    author: "James P.",
    role: "Managing Director, Pipeline Velocity",
    metric: "$240K revenue recovered",
    rating: 5,
    image: null,
  },
  {
    quote: "Our coaching business was drowning in DMs. Flowstra now qualifies leads and books discovery calls automatically — I just show up and coach.",
    author: "Amanda S.",
    role: "High-Ticket Business Coach",
    metric: "40 hrs/month saved",
    rating: 5,
    image: null,
  },
];

const ClientStories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            Client{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real businesses. Real transformations. See how Flowstra AI changed the game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="bg-card/30 border-border/20 hover:border-primary/20 transition-all duration-500 h-full backdrop-blur-sm group">
                <CardContent className="pt-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="w-6 h-6 text-primary/20 mb-3" />
                  <p className="text-foreground/90 mb-6 leading-relaxed text-sm flex-1">
                    "{story.quote}"
                  </p>

                  {/* Metric badge */}
                  <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    <ArrowRight className="w-3 h-3" />
                    {story.metric}
                  </div>

                  {/* Author */}
                  <div className="border-t border-border/20 pt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {story.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{story.author}</p>
                      <p className="text-xs text-muted-foreground">{story.role}</p>
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

export default ClientStories;
