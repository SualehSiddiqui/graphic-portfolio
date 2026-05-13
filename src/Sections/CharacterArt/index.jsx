import React, { useEffect, useState } from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import character1 from "../../Assets/CharacterArt/character1.avif";
import character2 from "../../Assets/CharacterArt/character2.avif";
import character3 from "../../Assets/CharacterArt/character3.avif";
import character4 from "../../Assets/CharacterArt/character4.avif";
import character5 from "../../Assets/CharacterArt/character5.avif";
import character6 from "../../Assets/CharacterArt/character6.avif";
import character7 from "../../Assets/CharacterArt/character7.avif";
import character8 from "../../Assets/CharacterArt/character8.avif";
import character9 from "../../Assets/CharacterArt/character9.avif";
import character10 from "../../Assets/CharacterArt/character10.avif";
import character11 from "../../Assets/CharacterArt/character11.avif";
import character12 from "../../Assets/CharacterArt/character12.avif";
import character13 from "../../Assets/CharacterArt/character13.avif";
import character14 from "../../Assets/CharacterArt/character14.avif";
import character15 from "../../Assets/CharacterArt/character15.avif";
import character16 from "../../Assets/CharacterArt/character16.avif";
import character17 from "../../Assets/CharacterArt/character17.avif";
import character18 from "../../Assets/CharacterArt/character18.avif";
import character19 from "../../Assets/CharacterArt/character19.avif";
import character20 from "../../Assets/CharacterArt/character20.avif";
import character21 from "../../Assets/CharacterArt/character21.avif";
import character22 from "../../Assets/CharacterArt/character22.avif";
import character23 from "../../Assets/CharacterArt/character23.avif";
import character24 from "../../Assets/CharacterArt/character24.avif";
import character25 from "../../Assets/CharacterArt/character25.avif";
import character26 from "../../Assets/CharacterArt/character26.avif";
import character27 from "../../Assets/CharacterArt/character27.avif";

const dataCharacterArt = {
    portrait: [
        character20,
        character1,
        character14,
        character10,
        character11,
        character8,
        character5,
        character22,
        character25,
        character17,
        character23,
        character21,
        character12,
        character2,
        character6,
        character18,
        character24,
        character26,
        character27
    ],
    landscape: [
        character3,
        character4,
        character9,
        character13,
        character15,
        character16,
        character19,
        character7,
    ]
};

const CharacterArt = ({ windowWidth }) => {

    const allImages = [
        ...dataCharacterArt.portrait.map(img => ({ type: "portrait", src: img })),
        ...dataCharacterArt.landscape.map(img => ({ type: "landscape", src: img }))
    ];

    const [increaseBy, setIncreaseBy] = useState(windowWidth <= 430 ? 6 : 10);

    useEffect(() => {
        setIncreaseBy(windowWidth <= 430 ? 6 : 10)
    }, [windowWidth])

    const [visibleCount, setVisibleCount] = useState(increaseBy);

    return (
        <div className="main-img-div" id='charcterArt'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600}>
                    Character Art
                </p>
                <SvgComponent />
            </h1>

            <Container className="img-container">

                {allImages.slice(0, visibleCount).map((item, index) => {
                    return (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className={item.type === "portrait"
                                ? "character-art-portrait"
                                : "character-art-landscape"
                            }
                        >
                            <Image
                                width={item.type === "portrait"
                                    ? 200
                                    : 300
                                }
                                height={item.type === "portrait"
                                    ? (windowWidth < 430 ? 250 : 300)
                                    : 200
                                }
                                src={item.src}
                                alt="Character Art"
                            />
                        </div>
                    )
                })}

                {visibleCount < allImages.length ?
                    <div className="load-more-btn-wrapper">
                        <button className="load-more-btn" onClick={e => setVisibleCount(prev => prev + increaseBy)}>
                            Load More
                        </button>
                    </div> :
                    <div className="load-more-btn-wrapper">
                        <button className="load-more-btn" onClick={e => setVisibleCount(increaseBy)}>
                            Hide
                        </button>
                    </div>
                }

            </Container>
        </div >
    );
};

export default CharacterArt;