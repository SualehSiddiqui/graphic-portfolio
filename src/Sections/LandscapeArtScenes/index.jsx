import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../assets/LandscapeArtScenes/character1.avif";
import character2 from "../../assets/LandscapeArtScenes/character2.avif";
import character3 from "../../assets/LandscapeArtScenes/character3.avif";
import character4 from "../../assets/LandscapeArtScenes/character4.avif";
import character5 from "../../assets/LandscapeArtScenes/character5.avif";
import character6 from "../../assets/LandscapeArtScenes/character6.avif";
import character7 from "../../assets/LandscapeArtScenes/character7.avif";
import character8 from "../../assets/LandscapeArtScenes/character8.avif";
import character9 from "../../assets/LandscapeArtScenes/character9.avif";
import character10 from "../../assets/LandscapeArtScenes/character10.avif";


const characters = [
  {
    id: "01",
    name: "Character One",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1,
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
        src: character2,
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
        src: character3,
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
        src: character4,
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
        src: character5,
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
        src: character6,
      },
    ]
  },
  {
    id: "07",
    name: "Character Seven",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character7,
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
        src: character8,
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
        src: character9,
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
        src: character10,
      },
    ]
  },
];

const LandscapeArtScenes = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"03"}
      heading={<h2>Landscape <span>Art Scenes.</span></h2>}
      id={"landscape-art-scenes"}
    />
  );
};

export default LandscapeArtScenes;