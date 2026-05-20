import { motion } from "framer-motion";
import { Bot, MessageSquare, Calendar, BarChart3, Mail, Zap, Database, Globe, Shield, Workflow, Code, Blocks, StickyNote, Heart, TableProperties, Layers } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "AI Agents",
    date: "Core",
    content: "Custom-trained conversational agents that handle leads, support, and sales 24/7.",
    category: "AI",
    icon: Bot,
    relatedIds: [2, 8],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "WhatsApp API",
    date: "Messaging",
    content: "Direct messaging integration for instant customer engagement.",
    category: "Messaging",
    icon: MessageSquare,
    relatedIds: [1, 8],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Smart Scheduling",
    date: "Automation",
    content: "Automated calendar bookings that sync across your team.",
    category: "Scheduling",
    icon: Calendar,
    relatedIds: [6, 7],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Analytics Suite",
    date: "Insights",
    content: "Real-time performance dashboards and reporting.",
    category: "Analytics",
    icon: BarChart3,
    relatedIds: [7, 9],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Email Automation",
    date: "Outreach",
    content: "Drip campaigns & automated follow-ups that convert.",
    category: "Email",
    icon: Mail,
    relatedIds: [6, 2],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 6,
    title: "n8n",
    date: "Workflows",
    content: "Open-source workflow automation for complex multi-step processes.",
    category: "Automation",
    icon: Workflow,
    relatedIds: [3, 10, 11],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 7,
    title: "CRM Sync",
    date: "Data",
    content: "Bi-directional CRM updates keeping all systems in sync.",
    category: "CRM",
    icon: Database,
    relatedIds: [4, 3],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 8,
    title: "Multi-Channel",
    date: "Reach",
    content: "Instagram, Facebook, Web — reach customers everywhere.",
    category: "Channels",
    icon: Globe,
    relatedIds: [1, 2],
    status: "completed" as const,
    energy: 87,
  },
  {
    id: 9,
    title: "Data Security",
    date: "Trust",
    content: "Enterprise-grade encryption protecting your data.",
    category: "Security",
    icon: Shield,
    relatedIds: [4, 7],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 10,
    title: "Python",
    date: "Backend",
    content: "Custom Python scripts and AI/ML models for advanced automation.",
    category: "Development",
    icon: Code,
    relatedIds: [6, 1],
    status: "completed" as const,
    energy: 94,
  },
  {
    id: 11,
    title: "HubSpot",
    date: "CRM",
    content: "Seamless integration with HubSpot to manage your leads and revenue pipeline.",
    category: "CRM",
    icon: StickyNote,
    relatedIds: [6, 12],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 12,
    title: "Salesforce",
    date: "Enterprise",
    content: "Advanced Salesforce automated pipelines and custom integrations.",
    category: "CRM",
    icon: Blocks,
    relatedIds: [10, 11],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 13,
    title: "Zapier",
    date: "Integration",
    content: "500+ app integrations connecting your entire tech stack seamlessly.",
    category: "Integration",
    icon: Zap,
    relatedIds: [6, 14],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 14,
    title: "Make",
    date: "Automation",
    content: "Visual automation platform for complex multi-step workflows and integrations.",
    category: "Integration",
    icon: Layers,
    relatedIds: [6, 13],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 15,
    title: "Airtable",
    date: "Database",
    content: "Flexible cloud database for organizing and managing business data at scale.",
    category: "Data",
    icon: TableProperties,
    relatedIds: [7, 11],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 16,
    title: "Custom Workflows",
    date: "Tailored",
    content: "Tailored automation pipelines built for your specific needs.",
    category: "Custom",
    icon: Blocks,
    relatedIds: [6, 10],
    status: "in-progress" as const,
    energy: 75,
  },
];

const ToolsWeUse = () => {
  return (
    <section id="tools" className="py-24 px-6 bg-background relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tools We{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Use
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powered by best-in-class technology to deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RadialOrbitalTimeline timelineData={timelineData} />
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsWeUse;
