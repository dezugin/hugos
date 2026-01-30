import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodeProjects from "@/components/CodeProjects";
import Research from "@/components/Research";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CodeProjects />
      <Research />
      <Courses />
      <Contact />
      <Footer />
    </main>
  );
}
