import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3"]
  },
  {
    title: "UI & UX",
    skills: ["Tailwind CSS", "Framer Motion", "Responsive Design", "CSS Animations", "Accessibility"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Vite", "NPM / Yarn / Bun", "Figma"]
  },
  {
    title: "Performance",
    skills: ["SEO Optimization", "Core Web Vitals", "Lazy Loading", "Code Splitting", "Performance Monitoring"]
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="A comprehensive toolkit for building modern web applications." 
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold font-heading mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/70 flex-shrink-0" />
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.floor(Math.random() * (98 - 85) + 85)}%` }} // Randomized realistic skill levels
                        transition={{ delay: 0.3 + (sIdx * 0.1), duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full"
                      />
                    </div>
                    <span className="font-medium text-sm min-w-[100px] text-right">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
