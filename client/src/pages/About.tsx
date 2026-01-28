import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { User, MapPin, Mail, Phone, Linkedin, Code2, Layers, Server, Database } from "lucide-react";

const techSkills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Dart", "C++", "HTML/CSS"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "NestJS", "Django", "Laravel"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "AWS DynamoDB", "AWS DocumentDB"] },
  { category: "Tools", items: ["Git", "AWS", "Prisma", "TypeORM", "Sequelize", "Docker"] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
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
            subtitle="Fullstack Developer passionate about building scalable solutions" 
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
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Avatar Section */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-primary/60 flex items-center justify-center shadow-2xl shadow-primary/30">
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

                {/* Info Section */}
                <div className="flex-1">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold font-heading mb-2"
                  >
                    Olaniyan Feranmi John
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-primary font-semibold mb-4"
                  >
                    Fullstack Developer
                  </motion.p>

                  {/* Contact Info */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6"
                  >
                    <a href="mailto:obanijesujohn45@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      obanijesujohn45@gmail.com
                    </a>
                    <a href="tel:+2349160214824" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      +234 916 021 4824
                    </a>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Abeokuta, Nigeria
                    </span>
                  </motion.div>

                  {/* Summary */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4 text-muted-foreground leading-relaxed"
                  >
                    <p>
                      Motivated and results-driven Computer Engineering graduate with <span className="text-primary font-semibold">3+ years of experience</span> as a Full-Stack Developer. 
                      I offer a strong foundation in software development, data management, and system optimization.
                    </p>
                    <p>
                      Proven ability to enhance efficiency, deliver successful solutions, and collaborate within cross-functional teams. 
                      I specialize in building <span className="text-primary font-semibold">scalable web applications</span> using React, Node.js, and modern cloud technologies.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold font-heading text-center mb-8">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techSkills.map((skill, idx) => {
                const icons = [Code2, Layers, Database, Server];
                const Icon = icons[idx % icons.length];
                
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-foreground">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-lg"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading text-center mb-8">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "API Design", "Microservices", "Real-Time Data Streaming", "Authentication & Authorization",
                "Performance Optimization", "Cross-browser Compatibility", "Database Transactions",
                "Product Management", "Agile Development", "CI/CD Practices"
              ].map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 text-foreground rounded-full border border-primary/20 hover:border-primary/50 transition-all cursor-default font-medium text-sm"
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
