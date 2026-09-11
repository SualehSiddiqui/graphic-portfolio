import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../assets/ReferenceSheet/character1.avif";
import character2 from "../../assets/ReferenceSheet/character2.avif";
import character3 from "../../assets/ReferenceSheet/character3.avif";
import character4 from "../../assets/ReferenceSheet/character4.avif";
import character5 from "../../assets/ReferenceSheet/character5.avif";


const characters = [
  {
    id: "01",
    name: "Character One",
    orientation: "square",
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
    orientation: "square",
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
];

const ReferenceSheet = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"07"}
      heading={<h2>Reference <span>Sheet.</span></h2>}
      id={"reference-sheet"}
    />
  );
};

export default ReferenceSheet;