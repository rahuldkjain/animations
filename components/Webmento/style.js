import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  .svg-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #livello-svg {
    width: 60%;
    height: 60%;
  }
  #d-mask-path {
    fill: none;
    stroke: #fff;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
  #t-mask-path {
    fill: none;
    stroke: #fff;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
  }
  #unconventional {
    opacity: 0;
  }
  #media {
    opacity: 0;
  }
  #tools {
    opacity: 0;
  }
  #g-digital {
    opacity: 0;
  }
  #g-media {
    opacity: 0;
  }
  #g-salad {
    opacity: 0;
  }
  #g-dot,
  #g-circle,
  #g-base {
    opacity: 0;
  }
  #right-sqb {
    opacity: 0;
  }
  #left-sqb {
    opacity: 0;
  }
  #trail-path {
    visibility: hidden;
  }
`;
