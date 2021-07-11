import styled from "styled-components";
export const Container = styled.div`
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
    background-color: #1c0832;
  }
  #segment-svg {
    width: 100%;
    height: 100%;
    transform: scale(0.9);
  }
  .motion-paths {
    visibility: hidden;
  }
  #inner-logo-shadow {
    opacity: 0.6;
  }
  #outer-logo-shadow {
    opacity: 0.4;
  }
`;
