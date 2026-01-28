import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Business Landing Page",
    description: "A high-conversion landing page for a fintech startup featuring modern animations, clear value propositions, and responsive layout.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Church Media Website",
    description: "A comprehensive media platform for a local church including sermon archives, live streaming integration, and event management.",
    tags: ["Next.js", "TypeScript", "CMS Integration"],
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Admin Dashboard UI",
    description: "A clean, functional admin dashboard with data visualization charts, user management tables, and dark mode support.",
    tags: ["React", "Recharts", "Radix UI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Real Estate Listing Interface",
    description: "Property listing platform with advanced filtering, map integration, and high-quality image galleries for real estate agents.",
    tags: ["React", "Google Maps API", "Formik"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of projects that showcase my passion for quality and detail." 
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary/50 text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button className="flex-1 rounded-full group/btn" variant="default">
                    View Live <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
