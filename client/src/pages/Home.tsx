import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MessageCircle, Github, Linkedin, Mail, Server, Database, Shield, Terminal, Cpu, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const stats = [
  { icon: Server, value: "4+", label: "Years Experience" },
  { icon: Database, value: "30+", label: "APIs Built" },
  { icon: Shield, value: "99.9%", label: "Uptime Delivered" },
  { icon: Cpu, value: "15+", label: "Technologies" }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            style={{ y: y1 }}
            className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/8 blur-[150px]" 
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/8 blur-[120px]" 
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary/5 rounded-full" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-1/3 w-64 h-64 border border-cyan-500/5 rounded-full" 
          />
        </div>

        <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-cyan-500/15 text-primary font-medium text-sm mb-6 border border-primary/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Opportunities
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6"
              >
                Backend Developer Building{" "}
                <motion.span 
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto]"
                >
                  Secure & Scalable
                </motion.span>{" "}
                Systems
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
              >
                I design and build robust APIs, databases, and server-side systems that power modern applications. Clean architecture, maximum reliability.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/projects">
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1">
                    View My Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/2349160214824" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base border-primary/30 hover:bg-primary/5 transition-all hover:-translate-y-1">
                    Chat on WhatsApp <MessageCircle className="ml-2 h-5 w-5 text-green-500" />
                  </Button>
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-6 text-muted-foreground"
              >
                <motion.a 
                  whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                  href="#" 
                  className="transition-colors"
                  data-testid="link-github"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                  href="#" 
                  className="transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                  href="mailto:adefisanbabatunde@email.com" 
                  className="transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Terminal/Code Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative z-10 w-full max-w-md"
              >
                <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl shadow-primary/10 p-6 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">server.ts</span>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="font-mono text-sm space-y-2"
                  >
                    <p><span className="text-cyan-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                    <p className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-orange-400">"Adefisan Babatunde"</span>,</p>
                    <p className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-orange-400">"Backend Developer"</span>,</p>
                    <p className="pl-4"><span className="text-emerald-400">experience</span>: <span className="text-blue-400">4</span>+,</p>
                    <p className="pl-4"><span className="text-emerald-400">stack</span>: [</p>
                    <p className="pl-8"><span className="text-orange-400">"Node.js"</span>, <span className="text-orange-400">"Express"</span>,</p>
                    <p className="pl-8"><span className="text-orange-400">"PostgreSQL"</span>, <span className="text-orange-400">"MongoDB"</span></p>
                    <p className="pl-4">],</p>
                    <p className="pl-4"><span className="text-emerald-400">focus</span>: <span className="text-orange-400">"Scalable Systems"</span></p>
                    <p>{"}"}</p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">API Expert</p>
                    <p className="text-xs text-muted-foreground">RESTful Design</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Database Design</p>
                    <p className="text-xs text-muted-foreground">Optimized Queries</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-12 z-20 bg-background/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">JWT Auth</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                data-testid={`stat-card-${idx}`}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
