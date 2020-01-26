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
        backgroundColor: "#000000e3"
      }}
    >
      <div style={{ position: "absolute", top: "1%" }}>
        <div
          style={{
            top: 5,
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
              top: 5,
              pointerEvents: "none",
              fontSize: 14,
              color: "#ffffff",
              textAlign: "left",
              lineHeight: 1.5,

              fontFamily: "Roboto Mono"
            }}
          >
            texture of gendered life; my subjective feminine experience
          </div>
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
