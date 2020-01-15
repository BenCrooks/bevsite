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
            fontSize: 30,
            color: "#333333",
            top: "38%",
            left: "3%"
          }}
        >
          material:
          <div
            style={{
              fontSize: 20,
              color: "#333333",
              position: "absolute",
              top: "100%",
              width: "400%",
              left: 0
            }}
          >
            personal associations
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "2%" }}>
        <div
          style={{
            fontFamily: "Helvetica",
            width: "70%",
            pointerEvents: "none",
            fontSize: 12,
            color: "#000000",
            textAlign: "left",
            margin: "15%",
            lineHeight: 1.5
          }}
        >
          My practice is deeply invested in materials and the sensory and
          associative traces they leave. A disarray of materials infuse the
          creative process. Through the clutter, we recognise a deliberate
          conceptual choice.
          <br />
          <br /> Since people form an attachment to the stuff that surrounds us,
          such materials develop value through how they carve out a space of
          personal significance. Some of my materials hold deep family resonance
          for me... fragments of memories... like my grandmother hoarding
          ribbon, sparingly reused to wrap special gifts (in carefully-unwrapped
          carefully-refolded carefully-stored carefully-preserved wrapping
          paper). Some fabrics taken out my home bring the dismissed domestic
          space to the foreground, evoking the drudgery and gendered slant of
          domestic work. Strongly evoked alongside this are the racialised tones
          of the history of domestic labour in South Africa. In these ways,
          materials express a strong social coding.
          <br />
          <br /> While giving attention to individual materials, the process
          simultaneously destabilises any view of materials as fixed or solid:
          individual materials get lost within the social entanglement, emerging
          again as adiluted or mingled part of a heavy texture.
        </div>
      </div>
    </div>
  );
}

export default PersonalAssociationsText;
