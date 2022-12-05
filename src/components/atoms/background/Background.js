import React from "react";
import "./background.css";

const Background = ({ isgradient, isCircle, circleAlign }) => {
  return (
    <>
      {isgradient ? (
        <div className="area">
          {isCircle && (
            <div className="circles">
              <div
                className={
                  circleAlign ? "circle " + circleAlign : "circle right"
                }
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div class="areaWhite"></div>
      )}
    </>
  );
};

export default Background;
