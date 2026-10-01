import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/Maps/set1img1.avif";
import character1b from "../../../assets/Maps/set1img2.avif";

import character2a from "../../../assets/Maps/set2img1.avif";
import character2b from "../../../assets/Maps/set2img2.avif";
import character2c from "../../../assets/Maps/set2img3.avif";
import character2d from "../../../assets/Maps/set2img4.avif";
import character2e from "../../../assets/Maps/set2img5.avif";

const characters = [
  {
    id: "01",
    name: "Map Artwork 01 — View 01",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character1a,
      },
    ],
  },

  {
    id: "01-02",
    name: "Map Artwork 01 — View 02",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character1b,
      },
    ],
  },

  {
    id: "02-01",
    name: "Map Artwork 02 — View 01",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character2a,
      },
    ],
  },

  {
    id: "02-02",
    name: "Map Artwork 02 — View 02",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character2b,
      },
    ],
  },

  {
    id: "02-03",
    name: "Map Artwork 02 — View 03",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character2c,
      },
    ],
  },

  {
    id: "02-04",
    name: "Map Artwork 02 — View 04",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character2d,
      },
    ],
  },

  {
    id: "02-05",
    name: "Map Artwork 02 — View 05",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character2e,
      },
    ],
  },
];

const Maps = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"11"}
      heading={<h2>Maps <span>.</span></h2>}
      id={"maps"}
    />
  );
};

export default Maps;