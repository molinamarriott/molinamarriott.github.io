import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Globe } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-background relative z-10">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Curriculum</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Experiencia Profesional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">Especialista en Business Intelligence</h3>
                    <p className="text-sm text-muted-foreground">Nov 2025 - Presente | Novomatic</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Desarrollo e implementación de soluciones de inteligencia de negocios para la toma de decisiones estratégicas.</li>
                      <li>Creación de dashboards interactivos y reportes analíticos para diferentes áreas de la organización.</li>
                      <li>Automatización de procesos de análisis de datos y generación de informes.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Especialista Senior de Metodologías y Modelos de Riesgos</h3>
                    <p className="text-sm text-muted-foreground">Abr 2023 - Sep 2025 | Banco Guayaquil</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Lideré la creación de un sistema de modelos predictivos de morosidad de corto plazo para el diseño de estrategias de cobranza.</li>
                      <li>Lideré un proyecto de creación de un sistema de provisión bajo la normativa IFRS9 para la cartera comercial.</li>
                      <li>Diseñé esquemas de backtesting para evaluar el desempeño y la estabilidad en producción de productos analíticos.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Especialista de Metodologías y Modelos de Riesgos</h3>
                    <p className="text-sm text-muted-foreground">Oct 2021 - Abr 2023 | Banco Guayaquil</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Utilización de tecnologías de Big Data como SparklyR, PySpark, Hive, R Studio Server, etc.</li>
                      <li>Desarrollo de modelos de colocación y probabilidad de default con técnicas y algoritmos de machine learning.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Consultor (IFRS 9)</h3>
                    <p className="text-sm text-muted-foreground">Jul 2022 - Feb 2023 | BANISI, S.A.</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Desarrollo de sistemas de provisión conforme a la normativa NIIF9 para asegurar el cumplimiento regulatorio.</li>
                      <li>Diseño de metodologías de backtesting para evaluar la eficacia y fiabilidad de modelos analíticos en producción.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Ayudante de investigación</h3>
                    <p className="text-sm text-muted-foreground">Sep 2019 - Feb 2020 | ESPOL</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Análisis de bases de datos y desarrollo de revisiones literarias</li>
                      <li>Estimación de modelos econométricos mediante Stata y R</li>
                      <li>Presentación de reporte de resultados de modelos econométricos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Educación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://www.universidata.es/sites/default/files/styles/group_medium/public/uam_0.png"
                      alt="Universidad Autónoma de Madrid"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <h3 className="font-semibold">Master's degree, Economics</h3>
                      <p className="text-sm text-muted-foreground">Sep 2025 - Presente | Universidad Autónoma de Madrid</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://molinamarriott.github.io/images/uniandes-logo.png"
                      alt="Universidad de Los Andes"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <h3 className="font-semibold">Master's degree, Data Intelligence and Analytics</h3>
                      <p className="text-sm text-muted-foreground">Ene 2023 - Jul 2025 | Universidad de Los Andes - Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://molinamarriott.github.io/images/tecmonterrey-logo.png"
                      alt="Tecnológico de Monterrey"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <h3 className="font-semibold">Diplomatura, Data Science and Artificial Intelligence</h3>
                      <p className="text-sm text-muted-foreground">Feb 2023 - Sep 2023 | Tecnológico de Monterrey</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://molinamarriott.github.io/images/espol-logo.png"
                      alt="ESPOL"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <h3 className="font-semibold">Bachelor's degree, Economics</h3>
                      <p className="text-sm text-muted-foreground">Ene 2016 - Dic 2021 | Escuela Superior Politécnica del Litoral</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certificaciones y Habilidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-3 text-center">Python</div>
                    <div className="bg-muted rounded-lg p-3 text-center">R</div>
                    <div className="bg-muted rounded-lg p-3 text-center">SQL</div>
                    <div className="bg-muted rounded-lg p-3 text-center">PySpark</div>
                    <div className="bg-muted rounded-lg p-3 text-center">Scikit-learn</div>
                    <div className="bg-muted rounded-lg p-3 text-center">Stata</div>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Certificaciones:</p>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Scrum Foundation Professional Certification - SFPC™ (Oct 2024)</li>
                      <li>Programa Ciencia de Datos - Nivel avanzado (Nov 2024)</li>
                      <li>Academy Accreditation - Databricks Fundamentals (Dic 2024)</li>
                      <li>Artificial Intelligence Professional Certificate - CAIPC™ (Feb 2023)</li>
                      <li>Machine Learning y Deep Learning con Python (Feb 2023)</li>
                      <li>Data Analyst in SQL (Oct 2022)</li>
                      <li>SQL Fundamentals Track (Dic 2021)</li>
                      <li>Big Data with R Track (Dic 2021)</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Premios:</p>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Primer lugar en el Hackathon del Comité Latinoamericano de Auditoría Interna y Evaluación de Riesgos (2025)</li>
                      <li>Tercer lugar en el concurso de investigación Corsino Cardenas (2022)</li>
                      <li>Segundo lugar en el Hackaton PyWeekend ESPOL (2018)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Idiomas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3 text-center">Español (Nativo)</div>
                  <div className="bg-muted rounded-lg p-3 text-center">Inglés (Profesional)</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}