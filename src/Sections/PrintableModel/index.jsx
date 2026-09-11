import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artworkimport character1 from "../../assets/Model/character1.avif";

import character1a from "../../assets/PrintableModel/set1img1.avif";
import character1b from "../../assets/PrintableModel/set1img2.avif";
import character1c from "../../assets/PrintableModel/set1img3.avif";
import character2a from "../../assets/PrintableModel/set2img1.avif";
import character2b from "../../assets/PrintableModel/set2img2.avif";
import character2c from "../../assets/PrintableModel/set2img3.avif";
import character2d from "../../assets/PrintableModel/set2img4.avif";
import character3a from "../../assets/PrintableModel/set3img1.avif";
import character3b from "../../assets/PrintableModel/set3img2.avif";
import character3c from "../../assets/PrintableModel/set3img3.avif";
import character3d from "../../assets/PrintableModel/set3img4.avif";
import character4a from "../../assets/PrintableModel/set4img1.avif";
import character4b from "../../assets/PrintableModel/set4img2.avif";
import character4c from "../../assets/PrintableModel/set4img3.avif";
import character5a from "../../assets/PrintableModel/set5img1.avif";
import character5b from "../../assets/PrintableModel/set5img2.avif";
import character5c from "../../assets/PrintableModel/set5img3.avif";
import character5d from "../../assets/PrintableModel/set5img4.avif";
import character5e from "../../assets/PrintableModel/set5img5.avif";
import character5f from "../../assets/PrintableModel/set5img6.avif";
import character6a from "../../assets/PrintableModel/set6img1.avif";
import character6b from "../../assets/PrintableModel/set6img2.avif";
import character6c from "../../assets/PrintableModel/set6img3.avif";
import character7a from "../../assets/PrintableModel/set7img1.avif";
import character7b from "../../assets/PrintableModel/set7img2.avif";
import character7c from "../../assets/PrintableModel/set7img3.avif";
import character8a from "../../assets/PrintableModel/set8img1.avif";
import character8b from "../../assets/PrintableModel/set8img2.avif";
import character8c from "../../assets/PrintableModel/set8img3.avif";
import character8d from "../../assets/PrintableModel/set8img4.avif";

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
      {
        type: "image",
        src: character1c,
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
      {
        type: "image",
        src: character2c,
      },
      {
        type: "image",
        src: character2d,
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
      {
        type: "image",
        src: character3c,
      },
      {
        type: "image",
        src: character3d,
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
      {
        type: "image",
        src: character4b,
      },
      {
        type: "image",
        src: character4c,
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
      {
        type: "image",
        src: character5b,
      },
      {
        type: "image",
        src: character5c,
      },
      {
        type: "image",
        src: character5d,
      },
      {
        type: "image",
        src: character5e,
      },
      {
        type: "image",
        src: character5f,
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
      {
        type: "image",
        src: character6b,
      },
      {
        type: "image",
        src: character6c,
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
        src: character7a,
      },
      {
        type: "image",
        src: character7b,
      },
      {
        type: "image",
        src: character7c,
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
      {
        type: "image",
        src: character8b,
      },
      {
        type: "image",
        src: character8c,
      },
      {
        type: "image",
        src: character8d,
      },
    ]
  },
];

const PrintableModel = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"06"}
      heading={<h2>Printable <span>Model.</span></h2>}
      id={"printable-model"}
    />
  );
};

export default PrintableModel;