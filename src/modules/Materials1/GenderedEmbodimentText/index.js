import React from "react";

function GenderedEmbodimentText() {
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
            texture of gendered life; my subjective feminine experience
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "1%" }}>
        <div
          style={{
            fontFamily: "Helvetica",
            top: 5,
            width: "70%",
            pointerEvents: "none",
            fontSize: 14,
            color: "#000000",
            textAlign: "left",
            margin: "15%",
            lineHeight: 1.5
          }}
        >
          <br />
          <br />
          The creative process gives material expression to the tensions and
          contradictions of gendered expectations around women, like the pulls
          and demands of motherhood, relationship and family. The act of
          entangling is a surprisingly apt way of describing my life.
          <br />
          <br />
          Woven threads, some forthright, consistent, behaving according to
          coded rules. Diverse. Divergent. Multiple. Others unruly. Unravelling.
          Yet other entangled. Knotted. Complex. Opaque.
        </div>
      </div>
    </div>
  );
}

export default GenderedEmbodimentText;
