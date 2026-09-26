import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../../assets/DNDPortrait/set1img1.avif";
import character2a from "../../../assets/DNDPortrait/set2img1.avif";
import character2b from "../../../assets/DNDPortrait/set2img2.avif";
import character2c from "../../../assets/DNDPortrait/set2img3.avif";
import character2d from "../../../assets/DNDPortrait/set2img4.avif";
import character3a from "../../../assets/DNDPortrait/set3img1.avif";
import character3b from "../../../assets/DNDPortrait/set3img2.avif";
import character3c from "../../../assets/DNDPortrait/set3img3.avif";
import character3d from "../../../assets/DNDPortrait/set3img4.avif";
import character4 from "../../../assets/DNDPortrait/set4img1.avif";
import character5 from "../../../assets/DNDPortrait/set5img1.avif";
import character6 from "../../../assets/DNDPortrait/set6img1.avif";
import character7 from "../../../assets/DNDPortrait/set7img1.avif";
import character8 from "../../../assets/DNDPortrait/set8img1.avif";
import character9 from "../../../assets/DNDPortrait/set9img1.avif";
import character10 from "../../../assets/DNDPortrait/set10img1.avif";
import character11 from "../../../assets/DNDPortrait/set11img1.avif";
import character12 from "../../../assets/DNDPortrait/set12img1.avif";
import character13 from "../../../assets/DNDPortrait/set13img1.avif";
import character14 from "../../../assets/DNDPortrait/set14img1.avif";
import character15 from "../../../assets/DNDPortrait/set15img1.avif";
import character16 from "../../../assets/DNDPortrait/set16img1.avif";
import character17 from "../../../assets/DNDPortrait/set17img1.avif";
import character18 from "../../../assets/DNDPortrait/set18img1.avif";
import character19 from "../../../assets/DNDPortrait/set19img1.avif";
import character20 from "../../../assets/DNDPortrait/set20img1.avif";
import character21 from "../../../assets/DNDPortrait/set21img1.avif";
import character22 from "../../../assets/DNDPortrait/set22img1.avif";
import character23 from "../../../assets/DNDPortrait/set23img1.avif";
import character24 from "../../../assets/DNDPortrait/set24img1.avif";
import character25 from "../../../assets/DNDPortrait/set25img1.avif";
import character26 from "../../../assets/DNDPortrait/set26img1.avif";
import character27 from "../../../assets/DNDPortrait/set27img1.avif";
import character28 from "../../../assets/DNDPortrait/set28img1.avif";
import character29 from "../../../assets/DNDPortrait/set29img1.avif";
import character30 from "../../../assets/DNDPortrait/set30img1.avif";
import character31 from "../../../assets/DNDPortrait/set31img1.avif";
import character32 from "../../../assets/DNDPortrait/set32img1.avif";
import character33 from "../../../assets/DNDPortrait/set33img1.avif";
import character34 from "../../../assets/DNDPortrait/set34img1.avif";
import character35 from "../../../assets/DNDPortrait/set35img1.avif";
import character36 from "../../../assets/DNDPortrait/set36img1.avif";
import character37 from "../../../assets/DNDPortrait/set37img1.avif";
import character38 from "../../../assets/DNDPortrait/set38img1.avif";
import character39 from "../../../assets/DNDPortrait/set39img1.avif";
import character40 from "../../../assets/DNDPortrait/set40img1.avif";
import character41 from "../../../assets/DNDPortrait/set41img1.avif";
import character42 from "../../../assets/DNDPortrait/set42img1.avif";
import character43 from "../../../assets/DNDPortrait/set43img1.avif";


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
    orientation: "portrait",
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
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character12,
      },
    ]
  },
  {
    id: "13",
    name: "Character Thirteen",
    orientation: "portrait",
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
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character14,
      },
    ]
  },
  {
    id: "15",
    name: "Character Fifteen",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character15,
      },
    ]
  },
  {
    id: "16",
    name: "Character Sixteen",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character16,
      },
    ]
  },
  {
    id: "17",
    name: "Character Seventeen",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character17,
      },
    ]
  },
  {
    id: "18",
    name: "Character Eighteen",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character18,
      },
    ]
  },
  {
    id: "19",
    name: "Character Nineteen",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character19,
      },
    ]
  },
  {
    id: "20",
    name: "Character Twenty",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character20,
      },
    ]
  },
  {
    id: "21",
    name: "Character Twenty One",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character21,
      },
    ]
  },
  {
    id: "22",
    name: "Character Twenty Two",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character22,
      },
    ]
  },
  {
    id: "23",
    name: "Character Twenty Three",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character23,
      },
    ]
  },
  {
    id: "24",
    name: "Character Twenty Four",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character24,
      },
    ]
  },
  {
    id: "25",
    name: "Character Twenty Five",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character25,
      },
    ]
  },
  {
    id: "26",
    name: "Character Twenty Six",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character26,
      },
    ]
  },
  {
    id: "27",
    name: "Character Twenty Seven",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character27,
      },
    ]
  },
  {
    id: "28",
    name: "Character Twenty Eight",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character28,
      },
    ]
  },
  {
    id: "29",
    name: "Character Twenty Nine",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character29,
      },
    ]
  },
  {
    id: "30",
    name: "Character Thirty",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character30,
      },
    ]
  },
  {
    id: "31",
    name: "Character Thirty One",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character31,
      },
    ]
  },
  {
    id: "32",
    name: "Character Thirty Two",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character32,
      },
    ]
  },
  {
    id: "33",
    name: "Character Thirty Three",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character33,
      },
    ]
  },
  {
    id: "34",
    name: "Character Thirty Four",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character34,
      },
    ]
  },
  {
    id: "35",
    name: "Character Thirty Five",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character35,
      },
    ]
  },
  {
    id: "36",
    name: "Character Thirty Six",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character36,
      },
    ]
  },
  {
    id: "37",
    name: "Character Thirty Seven",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character37,
      },
    ]
  },
  {
    id: "38",
    name: "Character Thirty Eight",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character38,
      },
    ]
  },
  {
    id: "39",
    name: "Character Thirty Nine",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character39,
      },
    ]
  },
  {
    id: "40",
    name: "Character Forty",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character40,
      },
    ]
  },
  {
    id: "41",
    name: "Character Forty One",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character41,
      },
    ]
  },
  {
    id: "42",
    name: "Character Forty Two",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character42,
      },
    ]
  },
  {
    id: "43",
    name: "Character Forty Three",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character43,
      },
    ]
  },
];


const DNDPortrait = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"04"}
      heading={<h2>DND <span>Portraits.</span></h2>}
      id={"dnd-portraits"}
    />
  );
};

export default DNDPortrait;