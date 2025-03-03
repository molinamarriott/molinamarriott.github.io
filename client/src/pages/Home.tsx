import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectsGallery />
      <Resume />
      <Contact />
    </div>
  );
}