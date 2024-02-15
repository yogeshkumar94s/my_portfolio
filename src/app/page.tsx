import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  return (
    <main className=''>
      <Header />
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <NavLinks />
      </section>
    </main>
  );
}
