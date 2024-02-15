import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

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
        <SocialLinks />
      </section>
    </main>
  );
}
