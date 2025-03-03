import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticlesBackground />
      <div className="container px-4 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Economist & Data Scientist
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Apasionado por la analítica de datos, con experiencia en el desarrollo e implementación
            de metodologías analíticas que apoyan la toma de decisiones estratégicas.
          </p>

          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Ver mi trabajo
            <ArrowDown className="h-4 w-4" />
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <img
              src="https://molinamarriott.github.io/images/badge1.png"
              alt="Badge 1"
              className="h-16 w-auto"
            />
            <img
              src="https://molinamarriott.github.io/images/badge2.png"
              alt="Badge 2"
              className="h-16 w-auto"
            />
            <img
              src="https://molinamarriott.github.io/images/badge3.png"
              alt="Badge 3"
              className="h-16 w-auto"
            />
            <img
              src="https://molinamarriott.github.io/images/badge4.png"
              alt="Badge 4"
              className="h-16 w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}