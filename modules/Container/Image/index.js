import React, { useState } from "react";
import PropType from "prop-types";
import { useSpring, animated } from "react-spring";
// import ReactDOM from "react-dom";
import Draggable from "react-draggable";

function Image({ ImgChosen, pointInDisplayLoop, setpointInDisplayLoop }) {
  const [Dragging, setDragging] = useState(false);
  const props = useSpring({
    config: { mass: 1, tension: 130 },
    from: {
      right: "-130%",
      bottom: "-160%",
      left: "-320%",
      height: "600%"
    },
    to: async next => {
      if (pointInDisplayLoop === 0) {
        await next({
          right: "-130%",
          bottom: "-160%",
          //   width: "600%",
          height: "600%",
          left: "-320%"
        });
      } else if (pointInDisplayLoop === 1) {
        await next({
          right: "-200%",
          bottom: "-200%",
          //   width: "300%",
          height: "300%",
          left: "-100%"
        });
      } else if (pointInDisplayLoop === 2) {
        await next({
          right: "-100%",
          bottom: "-40%",
          //   width: "450%",
          height: "450%",
          left: "-205%",
          margin: "auto"
        });
      } else if (pointInDisplayLoop === 3) {
        await next({
          //   width: "100%",
          height: "100%",
          bottom: "0%",
          right: "0%",
          left: "0%",
          top: "0%"
        });
      } else if (pointInDisplayLoop === 4) {
        await next({
          //   width: "100%",
          height: "200%",
          bottom: "0%",
          top: "0%",
          right: "-50%",
          left: "-50%"
        });
      }
    }
  });

  if (pointInDisplayLoop === 4) {
    return (
      <Draggable
        handle=".images"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
        onStart={() => setDragging(false)}
        onDrag={() => setDragging(true)}
      >
        <animated.img
          onClick={() => !Dragging && setpointInDisplayLoop(3)}
          src={ImgChosen}
          className="images"
          alt="logo"
          style={props}
        />
      </Draggable>
    );
  } else {
    return (
      <animated.img
        onClick={() =>
          !Dragging &&
          setpointInDisplayLoop(
            pointInDisplayLoop === 4 ? 3 : pointInDisplayLoop + 1
          )
        }
        src={ImgChosen}
        className="images"
        alt="logo"
        style={
          pointInDisplayLoop !== 3
            ? props
            : {
                height: "100%",
                bottom: "0%",
                right: "0%",
                left: "0%",
                top: "0%",
                margin: "auto"
              }
        }
      />
    );
  }
}

export default Image;

Image.propTypes = {
  ImgChosen: PropType.string.isRequired,
  pointInDisplayLoop: PropType.number.isRequired,
  setpointInDisplayLoop: PropType.func.isRequired
};
