import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  .svg-container {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
    width: 70%;
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
