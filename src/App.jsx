import Hero from "./components/hero";
import { CharacterArtwork, DNDGroupArtwork, LandscapeArtScenes, LogoAndBanner, Models, PrintableModel, ReferenceSheet, TwitchPackage } from "./Sections";
import CursorTrail from "./components/Cursor";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CursorTrail />
      <Hero />
      <CharacterArtwork />
      <DNDGroupArtwork />
      <LandscapeArtScenes />
      <LogoAndBanner />
      <Models />
      <PrintableModel />
      <ReferenceSheet />
      <TwitchPackage />
      <Contact />
      <Footer />
    </>
  );
}

export default App;