import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 10%;
  }
  #zozoom-svg {
    width: 80%;
    height: 80%;
    transform: translateX(10px) translateY(50px);
  }

  #yellow-shade,
  #brown-patches,
  #golden-shade,
  #grey-patches,
  #hair-stripes,
  #hair-color,
  #lion-body-color,
  #cheek-shadow,
  #brown-nose-shade,
  .body-part,
  .text-moonlion {
    opacity: 0;
  }
`;
