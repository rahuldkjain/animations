import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;
  .container {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
    background-color: #1b1b33;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 400px; */
    width: 50%;
  }
  #icon-svg {
    width: 50%;
    height: 50%;
  }
`;
