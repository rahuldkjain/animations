import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  .svg-container {
    background-color: black;
    height: 500px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  #funkii-svg {
    width: 70%;
    height: 70%;
  }
  #du {
    fill: black;
  }
`;
