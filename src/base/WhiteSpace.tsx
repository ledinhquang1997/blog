import React from "react";

interface IProps {
  vertical?: boolean;
  size: string | number;
}

function WhiteSpace(props: IProps) {
  const { vertical, size } = props;
  return (
    <div
      style={{
        display: vertical ? "block" : "inline-block",
        [vertical ? "height" : "width"]: size,
      }}
    ></div>
  );
}

export default WhiteSpace;
