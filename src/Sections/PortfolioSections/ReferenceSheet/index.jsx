import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../../assets/ReferenceSheet/character1.avif";
import character2 from "../../../assets/ReferenceSheet/character2.avif";
import character3 from "../../../assets/ReferenceSheet/character3.avif";
import character4 from "../../../assets/ReferenceSheet/character4.avif";
import character5 from "../../../assets/ReferenceSheet/character5.avif";
import character6 from "../../../assets/ReferenceSheet/character6.avif";
import character7 from "../../../assets/ReferenceSheet/character7.avif";
import character8 from "../../../assets/ReferenceSheet/character8.avif";
import character9 from "../../../assets/ReferenceSheet/character9.avif";
import character10 from "../../../assets/ReferenceSheet/character10.avif";
import character11 from "../../../assets/ReferenceSheet/character11.avif";
import character12a from "../../../assets/ReferenceSheet/character12a.avif";
import character12b from "../../../assets/ReferenceSheet/character12b.avif";
import character13 from "../../../assets/ReferenceSheet/character13.avif";
import character14 from "../../../assets/ReferenceSheet/character14.avif";


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
  {
    id: "06",
    name: "Character Six",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character5,
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
    orientation: "square",
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
    orientation: "landscape",
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
    orientation: "square",
    media: [
      {
        type: "image",
        src: character12a,
      },
      {
        type: "image",
        src: character12b,
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
        src: character13,
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
        src: character14,
      },
    ]
  },
];

const ReferenceSheet = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"09"}
      heading={<h2>Reference <span>Sheet.</span></h2>}
      id={"reference-sheet"}
    />
  );
};

export default ReferenceSheet;