import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  .nav_wrapper {
    max-width: 300px;
    max-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
    transition: box-shadow 0.3s ease-in-out;
  }

  .nav_wrapper:hover {
    box-shadow: 0px 0px 15px 2px rgba(229, 138, 80, 0.5);
  }

  .nav_wrapper svg {
    max-width: 200px;
    max-height: 200px;
  }

  #icon_1:hover,
  #icon_2:hover,
  #icon_3:hover,
  #icon_4:hover,
  #icon_5:hover {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: draw 1.5s ease forwards;
    stroke: #e58a50;
  }

  #icon_1:hover #icon_1_text {
    fill: #e58a50;
  }
  #icon_1:hover .icon_1 {
    stroke: #e58a50;
  }

  #icon_2:hover #icon_2_text {
    fill: #e58a50;
  }
  #icon_2:hover .icon_2 {
    stroke: #e58a50;
  }

  #icon_3:hover #icon_3_text {
    fill: #e58a50;
  }
  #icon_3:hover .icon_3 {
    stroke: #e58a50;
  }

  #icon_4:hover #icon_4_text {
    fill: #e58a50;
  }
  #icon_4:hover .icon_4 {
    stroke: #e58a50;
  }

  #icon_5:hover #icon_5_text {
    fill: #e58a50;
  }
  #icon_5:hover .icon_5 {
    stroke: #e58a50;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 400;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
`;
