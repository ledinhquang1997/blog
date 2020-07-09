import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from{
    transform: translateY(-20px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Container = styled.div`
    max-width:1140px;
    margin:auto;
    display: flex;
    flex:1;
    animation: ${slideDown} .2s ease-out;
`;
