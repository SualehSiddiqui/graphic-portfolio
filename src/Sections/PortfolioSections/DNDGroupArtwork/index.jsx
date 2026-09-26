import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/DNDGroupArtwork/set1img1.avif";
import character1b from "../../../assets/DNDGroupArtwork/set1img2.avif";
import character2a from "../../../assets/DNDGroupArtwork/set2img1.avif";
import character2b from "../../../assets/DNDGroupArtwork/set2img2.avif";
import character3a from "../../../assets/DNDGroupArtwork/set3img1.avif";
import character3b from "../../../assets/DNDGroupArtwork/set3img2.avif";
import character4a from "../../../assets/DNDGroupArtwork/set4img1.avif";
import character5a from "../../../assets/DNDGroupArtwork/set5img1.avif";
import character6a from "../../../assets/DNDGroupArtwork/set6img1.avif";
import character7a from "../../../assets/DNDGroupArtwork/set7img1.avif";
import character8a from "../../../assets/DNDGroupArtwork/set8img1.avif";
import character9a from "../../../assets/DNDGroupArtwork/set9img1.avif";
import character10a from "../../../assets/DNDGroupArtwork/set10img1.avif";
import character11a from "../../../assets/DNDGroupArtwork/set11img1.avif";
import character12a from "../../../assets/DNDGroupArtwork/set12img1.avif";
import character13a from "../../../assets/DNDGroupArtwork/set13img1.avif";
import character14a from "../../../assets/DNDGroupArtwork/set14img1.avif";


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
  {
    id: "05",
    name: "Character Five",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character5a,
      },
    ]
  },
  {
    id: "06",
    name: "Character Six",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character6a,
      },
    ]
  },
  {
    id: "07",
    name: "Character Seven",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character7a,
      },
    ]
  },
  {
    id: "08",
    name: "Character Eight",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character8a,
      },
    ]
  },
  {
    id: "09",
    name: "Character Nine",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character9a,
      },
    ]
  },
  {
    id: "10",
    name: "Character Ten",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character10a,
      },
    ]
  },
  {
    id: "11",
    name: "Character Eleven",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character11a,
      },
    ]
  },
  {
    id: "12",
    name: "Character Twelve",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character12a,
      },
    ]
  },
  {
    id: "13",
    name: "Character Thirteen",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character13a,
      },
    ]
  },
  {
    id: "14",
    name: "Character Fourteen",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character14a,
      },
    ]
  },
];

const DNDGroupArtwork = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"02"}
      heading={<h2>Party <span>Artworks.</span></h2>}
      id={"party-artworks"}
    />
  );
};

export default DNDGroupArtwork;