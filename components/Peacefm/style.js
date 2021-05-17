import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 95vh;
    overflow: hidden;
  }
  .upper_text,
  .lower_text,
  #orange_background,
  #green_background {
    visibility: hidden;
  }
`;
