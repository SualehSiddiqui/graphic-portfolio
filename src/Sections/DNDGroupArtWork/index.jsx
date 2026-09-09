import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../assets/DNDGroupArtwork/set1img1.avif";
import character1b from "../../assets/DNDGroupArtwork/set1img2.avif";
import character2a from "../../assets/DNDGroupArtwork/set2img1.avif";
import character2b from "../../assets/DNDGroupArtwork/set2img2.avif";
import character3a from "../../assets/DNDGroupArtwork/set3img1.avif";
import character3b from "../../assets/DNDGroupArtwork/set3img2.avif";
import character4a from "../../assets/DNDGroupArtwork/set4img1.avif";


const characters = [
  {
    id: "01",
    name: "Character One",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1a,
      },
      {
        type: "image",
        src: character1b,
      },
    ]
  },
  {
    id: "02",
    name: "Character Two",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character2a,
      },
      {
        type: "image",
        src: character2b,
      },
    ]
  },
  {
    id: "03",
    name: "Character Three",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character3a,
      },
      {
        type: "image",
        src: character3b,
      },
    ]
  },
  {
    id: "04",
    name: "Character Four",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character4a,
      },
    ]
  },
];

const DNDGroupArtwork = () => {
  return (
    <CharacterCards characters={characters} num={"02"} heading={<h2>DND Group <span>Artworks.</span></h2>} />
  );
};

export default DNDGroupArtwork;