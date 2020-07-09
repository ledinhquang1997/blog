import React from "react";
import styled, { keyframes } from "styled-components";

const slideFromLeft = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  70%{
    transform: translateX(5%)
  }

`;

const slideFromRight = keyframes`
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  70%{
    transform: translateX(-5%)
  }
  100%{
    transform: translateX(0)
    opacity: 1;
  }
`;

const AnimatedTitle = styled.span`
  animation: ${slideFromLeft} 1s ease-out;
`;

const Slogan = styled.p`
  animation: ${slideFromRight} 1s ease-out;

`;

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
      <AnimatedTitle
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "4rem",
        }}
      >
        "dev-blog"
      </AnimatedTitle>
      <Slogan style={{ color: "white", fontWeight: 300, fontSize: "2rem" }}>
        A place to share your knowledge.
      </Slogan>
    </div>
  );
}

export default Jumbotron;
