import { useEffect } from "react";
import {
    CharacterArtwork, DNDGroupArtwork, DNDCharacterSheet, LandscapeArtScenes,
    LogoAndBanner, Models, PrintableModel, ReferenceSheet, TwitchPackage,
    Maps, OCDesign, DNDPortrait,
    VRWorld,
} from "../../Sections";
import {
    Hero,
    Footer,
    ScrollToTheSection
} from "../../components";

function Portfolio() {

    return (
        <>
            <ScrollToTheSection />
            <Hero />
            <CharacterArtwork />
            <DNDGroupArtwork />
            <DNDCharacterSheet />
            <DNDPortrait />
            <LandscapeArtScenes />
            <LogoAndBanner />
            <Models />
            <PrintableModel />
            <ReferenceSheet />
            <TwitchPackage />
            <Maps />
            <VRWorld />
            <OCDesign />
            <Footer />
        </>
    );
}

export default Portfolio;