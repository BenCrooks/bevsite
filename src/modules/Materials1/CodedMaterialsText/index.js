import React from "react";

function CodedMaterialsText() {
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
      <div style={{ position: "absolute", top: "1%" }}>
        <div
          style={{
            top: 30,
            width: "70%",
            pointerEvents: "none",
            fontSize: 14,
            color: "#ffffff",
            textAlign: "left",
            margin: "15%",
            lineHeight: 1.5,
            fontFamily: "Roboto Mono"
          }}
        >
          <div
            style={{
              top: 30,
              pointerEvents: "none",
              fontSize: 14,
              color: "#ffffff",
              textAlign: "left",
              lineHeight: 1.5,
              fontFamily: "Roboto Mono"
            }}
          >
            The body as a site of coded knowledge.
          </div>
          <br /> <br /> By recognising the body as a deposit site, embodied
          making becomes a way to unravel social conscriptions implanted
          invisibly into women’s bodies. This disciplining and coding happens in
          multiple ways. My artist’s body is thus a site of projection from
          which to try understand these programmed or disciplined responses.
        </div>
      </div>
    </div>
  );
}

export default CodedMaterialsText;
