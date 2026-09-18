import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/site/Hero';
import { OwnerCorner } from '@/components/site/OwnerCorner';
import { TheHouse } from '@/components/site/TheHouse';
import { TwoTables } from '@/components/site/TwoTables';
import { HallOfFame } from '@/components/site/HallOfFame';
import { Regulars } from '@/components/site/Regulars';
import { CustomerQuotes } from '@/components/site/CustomerQuotes';
import { Gallery } from '@/components/site/Gallery';
import { HouseRules } from '@/components/site/HouseRules';
import { OpeningHours } from '@/components/site/OpeningHours';
import { Location } from '@/components/site/Location';
import { FinalCta } from '@/components/site/FinalCta';
import { Footer } from '@/components/site/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OwnerCorner />
      <TheHouse />
      <TwoTables />
      <HallOfFame />
      <Regulars />
      <CustomerQuotes />
      <Gallery />
      <HouseRules />
      <OpeningHours />
      <Location />
      <FinalCta />
      <Footer />
    </main>
  );
}
