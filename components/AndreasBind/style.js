import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  .svg-container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #adesso-svg {
    width: 100%;
    height: 100%;
  }
  #svg-content {
    transform: scale(6) translateY(25px) translateX(40px);
  }
  #line-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
  }
  .letters-1,
  .letters-2,
  .letters-3 {
    opacity: 0;
  }
`;
