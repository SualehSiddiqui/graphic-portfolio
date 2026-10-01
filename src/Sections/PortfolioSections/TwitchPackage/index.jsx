import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/TwitchPackage/set1img1.avif";
import character1b from "../../../assets/TwitchPackage/set1img2.avif";
import character1c from "../../../assets/TwitchPackage/set1img3.avif";
import character1d from "../../../assets/TwitchPackage/set1video4.mp4";
import character2 from "../../../assets/TwitchPackage/set2img1.avif";
import character3 from "../../../assets/TwitchPackage/set3img1.avif";
import character4 from "../../../assets/TwitchPackage/set4img1.avif";
import character5 from "../../../assets/TwitchPackage/set5img1.avif";
import character6 from "../../../assets/TwitchPackage/set6img1.avif";
import character7 from "../../../assets/TwitchPackage/set7video1.mp4";
import character8 from "../../../assets/TwitchPackage/set8video1.mp4";
import character9 from "../../../assets/TwitchPackage/set9video1.mp4";
import character10 from "../../../assets/TwitchPackage/set10video1.mp4";
import character11 from "../../../assets/TwitchPackage/set11video1.mp4";
import character12 from "../../../assets/TwitchPackage/set12img1.avif";
import character13 from "../../../assets/TwitchPackage/set13img1.avif";
import character14 from "../../../assets/TwitchPackage/set14img1.avif";
import character15 from "../../../assets/TwitchPackage/set15img1.avif";
import character16 from "../../../assets/TwitchPackage/set16img1.avif";
import character17 from "../../../assets/TwitchPackage/set17img1.avif";
import character18a from "../../../assets/TwitchPackage/set18img1.avif";
import character18b from "../../../assets/TwitchPackage/set18img2.avif";
import character18c from "../../../assets/TwitchPackage/set18img3.avif";
import character19 from "../../../assets/TwitchPackage/set19video1.mp4";
import character20 from "../../../assets/TwitchPackage/set20img1.avif";

const characters = [
  {
    id: "01a",
    name: "Twitch Package 01 — Part 01",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character1a,
      },
    ],
  },

  {
    id: "01b",
    name: "Twitch Package 01 — Part 02",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1b,
      },
    ],
  },

  {
    id: "01c",
    name: "Twitch Package 01 — Part 03",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1c,
      },
    ],
  },

  {
    id: "01d",
    name: "Twitch Package 01 — Part 04",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character1d,
      },
    ],
  },

  {
    id: "02",
    name: "Twitch Package 02",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character2,
      },
    ],
  },

  {
    id: "03",
    name: "Twitch Package 03",
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
    name: "Twitch Package 04",
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
    name: "Twitch Package 05",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character5,
      },
    ],
  },

  {
    id: "06",
    name: "Twitch Package 06",
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
    name: "Twitch Package 07",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character7,
      },
    ],
  },

  {
    id: "08",
    name: "Twitch Package 08",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character8,
      },
    ],
  },

  {
    id: "09",
    name: "Twitch Package 09",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character9,
      },
    ],
  },

  {
    id: "10",
    name: "Twitch Package 10",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character10,
      },
    ],
  },

  {
    id: "11",
    name: "Twitch Package 11",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character11,
      },
    ],
  },

  {
    id: "12",
    name: "Twitch Package 12",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character12,
      },
    ],
  },

  {
    id: "13",
    name: "Twitch Package 13",
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
    name: "Twitch Package 14",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character14,
      },
    ],
  },

  {
    id: "15",
    name: "Twitch Package 15",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character15,
      },
    ],
  },

  {
    id: "16",
    name: "Twitch Package 16",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character16,
      },
    ],
  },

  {
    id: "17",
    name: "Twitch Package 17",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character17,
      },
    ],
  },

  {
    id: "18a",
    name: "Twitch Package 18 — Part 01",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character18a,
      },
    ],
  },

  {
    id: "18b",
    name: "Twitch Package 18 — Part 02",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character18b,
      },
    ],
  },

  {
    id: "18c",
    name: "Twitch Package 18 — Part 03",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character18c,
      },
    ],
  },

  {
    id: "19",
    name: "Twitch Package 19",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character19,
      },
    ],
  },

  {
    id: "20",
    name: "Twitch Package 20",
    orientation: "square",
    media: [
      {
        type: "video",
        src: character20,
      },
    ],
  },
];

const TwitchPackage = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"10"}
      heading={<h2>Twitch <span>Essentials.</span></h2>}
      id={"twitch-package"}
    />
  );
};

export default TwitchPackage;