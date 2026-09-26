import {
    CharacterArtwork, DNDGroupArtwork, DNDCharacterSheet, LandscapeArtScenes,
    LogoAndBanner, Models, PrintableModel, ReferenceSheet, TwitchPackage,
    Maps, OCDesign, DNDPortrait,
    VRWorld,
} from "../../Sections";
import {
    Hero,
    Footer
} from "../../components";

function Portfolio() {
    return (
        <>
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
            {/* <VRWorld /> */}
            <OCDesign />
            <Footer />
        </>
    );
}

export default Portfolio;