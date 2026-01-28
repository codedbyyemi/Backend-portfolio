import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Using Lucide icon as requested fallback, though React Icons would have distinct branding

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/2349160214824"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ y: -5 }}
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
