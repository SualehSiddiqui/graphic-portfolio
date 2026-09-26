import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/Maps/set1img1.avif";
import character1b from "../../../assets/Maps/set1img2.avif";

import character2a from "../../../assets/Maps/set2img1.avif";
import character2b from "../../../assets/Maps/set2img2.avif";
import character2c from "../../../assets/Maps/set2img3.avif";
import character2d from "../../../assets/Maps/set2img4.avif";
import character2e from "../../../assets/Maps/set2img5.avif";
import character2f from "../../../assets/Maps/set2video6.mp4";



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
    ]
  },
  {
    id: "01",
    name: "Character One",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character1b,
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
    ]
  },
  {
    id: "02",
    name: "Character Two",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character2b,
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
        src: character2c,
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
        src: character2d,
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
        src: character2e,
      },
    ]
  },
  {
    id: "02",
    name: "Character Two",
    orientation: "landscape",
    media: [
      {
        type: "video",
        src: character2f,
      },
    ]
  },
];

const VRWorld = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"11"}
      heading={<h2>VR <span>World.</span></h2>}
      id={"vr-world"}
    />
  );
};

export default VRWorld;