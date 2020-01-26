import React from "react";

function WeavingIsBodilyText() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        justifyContent: "center",
        // alignItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "#000000e3"
      }}
    >
      <div style={{ position: "absolute", top: "2%" }}>
        <div
          style={{
            top: 30,
            width: "70%",
            pointerEvents: "none",
            fontSize: 12,
            color: "#ffffff",
            textAlign: "left",
            margin: "15%",
            lineHeight: 1.5,
            fontFamily: "Roboto Mono"
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#ffffff",
              fontFamily: "Roboto Mono"
            }}
          >
            weaving is bodily
          </div>
          <br />
          <br />
          The creative act of weaving is core to my creative research into
          embodiment. Through this embodied contact, weaving has the capacity to
          enact the experience of femininity: it embodies an expansion and
          contraction, breaking out, freeing the control imposed by two
          dimensions, and then conforming to the grid once again.
        </div>
      </div>
    </div>
  );
}

export default WeavingIsBodilyText;
