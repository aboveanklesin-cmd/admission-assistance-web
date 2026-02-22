import { Routes, Route } from "react-router-dom";
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


import PrivacyPolicy from "./pages/PrivacyPolicy";
// later you can add:
// import Terms from "./pages/Terms";
// import Disclaimer from "./pages/Disclaimer";

function HomePage() {
  return (
    <>
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
      
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add these when pages are ready */}
        {/* <Route path="/terms-and-conditions" element={<Terms />} /> */}
        {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
