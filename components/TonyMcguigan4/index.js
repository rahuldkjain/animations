import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    const fadeIn = (target, opacity, duration) => {
      var tl = new gsap.timeline();
      tl.fromTo(
        target,
        {
          opacity: 0,
        },
        {
          opacity: opacity,
          ease: "sine.in",
          duration: duration,
        }
      );
      return tl;
    };
    const fadeOut = (target, duration) => {
      var tl = new gsap.timeline();
      tl.to(target, {
        opacity: 0,
        ease: "sine.out",
        duration: duration,
      });
      return tl;
    };
    const move = (target, value, duration) => {
      var tl = new gsap.timeline();
      tl.to(target, {
        x: value,
        ease: "Linear.easeNone",
        duration: duration,
      });
      return tl;
    };
    var tl = new gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.add("one");
    tl.add(fadeIn("#green-pill-1", 0.85, 1), "one");
    tl.add(fadeIn("#grey-pill", 0.9, 1), "one");
    tl.add(move("#pill-group", -100, 1), "one+=0.4");
    tl.add(move("#green-pill-1", 277, 1), "one+=0.4");
    tl.add("two");
    tl.add(fadeIn("#green-pill-2", 0.85, 1), "two");
    tl.add(move("#green-pill-2", 277, 1), "two+=0.4");
    tl.add(move("#green-pill-1", 356, 0.5), "-=0.5");
    tl.add(fadeIn("#merge-1", 1, 0.8), "-=0.5");
    tl.add("three");
    // tl.add(fadeIn("#merge-1", 1, 0.8), "three");
    tl.add(fadeOut("#green-pill-1", 0.2), "three");
    tl.add(fadeIn("#green-pill-3", 0.85, 1), "three");
    tl.add(move("#green-pill-3", 277, 1), "three+=0.4");
    tl.add(move("#green-pill-2", 356, 0.5), "-=0.5");
    tl.add(move("#merge-1", 80, 0.5), "-=0.5");
    tl.add(fadeIn("#merge-2", 0.85, 0.5), "-=0.5");
    tl.add("four");
    // tl.add(fadeIn("#merge-2", 0.85, 0.5), "four");
    tl.add(fadeOut("#merge-1", 0.2), "four");
    tl.add(fadeOut("#green-pill-1", 0.2), "four");
    tl.add(fadeOut("#green-pill-2", 0.2), "four");
    tl.add(fadeOut("#green-pill-3", 0.8), "four");
  }, []);
  return (
    <Container>
      <div className="svg-container">
        <svg
          id="elcy-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 614.84 78.94"
        >
          <g id="pill-group">
            <path
              id="grey-pill"
              d="M334.78,78.5H251.3a38.64,38.64,0,0,1-37.39-29.15c-4-15.72.54-29.2,12.54-39.92A35.73,35.73,0,0,1,250.83.21H419.52c8.67,0,16.27,3.46,23,8.92,8.37,6.8,12.88,15.75,14.1,26.22a37.84,37.84,0,0,1-6.59,26,38.77,38.77,0,0,1-24.15,16.32,29.09,29.09,0,0,1-6.64.83Q377,78.47,334.78,78.5Z"
              transform="translate(0.01 0)"
              fill="#e2e2e2"
            />
            <g id="merge-1">
              <path
                d="M423.29.21c2,0,4-.12,6-.11,23.23,0,46.49-.22,69.69.15C516.64.53,532.78,15.5,535.27,33c3,21.44-9.7,40.11-30.62,45a33.56,33.56,0,0,1-7.67.82H424.56c-.41,0-.82-.07-1.24-.11.34-.46.86-.41,1.35-.5A37.25,37.25,0,0,0,444,68.71c10.53-9.88,14.76-22.1,12.27-36.28S445.56,8.72,432.56,3C429.54,1.66,426.29,1.39,423.29.21Z"
                transform="translate(0.01 0)"
                fill="#00dd53"
                opacity="0.85"
                style={{"isolation": "isolate"}}
              />
              <path
                d="M411.71.32c-1.11.29-2.23.55-3.34.86-15.45,4.28-25.55,14.12-29,29.74C376,46.3,380.7,59.45,392.71,69.81c5.48,4.74,12,7.19,19,8.71a93.07,93.07,0,0,0,11.81.12c.34-.46.86-.41,1.35-.5a37.25,37.25,0,0,0,19.35-9.5c10.56-9.85,14.79-22.07,12.3-36.25C454,18.39,445.79,8.72,432.79,3c-3-1.31-6.21-1.58-9.2-2.76a91.87,91.87,0,0,0-11.85.11Z"
                transform="translate(0.01 0)"
                fill="#00dd53"
                opacity="0.85"
                style={{"isolation": "isolate"}}
              />
            </g>
            <g id="merge-2">
              <path
                d="M420,.08c1.67,0,3.33-.08,5-.08H574.89a39.62,39.62,0,0,1,39.44,33.46c3.56,21.54-12.52,42.73-34.18,45.08a71,71,0,0,1-7.72.4H419c-1.16,0-2.32-.1-3.48-.15,1.51-.7,3.12-.37,4.65-.3a29.24,29.24,0,0,0,15.26-3.85c15.54-8.25,24.36-24.1,20.93-42.35-2.75-14.63-11.54-24.61-25.55-30C427.26,1,423.58.79,420,.08Z"
                transform="translate(-0.3 0)"
                fill="#00dd53"
                opacity="0.85"
                style={{"isolation": "isolate"}}
              />
              <path
                d="M413.15.16a3.38,3.38,0,0,1-.69.26c-17.73,2.44-31.09,15.7-33.91,33.66-2.54,16.2,6.41,33,21.56,40.67a47.33,47.33,0,0,0,13.52,4h1.89c1.51-.7,3.12-.37,4.65-.3a29.24,29.24,0,0,0,15.26-3.85c15.54-8.25,24.36-24.1,20.93-42.35-2.75-14.63-11.54-24.61-25.55-30C427.28.91,423.6.66,420,0Z"
                transform="translate(0.01 0)"
                fill="#00dd53"
                opacity="0.85"
                style={{"isolation": "isolate"}}
              />
            </g>
          </g>
          <path
            id="green-pill-1"
            d="M40,.12a39.16,39.16,0,0,1,39.3,39v.3c0,21.85-17.62,39.17-39.76,39.11A39.22,39.22,0,1,1,38.87.09Z"
            transform="translate(0.01 0)"
            fill="#00DD53"
          />
          <path
            id="green-pill-2"
            d="M40,.12a39.16,39.16,0,0,1,39.3,39v.3c0,21.85-17.62,39.17-39.76,39.11A39.22,39.22,0,1,1,38.87.09Z"
            transform="translate(0.01 0)"
            fill="#00DD53"
          />
          <path
            id="green-pill-3"
            d="M40,.12a39.16,39.16,0,0,1,39.3,39v.3c0,21.85-17.62,39.17-39.76,39.11A39.22,39.22,0,1,1,38.87.09Z"
            transform="translate(0.01 0)"
            fill="#00DD53"
          />
        </svg>
      </div>
    </Container>
  );
};
export default Component;
