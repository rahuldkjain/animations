import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  #zigzag {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
  }
`;
