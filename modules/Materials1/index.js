import React, { useState, useEffect } from "react";
import "./index.css";
import PropType from "prop-types";
import FittedImage from "react-fitted-image";
import ZoomFunctionality from "./zoomFunctionality";

import IntroductionText from "./IntroductionText";
import process from "../images/Artwork.jpg";

import FullText from "./FullText";

import CodedMaterialsText from "./CodedMaterialsText";
import C1 from "../images/Coded Materials/1.jpg";
import C2 from "../images/Coded Materials/2.jpg";
import C3 from "../images/Coded Materials/3.jpg";
import C4 from "../images/Coded Materials/4.jpg";
import C5 from "../images/Coded Materials/5.jpg";
import C6 from "../images/Coded Materials/6.JPG";
import C7 from "../images/Coded Materials/7.JPG";

import PersonialAssociationsText from "./personalAssociationsText";
import P1 from "../images/personalAssociations/1.JPG";
import P2 from "../images/personalAssociations/2.jpg";
import P3 from "../images/personalAssociations/3.jpg";
import P4 from "../images/personalAssociations/4.png";

import WeavingIsBodilyText from "./WeavingIsBodilyText";
import W1 from "../images/Embodiment/1.JPG";
import W2 from "../images/Embodiment/2.JPG";
import W3 from "../images/Embodiment/3.jpg";
import W4 from "../images/Embodiment/4.JPG";
import W5 from "../images/Embodiment/5.png";
import W6 from "../images/Embodiment/6.png";
import W7 from "../images/Embodiment/7.png";
import W8 from "../images/Embodiment/8.JPG";
import W9 from "../images/Embodiment/9.jpg";
import E1 from "../images/Embodiment/1b.jpg";
import E2 from "../images/Embodiment/2b.jpg";
import E3 from "../images/Embodiment/3b.jpg";
import E4 from "../images/Embodiment/4b.jpg";
import E5 from "../images/Embodiment/5b.JPG";
import E6 from "../images/Embodiment/6b.jpg";
import E7 from "../images/Embodiment/7b.jpg";

import GenderedEmbodimentText from "./GenderedEmbodimentText";
import G1 from "../images/movie_sequence1/1.JPG";
import G2 from "../images/movie_sequence1/2.JPG";
import G3 from "../images/movie_sequence1/3.JPG";
import G4 from "../images/movie_sequence1/4.JPG";
import G5 from "../images/movie_sequence1/5.JPG";
import G6 from "../images/movie_sequence1/6.JPG";
import G7 from "../images/movie_sequence1/7.JPG";
import G8 from "../images/movie_sequence1/8.JPG";
import G9 from "../images/movie_sequence1/9.JPG";
import G11 from "../images/movie_sequence1/11.JPG";
import G12 from "../images/movie_sequence1/12.JPG";
import G13 from "../images/movie_sequence1/13.JPG";
import G14 from "../images/movie_sequence1/14.JPG";
import G16 from "../images/movie_sequence1/16.JPG";

import EmbodimentTracersText from "./EmbodimentTracersText";
import Em1 from "../images/short movie_sequence 2/1.JPG";
import Em2 from "../images/short movie_sequence 2/2.JPG";
import Em3 from "../images/short movie_sequence 2/3.JPG";
import Em4 from "../images/short movie_sequence 2/4.JPG";
import Em5 from "../images/short movie_sequence 2/5.JPG";
import Em6 from "../images/short movie_sequence 2/6.JPG";
import Em7 from "../images/short movie_sequence 2/7.JPG";
import Em8 from "../images/short movie_sequence 2/8.JPG";
import Em9 from "../images/short movie_sequence 2/9.jpg";
import Em10 from "../images/short movie_sequence 2/10.JPG";

