import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../assets/CharacterArtwork/character1.avif";
import character2 from "../../assets/CharacterArtwork/character2.avif";
import character3 from "../../assets/CharacterArtwork/character3.avif";
import character4 from "../../assets/CharacterArtwork/character4.avif";
import character5 from "../../assets/CharacterArtwork/character5.avif";
import character6 from "../../assets/CharacterArtwork/character6.avif";
import character7 from "../../assets/CharacterArtwork/character7.avif";
import character8 from "../../assets/CharacterArtwork/character8.avif";
import character9 from "../../assets/CharacterArtwork/character9.avif";
import character10 from "../../assets/CharacterArtwork/character10.avif";
import character11 from "../../assets/CharacterArtwork/character11.avif";
import character12 from "../../assets/CharacterArtwork/character12.avif";

const characters = [
  {
    id: "01",
    name: "Character One",
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
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
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character10,
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
        src: character11,
      },
    ]
  },
  {
    id: "12",
    name: "Character Twelve",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character12,
      },
    ]
  },
];

const CharacterArt = () => {
  return (
    <CharacterCards characters={characters} num={"01"} heading={<h2>Character <span>Artworks.</span></h2>} />
  );
};

export default CharacterArt;