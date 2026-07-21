import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubSection from "@/components/GithubSection";
import DsaJourney from "@/components/DsaJourney";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <DsaJourney />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
