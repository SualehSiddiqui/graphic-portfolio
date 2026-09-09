import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artworkimport character1 from "../../assets/Model/character1.avif";

import character1a from "../../assets/Models/set1img1.avif";
import character1b from "../../assets/Models/set1video1.mp4";
import character2a from "../../assets/Models/set2img1.avif";
import character2b from "../../assets/Models/set2video1.mp4";
import character3a from "../../assets/Models/set3img1.avif";
import character3b from "../../assets/Models/set3img2.avif";
import character3c from "../../assets/Models/set3img3.avif";
import character3d from "../../assets/Models/set3video1.mp4";
import character4a from "../../assets/Models/set4img1.avif";
import character4b from "../../assets/Models/set4img2.avif";
import character4c from "../../assets/Models/set4img3.avif";
import character4d from "../../assets/Models/set4video1.mp4";

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
];

const Models = () => {
  return (
    <CharacterCards characters={characters} num={"01"} heading={<h2>2D/3D <span>Models.</span></h2>} />
  );
};

export default Models;