import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    min-height: 400px;
  }
  #peacefm-logo {
    width: 80%;
    height: 80%;
  }
  .upper_text,
  .lower_text,
  #orange_background,
  #green_background {
    visibility: hidden;
  }
`;
