import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../../assets/OCDesign/character1.avif";
import character2 from "../../../assets/OCDesign/character2.avif";
import character3 from "../../../assets/OCDesign/character3.avif";
import character4 from "../../../assets/OCDesign/character4.avif";
import character5 from "../../../assets/OCDesign/character5.avif";
import character6 from "../../../assets/OCDesign/character6.avif";
import character7 from "../../../assets/OCDesign/character7.avif";

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
];

const OCDesign = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"12"}
      heading={<h2>OC <span>Design.</span></h2>}
      id={"oc-design"}
    />
  );
};

export default OCDesign;