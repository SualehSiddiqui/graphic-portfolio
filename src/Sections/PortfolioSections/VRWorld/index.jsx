import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/VRWorld/set1img1.avif";
import character1b from "../../../assets/VRWorld/set1img2.avif";
import character1c from "../../../assets/VRWorld/set1img3.avif";
import character1d from "../../../assets/VRWorld/set1img4.avif";
import character1e from "../../../assets/VRWorld/set1img5.avif";
import character1f from "../../../assets/VRWorld/set1img6.avif";
import character1g from "../../../assets/VRWorld/set1img7.avif";

const characters = [
  {
    id: "01-01",
    name: "VR World 01 — View 01",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1a,
      },
    ],
  },

  {
    id: "01-02",
    name: "VR World 01 — View 02",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1b,
      },
    ],
  },

  {
    id: "01-03",
    name: "VR World 01 — View 03",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1c,
      },
    ],
  },

  {
    id: "01-04",
    name: "VR World 01 — View 04",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1d,
      },
    ],
  },

  {
    id: "01-05",
    name: "VR World 01 — View 05",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1e,
      },
    ],
  },

  {
    id: "01-06",
    name: "VR World 01 — View 06",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1f,
      },
    ],
  },

  {
    id: "01-07",
    name: "VR World 01 — View 07",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character1g,
      },
    ],
  },
];

const VRWorld = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"12"}
      heading={<h2>VR <span>World.</span></h2>}
      id={"vr-world"}
    />
  );
};

export default VRWorld;