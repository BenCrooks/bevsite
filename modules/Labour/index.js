import React, { useState } from "react";
import "./index.css";
import PropType from "prop-types";
import process from "../images/Weaving gif.gif";
import LabourInDetail from "./LabourInDetail";

function Labour({ OpenLabourDetails, setOpenLabourDetails }) {
  const [overUnderString, setoverUnderString] = useState("");

  return (
    <div
      className="container"
      style={{ width: OpenLabourDetails ? "100vw" : "50vw" }}
    >
      {OpenLabourDetails && <LabourInDetail />}
      <img
        onMouseDown={() => setoverUnderString(a => a + "Over ")}
        onMouseUp={
          !OpenLabourDetails
            ? () => setoverUnderString(a => a + "Under ")
            : () => {
                setoverUnderString("");
                setOpenLabourDetails(false);
              }
        }
        src={process}
        className="images"
        alt="logo"
        style={
          OpenLabourDetails
            ? {
                height: "20%",
                right: "2%",
                position: "absolute",
                bottom: "2%",
                borderWidth: "5px",
                borderStyle: "solid",
                borderColor: "#333333"
              }
            : { height: "100%", left: 0, position: "absolute" }
        }
        name="labour"
      />
      {!OpenLabourDetails && (
        <div
          className="textibooi"
          style={{
            fontFamily: "Helvetica",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            pointerEvents: "none",
            fontSize: "7.25vh",
            color: "#33333388",
            letterSpacing: 0.5
          }}
        >
          {document.getElementsByClassName("textibooi")[0] !== undefined &&
            document.getElementsByClassName("textibooi")[0].scrollHeight >
              document.getElementsByName("labour")[0].scrollHeight &&
            setOpenLabourDetails(true)}

          {overUnderString}
        </div>
      )}
    </div>
  );
}

export default Labour;

Labour.propTypes = {
  OpenLabourDetails: PropType.bool.isRequired,
  setOpenLabourDetails: PropType.func.isRequired
};
