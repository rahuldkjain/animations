import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";

const DkissEor = () => {
  useEffect(() => {
    gsap.set("#visible-ring, #radar-ring, #planet-ring", {
      transformOrigin: "center",
    });
    gsap.set("#visible-ring", {
      rotationZ: -90,
    });
    gsap.set("#radar-ring, #planet-ring", {
      rotationZ: 180,
    });

    gsap.set("#stick", {
      transformOrigin: "left bottom",
      rotationZ: -45,
    });
    gsap.set("#planet-main", {
      transformOrigin: "center",
    });

    var globeTimeline = new gsap.timeline({repeat: -1});
    globeTimeline.add("one");
    globeTimeline.set(
      "#map",
      {
        opacity: 0,
      },
      "one-=0.1"
    );
    globeTimeline.to("#visible-ring", {
      strokeDashoffset: 0,
      duration: 2,
    });
    globeTimeline.add("two");
    globeTimeline.fromTo(
      "#map",
      {
        x: 0,
        opacity: 0,
      },
      { x: -440, opacity: 1, duration: 2 },
      "two-=0.5"
    );

    var radarTimeline = new gsap.timeline({repeat: -1});
    radarTimeline.add("one");
    radarTimeline.set(
      ".radar-inner-circle, .radar-lines, #stick",
      { opacity: 0 },
      "one-=0.1"
    );
    radarTimeline.to("#radar-ring", {
      strokeDashoffset: 1800,
      duration: 1,
    });
    radarTimeline.to(".radar-lines", {
      opacity: 1,
      strokeDashoffset: 0,
      duration: 1,
    });
    radarTimeline.add("three");
    radarTimeline.to(".radar-inner-circle", { opacity: 1 }, "three-=0.8");
    radarTimeline.add("two");
    radarTimeline.to(
      "#stick",
      {
        opacity: 1,
      },
      "two-=0.2"
    );
    radarTimeline.to(
      "#stick",
      {
        opacity: 1,
        rotationZ: 315,
        duration: 2,
      },
      "two-=0.5"
    );
    radarTimeline.to(
      "#radar-ring-1",
      {
        opacity: 1,
        duration: 0.2,
      },
      "two+=0.3"
    );
    radarTimeline.to(
      "#radar-ring-2",
      {
        opacity: 1,
        duration: 0.2,
      },
      "two+=0.7"
    );
    radarTimeline.to(
      "#radar-ring-3",
      {
        opacity: 1,
        duration: 0.2,
      },
      "two+=1.1"
    );

    var planetTimeline = new gsap.timeline({repeat: -1});
    planetTimeline.set(
      ".planet-ring-cover, .planet-small-rings",
      {
        opacity: 0,
      },
      "one-=1.1"
    );
    planetTimeline.to("#planet-ring", {
      strokeDashoffset: 1800,
      duration: 1,
    });
    planetTimeline.set(".planet-ring-cover", {
      opacity: 1,
    });
    planetTimeline.add("one");
    planetTimeline.to(
      "#planet-big-ring",
      {
        strokeDashoffset: 0,
        duration: 1,
      },
      "one"
    );
    planetTimeline.to(
      "#planet-small-ring",
      {
        strokeDashoffset: 0,
        duration: 1,
      },
      "one+=0.5"
    );
    planetTimeline.fromTo(
      ".planet-small-rings",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "one+=0.9"
    );
  }, []);
  return (
    <Container>
      <div className="container">
        <div className="animation-container">
          <svg
            id="globe-animation"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640.4 200.19"
          >
            <defs>
              <clipPath id="clipPath" transform="translate(0.01 0.01)">
                <path
                  id="ring"
                  d="M196.67,100.09A96.58,96.58,0,1,1,100.09,3.51,96.58,96.58,0,0,1,196.67,100.09Z"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g id="globe">
              <g clipPath="url(#clipPath)">
                <g id="map">
                  <g id="final-map">
                    <path
                      d="M472.34,41.32c2.26,4.66,3.77,14.17,1.5,20.47S470,73.89,470,79.13s12.18,18.12,16,21.32,32.41,0,37.68,0-1.5,9.77-4.52,13.34-3,15.83,1.51,19.59,12.81,1.51,13.57,9.05,2.26,33.73,5.27,33.73,15.78-14.85,19.2-22.43-3.09-14.32,2.42-21.85,17.57-18.4,15.31-22.39-6-9.94-14.32-11.9-20.35,1.75-22.61-2-3-11.24-4.52-14.26-1.51-10,.75-13.29,7.08-9.32,10.7-7.81,8.85,9.8,12.27,4.52-.36-14.7,1.9-23.48,3-12.69-1.9-19.48-9.4-11-8.65-17.17"
                      transform="translate(0.01 0.01)"
                      fill="none"
                      stroke="#00b1eb"
                      strokeWidth="5.32"
                    />
                    <path
                      id="final-map-part-2"
                      d="M601.21,4.67c.75,7.54,3,10.56-.75,17.34A147.61,147.61,0,0,1,586.89,41.6c-3.77,4.53-3.77,9.8.75,15.83s8,8.29,12.82,9,14.31-1.18,18.08,2.62,2.26,14,6.79,20.74,9,16.57,15.07,16.57"
                      transform="translate(0.01 0.01)"
                      fill="none"
                      stroke="#00b1eb"
                      strokeWidth="5.32"
                    />
                  </g>
                  <path
                    id="final-middle-map"
                    d="M233.76,12.58a193.5,193.5,0,0,0-3.84,26.88c-1,13.74-1.43,20.66,1.92,23,8.17,5.82,27-16.69,37.12-10.88,3.88,2.23,3.71,7,5.76,33.29.93,12,2.21,23.88,3.2,35.84,2.92,35.59,3.69,38.3,5.76,39,10.76,3.84,28.37-55.83,53.76-55.68,28.5.16,46,75.56,63.36,71.68,4.48-1,3.09-6,14.08-24.32,12.92-21.59,22.83-28.07,20.48-38.4-.82-3.63-3.53-6.9-9-13.44-7.34-8.86-10.53-9.11-15.36-15.36-2.22-2.88-11.4-14.76-8.32-24.33,4-12.45,25.16-9.64,27.52-20.48,1.19-5.43-3.9-12.79-14.08-27.52-2.08-3-3.89-5.44-5.12-7"
                    transform="translate(0.01 0.01)"
                    fill="none"
                    stroke="#00b1eb"
                    strokeWidth="5.32"
                  />
                  <g>
                    <path
                      d="M26.9,41.32c2.26,4.66,3.77,14.17,1.5,20.47s-3.89,12.1-3.89,17.34,12.18,18.12,16,21.32,32.41,0,37.68,0-1.5,9.77-4.52,13.34-3,15.83,1.51,19.59,12.81,1.51,13.57,9.05S91,176.16,94,176.16s15.78-14.85,19.2-22.43-3.09-14.32,2.42-21.85,17.57-18.4,15.31-22.39-6-9.94-14.32-11.9-20.35,1.75-22.61-2S91,84.4,89.5,81.38s-1.51-10,.75-13.29,7.08-9.32,10.7-7.81,8.85,9.8,12.27,4.52-.36-14.7,1.9-23.48,3-12.69-1.9-19.48-9.4-11-8.65-17.17"
                      transform="translate(0.01 0.01)"
                      fill="none"
                      stroke="#00b1eb"
                      strokeWidth="5.32"
                    />
                  </g>
                </g>
              </g>
              <path
                className="major-ring"
                id="visible-ring"
                d="M196.67,100.09A96.58,96.58,0,1,1,100.09,3.51,96.58,96.58,0,0,1,196.67,100.09Z"
                transform="translate(0.01 0.01)"
                fill="none"
                stroke="#1765ab"
                strokeWidth="7.03"
              />
            </g>
          </svg>
        </div>
        <div className="animation-container">
          <svg
            id="radar-animation"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200.19 200.19"
          >
            <defs>
              <clipPath id="clipPath" transform="translate(0 0.02)">
                <rect width="200.18" height="200.18" fill="none" />
              </clipPath>
            </defs>
            <path
              className="radar-inner-circle"
              d="M100.08,171.56a71.47,71.47,0,1,0-71.46-71.48h0a71.46,71.46,0,0,0,71.45,71.47Z"
              transform="translate(0 0.02)"
              fill="none"
              stroke="#00b1eb"
              strokeWidth="5.32"
            />
            <path
              className="radar-inner-circle"
              d="M100.09,142.61a42.52,42.52,0,1,0-42.52-42.52,42.52,42.52,0,0,0,42.52,42.52Z"
              transform="translate(0 0.02)"
              fill="none"
              stroke="#00b1eb"
              strokeWidth="5.32"
            />
            <rect y="0.02" width="200.18" height="200.18" fill="none" />
            <g>
              <path
                id="radar-ring-2"
                d="M42.34,69.94a13.91,13.91,0,1,0-.06,0Z"
                transform="translate(0 0.02)"
                fill="#fff"
                stroke="#1765ab"
                strokeWidth="5.32"
              />
              <path
                id="radar-ring-3"
                d="M80.51,52.25A8.23,8.23,0,1,0,72.28,44h0a8.22,8.22,0,0,0,8.22,8.22Z"
                transform="translate(0 0.02)"
                fill="#fff"
                stroke="#1765ab"
                strokeWidth="5.32"
              />
              <path
                id="radar-ring-1"
                d="M65.64,134.52a8.23,8.23,0,1,0-8.23-8.23h0a8.22,8.22,0,0,0,8.21,8.23Z"
                transform="translate(0 0.02)"
                fill="#fff"
                stroke="#00b1eb"
                strokeWidth="5.32"
              />
            </g>
            <line
              id="stick"
              x1="100.37"
              y1="99.82"
              x2="167.7"
              y2="32.5"
              fill="none"
              stroke="#00b1eb"
              strokeWidth="5.32"
            />
            <g clipPath="url(#clipPath)">
              <g>
                <path
                  className="radar-lines"
                  id="radar-v-line"
                  d="M100.09,2.74V197.48"
                  transform="translate(0 -0.01)"
                  fill="none"
                  stroke="#00b1eb"
                  strokeWidth="5.32"
                />
                <path
                  className="radar-lines"
                  id="radar-h-line"
                  d="M2.72,100.1H197.46"
                  transform="translate(0 -0.01)"
                  fill="none"
                  stroke="#00b1eb"
                  strokeWidth="5.32"
                />
                <path
                  className="major-ring"
                  id="radar-ring"
                  d="M100.09,196.66A96.58,96.58,0,1,0,3.52,100.07v0a96.56,96.56,0,0,0,96.55,96.57Z"
                  transform="translate(0 0.02)"
                  fill="none"
                  stroke="#1765ab"
                  strokeWidth="7.03"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="animation-container">
          <svg
            id="planet-animation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 400.19"
          >
            <g id="planet-content">
              <g id="planet-main">
                <path
                  d="M165.36,196.68A96.58,96.58,0,1,0,68.78,100.1h0a96.59,96.59,0,0,0,96.57,96.57h0"
                  transform="translate(0.01 -0.01)"
                  fill="#fff"
                />
                <path
                  className="major-ring"
                  id="planet-ring"
                  d="M165.36,196.68A96.58,96.58,0,1,0,68.78,100.1h0a96.59,96.59,0,0,0,96.57,96.57Z"
                  transform="translate(0.01 -0.01)"
                  fill="none"
                  stroke="#1765ab"
                  strokeWidth="7.03"
                />
                <path
                  className="planet-small-rings"
                  id="on-ring"
                  d="M93.48,42.74A13.94,13.94,0,1,0,79.54,28.8,13.94,13.94,0,0,0,93.48,42.74Z"
                  transform="translate(0.01 -0.01)"
                  fill="#ffffff"
                  stroke="#00b1eb"
                  strokeWidth="5.32"
                />
                <path
                  className="planet-rings"
                  id="planet-big-ring"
                  d="M70.62,96.71c-46.46,28.79-73.93,57.54-66.86,74,10.36,24.1,91.11,12.56,180.36-25.75S337.33,56,327,31.87c-7-16.35-46.41-16.31-98.87-2.64"
                  transform="translate(0.01 -0.01)"
                  fill="none"
                  stroke="#00b1eb"
                  strokeWidth="5.32"
                />
                <path
                  className="planet-rings"
                  id="planet-small-ring"
                  d="M70.29,103.19C48.36,122.09,37.38,140.73,43,153.82c10.36,24.13,73.07,20.34,140.06-8.44S296,73.72,285.62,49.59c-5.26-12.22-24-17.28-49.92-15.54"
                  transform="translate(0.01 -0.01)"
                  fill="none"
                  stroke="#00b1eb"
                  strokeWidth="5.32"
                />
                <path
                  className="planet-ring-cover"
                  d="M71.08,79A97.54,97.54,0,0,0,70,115.5"
                  transform="translate(0.01 -0.01)"
                  fill="#fff"
                />
                <path
                  className="planet-ring-cover"
                  d="M71.08,79A97.54,97.54,0,0,0,70,115.5"
                  transform="translate(0.01 -0.01)"
                  fill="none"
                  stroke="#1765ab"
                  strokeWidth="7.03"
                />
                <path
                  className="planet-ring-cover"
                  d="M245.93,46.85a97.13,97.13,0,0,0-27-27.09"
                  transform="translate(0.01 -0.01)"
                  fill="#fff"
                />
                <path
                  className="planet-ring-cover"
                  d="M245.93,46.85a97.13,97.13,0,0,0-27-27.09"
                  transform="translate(0.01 -0.01)"
                  fill="none"
                  stroke="#1765ab"
                  strokeWidth="7.03"
                />
              </g>
              <path
                className="planet-small-rings"
                id="planet-out-ring"
                d="M45.62,22.6a8.23,8.23,0,1,0-8.23-8.23h0A8.22,8.22,0,0,0,45.6,22.6Z"
                transform="translate(0.01 -0.01)"
                fill="none"
                stroke="#1765ab"
                strokeWidth="5.32"
              />
            </g>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default DkissEor;
