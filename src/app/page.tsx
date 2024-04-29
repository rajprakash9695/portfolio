import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto my-10">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </main>
  );
}
