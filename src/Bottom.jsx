import React from "react";
import Images from "./Img";
import Content from "./Content";

function BottomPart() {
  return (
    <div style={{
        maxWidth: 1060,
        width: "100%",
        margin: "auto",
    }}>
      <Images />
      <Content />
    </div>
  );
}

export default BottomPart;
