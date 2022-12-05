import React from "react";
import { View } from "@react-pdf/renderer";

const ViewContainer = ({ platform, children, style, className }) => {
  if (platform === "pdf") {
    return <View style={style}>{children}</View>;
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default ViewContainer;
