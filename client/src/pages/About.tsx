import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { User, MapPin, Mail, Phone, Server, Database, Shield, Terminal } from "lucide-react";

const coreAreas = [
  { icon: Server, title: "Scalable Architecture", desc: "Designing systems that handle growth" },
  { icon: Shield, title: "Security First", desc: "JWT, encryption & authorization" },
  { icon: Database, title: "Database Design", desc: "Optimized schemas & queries" },
  { icon: Terminal, title: "API Performance", desc: "Fast, reliable & well-documented" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            title="About Me" 
            subtitle="Backend Developer focused on building production-ready systems" 
          />
        </motion.div>

        <div className="space-y-16">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-card rounded-3xl border border-border/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <motion.div 
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary via-cyan-500 to-primary/60 flex items-center justify-center shadow-2xl shadow-primary/30">
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-card flex items-center justify-center"
                    >
                      <span className="w-3 h-3 bg-white rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>

                <div className="flex-1">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold font-heading mb-2"
                  >
                    Adefisan Babatunde
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-primary font-semibold mb-4"
                  >
                    Backend Developer
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6"
                  >
                    <a href="tel:+2349160214824" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-phone">
                      <Phone className="w-4 h-4" />
                      +234 916 021 4824
                    </a>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Nigeria
                    </span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4 text-muted-foreground leading-relaxed"
                  >
                    <p>
                      I am <span className="text-foreground font-semibold">Adefisan Babatunde</span>, a backend developer with over <span className="text-primary font-semibold">4 years of hands-on experience</span> designing, building, and maintaining scalable server-side applications.
                    </p>
                    <p>
                      I specialize in API development, database architecture, authentication systems, and backend performance optimization. I have worked on business platforms, admin dashboards, fintech-style systems, church platforms, and enterprise-level applications -- ensuring security, scalability, and maintainability.
                    </p>
                    <p>
                      My development philosophy focuses on <span className="text-primary font-semibold">clean architecture, efficient data flow, and long-term system reliability</span>.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Focus Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold font-heading text-center mb-8">Core Focus Areas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                  data-testid={`core-area-${idx}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center text-primary mb-4">
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading text-center mb-8">Technical Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "API Design", "Microservices", "JWT Authentication", "Database Optimization",
                "Data Modeling", "Error Handling & Logging", "Input Validation", "Rate Limiting",
                "Caching Strategies", "CI/CD Practices", "Docker", "Linux Server Management"
              ].map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 text-foreground rounded-full border border-primary/20 hover:border-primary/50 transition-all cursor-default font-medium text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
