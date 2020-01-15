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
          Embodiment:
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
            the body as a site of coded knowledge
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "1%" }}>
        <div
          style={{
            fontFamily: "Helvetica",
            top: 30,
            width: "70%",
            pointerEvents: "none",
            fontSize: 14,
            color: "#333333",
            textAlign: "left",
            margin: "15%",
            lineHeight: 1.5
          }}
        >
          By recognising the body as a deposit site, embodied making becomes a
          way to unravel social conscriptions implanted invisibly into women’s
          bodies. This disciplining and coding happens in multiple ways. My
          artist’s body is thus a site of projection from which to try
          understand these programmed or disciplined responses.
        </div>
      </div>
    </div>
  );
}

export default CodedMaterialsText;
