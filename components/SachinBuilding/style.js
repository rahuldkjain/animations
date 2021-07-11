import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .svg-container {
    width: 100%;
    height: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #building-svg {
    width: 70%;
    height: 70%;
    opacity: 0.5;
  }

  path {
    visibility: hidden;
  }
`;
