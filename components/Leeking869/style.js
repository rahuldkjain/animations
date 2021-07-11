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
    padding-top: 10px;
  }
  #hydro-energy-svg {
    width: 60%;
    height: 60%;
  }
  #logo-content {
    cursor: pointer;
  }
  #shine path {
    fill: #ffffff;
    opacity: 0.5;
  }
  .pattern-mask {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 190;
    stroke-dashoffset: 190;
  }

  #hydro-h-left-mask-path,
  #hydro-h-right-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  #hydro-h-middle-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
  }
  #hydro-y-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  #hydro-d-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  #hydro-r-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  #hydro-o-mask-path {
    fill: none;
    stroke: #ffffff;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
`;
