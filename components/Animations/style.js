import styled from "styled-components";
import { devicesWidth } from "../../constants/mediaQueryWidth";

export const AnimationsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  padding: 0 10px;
  width: 100%;
`;

export const AnimationContainer = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #76bd4d, #336733);
  margin: ${(props) => (props.margin ? props.margin : "64px 0px")};
`;

export const FlexContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 64px 0px;
  @media (max-width: ${devicesWidth.mobile + "px"}) {
    flex-direction: column;
  }
`;
export const FlexItem = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  height: 600px;
  @media (max-width: ${devicesWidth.mobile + "px"}) {
    width: 100%;
    height: auto;
    margin: 64px 0px;
  }
`;
