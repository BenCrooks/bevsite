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
