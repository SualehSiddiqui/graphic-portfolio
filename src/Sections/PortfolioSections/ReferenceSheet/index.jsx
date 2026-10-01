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
    name: "Reference Sheet 01",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character1,
      },
    ],
  },

  {
    id: "02",
    name: "Reference Sheet 02",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character2,
      },
    ],
  },

  {
    id: "03",
    name: "Reference Sheet 03",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character3,
      },
    ],
  },

  {
    id: "04",
    name: "Reference Sheet 04",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character4,
      },
    ],
  },

  {
    id: "05",
    name: "Reference Sheet 05",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character5,
      },
    ],
  },

  {
    id: "06",
    name: "Reference Sheet 06",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character6,
      },
    ],
  },

  {
    id: "07",
    name: "Reference Sheet 07",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character7,
      },
    ],
  },

  {
    id: "08",
    name: "Reference Sheet 08",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character8,
      },
    ],
  },

  {
    id: "09",
    name: "Reference Sheet 09",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character9,
      },
    ],
  },

  {
    id: "10",
    name: "Reference Sheet 10",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character10,
      },
    ],
  },

  {
    id: "11",
    name: "Reference Sheet 11",
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
    name: "Reference Sheet 12",
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
    ],
  },

  {
    id: "13",
    name: "Reference Sheet 13",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character13,
      },
    ],
  },

  {
    id: "14",
    name: "Reference Sheet 14",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character14,
      },
    ],
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