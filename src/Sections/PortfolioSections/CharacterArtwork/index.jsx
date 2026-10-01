import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../../assets/CharacterArtwork/character1.avif";
import character2 from "../../../assets/CharacterArtwork/character2.avif";
import character3 from "../../../assets/CharacterArtwork/character3.avif";
import character4 from "../../../assets/CharacterArtwork/character4.avif";
import character5 from "../../../assets/CharacterArtwork/character5.avif";
import character6 from "../../../assets/CharacterArtwork/character6.avif";
import character7 from "../../../assets/CharacterArtwork/character7.avif";
import character8 from "../../../assets/CharacterArtwork/character8.avif";
import character9 from "../../../assets/CharacterArtwork/character9.avif";
import character10 from "../../../assets/CharacterArtwork/character10.avif";
import character11 from "../../../assets/CharacterArtwork/character11.avif";
import character12 from "../../../assets/CharacterArtwork/character12.avif";
import character13 from "../../../assets/CharacterArtwork/character13.avif";
import character14 from "../../../assets/CharacterArtwork/character14.avif";
import character15 from "../../../assets/CharacterArtwork/character15.avif";

const characters = [
  {
    id: "01",
    name: "Character Artwork 01",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character1,
      },
    ],
  },

  {
    id: "02",
    name: "Character Artwork 02",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2,
      },
    ],
  },

  {
    id: "03",
    name: "Character Artwork 03",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character3,
      },
    ],
  },

  {
    id: "04",
    name: "Character Artwork 04",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character4,
      },
    ],
  },

  {
    id: "05",
    name: "Character Artwork 05",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character5,
      },
    ],
  },

  {
    id: "06",
    name: "Character Artwork 06",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character6,
      },
    ],
  },

  {
    id: "07",
    name: "Character Artwork 07",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character7,
      },
    ],
  },

  {
    id: "08",
    name: "Character Artwork 08",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character8,
      },
    ],
  },

  {
    id: "09",
    name: "Character Artwork 09",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character9,
      },
    ],
  },

  {
    id: "10",
    name: "Character Artwork 10",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character10,
      },
    ],
  },

  {
    id: "11",
    name: "Character Artwork 11",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character11,
      },
    ],
  },

  {
    id: "12",
    name: "Character Artwork 12",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character12,
      },
    ],
  },

  {
    id: "13",
    name: "Character Artwork 13",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character13,
      },
    ],
  },

  {
    id: "14",
    name: "Character Artwork 14",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character14,
      },
    ],
  },

  {
    id: "15",
    name: "Character Artwork 15",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character15,
      },
    ],
  },
];

const CharacterArt = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"01"}
      heading={<h2>Character <span>Artworks.</span></h2>}
      id={"character-artworks"}
    />
  );
};

export default CharacterArt;