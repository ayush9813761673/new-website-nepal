import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Ayush Yadav", role: "Founder & CEO", initials: "AY", bio: "10+ years in AI & automation strategy", linkedin: "https://www.linkedin.com/in/ayush-raj-yadav-062b17280" },
  { name: "Karan Sharma", role: "Lead Specialist", initials: "KS", bio: "Former ML lead at a Fortune 500 company", linkedin: "#" },
];

const MeetTeam = () => {
  return (
    <section id="team" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Meet Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A passionate crew of builders, strategists, and AI nerds on a mission to automate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl border border-border/20 bg-card/20 hover:border-primary/20 transition-all duration-500 text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-xl font-bold group-hover:shadow-soft transition-shadow">
                {member.initials}
              </div>

              <h3 className="text-foreground font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{member.bio}</p>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                <a href={member.linkedin} target={member.linkedin !== "#" ? "_blank" : undefined} rel={member.linkedin !== "#" ? "noopener noreferrer" : undefined} onClick={(e) => member.linkedin === "#" && e.preventDefault()} className="w-8 h-8 rounded-full border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
