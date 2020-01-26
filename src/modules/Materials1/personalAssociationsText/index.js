import React from "react";

function PersonalAssociationsText() {
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
              pointerEvents: "none",
              fontSize: 12,
              color: "#ffffff",
              textAlign: "left",
              lineHeight: 1.5,
              fontFamily: "Roboto Mono"
            }}
          >
            coded materials
          </div>
          <br />
          <br />
          My practice is deeply invested in materials and the sensory and
          associative traces they leave.
          <br />
          <br /> Since people form an attachment to the stuff a round us, such
          materials carve out a space of personal significance. Some of my
          materials hold deep family resonance like my grandmother hoarding
          ribbon. Fabrics taken out my home bring the dismissed domestic space
          to the foreground . In these ways, materials express a strong social
          coding.
          <br />
          <br /> Individual materials get lost within the entanglement, emerging
          again as part of an entangled texture.
        </div>
      </div>
    </div>
  );
}

export default PersonalAssociationsText;
