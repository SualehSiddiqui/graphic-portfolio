import CharacterCards from "../../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../../assets/LogoAndBanner/set1img1.avif";
import character2a from "../../../assets/LogoAndBanner/set2img1.avif";
import character3a from "../../../assets/LogoAndBanner/set3img1.avif";
import character4a from "../../../assets/LogoAndBanner/set4img1.avif";
import character4b from "../../../assets/LogoAndBanner/set4img2.avif";
import character5a from "../../../assets/LogoAndBanner/set5img1.avif";
import character5b from "../../../assets/LogoAndBanner/set5img2.avif";
import character6a from "../../../assets/LogoAndBanner/set6img1.avif";

const characters = [
  {
    id: "01",
    name: "Logo Design 01",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character1a,
      },
    ],
  },

  {
    id: "02",
    name: "Logo Design 02",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character2a,
      },
    ],
  },

  {
    id: "03",
    name: "Logo Design 03",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character3a,
      },
    ],
  },

  {
    id: "04",
    name: "Logo Design 04",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character4a,
      },
    ],
  },

  {
    id: "05",
    name: "Banner Design 01",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character4b,
      },
    ],
  },

  {
    id: "06",
    name: "Logo Design 05",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character5a,
      },
    ],
  },

  {
    id: "07",
    name: "Banner Design 02",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character5b,
      },
    ],
  },

  {
    id: "08",
    name: "Banner Design 03",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character6a,
      },
    ],
  },
];

const LogoAndBanner = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"06"}
      heading={<h2>Logos and <span>Banners.</span></h2>}
      id={"logos-and-banners"}
    />
  );
};

export default LogoAndBanner;