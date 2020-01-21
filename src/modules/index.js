import React, { useState } from "react";
// import Container from "./Container";
import "./index.css";
import Labour from "./Labour";
import Materials1 from "./Materials1";
import MenuButton from "./MenuButton";

const All = () => {
  const [OpenLabourDetails, setOpenLabourDetails] = useState(false);
  const [screenToShow, setscreenToShow] = useState(0);
  return (
    <>
      {/* <p className="title">ARTWORK NAME</p> */}
      <div className="all">
        {/* <Container /> */}
        {/* <div className="devider"></div> */}
        <div
          style={{
            height: "100vh",
            width: "100vw",
            flexDirection: "row",
            display: "flex"
          }}
        >
          {!OpenLabourDetails && <Materials1 screenToShow={screenToShow} />}
          <div
            style={{
              position: "absolute",
              left: "1%",
              top: "1%",
              color: "black",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {screenToShow == 1
              ? "Full Text"
              : screenToShow == 2
              ? "The Body As A Site For Coded Knowledge"
              : screenToShow == 3
              ? "Coded Materials"
              : screenToShow == 4
              ? "Weaving is Bodily"
              : screenToShow == 5
              ? "Texture Of A Gendered Life"
              : screenToShow == 6
              ? "Working Images"
              : screenToShow == 7 && "Sedimented Surfaces"}
          </div>
          <MenuButton setscreenToShow={setscreenToShow} />
          <Labour
            OpenLabourDetails={OpenLabourDetails}
            setOpenLabourDetails={setOpenLabourDetails}
          />
        </div>
      </div>
    </>
  );
};

export default All;
