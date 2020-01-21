import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";
import imageZoom from "./zoomImageF";

function ZoomFunctionality({ imgSrc }) {
  const [widthHeight, setwidthHeight] = useState([0, 0]);
  const [OverZoom, setOverZoom] = useState();

  const setDimentions = imag => {
    if (imag !== undefined) {
      if ((imag[0].naturalWidth !== 0) & (imag[0].naturalHeight !== 0)) {
        console.log("imag[0].naturalWidth / 40", imag[0].naturalWidth / 40);
        setwidthHeight([
          130,
          (130 / imag[0].naturalWidth) * imag[0].naturalHeight
        ]);
        imageZoom(
          "myimage",
          "myresult",
          "fwend",
          130,
          (130 / imag[0].naturalWidth) * imag[0].naturalHeight
        );
      }
    }
  };

  return (
    <>
      <div
        className="img-zoom-result"
        id="myresult"
        style={{
          opacity: OverZoom ? 1 : 0,
          pointerEvents: "none"
        }}
      />
      <div
        onMouseOver={() => setOverZoom(true)}
        onMouseOut={() => setOverZoom(false)}
        style={{
          width: widthHeight[0],
          height: widthHeight[1],
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: OverZoom ? "#333333" : "#33333385",
          position: "absolute",
          top: 0,
          right: 0,
          margin: "1.5%",
          pointerEvents: "auto"
        }}
      >
        <img
          src={imgSrc}
          id="myimage"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            opacity: 0
          }}
          name="thisImage"
          onLoad={() => setDimentions(document.getElementsByName("thisImage"))}
        />
        <div id="fwend"></div>
      </div>
    </>
  );
}

export default ZoomFunctionality;

ZoomFunctionality.propTypes = {
  // imag: PropTypes.object.isRequired,
  imgSrc: PropTypes.string
};
