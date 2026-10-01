import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/DNDCharacterSheet/set1img1.avif";
import character1b from "../../../assets/DNDCharacterSheet/set1img2.avif";
import character2a from "../../../assets/DNDCharacterSheet/set2img1.avif";
import character2b from "../../../assets/DNDCharacterSheet/set2img2.avif";
import character2c from "../../../assets/DNDCharacterSheet/set2img3.avif";
import character2d from "../../../assets/DNDCharacterSheet/set2img4.avif";
import character2e from "../../../assets/DNDCharacterSheet/set2img5.avif";
import character2f from "../../../assets/DNDCharacterSheet/set2img6.avif";
import character2g from "../../../assets/DNDCharacterSheet/set2img7.avif";


const characters = [
  {
    id: "01",
    name: "D&D Character 01 — View 01",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character1a,
      },
      {
        type: "image",
        src: character1b,
      },
    ],
  },

  {
    id: "01-02",
    name: "D&D Character 01 — View 02",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character1b,
      },
    ],
  },

  {
    id: "02-01",
    name: "D&D Character 02 — View 01",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2a,
      },
    ],
  },

  {
    id: "02-02",
    name: "D&D Character 02 — View 02",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2b,
      },
    ],
  },

  {
    id: "02-03",
    name: "D&D Character 02 — View 03",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2c,
      },
    ],
  },

  {
    id: "02-04",
    name: "D&D Character 02 — View 04",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2d,
      },
    ],
  },

  {
    id: "02-05",
    name: "D&D Character 02 — View 05",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2e,
      },
    ],
  },

  {
    id: "02-06",
    name: "D&D Character 02 — View 06",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2f,
      },
    ],
  },

  {
    id: "02-07",
    name: "D&D Character 02 — View 07",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character2g,
      },
    ],
  },
];

const DNDCharacterSheet = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"03"}
      heading={<h2>DND <span>Character Sheet.</span></h2>}
      id={"dnd-character-sheet"}
    />
  );
};

export default DNDCharacterSheet;