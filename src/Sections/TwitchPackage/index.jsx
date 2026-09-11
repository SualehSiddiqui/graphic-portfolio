import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../assets/TwitchPackage/set1img1.avif";
import character1b from "../../assets/TwitchPackage/set1img2.avif";
import character1c from "../../assets/TwitchPackage/set1img3.avif";
import character1d from "../../assets/TwitchPackage/set1video4.mp4";
import character2 from "../../assets/TwitchPackage/set2img1.avif";
import character3 from "../../assets/TwitchPackage/set3img1.avif";
import character4 from "../../assets/TwitchPackage/set4img1.avif";
import character5 from "../../assets/TwitchPackage/set5img1.avif";
import character6 from "../../assets/TwitchPackage/set6img1.avif";
import character7 from "../../assets/TwitchPackage/set7video1.mp4";
import character8 from "../../assets/TwitchPackage/set8video1.mp4";
import character9 from "../../assets/TwitchPackage/set9video1.mp4";
import character10 from "../../assets/TwitchPackage/set10video1.mp4";
import character11 from "../../assets/TwitchPackage/set11video1.mp4";
import character12 from "../../assets/TwitchPackage/set12img1.avif";
import character13 from "../../assets/TwitchPackage/set13img1.avif";
import character14 from "../../assets/TwitchPackage/set14img1.avif";
import character15 from "../../assets/TwitchPackage/set15img1.avif";
import character16 from "../../assets/TwitchPackage/set16img1.avif";
import character17 from "../../assets/TwitchPackage/set17img1.avif";

const characters = [
  {
    id: "01a",
    name: "Character One",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character1a,
      },
    ]
  },
  {
    id: "01b",
    name: "Character One",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1b,
      },
    ]
  },
  {
    id: "01c",
    name: "Character One",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1c,
      },
    ]
  },
  {
    id: "01d",
    name: "Character One",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character1d,
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
    orientation: "square",
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
        src: character6,
      },
    ]
  },
  {
    id: "07",
    name: "Character Seven",
    orientation: "landscape",
    media: [
      {
        type: "video",
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
        type: "video",
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
        type: "video",
        src: character9,
      },
    ]
  },
  {
    id: "10",
    name: "Character Ten",
    orientation: "landscape",
    media: [
      {
        type: "video",
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
        type: "image",
        src: character12,
      },
    ]
  },
  {
    id: "13",
    name: "Character Thirteen",
    orientation: "square",
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
  {
    id: "15",
    name: "Character Fifteen",
    orientation: "landscape",
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
    orientation: "landscape",
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
    orientation: "square",
    media: [
      {
        type: "image",
        src: character17,
      },
    ]
  },
];

const TwitchPackage = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"08"}
      heading={<h2>Twitch <span>Package.</span></h2>}
      id={"twitch-package"}
    />
  );
};

export default TwitchPackage;