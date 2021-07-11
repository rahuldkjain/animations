import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  height: auto;
  width: 100%;
  margin: 10px;
  .svg-container {
    width: 100%;
    height: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #roland-svg {
    width: 100%;
    height: 100%;
    transform: scale(0.8);
  }

  .control-btn {
    cursor: pointer;
  }

  .control-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #p-t-slug-mask {
    stroke: #ffffff;
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
  }
  #c-p-3-slug-mask {
    stroke: #ffffff;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
  }
  #c-p-1-slug-mask,
  #c-p-2-slug-mask {
    stroke: #ffffff;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  #tractor-remote-1,
  .t-signal,
  .p-signal {
    opacity: 0;
  }
`;
