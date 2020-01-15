import React, { useState } from "react";
import "./index.css";
import PropType from "prop-types";
import Image from "./Image";
import artwork from "../images/Artwork.jpg";

function Container({ ImgChosen }) {
  // const [showBottomBox, setShowBottomBox] = useState(true);
  const [pointInDisplayLoop, setpointInDisplayLoop] = useState(0);

  return (
    <div className="container">
      <Image
        ImgChosen={artwork}
        pointInDisplayLoop={pointInDisplayLoop}
        setpointInDisplayLoop={setpointInDisplayLoop}
      ></Image>
      {/* <img
        className={showBottomBox ? "buttonOpen" : "buttonClosed"}
        src={arrow}
        onClick={() => setShowBottomBox(!showBottomBox)}
      ></img>
      {showBottomBox !== null && (
        <div
          className={
            showBottomBox ? "textBoxBottomOpen" : "textBoxBottomClosed"
          }
        >
          <p style={{ margin: 10, fontSize: 20 }}>{header}</p>
          <p style={{ color: "black", fontSize: 15, margin: 0 }}>
            {text[pointInDisplayLoop]}
          </p>
        </div>
      )} */}
    </div>
  );
}

export default Container;

Container.propTypes = {
  ImgChosen: PropType.string.isRequired,
  header: PropType.string.isRequired,
  text: PropType.arrayOf(PropType.string).isRequired
};
