import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100%;
  .svg-container {
    background-color: black;
    height: 600px;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #funkii-svg {
    width: 80%;
    height: 100%;
  }
  #du {
    fill: black;
    z-index: 99999;
  }
`;
