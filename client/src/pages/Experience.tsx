import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance / Contract",
    period: "2021 – Present",
    description: [
      "Designed and developed responsive websites for small businesses using React.js and Tailwind CSS.",
      "Collaborated with clients to understand requirements and translate them into functional interfaces.",
      "Optimized website performance, improving load times by 40% through code splitting and image optimization.",
      "Maintained and updated existing codebases, fixing bugs and adding new features as requested."
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Work Experience" 
          subtitle="My professional journey and career milestones." 
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background shadow-lg z-10 hidden md:block" />
                
                {/* Date Side */}
                <div className="w-full md:w-[45%] mb-4 md:mb-0 text-left md:text-right md:odd:text-left md:pr-8 md:odd:pl-8 md:odd:pr-0">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                     <Calendar className="w-4 h-4" />
                     {exp.period}
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-[45%] bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 md:pl-8 md:odd:pr-8 md:odd:pl-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-secondary rounded-xl text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
