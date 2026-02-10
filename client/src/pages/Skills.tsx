import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Server, Database, Shield, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Technologies",
    icon: Server,
    skills: ["Node.js", "Express.js / NestJS", "RESTful API Design", "JWT Authentication", "TypeScript"]
  },
  {
    title: "Database & Data Handling",
    icon: Database,
    skills: ["MongoDB / PostgreSQL", "Prisma / Mongoose / Sequelize", "Database Indexing & Optimization", "Data Modeling & Relationships", "Redis Caching"]
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Docker (Basic-Intermediate)", "Postman / Insomnia", "Swagger API Documentation", "Linux Server Basics"]
  },
  {
    title: "Performance & Security",
    icon: Shield,
    skills: ["API Rate Limiting", "Input Validation (Zod / Joi)", "Error Handling & Logging", "Secure Password Hashing", "Caching Strategies"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

export default function Skills() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            title="Technical Skills" 
            subtitle="A comprehensive toolkit for building robust backend systems and APIs." 
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:border-primary/40 transition-all duration-300 group"
              data-testid={`skill-card-${idx}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * sIdx }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-500 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + (sIdx * 3)}%` }}
                        transition={{ delay: 0.3 + (sIdx * 0.1), duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-cyan-500/70 h-full rounded-full"
                      />
                    </div>
                    <span className="font-medium text-sm min-w-[180px] text-right text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
