import About from "@/components/About";
import Certifications from "@/components/Ceritificate";
import Contacts from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto my-10">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Certifications />
      <Contacts />
    </main>
  );
}
