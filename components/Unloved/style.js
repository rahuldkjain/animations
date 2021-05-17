import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  background-color: #eeefe7;
  width: 100%;
  height: auto;
  padding: 30px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
  .svg-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  #unloved-svg {
    width: 60%;
    height: 60%;
  }

  #text-HUBSCHMITZ {
    transform: scale(1.15);
  }

  #vertikale-1,
  #diagonale-1,
  #kreisbogen-1,
  #kreisbogen-2 {
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
  .mask-logo {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    fill: none;
    stroke: white;
  }

  #horizontale-1 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  #spiral {
    stroke-dasharray: 1400;
    stroke-dashoffset: 1400;
  }

  #unten-1,
  #oben {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  #rechts-1,
  #links {
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
  }

  #mitte-1,
  #mitte-2 {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  #mitte-3 {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  #mitte-4 {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
  }
  #mitte-5 {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
  }

  #down-stripe-1 {
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
  #down-stripe-2 {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
  }

  #down-stripe-3 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  #down-stripe-4 {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  #down-stripe-5 {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
  }
  #down-stripe-6 {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
  }
  #down-stripe-horizontal {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }

  #down-stripe-vertical {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  #down-stripe-big-horizontal {
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }

  #down-stripe-big-vertical {
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`;
