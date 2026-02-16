import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProgramOverview } from './components/ProgramOverview';
import { Specializations } from './components/Specializations';
import { Accreditations } from './components/Accreditations';
import { Curriculum } from './components/Curriculum';
import { Eligibility } from './components/Eligibility';
import { FeeStructure } from './components/FeeStructure';
import { AdmissionProcess } from './components/AdmissionProcess';
import { Faculty } from './components/Faculty';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HiringPartners } from './components/HiringPartners';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <ProgramOverview />
        <Specializations />
        <Accreditations />
        <Curriculum />
        <Eligibility />
        <AdmissionProcess />
        <Faculty />
        <Testimonials />
        <WhyChooseUs />
        <HiringPartners />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
