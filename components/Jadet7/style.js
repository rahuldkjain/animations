import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  height: 100%;
  .svg-container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  svg {
    width: 50%;
    height: 50%;
  }

  #right-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
  }
  #left-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  #l-1-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
  }

  #l-2-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
  }

  #r-1-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
  }
`;
