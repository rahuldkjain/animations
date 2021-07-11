import styled from "styled-components";
import { devicesWidth } from "../../constants/mediaQueryWidth";

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  .svg-container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #animation-svg {
    width: 100%;
    height: 100%;
    @media (max-width: ${devicesWidth.mobile + "px"}) {
      width: 50%;
      height: 50%;
    }
  }
  #pills {
    transform: scale(0.7);
    @media (max-width: ${devicesWidth.mobile + "px"}) {
      transform: scale(0.5) translateX(90px);
    }
  }
`;
