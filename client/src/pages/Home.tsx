import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MessageCircle, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder for hero image since none was provided
const HERO_IMAGE = "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Freelance Projects
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6">
                Frontend Developer Building 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"> Modern</span> Experiences
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                I design and build fast, responsive, and user-focused interfaces using React and modern frontend tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/projects">
                  <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/2349160214824" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base border-primary/20 hover:bg-primary/5 transition-all hover:-translate-y-1">
                    Chat on WhatsApp <MessageCircle className="ml-2 h-5 w-5 text-green-500" />
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 glass-card p-2">
                {/* Hero scenic mountain landscape */}
                <img 
                  src={HERO_IMAGE}
                  alt="Developer Workspace" 
                  className="rounded-xl w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">R</div>
                  <div>
                    <p className="text-sm font-bold">React Expert</p>
                    <p className="text-xs text-muted-foreground">Component Architecture</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 z-20 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">UI</div>
                  <div>
                    <p className="text-sm font-bold">Modern UI/UX</p>
                    <p className="text-xs text-muted-foreground">Pixel Perfect Design</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
