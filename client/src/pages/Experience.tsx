import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Briefcase, Calendar, MapPin, Building2, Rocket, Code2, Users, Zap } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "BLACK DEFYNIYION",
    location: "Lagos, Nigeria",
    period: "April 2023 - Present",
    type: "Full-time",
    highlight: true,
    description: [
      "Led the development of React-based frontends and Node.js with Express backends, utilizing microservices architecture for social media applications.",
      "Collaborated with front-end teams to ensure seamless integration, user interface optimization, and efficient code collaboration using Git.",
      "Developed and deployed scalable backend solutions on Railway and AWS EC2 instances, leveraging microservices to enhance performance and reliability.",
      "Managed stream data and integrated third-party APIs to extend functionality and support dynamic platform needs.",
      "Conducted unit testing and implemented continuous integration practices to ensure high-quality and robust backend systems."
    ],
    technologies: ["React", "Node.js", "Express", "AWS EC2", "Microservices", "REST API"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "IZI Travel",
    location: "Abeokuta, Nigeria",
    period: "July 2024 - November 2024",
    type: "Contract",
    description: [
      "Developed and deployed performant, interactive user interfaces for web applications using TypeScript, Next.js, and React.",
      "Built server-side rendered (SSR) and static (SSG) pages in Next.js to optimize SEO and loading performance.",
      "Collaborated with backend teams to consume RESTful APIs and WebSockets, enabling real-time data updates.",
      "Implemented responsive designs, state management (Context API, Zustand), and component libraries.",
      "Optimized front-end performance through code splitting, lazy loading, and bundle size reduction."
    ],
    technologies: ["TypeScript", "Next.js", "React", "Zustand", "WebSockets", "Tailwind CSS"]
  },
  {
    id: 3,
    role: "Fullstack Developer",
    company: "Amnis Technologies Limited",
    location: "Abeokuta, Nigeria",
    period: "February 2022 - December 2024",
    type: "Full-time",
    description: [
      "Developed and maintained scalable and reliable full-stack web applications, handling both frontend and backend development.",
      "Designed and implemented secure RESTful APIs and frontend components for user authentication and authorization.",
      "Conducted thorough code reviews across both frontend and backend codebases to maintain high code quality.",
      "Enhanced overall application performance by optimizing frontend rendering and backend database queries.",
      "Monitored and optimized database and UI performance for efficient data storage and smooth user interactions."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST API", "TypeScript"]
  },
  {
    id: 4,
    role: "Front-End Developer (TypeScript/Next.js)",
    company: "HNG Internship",
    location: "Lagos, Nigeria (Remote)",
    period: "June 2024 - August 2024",
    type: "Internship",
    description: [
      "Developed responsive and interactive web applications using TypeScript, Next.js, and React.",
      "Built server-side rendered (SSR) and static (SSG) pages in Next.js to enhance performance and SEO.",
      "Collaborated with backend developers to integrate RESTful APIs with React Query and Zustand for state management.",
      "Participated in agile workflows, including sprint planning and code reviews, to deliver high-quality features.",
      "Wrote unit tests (Jest, React Testing Library) and contributed to technical documentation."
    ],
    technologies: ["TypeScript", "Next.js", "React Query", "Jest", "Tailwind CSS"]
  },
  {
    id: 5,
    role: "Fullstack Developer",
    company: "NEYOFORAFRICA Technologies",
    location: "Abeokuta, Nigeria",
    period: "January 2023 - July 2023",
    type: "Full-time",
    description: [
      "Worked as a full-stack developer focusing on both frontend and backend tasks and projects.",
      "Contributed to full-stack development using various technologies, frameworks, and libraries.",
      "Gained practical experience in database management, API development, and frontend integration with microservices.",
      "Contributed to unit testing and created detailed documentation for APIs and user interfaces."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -60, rotateY: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      delay: 0.3
    }
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
            subtitle="3+ years of building scalable web applications across multiple industries" 
          />
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: Briefcase, label: "Roles", value: "5+" },
            { icon: Code2, label: "Projects", value: "20+" },
            { icon: Users, label: "Teams", value: "10+" },
            { icon: Zap, label: "Technologies", value: "15+" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border/50 rounded-2xl p-4 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border/30">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-purple-400 to-primary/30"
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
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Node */}
                <motion.div 
                  variants={iconVariants}
                  className={`absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 ${
                    exp.highlight 
                      ? 'bg-gradient-to-br from-primary to-purple-500 text-white' 
                      : 'bg-card border-2 border-primary/30 text-primary'
                  }`}
                >
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    boxShadow: "0 25px 50px -12px rgba(119, 94, 208, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`bg-card rounded-3xl border overflow-hidden transition-all duration-500 ${
                    exp.highlight 
                      ? 'border-primary/40 shadow-xl shadow-primary/10' 
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                >
                  {/* Card Header */}
                  <div className={`p-6 ${exp.highlight ? 'bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent' : ''}`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <motion.h3 
                          className="text-xl md:text-2xl font-bold font-heading text-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.role}
                        </motion.h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-primary font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                            : exp.type === 'Contract'
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                            : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

                  {/* Card Body */}
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
                          <motion.span 
                            whileHover={{ scale: 1.5 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-400 mt-1.5 flex-shrink-0" 
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {exp.technologies && (
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
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold font-heading text-center mb-8 flex items-center justify-center gap-3">
            <Rocket className="w-6 h-6 text-primary" />
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-foreground mb-2">HND Computer Engineering</h4>
              <p className="text-primary font-medium">Moshood Abiola Polytechnic</p>
              <p className="text-sm text-muted-foreground mt-2">Major: Computer Engineering</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-foreground mb-2">Graduate Project Management</h4>
              <p className="text-primary font-medium">Ginyard International Co.</p>
              <p className="text-sm text-muted-foreground mt-2">Professional Certification</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
