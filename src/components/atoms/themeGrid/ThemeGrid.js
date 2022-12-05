import React, { useState, useEffect } from "react";
import ThemeGridData from "../../themes/themeMapping";
import "./themeGrid.css";

const ThemeGrid = (props) => {
  let [paletteArray, setPalette] = useState([]);
  let [ThemeGrid, setThemeGrid] = useState(
    props.isPremiumUser
      ? ThemeGridData
      : ThemeGridData.filter((data) => data.isPremium === false)
  );

  useEffect(() => {
    const palette = [];
    const width = 1;
    // //console.log(ThemeGridData);

    const height = Math.ceil(ThemeGrid.length / width);
    for (let row = 0; row < height; row++) {
      const currentRow = ThemeGrid.slice(row * width, (row + 1) * width);
      palette.push(currentRow);
    }
    // //console.log(palette);
    setPalette(palette);
  }, []);

  const handleTheme = (data) => {
    props.setTheme(data.theme);
  };

  const setBackground = (index) => {
    return "linear-gradient(180deg,#FFE6E9 0%,#DDA6AE 69%, #B76E79 5%,#DDA6AE 100%)";
  };

  return (
    <div
      className={props.hidden ? ".hide" : ""}
      style={{ overflowX: "auto", maxHeight: "58vh" }}
    >
      {ThemeGrid &&
        ThemeGrid.map((data, index) => {
          return (
            <div
              key={index}
              className=" m-4 themecard rounded d-flex align-items-center justify-content-center"
              style={{
                background: "url(" + data.icon + ")",
              }}
              onClick={(event) => handleTheme(data)}
            >
              {data.name}
            </div>
          );
        })}
    </div>
  );
};

export default ThemeGrid;