import WI1 from "../images/WorkingImages/Entanglement/1.jpg";
import WI2 from "../images/WorkingImages/Entanglement/2.jpg";
import WI3 from "../images/WorkingImages/Entanglement/3.jpg";
import WI4 from "../images/WorkingImages/Entanglement/4.jpg";
import WI5 from "../images/WorkingImages/Entanglement/5.jpg";
import WI6 from "../images/WorkingImages/Entanglement/6.jpg";
import WI7 from "../images/WorkingImages/Entanglement/7.jpg";
import WI8 from "../images/WorkingImages/Entanglement/8.jpg";
import WI9 from "../images/WorkingImages/Entanglement/9.jpg";
import WI10 from "../images/WorkingImages/Entanglement/10.jpg";
import WI11 from "../images/WorkingImages/Entanglement/11.jpg";
import WI12 from "../images/WorkingImages/Entanglement/12.jpg";
import WI13 from "../images/WorkingImages/Entanglement/13.jpg";
import WI14 from "../images/WorkingImages/Entanglement/14.jpg";
import WI15 from "../images/WorkingImages/Process/1.JPG";
import WI16 from "../images/WorkingImages/Process/2.JPG";
import WI17 from "../images/WorkingImages/Process/3.JPG";
import WI18 from "../images/WorkingImages/Process/4.JPG";
import WI19 from "../images/WorkingImages/Process/5.JPG";
import WI20 from "../images/WorkingImages/Process/6.JPG";
import WI21 from "../images/WorkingImages/Process/7.JPG";
import WI22 from "../images/WorkingImages/Process/8.JPG";
import WI23 from "../images/WorkingImages/Process/9.JPG";
import WI24 from "../images/WorkingImages/Process/10.JPG";

const Images = [
  [process],
  [],
  [C1, C2, C3, C4, C5, C6, C7],
  [P1, P2, P3, P4],
  [W1, W2, W3, W4, W5, W6, W7, W8, W9, E1, E2, E3, E4, E5, E6, E7],
  [G1, G2, G3, G4, G5, G6, G7, G8, G9, G11, G12, G13, G14, G16],
  [
    WI1,
    WI2,
    WI15,
    WI3,
    WI16,
    WI4,
    WI5,
    WI17,
    WI6,
    WI7,
    WI18,
    WI8,
    WI9,
    WI19,
    WI10,
    WI20,
    WI11,
    WI21,
    WI12,
    WI13,
    WI22,
    WI14,
    WI23,
    WI24
  ],
  [Em1, Em2, Em3, Em4, Em5, Em6, Em7, Em8, Em9, Em10]
];

function Materials1({ screenToShow }) {
  const [showingImage, setShowingImage] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [canShowImage, setcanShowImage] = useState();

  useEffect(() => {
    setShowingImage(0);
    setPressed(false);
  }, [screenToShow]);

  useEffect(() => {
    if (showingImage >= Images[screenToShow].length) {
      setShowingImage(0);
    }
    if (screenToShow === 5 || screenToShow === 7) {
      if (!pressed) {
        setTimeout(() => {
          if (screenToShow === 5 || screenToShow === 7) {
            if (showingImage !== Images[screenToShow].length - 1) {
              setShowingImage(a => a + 1);
            } else {
              setPressed(true);
            }
          }
        }, 1000);
      }
    }
  }, [showingImage, screenToShow]);

  return (
    <div className="container">
      {console.log("img", Images[screenToShow].showingImage)}
      {screenToShow !== 1 ? (
        <FittedImage
          fit="cover"
          onMouseUp={() => {
            if (screenToShow !== 5 && screenToShow !== 7) {
              setcanShowImage(undefined);
              showingImage !== Images[screenToShow].length - 1
                ? setShowingImage(a => a + 1)
                : screenToShow !== 6
                ? setPressed(a => !a)
                : setShowingImage(0);
              pressed && setShowingImage(0);
            } else {
              if (pressed) {
                setPressed(false);
                setShowingImage(0);
              }
            }
          }}
          src={Images[screenToShow][showingImage]}
          className="images"
          alt="logo"
          name="Materials1"
        />
      ) : (
        !pressed && setPressed(true)
      )}

      <ZoomFunctionality
        imag={canShowImage}
        imgSrc={Images[screenToShow][showingImage]}
      />

      {pressed &&
        (screenToShow === 0 ? (
          <IntroductionText />
        ) : screenToShow === 1 ? (
          <FullText />
        ) : screenToShow === 2 ? (
          <CodedMaterialsText />
        ) : screenToShow === 3 ? (
          <PersonialAssociationsText />
        ) : screenToShow === 4 ? (
          <WeavingIsBodilyText />
        ) : screenToShow === 5 ? (
          <GenderedEmbodimentText />
        ) : (
          screenToShow === 7 && <EmbodimentTracersText />
        ))}
    </div>
  );
}

export default Materials1;

Materials1.propTypes = {
  screenToShow: PropType.number.isRequired
};
