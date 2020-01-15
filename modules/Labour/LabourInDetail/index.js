import React, { useState } from "react";
import a from "../../images/Labour/1.JPG";
import b from "../../images/Labour/2.jpg";
import c from "../../images/Labour/3.JPG";
import d from "../../images/Labour/4.JPG";
import e from "../../images/Labour/5.JPG";
import f from "../../images/Labour/6.JPG";
import g from "../../images/Labour/7.JPG";
import h from "../../images/Labour/8.JPG";
import i from "../../images/Labour/9.JPG";
import j from "../../images/Labour/10.JPG";
import k from "../../images/Labour/11.JPG";
import Text1 from "./Text1";
import FittedImage from "react-fitted-image";

function LabourInDetail() {
  const [imageList] = useState([a, b, c, d, e, f, g, h, i, j, k]);
  const [imageChoice, setImageChoice] = useState(0);
  const [displayText, setdisplayText] = useState(false);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <FittedImage
        fit="cover"
        onMouseUp={() => {
          if (!displayText) {
            imageChoice === 6 || imageChoice === 10
              ? setdisplayText(true)
              : imageChoice < imageList.length - 1
              ? setImageChoice(a => a + 1)
              : setImageChoice(0);
          } else {
            imageChoice < imageList.length - 1
              ? setImageChoice(a => a + 1)
              : setImageChoice(0);
            setdisplayText(false);
          }
        }}
        src={imageList[imageChoice]}
        className="images"
        alt="logo"
        style={{ width: "100%", position: "absolute", left: 0, top: 0 }}
      />
      {displayText && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            pointerEvents: "none",
            backgroundColor: "#f0ead6e3",
            fontSize: 16
          }}
        >
          <div
            style={{
              width: "60%",
              position: "absolute",
              left: "15%",
              margin: "3%",
              color: "black"
            }}
          >
            {imageChoice === 6 && <Text1 />}
          </div>
        </div>
      )}
    </div>
  );
}

export default LabourInDetail;
