import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
//import { ParticlesBackground } from "./ParticlesBackground";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative z-10">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <a
                  href="mailto:aamolinamarriott@outlook.com"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  aamolinamarriott@outlook.com
                </a>
                <a
                  href="https://www.linkedin.com/in/alemolinamarriott/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  linkedin.com/in/alemolinamarriott
                </a>
                <a
                  href="https://github.com/molinamarriott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  github.com/molinamarriott
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}