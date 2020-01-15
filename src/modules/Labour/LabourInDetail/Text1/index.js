import React from "react";

function Text1() {
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
            height: 30,
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
          Labour:
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          margin: "5%"
        }}
      >
        <div style={{ position: "absolute", top: 50, left: "20%" }}>
          <div
            style={{
              fontFamily: "Helvetica",
              top: 30,
              width: "70%",
              pointerEvents: "none",
              fontSize: 15,
              color: "#333333",
              textAlign: "left",
              margin: "15%",
              lineHeight: 1.5
            }}
          >
            Weaving is slow, it consumes time, work, labour, materials.
            <br />
            <br />
            It requires total concentration.
            <br />
            Patience.
            <br />
            The process is methodical.
            <br />
            Meticulous.
            <br />
            It embeds repetitive, mundane re-enactment.
            <br />
            Sturdy arm muscles. Back held up straight.
            <br />
            <br />
            Mesmerizing rhythm and regularity.
            <br />
            <br />
            {
              "An enactment of work that is obsessive, caring, hard physical labour."
            }
            <br />
            <br />
            The labour of weaving develops a pattern of activity.
            <br />
            {
              "Pattern, with its infinite reproductions, communicates messages with an intensity that is unspeakable."
            }
            <br />
            <br />
            Slowly,
            <br />
            from the jumble of materials
            <br />
            the weave materializes
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text1;
