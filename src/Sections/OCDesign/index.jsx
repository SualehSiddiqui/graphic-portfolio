import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import character1 from "../../Assets/OCDesign/character1.avif";
import character2 from "../../Assets/OCDesign/character2.avif";
import character3 from "../../Assets/OCDesign/character3.avif";
import character4 from "../../Assets/OCDesign/character4.avif";
import character5 from "../../Assets/OCDesign/character5.avif";
import character6 from "../../Assets/OCDesign/character6.avif";
import character7 from "../../Assets/OCDesign/character7.avif";
import character8 from "../../Assets/OCDesign/character8.avif";
import character9 from "../../Assets/OCDesign/character9.avif";
import character10 from "../../Assets/OCDesign/character10.avif";

const dataOCDesign = [
    character1, character2, character3, character4, character5,
    character6, character7, character8, character9, character10,
];

const OCDesign = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='ocDesign'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    OC Design
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataOCDesign && dataOCDesign.map((value, key) => {
                        return (
                            <>
                                <div data-aos="zoom-in" className='character-art-portrait' key={key + 'portrait'}>
                                    <Image
                                        width={200}
                                        height={windowWidth < 430 ? 250 : 300}
                                        src={value}
                                        alt="Image"
                                    />
                                </div>
                            </>
                        )
                    })
                }
            </Container>
        </div >
    )
}

export default OCDesign;