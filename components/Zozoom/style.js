import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 50px 0;
  .svg-container {
    /* height: 100%;
    width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 20px 0; */
  }
  #zozoom-svg {
    width: 100%;
    height: 100%;
  }
  /* #svg-content {
    transform: translateY(70px);
  } */

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
