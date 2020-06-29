import React from "react";

function Jumbotron() {
  return (
    <div
      style={{
        height: "150px",
        width: "100%",
        backgroundColor: "#3b8550",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ color: "white", fontWeight: "bold", fontSize: "4rem" }}>
        "dev-blog"
      </span>
      <p style={{ color: "white", fontWeight: 300, fontSize: "2rem" }}>
        A place to share your knowledge.
      </p>
    </div>
  );
}

export default Jumbotron;
