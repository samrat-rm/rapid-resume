import React from "react";
import { Svg, Path, G, Polygon } from "@react-pdf/renderer";

import getInlineStyles from "../../globals/styles/GlobalStyles";

const MailSvg = ({ width, height, color }) => {
  return (
    <Svg style={getInlineStyles("contactIcon")} viewBox="0 0 400 400">
      <G>
        <Polygon
          style={getInlineStyles("contactIcon")}
          points="0,127.5 0,274.219 104.8,206.1"
        />
        <Polygon
          style={getInlineStyles("contactIcon")}
          points="400,274.219 400,127.5 295.2,206.1"
        />
        <Polygon
          style={getInlineStyles("contactIcon")}
          points="200,277.5 130.357,225.268 0,310 0,340 400,340 400,310 269.643,225.268"
        />
        <Polygon
          style={getInlineStyles("contactIcon")}
          points="0,90 200,240 400,90 400,60 0,60"
        />
      </G>
    </Svg>
  );
};

export default MailSvg;
