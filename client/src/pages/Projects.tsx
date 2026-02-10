import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Github, ArrowUpRight, Server, Database, Shield, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Business Management API",
    description: "A comprehensive RESTful API for managing business operations including user roles, inventory tracking, invoicing, and reporting dashboards with role-based access control.",
    problem: "Businesses needed a centralized system to manage operations efficiently with proper access controls.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Prisma"],
    icon: Server,
    features: ["RBAC System", "Invoice Generation", "Real-time Analytics"],
    github: "#"
  },
  {
    id: 2,
    title: "Church Management System Backend",
    description: "Backend service for managing church activities, member records, event scheduling, donations tracking, and media content distribution with secure authentication.",
    problem: "Churches needed a digital platform to manage membership, events, and financial records securely.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "Swagger"],
    icon: Layers,
    features: ["Member Management", "Donation Tracking", "Event Scheduling"],
    github: "#"
  },
  {
    id: 3,
    title: "Admin Dashboard API",
    description: "A high-performance API powering an admin dashboard with user management, data analytics, content moderation tools, and comprehensive logging and monitoring.",
    problem: "Admin teams needed real-time visibility into platform metrics and efficient content management tools.",
    tags: ["Express", "PostgreSQL", "Redis", "Docker", "JWT"],
    icon: Database,
    features: ["User Analytics", "Content Moderation", "Activity Logging"],
    github: "#"
  },
  {
    id: 4,
    title: "Real Estate Listing Backend Service",
    description: "Backend microservice for property listings with advanced search, filtering, geolocation support, image upload handling, and agent management system.",
    problem: "Real estate agents needed a scalable backend to list properties with advanced search and filtering.",
    tags: ["Node.js", "MongoDB", "Express", "AWS S3", "GeoJSON"],
    icon: Shield,
    features: ["Geo Search", "Image Uploads", "Agent Profiles"],
    github: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -5 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Backend systems and APIs built to solve real-world problems." 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground mb-12 text-sm italic"
        >
          Projects are placeholders and will be updated with live links soon.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.2)" }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              {/* Header with Icon */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                    <project.icon className="w-7 h-7" />
                  </div>
                  <Button size="icon" variant="outline" className="rounded-full opacity-50 group-hover:opacity-100 transition-opacity" data-testid={`button-github-${project.id}`}>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-8 mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-8 pb-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full rounded-full group/btn" variant="outline" data-testid={`button-view-project-${project.id}`}>
                  View Details <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
