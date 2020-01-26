import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import PropType from "prop-types";
import FittedImage from "react-fitted-image";
import ZoomFunctionality from "./zoomFunctionality";

import IntroductionText from "./IntroductionText";
import process from "../images/Artwork.jpg";

import CodedMaterialsText from "./CodedMaterialsText";
//Coded MAterials <3
import CM1 from "../images/Coded Materials/1.jpg";
import CM2 from "../images/Coded Materials/2.jpg";
import CM3 from "../images/Coded Materials/3.jpg";
import CM4 from "../images/Coded Materials/4.jpg";
import CM5 from "../images/Coded Materials/5.jpg";
import CM6 from "../images/Coded Materials/6.JPG";
import CM7 from "../images/Coded Materials/7.JPG";

import SedimentedSurfacesText from "./EmbodimentTracersText";
//sedimented surfaces <3
import SS1 from "../images/Embodiment/1.JPG";
import SS2 from "../images/Embodiment/2.JPG";
import SS3 from "../images/Embodiment/3.jpg";
import SS4 from "../images/Embodiment/4.JPG";
import SS5 from "../images/Embodiment/5.png";
import SS6 from "../images/Embodiment/6.png";
import SS7 from "../images/Embodiment/7.png";
import SS8 from "../images/Embodiment/8.JPG";

import BodyAsASightForKnowledgeText from "./personalAssociationsText";
//body as knowledge
import BK1 from "../images/movie_sequence1/1.JPG";
import BK2 from "../images/movie_sequence1/2.JPG";
import BK3 from "../images/movie_sequence1/3.JPG";
import BK4 from "../images/movie_sequence1/4.JPG";
import BK5 from "../images/movie_sequence1/5.JPG";
import BK6 from "../images/movie_sequence1/6.JPG";
import BK7 from "../images/movie_sequence1/7.JPG";
import BK8 from "../images/movie_sequence1/8.JPG";
import BK9 from "../images/movie_sequence1/9.JPG";
import BK10 from "../images/movie_sequence1/11.JPG";
import BK11 from "../images/movie_sequence1/12.JPG";
import BK12 from "../images/movie_sequence1/13.JPG";
import BK13 from "../images/movie_sequence1/14.JPG";
import BK14 from "../images/movie_sequence1/16.JPG";

import WeavingIsBodilyText from "./WeavingIsBodilyText";
//Weaving is bodily <3
import WB1 from "../images/short movie_sequence 2/1.JPG";
import WB2 from "../images/short movie_sequence 2/2.JPG";
import WB3 from "../images/short movie_sequence 2/3.JPG";
import WB4 from "../images/short movie_sequence 2/4.JPG";
import WB5 from "../images/short movie_sequence 2/5.JPG";
import WB6 from "../images/short movie_sequence 2/6.JPG";
import WB7 from "../images/short movie_sequence 2/7.JPG";
import WB8 from "../images/short movie_sequence 2/8.JPG";
import WB9 from "../images/short movie_sequence 2/9.jpg";
import WB10 from "../images/short movie_sequence 2/10.JPG";

import GenderedEmbodimentText from "./GenderedEmbodimentText";
//texture of a gendered life
import GE1 from "../images/Embodiment/9.jpg";
import GE2 from "../images/Embodiment/1b.jpg";
import GE3 from "../images/Embodiment/2b.jpg";
import GE4 from "../images/Embodiment/3b.jpg";
import GE5 from "../images/Embodiment/4b.jpg";
import GE6 from "../images/Embodiment/5ba.JPG";
import GE7 from "../images/Embodiment/6ba.jpg";
import GE8 from "../images/Embodiment/7ba.JPG";
import GE9 from "../images/Embodiment/8b.jpg";
import GE10 from "../images/Embodiment/9b.JPG";

//<3
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

import FullText from "./FullText";

const Images = [
  [process],
  [CM1, CM2, CM3, CM4, CM5, CM6, CM7],
  [SS1, SS2, SS3, SS4, SS5, SS6, SS7, SS8],
  [BK1, BK2, BK3, BK4, BK5, BK6, BK7, BK8, BK9, BK10, BK11, BK12, BK13, BK14],
  [WB1, WB2, WB3, WB4, WB5, WB6, WB7, WB8, WB9, WB10],
  [GE1, GE2, GE3, GE4, GE5, GE6, GE7, GE8, GE9, GE10],
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
  []
];

function Materials1({ screenToShow }) {
  const [showingImage, setShowingImage] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [canShowImage, setcanShowImage] = useState();
  const [run, setRun] = useState();

  const [counter, setCounter] = useState(30);
  const r = useRef(null);
  r.current = { counter, setCounter };
  useEffect(() => {
    let temp = 0;
    const id = setInterval(() => {
      if (screenToShow === 3 || screenToShow === 4) {
        if (temp !== Images[screenToShow].length - 1) {
          setShowingImage(a => a + 1);
          temp++;
        } else {
          setPressed(true);
          window.clearInterval(id);
        }
      }
    }, 500);
    return () => {
      clearInterval(id);
    };
  }, [run]);

  useEffect(() => {
    setShowingImage(0);
    setPressed(false);
    run ? setRun(false) : setRun(true);
  }, [screenToShow]);

  return (
    <div className="container">
      {Images[screenToShow][showingImage] !== undefined &&
        (screenToShow !== 7 ? (
          <FittedImage
            fit="cover"
            onMouseUp={() => {
              if (screenToShow !== 3 && screenToShow !== 4) {
                setcanShowImage(undefined);
                showingImage !== Images[screenToShow].length - 1
                  ? setShowingImage(a => a + 1)
                  : screenToShow !== 6
                  ? setPressed(a => !a)
                  : setShowingImage(0);
                pressed && setShowingImage(0);
              } else {
                if (showingImage >= Images[screenToShow].length - 1) {
                  setPressed(false);
                  setShowingImage(0);
                  run ? setRun(false) : setRun(true);
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
        ))}
      {screenToShow !== 7 && screenToShow !== 3 && screenToShow !== 4 && (
        <ZoomFunctionality
          imag={canShowImage}
          imgSrc={Images[screenToShow][showingImage]}
        />
      )}

      {pressed &&
        (screenToShow === 0 ? (
          // <IntroductionText />
          <></>
        ) : screenToShow === 1 ? (
          <BodyAsASightForKnowledgeText />
        ) : screenToShow === 2 ? (
          <SedimentedSurfacesText />
        ) : screenToShow === 3 ? (
          <CodedMaterialsText />
        ) : screenToShow === 4 ? (
          <WeavingIsBodilyText />
        ) : screenToShow === 5 ? (
          <GenderedEmbodimentText />
        ) : (
          screenToShow === 7 && <FullText />
        ))}
    </div>
  );
}

export default Materials1;

Materials1.propTypes = {
  screenToShow: PropType.number.isRequired
};
