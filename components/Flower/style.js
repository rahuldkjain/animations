import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .svg-container {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
  #center-petal {
    z-index: 999;
  }

  #flower-svg {
    width: 80%;
    height: 80%;
  }
  #petal {
    display: none;
  }
  #lower-petal {
    display: none;
  }
  #lower-petal-2 {
    fill: black;
    z-index: 99;
  }
  .upper-petal {
    fill: black;
    z-index: 99;
  }

  .lower-petal {
    fill: black;
    z-index: 99;
  }
`;
