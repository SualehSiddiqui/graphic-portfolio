import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1 from "../../../assets/LandscapeArtScenes/character1.avif";
import character2 from "../../../assets/LandscapeArtScenes/character2.avif";
import character3 from "../../../assets/LandscapeArtScenes/character3.avif";
import character4 from "../../../assets/LandscapeArtScenes/character4.avif";
import character5 from "../../../assets/LandscapeArtScenes/character5.avif";
import character6a from "../../../assets/LandscapeArtScenes/character6a.avif";
import character6b from "../../../assets/LandscapeArtScenes/character6b.avif";
import character7 from "../../../assets/LandscapeArtScenes/character7.avif";
import character8 from "../../../assets/LandscapeArtScenes/character8.avif";
import character9a from "../../../assets/LandscapeArtScenes/character9a.avif";
import character9b from "../../../assets/LandscapeArtScenes/character9b.avif";
import character10 from "../../../assets/LandscapeArtScenes/character10.avif";
import character11 from "../../../assets/LandscapeArtScenes/character11.avif";
import character12 from "../../../assets/LandscapeArtScenes/character12.avif";
import character13 from "../../../assets/LandscapeArtScenes/character13.avif";
import character14 from "../../../assets/LandscapeArtScenes/character14.avif";
import character15 from "../../../assets/LandscapeArtScenes/character15.avif";
import character16 from "../../../assets/LandscapeArtScenes/character16.avif";
import character17 from "../../../assets/LandscapeArtScenes/character17.avif";
import character18 from "../../../assets/LandscapeArtScenes/character18.avif";
import character19b from "../../../assets/LandscapeArtScenes/character19a.avif";
import character19a from "../../../assets/LandscapeArtScenes/character19b.avif";
import character20 from "../../../assets/LandscapeArtScenes/character20.avif";
import character21 from "../../../assets/LandscapeArtScenes/character21.avif";
import character22 from "../../../assets/LandscapeArtScenes/character22.avif";

const characters = [
  {
    id: "01",
    name: "Landscape Scene 01",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character1,
      },
    ],
  },

  {
    id: "02",
    name: "Landscape Scene 02",
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
    name: "Landscape Scene 03",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character3,
      },
    ],
  },

  {
    id: "04",
    name: "Landscape Scene 04",
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
    name: "Landscape Scene 05",
    orientation: "portrait",
    media: [
      {
        type: "image",
        src: character5,
      },
    ],
  },

  {
    id: "06",
    name: "Landscape Scene 06",
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
    ],
  },

  {
    id: "07",
    name: "Landscape Scene 07",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character7,
      },
    ],
  },

  {
    id: "08",
    name: "Landscape Scene 08",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character8,
      },
    ],
  },

  {
    id: "09",
    name: "Landscape Scene 09",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character9a,
      },
      {
        type: "image",
        src: character9b,
      },
    ],
  },

  {
    id: "10",
    name: "Landscape Scene 10",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character10,
      },
    ],
  },

  {
    id: "11",
    name: "Landscape Scene 11",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character11,
      },
    ],
  },

  {
    id: "12",
    name: "Landscape Scene 12",
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
    name: "Landscape Scene 13",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character13,
      },
    ],
  },

  {
    id: "14",
    name: "Landscape Scene 14",
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
    name: "Landscape Scene 15",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character15,
      },
    ],
  },

  {
    id: "16",
    name: "Landscape Scene 16",
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
    name: "Landscape Scene 17",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character17,
      },
    ],
  },

  {
    id: "18",
    name: "Landscape Scene 18",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character18,
      },
    ],
  },

  {
    id: "19-01",
    name: "Landscape Scene 19 — View 01",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character19a,
      },
    ],
  },

  {
    id: "19-02",
    name: "Landscape Scene 19 — View 02",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character19b,
      },
    ],
  },

  {
    id: "20",
    name: "Landscape Scene 20",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character20,
      },
    ],
  },

  {
    id: "21",
    name: "Landscape Scene 21",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character21,
      },
    ],
  },

  {
    id: "22",
    name: "Landscape Scene 22",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character22,
      },
    ],
  },
];

const LandscapeArtScenes = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"05"}
      heading={<h2>Landscape <span>Art Scenes.</span></h2>}
      id={"landscape-art-scenes"}
    />
  );
};

export default LandscapeArtScenes;