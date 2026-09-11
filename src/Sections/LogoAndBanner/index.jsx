import CharacterCards from "../../components/CharacterCards";

// Replace these paths with your actual artwork
import character1a from "../../assets/LogoAndBanner/set1img1.avif";
import character2a from "../../assets/LogoAndBanner/set2img1.avif";
import character3a from "../../assets/LogoAndBanner/set3img1.avif";
import character4a from "../../assets/LogoAndBanner/set4img1.avif";
import character4b from "../../assets/LogoAndBanner/set4img2.avif";
import character5a from "../../assets/LogoAndBanner/set5img1.avif";
import character5b from "../../assets/LogoAndBanner/set5img2.avif";
import character6a from "../../assets/LogoAndBanner/set6img1.avif";


const characters = [
  {
    id: "01",
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
    id: "02",
    name: "Character Two",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character2a,
      },
    ]
  },
  {
    id: "03",
    name: "Character Three",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character3a,
      },
    ]
  },
  {
    id: "04",
    name: "Character Four",
    orientation: "square",
    media: [
      {
        type: "image",
        src: character4a,
      },
    ]
  },
  {
    id: "05",
    name: "Character Four",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character4b,
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
        src: character5a,
      },
    ]
  },
  {
    id: "06",
    name: "Character Five",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character5b,
      },
    ]
  },
  {
    id: "07",
    name: "Character Six",
    orientation: "landscape",
    media: [
      {
        type: "image",
        src: character6a,
      },
    ]
  },
];

const LogoAndBanner = () => {
  return (
    <CharacterCards
      characters={characters}
      num={"04"}
      heading={<h2>Logos and <span>Banners.</span></h2>}
      id={"logos-and-banners"}
    />
  );
};

export default LogoAndBanner;