import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    var tl = new gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.add("one");
    tl.fromTo(
      "#green-pill",
      {
        opacity: 0.5,
      },
      {
        opacity: 0.85,
        duration: 1,
        ease: "Linear.easeNone",
      },
      "one"
    );
    tl.to(
      "#green-pill",
      {
        transformOrigin: "center 17.15%",
        rotationZ: 60,
        x: -801,
        ease: "Linear.easeNone",
      },
      "one"
    );
    tl.fromTo(
      "#grey-pill",
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "Linear.easeNone",
      },
      "one"
    );
    tl.to(
      "#green-pill",
      {
        transformOrigin: "center 17.15%",
        rotationZ: 180,
        duration: 2,
        ease: "steps(4)",
      },
      "one+=0.4"
    );
  }, []);
  return (
    <Container>
      <div className="svg-container">
        <svg
          id="animation-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 158.46 404.34"
        >
          <g id="pills">
            <path
              id="grey-pill"
              d="M1017.93,343.14c13,7.82,19.78,19.26,20,34.43.23,19.35.35,38.69.46,58,.1,18.43.1,36.86.2,55.29.09,15.2.28,30.39.42,45.58.06,7.5-.16,15-3.27,22a38,38,0,0,1-12.38,15.65c-11,8-23.11,10.14-36.1,6-11.29-3.64-19.14-11.21-24-22-2.83-6.32-3.16-13-3.18-19.75-.05-13.2-.18-26.4-.25-39.6-.07-13.45-.08-26.9-.15-40.35,0-9.88-.12-19.76-.19-29.64-.09-12.12-.24-24.24-.26-36.36,0-6.32-.51-12.65.15-18.94,1.42-13.57,8.16-23.87,20-30.52,11-6.17,22.62-6.53,34.38-2.08A30.55,30.55,0,0,1,1017.93,343.14Z"
              transform="translate(-880.52 -200.83)"
              fill="#D8D8D8"
            />
            <path
              id="green-pill"
              d="M940.25,503.33c12.87,7.94,19.59,19.44,19.63,34.62q.06,29-.1,58c-.07,18.44-.25,36.87-.32,55.3-.06,15.19,0,30.39,0,45.58,0,7.5-.29,15-3.47,22a38,38,0,0,1-12.53,15.53c-11.07,7.87-23.21,9.92-36.15,5.61-11.26-3.75-19-11.39-23.77-22.23-2.77-6.35-3-13-3-19.78.08-13.2.07-26.4.13-39.6.06-13.45.17-26.91.24-40.36q.08-14.82.09-29.64c0-12.12,0-24.24.09-36.36,0-6.31-.39-12.65.33-18.93,1.54-13.56,8.39-23.79,20.34-30.33,11.1-6.07,22.68-6.32,34.4-1.76A31.33,31.33,0,0,1,940.25,503.33Z"
              transform="translate(-880.52 -200.83)"
              fill="#00C267"
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};
export default Component;
