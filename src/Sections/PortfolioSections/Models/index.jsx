import CharacterCards from "../../../components/CharacterCards";

import character1a from "../../../assets/Models/set1img1.avif";
import character1b from "../../../assets/Models/set1video1.mp4";
import character2a from "../../../assets/Models/set2img1.avif";
import character2b from "../../../assets/Models/set2video1.mp4";
import character3a from "../../../assets/Models/set3img1.avif";
import character3b from "../../../assets/Models/set3img2.avif";
import character3c from "../../../assets/Models/set3img3.avif";
import character3d from "../../../assets/Models/set3video1.mp4";
import character4a from "../../../assets/Models/set4img1.avif";
import character4b from "../../../assets/Models/set4img2.avif";
import character4c from "../../../assets/Models/set4img3.avif";
import character4d from "../../../assets/Models/set4video1.mp4";
import character5 from "../../../assets/Models/set5video1.mp4";
import character6a from "../../../assets/Models/set6img1.avif";
import character6b from "../../../assets/Models/set6video2.mp4";
import character7 from "../../../assets/Models/set7img1.avif";
import character8a from "../../../assets/Models/set8img1.avif";
import character8b from "../../../assets/Models/set8img2.avif";
import character8c from "../../../assets/Models/set8img3.avif";
import character9a from "../../../assets/Models/set9img1.avif";
import character9b from "../../../assets/Models/set9video2.mp4";
import character10a from "../../../assets/Models/set10img1.avif";
import character10b from "../../../assets/Models/set10img2.avif";
import character10c from "../../../assets/Models/set10video3.mp4";
import character11 from "../../../assets/Models/set11video1.mp4";
import character12 from "../../../assets/Models/set12video1.mp4";
import character13 from "../../../assets/Models/set13video1.mp4";
import character14 from "../../../assets/Models/set14video1.mp4";
import character15 from "../../../assets/Models/set15video1.mp4";
import character16a from "../../../assets/Models/set16img1.avif";
import character16b from "../../../assets/Models/set16video2.mp4";
import character17a from "../../../assets/Models/set17img1.avif";
import character17b from "../../../assets/Models/set17img2.avif";
import character17c from "../../../assets/Models/set17img3.avif";
import character18 from "../../../assets/Models/set18video1.mp4";

const characters = [
  {
    id: "01",
    name: "Character One",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character1a,
      },
      {
        type: "video",
        src: character1b,
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
        type: "video",
        src: character2b,
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
        type: "video",
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
      {
        type: "video",
        src: character4d,
      },
    ]
  },
  {
    id: "05",
    name: "Character Five",
    orientation: "portrait",
    media: [
      {
        type: "video",
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
        src: character6a,
      },
      {
        type: "video",
        src: character6b,
      },
    ]
  },
  {
    id: "07",
    name: "Character Seven",
    orientation: "square",
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
    orientation: "square",
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
    ]
  },
  {
    id: "09",
    name: "Character Nine",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character9a,
      },
      {
        type: "video",
        src: character9b,
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
        src: character10a,
      },
      {
        type: "image",
        src: character10b,
      },
      {
        type: "video",
        src: character10c,
      },
    ]
  },
  {
    id: "11",
    name: "Character Eleven",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character11,
      },
    ]
  },
  {
    id: "12",
    name: "Character Twelve",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character12,
      },
    ]
  },
  {
    id: "13",
    name: "Character Thirteen",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character13,
      },
    ]
  },
  {
    id: "14",
    name: "Character Fourteen",
    orientation: "square",
    media: [
      {
        type: "video",
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
        type: "video",
        src: character15,
      },
    ]
  },
  {
    id: "16",
    name: "Character Sixteen",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character16a,
      },
      {
        type: "video",
        src: character16b,
      },
    ]
  },
  {
    id: "17",
    name: "Character Seventeen",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character17a,
      },
      {
        type: "image",
        src: character17b,
      },
      {
        type: "image",
        src: character17c,
      },
    ]
  },
  {
    id: "18",
    name: "Character Eighteen",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character18,
      },
    ]
  },
];

const Models = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"07"}
      heading={<h2>3D <span>Universe.</span></h2>}
      id={"3d-universe"}
    />
  );
};

export default Models;