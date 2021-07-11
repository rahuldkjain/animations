import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  #logo-text path {
    fill: black;
  }
  #svg-content {
    transform: translateX(10%);
  }

  .mask {
    fill: none;
    stroke: "#fff";
  }

  .mask {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  .mask {
    animation: strokeOffset 0.9s linear forwards;
  }

  #icon {
    transform-origin: 93px 93px;
    animation: rotateScale 1.5s linear forwards;
  }

  @keyframes strokeOffset {
    from {
      stroke-dashoffset: 400;
    }
    to {
      stroke-dashoffset: 800;
    }
  }
  @keyframes strokeOffsetHover {
    from {
      stroke-dashoffset: 400;
    }
    to {
      stroke-dashoffset: 800;
    }
  }
  @keyframes rotateScale {
    0% {
      transform: rotateZ(80deg);
    }
    60% {
      transform: rotateZ(0deg);
    }
    70% {
      transform: scale(1);
    }
    85% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes rotateScale-hover {
    0% {
      transform: rotateZ(80deg);
    }
    60% {
      transform: rotateZ(0deg);
    }
    70% {
      transform: scale(1);
    }
    85% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  #svg-content:hover .mask {
    animation: strokeOffsetHover 0.9s linear forwards;
    -webkit-animation: strokeOffsetHover 0.9s linear forwards;
    -moz-animation: strokeOffsetHover 0.9s linear forwards;
    -ms-animation: strokeOffsetHover 0.9s linear forwards;
    -o-animation: strokeOffsetHover 0.9s linear forwards;
  }
  #svg-content:hover #icon {
    animation: rotateScale-hover 1.5s linear forwards;
    -webkit-animation: rotateScale-hover 1.5s linear forwards;
    -moz-animation: rotateScale-hover 1.5s linear forwards;
    -ms-animation: rotateScale-hover 1.5s linear forwards;
    -o-animation: rotateScale-hover 1.5s linear forwards;
  }
`;
