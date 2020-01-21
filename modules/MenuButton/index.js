import React, { useState } from "react";
import menu from "../images/menuWeave.svg";
import menuOpen from "../images/MenuOpe.svg";

function MenuButton({ setscreenToShow }) {
  const [Pressed, setPressed] = useState(false);
  const [Description, setDescription] = useState(false);
  const [DescriptionPosition, setDescriptionPosition] = useState([0, 0]);

  return (
    <>
      {!Pressed ? (
        <img
          onMouseUp={() => {
            setPressed(a => !a);
          }}
          src={menu}
          className="images"
          alt="logo"
          style={{
            width: "5%",
            left: "0%",
            position: "absolute",
            margin: 10,
            top: "4%"
          }}
        />
      ) : (
        <div
          style={{
            width: 200,
            height: 336,
            backgroundColor: "#ffffff",
            position: "absolute",
            margin: 10,
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "#00000060"
          }}
          onMouseLeave={() => {
            setPressed(a => !a);
          }}
        >
          <img
            src={menuOpen}
            className="images"
            alt="logo"
            style={{
              width: "100%",
              left: "0",
              position: "absolute"
            }}
          />
          {/* <div
            onMouseDown={() => setscreenToShow(0)}
            onMouseEnter={() => setDescription("Introduction")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "10%",
              height: "30%",
              top: "6%",
              left: "5%"
            }}
          /> */}
          <div
            onMouseDown={() => setscreenToShow(1)}
            onMouseEnter={() => setDescription("Full Text")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "30%",
              height: "19%",
              top: "7%",
              left: "24%"
            }}
          />
          <div
            onMouseDown={() => setscreenToShow(2)}
            onMouseEnter={() =>
              setDescription("The Body As A Site For Coded Knowledge")
            }
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "17%",
              height: "21%",
              top: "8%",
              left: "82%"
            }}
          />
          <div
            onMouseDown={() => setscreenToShow(3)}
            onMouseEnter={() => setDescription("Coded Materials")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "17%",
              height: "19%",
              top: "33%",
              left: "6%"
            }}
          />
          <div
            onMouseDown={() => setscreenToShow(4)}
            onMouseEnter={() => setDescription("Weaving is Bodily")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "17%",
              height: "24%",
              top: "27%",
              left: "40%"
            }}
          />
          <div
            onMouseDown={() => setscreenToShow(5)}
            onMouseEnter={() => setDescription("Texture Of A Gendered Life")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "27%",
              height: "22%",
              top: "35%",
              left: "63%"
            }}
          />
          <div
            onMouseDown={() => setscreenToShow(6)}
            onMouseEnter={() => setDescription("Working Images")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "30%",
              height: "26%",
              top: "59%",
              left: "40%"
            }}
          />
          <div
            onMouseDown={() => setscreenToShow(7)}
            onMouseEnter={() => setDescription("Sedimented Surfaces")}
            onMouseLeave={() => setDescription(undefined)}
            onMouseMove={e => setDescriptionPosition([e.clientX, e.clientY])}
            style={{
              position: "absolute",
              backgroundColor: "#66003340",
              width: "27%",
              height: "16%",
              top: "83%",
              left: "1%"
            }}
          />
          {Description !== undefined && (
            <div
              style={{
                position: "absolute",
                left: DescriptionPosition[0] + 10,
                top: DescriptionPosition[1] - 16,

                color: "black",
                fontSize: 20,
                backgroundColor: "white"
              }}
            >
              {Description}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MenuButton;
