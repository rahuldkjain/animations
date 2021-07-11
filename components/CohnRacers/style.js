import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: auto;
  .svg-container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #cohn-racers-svg {
    width: 50%;
    height: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    border-radius: 4px;
  }

  .mask {
    fill: none;
    stroke: white;
  }

  #mask-cohn-c,
  #mask-cohn-o {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
  }

  #mask-cohn-h {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
  }

  #mask-cohn-n {
    stroke-dasharray: 1400;
    stroke-dashoffset: 1400;
  }
`;
