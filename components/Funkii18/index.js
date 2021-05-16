import { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.set(".letter", {
      visibility: "hidden",
    });

    const moveWhite = () => {
      var tl = new gsap.timeline();
      tl.to("#white-logo", {
        duration: 7,
        // ease: "slow(0.7, 0.7, false)",
        motionPath: {
          path: "#white-line",
          align: "#white-line",
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
        },
      });
      tl.to(
        "#du",
        {
          autoAlpha: 0,
        },
        "6.5"
      );
      return tl;
    };

    const moveRed = () => {
      var tl = new gsap.timeline();
      tl.to("#red-logo", {
        duration: 6.7,
        // ease: "slow(0.7, 0.7, false)",
        motionPath: {
          path: "#red-line",
          align: "#red-line",
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
      });
      return tl;
    };

    var majorTimeline = new gsap.timeline({repeat: -1, repeatDelay: 1});
    majorTimeline.add("start");
    majorTimeline.add(moveWhite, "start");
    majorTimeline.add(moveRed, "start");
    majorTimeline.fromTo(
      "#letter-1",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start"
    );
    majorTimeline.fromTo(
      "#letter-2",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start+=0.3"
    );
    majorTimeline.fromTo(
      "#letter-3",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start+=0.6"
    );
    majorTimeline.fromTo(
      "#letter-4",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start+=1.8"
    );
    majorTimeline.fromTo(
      "#letter-5",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start+=2.5"
    );
    majorTimeline.fromTo(
      "#letter-6",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start+=4.3"
    );
    majorTimeline.fromTo(
      "#letter-7",
      {
        autoAlpha: 0,
        visibility: "visible",
      },
      {
        autoAlpha: 1,
      },
      "start+=6.5"
    );
  }, []);
  return (
    <Container>
      <div className="svg-container">
        <svg
          id="funkii-svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 976.38 355.81"
        >
          <g>
            <text
              className="letter"
              id="letter-1"
              transform="translate(0 110.1)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
            >
              {"kic"}
              <tspan x={22.19} y={0} letterSpacing="-0.02em">
                {"k"}
              </tspan>
              <tspan x={31.52} y={0}>
                {"o"}
              </tspan>
              <tspan x={42.31} y={0} letterSpacing="0.04em">
                {"f"}
              </tspan>
              <tspan x={48.62} y={0}>
                {"f"}
              </tspan>
            </text>
            <text
              className="letter"
              id="letter-2"
              transform="translate(137.34 56.15)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
            >
              {"definie"}
              <tspan x={55.37} y={0} letterSpacing="-0.02em">
                {"r"}
              </tspan>
              <tspan x={61.81} y={0} letterSpacing="0em">
                {"en"}
              </tspan>
            </text>
            <text
              className="letter"
              id="letter-3"
              transform="translate(292.78 231.91)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
              letterSpacing="-0.02em"
            >
              {"k"}
              <tspan x={9.33} y={0} letterSpacing="0em">
                {"onzipie"}
              </tspan>
              <tspan x={69.25} y={0}>
                {"r"}
              </tspan>
              <tspan x={75.69} y={0} letterSpacing="0em">
                {"en"}
              </tspan>
            </text>
            <text
              className="letter"
              id="letter-4"
              transform="translate(459.81 56.15)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
            >
              {"optimie"}
              <tspan x={60.72} y={0} letterSpacing="-0.02em">
                {"r"}
              </tspan>
              <tspan x={67.16} y={0}>
                {"en"}
              </tspan>
            </text>
            <text
              className="letter"
              id="letter-5"
              transform="translate(628.08 231.91)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
            >
              <tspan letterSpacing="-0.02em">{"r"}</tspan>
              <tspan x={6.44} y={0} letterSpacing="0.01em">
                {"e"}
              </tspan>
              <tspan x={16.55} y={0}>
                {"alisie"}
              </tspan>
              <tspan x={58.54} y={0} letterSpacing="-0.02em">
                {"r"}
              </tspan>
              <tspan x={64.98} y={0}>
                {"en"}
              </tspan>
            </text>
            <text
              className="letter"
              id="letter-6"
              transform="translate(790.35 56.15)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
            >
              <tspan letterSpacing="-0.01em">{"v"}</tspan>
              <tspan x={9.39} y={0} letterSpacing="0em">
                {"alidie"}
              </tspan>
              <tspan x={54.53} y={0} letterSpacing="-0.02em">
                {"r"}
              </tspan>
              <tspan x={60.97} y={0}>
                {"en"}
              </tspan>
            </text>
            <text
              className="letter"
              id="letter-7"
              transform="translate(948.22 110.1)"
              fontSize={19}
              fill="#fff"
              fontFamily="FuturaPT-Demi, Futura PT"
              fontWeight={300}
            >
              {"ziel"}
            </text>
            <path
              id="white-line"
              d="M1161.12,307.62l39.42-.06h105.58l216.07.15,109.79-.18,217.48,0H1959l33.56.1"
              transform="translate(-1073.46 -204.61)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={6}
            />
            <path
              id="red-line"
              d="M1992.53,308.06l-32.62-.11-.64-99.84H1849.21V534L1632,533.62V307.93l-.8-99.82h-109.1V533.23h-63l-131.66.39h-21.93l.55-317.08v-8.43H1195.76v99.37h-10.07l-11.18.45-13.39.08"
              transform="translate(-1073.46 -204.61)"
              fill="none"
              stroke="#e94b55"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={7}
            />
            <g id="white-logo">
              <rect
                x={87.67}
                y={81.49}
                width={42.82}
                height={44.39}
                rx={2}
                fill="#fefefe"
              />
              <text
                id="du"
                transform="translate(98.57 109.04)"
                fontSize={19}
                fontFamily="FuturaPT-Demi, Futura PT"
                fontWeight={300}
              >
                {"du"}
              </text>
            </g>
            <g id="red-logo">
              <polygon
                points="390.62 295.94 398.38 293.63 409.57 299.05 425.14 294.5 432.23 296.71 406.93 303.95 390.62 295.94"
                fill="#f2a0aa"
              />
              <polygon
                points="399.14 313.53 402.7 315.27 402.78 321.38 391.41 315.88 399.14 313.53"
                fill="#f2a0aa"
              />
              <polygon
                points="407.16 303.87 390.84 296.02 390.93 303.29 402.14 308.79 402.41 315.7 402.35 321.1 391.4 315.83 391.48 323.11 402.41 328.42 402.61 352.88 407.51 355.27 407.16 303.87"
                fill="#ed717e"
              />
              <polygon
                points="407.16 303.87 431.76 296.84 431.76 309.48 418.45 313.74 418.27 352.21 407.2 355.24 407.16 303.87"
                fill="#e84a55"
              />
              <polygon
                points="390.9 295.96 398.6 293.6 409.8 299.01 425.44 294.46 432.14 296.52 432.11 309.48 418.78 314.12 418.63 352.25 407.09 355.27 402.55 352.81 402.49 328.38 391.45 323.01 391.44 315.75 399.18 313.39 401.92 314.81 401.88 308.6 390.95 303.22 390.9 295.96"
                fill="none"
                stroke="#f6f6f6"
                strokeMiterlimit={10}
              />
            </g>
          </g>
        </svg>
      </div>
    </Container>
  );
};
export default Component;
