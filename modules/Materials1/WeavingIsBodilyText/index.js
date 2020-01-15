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
        backgroundColor: "#f0ead6e3"
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica",
          alignSelf: "center",
          fontSize: 12,
          pointerEvents: "none",
          width: "60%",
          margin: "3%",
          height: "5%",
          left: "20%",
          position: "absolute",
          color: "#333333"
        }}
      >
        <div
          style={{
            height: 48,
            width: "2%",
            backgroundColor: "#333333"
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            fontSize: 34,
            color: "#333333",
            top: "38%",
            left: "3%"
          }}
        >
          Embodiment:
          <div
            style={{
              fontSize: 23,
              color: "#333333",
              position: "absolute",
              top: "100%",
              width: "400%",
              left: 0
            }}
          >
            weaving is bodily
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "2%" }}>
        <div
          style={{
            fontFamily: "Helvetica",
            top: 30,
            width: "70%",
            pointerEvents: "none",
            fontSize: 15,
            color: "#000000",
            textAlign: "left",
            margin: "15%",
            lineHeight: 1.5
          }}
        >
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
