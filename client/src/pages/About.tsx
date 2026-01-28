import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { User, Heart, Coffee, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="About Me" 
          subtitle="Passionate about creating digital experiences that matter." 
        />

        <div className="space-y-12">
          {/* Professional Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="w-full md:w-auto flex justify-center">
                 <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-purple-300 flex items-center justify-center shadow-lg transform rotate-3">
                   <User className="w-12 h-12 text-white" />
                 </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a dedicated and creative Frontend Developer with a strong foundation in building responsive, 
                    user-friendly web applications. My passion lies in translating complex requirements into simple, 
                    elegant, and functional user interfaces.
                  </p>
                  <p>
                    With expertise in React.js, Tailwind CSS, and modern JavaScript, I focus on writing clean, 
                    maintainable code and ensuring optimal performance across all devices. I enjoy solving problems 
                    and continuously learning new technologies to stay ahead in the fast-paced tech landscape.
                  </p>
                  <p>
                    Whether working on a solo project or collaborating with a team, I bring enthusiasm, attention to detail, 
                    and a commitment to excellence in every line of code I write.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats / Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, label: "Passion", value: "Clean Code" },
              { icon: Coffee, label: "Fueled by", value: "Coffee & Ideas" },
              { icon: Globe, label: "Based in", value: "Nigeria" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-1">{item.label}</h4>
                <p className="text-xl font-bold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
