import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import StorySection from "./components/StorySection";
import PillarsSection from "./components/PillarsSection";
import MovementSection from "./components/MovementSection";
import BrandsSection from "./components/BrandsSection";
import SoulBehindSection from "./components/SoulBehindSection";
import ManifestoSection from "./components/ManifestoSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NextChapterSection from "./components/NextChapterSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <JourneySection />
        <StorySection />
        <PillarsSection />
        <MovementSection />
        <BrandsSection />
        <SoulBehindSection />
        <ManifestoSection />
        <TestimonialsSection />
        <NextChapterSection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
