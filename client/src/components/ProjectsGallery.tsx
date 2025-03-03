import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-20 bg-background relative z-10">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio de Visualizaciones</h2>

          <div className="grid gap-8">
            {/* Sankey Charts */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Visualizaciones Estáticas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://molinamarriott.github.io/images/data-visualization1.png"
                    alt="Sankey Chart - Banco Pichincha"
                    className="w-full aspect-video object-contain"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">Sankey Chart del PyG del Banco Pichincha</h4>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://molinamarriott.github.io/images/data-visualization2.png"
                    alt="Sankey Chart - Produbanco"
                    className="w-full aspect-video object-contain"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">Sankey Chart del PyG del Produbanco</h4>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://molinamarriott.github.io/images/data-visualization3.png"
                    alt="Evolución de deuda en países sudamericanos"
                    className="w-full aspect-video object-contain"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">Evolución de la deuda en países sudamericanos</h4>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://molinamarriott.github.io/images/data-visualization4.png"
                    alt="Relación tasas FED y depósitos"
                    className="w-full aspect-video object-contain"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">Relación tasas de la FED y depósitos a plazo</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Flourish Visualizations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Visualizaciones Interactivas</h3>
              <div className="grid gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-4">Mapa Interactivo - Principales Exportaciones</h4>
                    <div className="flourish-embed flourish-map" data-src="visualisation/15385663">
                      <iframe 
                        src="https://flo.uri.sh/visualisation/15385663/embed" 
                        title="Interactive or visual content" 
                        className="w-full"
                        frameBorder="0" 
                        scrolling="no" 
                        style={{width: '100%', height: '720px'}}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-4">Principales Bancos</h4>
                    <div className="flourish-embed" data-src="visualisation/12428919">
                      <iframe 
                        src="https://flo.uri.sh/visualisation/12428919/embed" 
                        title="Interactive or visual content" 
                        className="w-full"
                        frameBorder="0" 
                        scrolling="no" 
                        style={{width: '100%', height: '600px'}}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-4">Depósitos Provincias</h4>
                    <div className="flourish-embed" data-src="visualisation/12694253">
                      <iframe 
                        src="https://flo.uri.sh/visualisation/12694253/embed" 
                        title="Interactive or visual content" 
                        className="w-full"
                        frameBorder="0" 
                        scrolling="no" 
                        style={{width: '100%', height: '720px'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}