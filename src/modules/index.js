import React, { useState } from "react";
// import Container from "./Container";
import "./index.css";
import Labour from "./Labour";
import Materials1 from "./Materials1";
import MenuButton from "./MenuButton";

const All = () => {
  const [OpenLabourDetails, setOpenLabourDetails] = useState(false);
  const [screenToShow, setscreenToShow] = useState(0);
  const [showTip, setShowTip] = useState(true);
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
              bottom: "1%",
              color: "black",
              fontSize: 20,
              fontFamily: "Roboto Mono"
            }}
          >
            {screenToShow == 1
              ? "coded materials"
              : screenToShow == 2
              ? "sedimented surfaces"
              : screenToShow == 3
              ? "the body as a site for coded knowledge"
              : screenToShow == 4
              ? "weaving is bodily"
              : screenToShow == 5
              ? "texture of a gendered life"
              : screenToShow == 6
              ? "working images"
              : screenToShow == 7 && "full text"}
          </div>
          <MenuButton
            setscreenToShow={setscreenToShow}
            setShowTip={setShowTip}
          />
          {showTip && (
            <div
              style={{
                width: "20hv",
                backgroundColor: "#00000098",
                position: "absolute",
                top: 120,
                left: "1%"
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Roboto Mono",
                  margin: 10,
                  textAlign: "left"
                }}
              >
                Tip
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: 10,
                  fontFamily: "Roboto Mono",
                  margin: 10
                }}
              >
                To Navigate this site, click on the weave Icon above.
              </div>
            </div>
          )}

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
