import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Guarantees from '@/components/Guarantees';
import MacbookScroll from '@/components/sections/MacbookScroll';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import AddOns from '@/components/sections/AddOns';
import Portfolio from '@/components/sections/Portfolio';
import Photography from '@/components/sections/Photography';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Guarantees />

        <MacbookScroll />
        <Services />
        <Pricing />
        <AddOns />
        <Portfolio />
        <Photography />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
