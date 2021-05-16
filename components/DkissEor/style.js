import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    height: auto;
    height: 500px;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
  }
  .animation-container {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 5px;
  }

  #radar-ring-1,
  #radar-ring-2,
  #radar-ring-3 {
    opacity: 0;
  }

  #radar-animation {
    transform: scale(0.6);
  }

  #planet-animation {
    transform: scale(1.5);
  }
  #planet-content {
    transform: translateX(120px) translateY(110px);
  }

  #globe-animation {
    transform: scale(1.8) translateX(120px);
  }

  #final-map {
    transform: translateY(-35px);
  }
  #final-map-part-2 {
    transform: translateY(35px);
  }
  #final-middle-map {
    transform: translateY(-10px);
  }

  .major-ring {
    fill: none;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
  }
  .radar-lines {
    fill: none;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }
  .planet-rings {
    fill: none;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
`;
