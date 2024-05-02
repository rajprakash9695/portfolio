import About from '@/components/About';
import ContactMe from '@/components/ContactUs';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Project from '@/components/Projects';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto my-10">
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <ContactMe />
    </main>
  );
}
