import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Briefcase, Calendar, MapPin, Building2, Rocket } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Freelance / Contract",
    location: "Remote",
    period: "2021 - Present",
    type: "Freelance",
    highlight: true,
    description: [
      "Designed and implemented RESTful APIs for multiple business platforms.",
      "Built secure authentication systems using JWT (access & refresh tokens).",
      "Designed scalable database schemas for MongoDB and PostgreSQL.",
      "Collaborated with frontend developers and product teams to deliver integrated solutions.",
      "Improved application performance and reliability through optimization and best practices."
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "JWT", "Docker"]
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Enterprise Client",
    location: "Nigeria",
    period: "2022 - 2024",
    type: "Contract",
    description: [
      "Developed and maintained scalable RESTful APIs for business management platforms.",
      "Implemented role-based access control (RBAC) and secure authentication flows.",
      "Designed efficient database models and optimized query performance.",
      "Built backend services for admin dashboards with real-time data processing.",
      "Conducted thorough code reviews and maintained high code quality standards."
    ],
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis"]
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "Fintech Platform",
    location: "Lagos, Nigeria",
    period: "2023 - 2024",
    type: "Full-time",
    description: [
      "Built secure payment processing APIs with proper validation and error handling.",
      "Implemented transaction logging and audit trail systems.",
      "Designed microservices architecture for high-availability payment systems.",
      "Integrated third-party payment gateways and financial APIs.",
      "Ensured compliance with security best practices for sensitive financial data."
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "AWS", "Docker"]
  },
  {
    id: 4,
    role: "Backend Developer",
    company: "Church Platform",
    location: "Nigeria",
    period: "2022 - 2023",
    type: "Contract",
    description: [
      "Built backend systems for church management including member records and event scheduling.",
      "Developed API endpoints for donation tracking and financial reporting.",
      "Implemented media content distribution system with file upload handling.",
      "Created comprehensive Swagger API documentation for frontend team integration."
    ],
    technologies: ["Express", "MongoDB", "Mongoose", "Swagger", "JWT"]
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
  hidden: { opacity: 0, x: -60, rotateY: -10 },
  visible: {
    opacity: 1, x: 0, rotateY: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1, rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.3 }
  }
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            title="Professional Journey" 
            subtitle="4+ years of designing and building scalable backend systems" 
          />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border/30">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-cyan-400 to-primary/30"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative pl-16 md:pl-20"
              >
                <motion.div 
                  variants={iconVariants}
                  className={`absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 ${
                    exp.highlight 
                      ? 'bg-gradient-to-br from-primary to-cyan-500 text-white' 
                      : 'bg-card border-2 border-primary/30 text-primary'
                  }`}
                >
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`bg-card rounded-3xl border overflow-hidden transition-all duration-500 ${
                    exp.highlight 
                      ? 'border-primary/40 shadow-xl shadow-primary/10' 
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                  data-testid={`experience-card-${exp.id}`}
                >
                  <div className={`p-6 ${exp.highlight ? 'bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent' : ''}`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-primary font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.type === 'Full-time' 
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                          : exp.type === 'Contract'
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * i }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border/50 rounded-2xl">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Continuously learning and building better systems</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
