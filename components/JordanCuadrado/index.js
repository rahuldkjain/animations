import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Container } from "./style";
const JordanCuadrado = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const animateLogo = () => {
      gsap.set("#inner-logo-shadow, #outer-logo-shadow", {
        transformOrigin: "center",
      });
      var tl = new gsap.timeline();
      tl.add("one");
      tl.fromTo(
        "#inner-logo-shadow",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 0.5,
          duration: 1.2,
          ease: "Sine.inOut",
          repeat: -1,
          repeatDelay: 0.2,
          yoyo: true,
        },
        "one"
      );
      tl.fromTo(
        "#outer-logo-shadow",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 0.15,
          duration: 1.2,
          ease: "Sine.inOut",
          repeat: -1,
          repeatDelay: 0.2,
          yoyo: true,
        },
        "one+=0.2"
      );
      return tl;
    };

    const moveLeftToMiddle = (index, duration, reverse) => {
      let target = `#left-tag-${index}`;
      let path = `#left-mp-${index}`;
      var tl = new gsap.timeline();
      tl.add("start");
      tl.set(
        target,
        {
          visibility: "visible",
        },
        "start-=0.1"
      );
      tl.to(`#left-path-${index}`, { opacity: 0.4 }, "start");
      tl.to(
        target,
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: path,
            align: path,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: reverse ? 1 : 0,
            end: reverse ? 0 : 1,
          },
        },
        "start"
      );
      tl.fromTo(
        target,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1 },
        "start"
      );
      tl.fromTo(
        target,
        { opacity: 1 },
        { opacity: 0, duration: 1 },
        duration - 1
      );
      tl.to(`#left-path-${index}`, { opacity: 0.1 }, duration - 0.8);
      return tl;
    };

    const moveMiddleToLeft = (leftIndex, duration, reverse) => {
      let target = [];
      let larget = [];
      let paths = ["#right-mp-1", "#right-mp-2", "#right-mp-3", "#right-mp-4"];
      switch (leftIndex) {
        case 1:
          target = ["#mobile-icon-1", "#phone-icon-1", "#mail-icon-1"];
          larget = ["#mobile-icon-2", "#phone-icon-2", "#mail-icon-2"];
          break;
        case 2:
          target = ["#phone-icon-1", "#mail-icon-1", "#mobile-icon-1"];
          larget = ["#phone-icon-2", "#mail-icon-2", "#mobile-icon-2"];
          break;
        case 3:
          target = ["#mail-icon-1", "#mobile-icon-1", "#phone-icon-1"];
          larget = ["#mail-icon-2", "#mobile-icon-2", "#phone-icon-2"];
          break;
        case 4:
          target = ["#mobile-icon-1", "#mail-icon-1", "#phone-icon-1"];
          larget = ["#mobile-icon-2", "#mail-icon-2", "#phone-icon-2"];
          break;
        case 5:
          target = ["#mail-icon-1", "#phone-icon-1", "#mobile-icon-1"];
          larget = ["#mail-icon-2", "#phone-icon-2", "#mobile-icon-2"];
          break;
        case 6:
          target = ["#phone-icon-1", "#mobile-icon-1", "#mail-icon-1"];
          larget = ["#phone-icon-2", "#mobile-icon-2", "#mail-icon-2"];
          break;
        default:
          break;
      }
      var tl = new gsap.timeline();
      tl.add("start");
      tl.set(
        target,
        {
          visibility: "visible",
        },
        "start"
      );
      tl.set(
        larget.toString(),
        {
          visibility: "visible",
          opacity: 0,
        },
        "start"
      );
      tl.to(".right-paths", { opacity: 0.4 }, "start");
      tl.to(
        target[0],
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: paths[0],
            align: paths[0],
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: reverse ? 1 : 0,
            end: reverse ? 0 : 1,
          },
        },
        "start"
      );
      tl.to(
        target[1],
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: paths[1],
            align: paths[1],
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: reverse ? 1 : 0,
            end: reverse ? 0 : 1,
          },
        },
        "start"
      );
      tl.to(
        target[2],
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: paths[2],
            align: paths[2],
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
        },
        "start"
      );
      tl.to(
        larget[2],
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: paths[3],
            align: paths[3],
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
        },
        "start"
      );
      tl.to(
        larget[1],
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: paths[3],
            align: paths[3],
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
        },
        "start+=0.2"
      );
      tl.to(
        larget[0],
        {
          duration: duration,
          ease: "power1.inOut",
          motionPath: {
            path: paths[3],
            align: paths[3],
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
        },
        "start+=0.4"
      );
      tl.fromTo(
        target.toString(),
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1.5 },
        "start"
      );
      tl.fromTo(
        target.toString(),
        { opacity: 1 },
        { opacity: 0, duration: 1 },
        duration - 0.6
      );
      tl.fromTo(
        larget.toString(),
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1.5 },
        "start+=0.5"
      );
      tl.fromTo(
        larget.toString(),
        { opacity: 1 },
        { opacity: 0, duration: 1 },
        duration - 0.6
      );
      tl.to(".right-paths", { opacity: 0.1 }, duration - 0.6);
      return tl;
    };

    const animation = () => {
      var major = gsap.timeline();
      major.add("one");
      major.set(
        ".left-tags",
        {
          visibility: "hidden",
        },
        "one"
      );
      major.set(
        ".right-icons",
        {
          visibility: "hidden",
          opacity: 0,
        },
        "one"
      );
      major.set(
        ".right-paths, .left-paths",
        {
          opacity: 0.1,
        },
        "one"
      );
      major.add(animateLogo(), "one");
      major.add(moveLeftToMiddle(1, 3, true), "one");
      major.add(moveMiddleToLeft(1, 3, true));
      major.add("two");
      major.add(moveLeftToMiddle(2, 2.8, true), "two");
      major.add(moveMiddleToLeft(2, 3, true));
      major.add("three");
      major.add(moveLeftToMiddle(3, 2.5, true), "three");
      major.add(moveMiddleToLeft(3, 3, true));
      major.add("four");
      major.add(moveLeftToMiddle(4, 2.5, false), "four");
      major.add(moveMiddleToLeft(4, 3, true));
      major.add("five");
      major.add(moveLeftToMiddle(5, 2.8, false), "five");
      major.add(moveMiddleToLeft(5, 3, true));
      major.add("six");
      major.add(moveLeftToMiddle(6, 3, false), "six");
      major.add(moveMiddleToLeft(6, 3, true));
      return major;
    };

    var firstAnimation = gsap.timeline();
    firstAnimation.add(animation());
    firstAnimation.seek(0);
    setInterval(() => {
      firstAnimation.seek(0);
    }, 36500);
  }, []);
  return (
    <Container>
      <div className="svg-container">
        <svg
          id="segment-svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1381.71 638.33"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="612.18"
              y1="-429.47"
              x2="780.18"
              y2="-429.47"
              gradientTransform="matrix(0.99, 0, 0, -0.89, 6.03, -40.87)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#b3b235" />
              <stop offset="1" stopColor="#b3b235" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="radial-gradient"
              cx="532.9"
              cy="-524.3"
              r="183.63"
              gradientTransform="matrix(1.07, 0.86, 0.29, -0.29, 16.78, -353.53)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="radial-gradient-2"
              cx="560.47"
              cy="-626.05"
              r="183.63"
              gradientTransform="matrix(1.07, 0.5, 0.29, -0.17, 16.63, -99.14)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-3"
              cx="441.65"
              cy="-187.55"
              r="183.63"
              gradientTransform="matrix(1.07, -0.64, 0.29, 0.21, 20.19, 716.56)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-4"
              cx="458.19"
              cy="-248.62"
              r="183.63"
              gradientTransform="matrix(1.07, -0.94, 0.29, 0.31, 21.85, 927.9)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-5"
              cx="373.87"
              cy="62.57"
              r="183.63"
              gradientTransform="matrix(1.07, -0.28, 0.29, 0.09, 17.47, 457.61)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-6"
              cx="654.52"
              cy="-973.14"
              r="183.63"
              gradientTransform="matrix(1.07, 0.21, 0.29, -0.07, 19.74, 117.68)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-7"
              cx="723.91"
              cy="-10.29"
              r="183.63"
              gradientTransform="matrix(-1.09, 0.71, -0.29, -0.24, 1744.23, -238.92)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-8"
              cx="812.1"
              cy="-335.73"
              r="183.63"
              gradientTransform="matrix(-1.09, 0.25, -0.29, -0.08, 1745.21, 89.1)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-9"
              cx="631.84"
              cy="329.49"
              r="183.63"
              gradientTransform="matrix(-1.09, -0.75, -0.29, 0.25, 1743.12, 797.68)"
              xlinkHref="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-10"
              cx="556.86"
              cy="606.19"
              r="183.63"
              gradientTransform="matrix(-1.09, -0.28, -0.29, 0.09, 1742.16, 461.79)"
              xlinkHref="#radial-gradient"
            />
          </defs>
          <g id="left-card-1">
            <path
              id="left-bg-1"
              d="M175.44,61.56h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11v-41C163.13,66.5,168.64,61.56,175.44,61.56Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="left-icon-1">
              <g id="g891">
                <g id="g889">
                  <path
                    id="path875"
                    d="M214.45,114.12H185.69v-4.83a3.43,3.43,0,0,1,3.59-3.22h21.57a3.44,3.44,0,0,1,3.6,3.22Z"
                    transform="translate(0.86 -0.94)"
                    fill="#d9d6ef"
                  />
                  <g id="g879">
                    <path
                      id="path877"
                      d="M200.07,86.77c-6,0-10.79,4.32-10.79,9.65v8h21.57v-8C210.85,91.09,206,86.77,200.07,86.77Zm9,16.09h-18V96.42c0-4.44,4-8,9-8s9,3.6,9,8Z"
                      transform="translate(0.86 -0.94)"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g883">
                    <polygon
                      id="polygon881"
                      points="189.11 76.02 189.36 83.53 181.04 84.38 185.78 90.58 179.28 95.32 186.24 97.95 185.54 99.44 175.84 95.77 183.36 90.27 177.87 83.08 187.51 82.1 187.22 73.39 195.92 77.25 200.92 69.78 205.92 77.25 214.63 73.39 214.33 82.1 223.98 83.08 218.49 90.27 226.01 95.77 216.3 99.44 215.6 97.95 222.56 95.32 216.07 90.58 220.81 84.38 212.49 83.53 212.74 76.02 205.23 79.35 200.92 72.91 196.61 79.35 189.11 76.02"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g887">
                    <path
                      id="path885"
                      d="M194.68,96.42a5.14,5.14,0,0,1,5.39-4.83V90c-4,0-7.19,2.89-7.19,6.44v3.22h1.8Z"
                      transform="translate(0.86 -0.94)"
                      fill="#d9d6ef"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="left-text-1" style={{isolation: "isolate"}}>
              <text
                transform="translate(160.64 55.83) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Emergency Alerts
              </text>
            </g>
          </g>
          <g id="left-card-2">
            <path
              id="left-bg-2"
              d="M175.54,168.69h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11v-41C163.23,173.63,168.74,168.69,175.54,168.69Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="left-icon-2">
              <g id="g970">
                <path
                  id="path960"
                  d="M178.4,206.66h-8.91a.9.9,0,1,0,0,1.78h8.91a.9.9,0,0,0,1-.89A1,1,0,0,0,178.4,206.66Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <path
                  id="path962"
                  d="M183.15,202.14h-8.91a.89.89,0,1,0,0,1.77h8.91a.89.89,0,1,0,0-1.77Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <path
                  id="path964"
                  d="M169.49,199.38h8.91a.89.89,0,1,0,0-1.77h-8.91a.88.88,0,0,0-1,.88A.94.94,0,0,0,169.49,199.38Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <path
                  id="path966"
                  d="M231.75,201c-1.09-10-10.59-18.11-22.37-18.11-13.17,0-23.66,10.12-22.37,22.2,1.09,10,10.49,18.11,22.37,18.11C222.64,223.18,233,213,231.75,201Zm-3.07,2.93h1.19a17.4,17.4,0,0,1-5.25,11.45l-.79-.71a1,1,0,0,0-1.38,0,.8.8,0,0,0,0,1.25l.79.71a21.73,21.73,0,0,1-12.77,4.7v-1.06a.9.9,0,0,0-1-.89h0a.89.89,0,0,0-1,.89v1.06a20.75,20.75,0,0,1-12.77-4.79l.79-.71a.79.79,0,0,0,0-1.24,1,1,0,0,0-1.38,0l-.9.79A17.78,17.78,0,0,1,189,204.89c0-.36-.1-.71-.1-1h1.19a.89.89,0,0,0,1-.89h0a.89.89,0,0,0-1-.88h-1.19a17.42,17.42,0,0,1,5.25-11.46l.79.71a1,1,0,0,0,1.38,0,.79.79,0,0,0,0-1.24l-.79-.71a21.78,21.78,0,0,1,12.77-4.71v1.07a.9.9,0,0,0,1,.89h0a.9.9,0,0,0,1-.89v-1.07A21.17,21.17,0,0,1,223,189.44l-.79.71a.79.79,0,0,0,0,1.24,1,1,0,0,0,1.38,0l.8-.71a17.78,17.78,0,0,1,5.24,10.48c0,.35.1.71.1,1h-1.19a.89.89,0,0,0-1,.88h0A1,1,0,0,0,228.68,203.91Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <path
                  id="path968"
                  d="M218.29,200.45a1,1,0,0,0-1.39,0,.8.8,0,0,0,0,1.24l.5.45h-4.66a3.11,3.11,0,0,0-2.37-2v-7.54l.49.44a1,1,0,0,0,1.39,0,.79.79,0,0,0,0-1.24l-2.18-2a1,1,0,0,0-1.38,0l-2.18,2a.79.79,0,0,0,0,1.24,1,1,0,0,0,1.38,0l.5-.44v7.54a3.22,3.22,0,0,0-2.48,2.93,3.35,3.35,0,0,0,3.47,3.11,3.61,3.61,0,0,0,3.36-2.22h4.66l-.5.44a.81.81,0,0,0,0,1.25,1.05,1.05,0,0,0,1.39,0l2.18-2a.8.8,0,0,0,0-1.24Zm-8.91,3.9a1.34,1.34,0,1,1,1.48-1.33A1.46,1.46,0,0,1,209.38,204.35Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
              </g>
            </g>
            <g id="left-text-2" style={{isolation: "isolate"}}>
              <text
                transform="translate(166.16 164.5) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                2 Hours Alerts
              </text>
            </g>
          </g>
          <g id="left-card-3">
            <path
              id="left-bg-3"
              d="M176.68,267.34h48c6.79,0,12.3,4.94,12.3,11v41c0,6.1-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11v-41C164.37,272.28,169.88,267.34,176.68,267.34Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="left-text-3" style={{isolation: "isolate"}}>
              <text
                transform="translate(148.95 262.45) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                KARL Utility Responses
              </text>
            </g>
            <g id="left-icon-3" style={{isolation: "isolate"}}>
              <text
                transform="translate(174.82 304.15) scale(1.02 1)"
                fontSize="20.34"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                KARL
              </text>
            </g>
          </g>
          <g id="left-card-4">
            <path
              id="left-bg-4"
              d="M177,368.88h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11H177c-6.8,0-12.31-4.94-12.31-11v-41C164.68,373.82,170.19,368.88,177,368.88Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="left-text-4" style={{isolation: "isolate"}}>
              <text
                transform="translate(161.44 350.5) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Calendar Appt.{" "}
              </text>
              <text
                transform="translate(161.44 362.21) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                (Complex Tickets)
              </text>
            </g>
            <g id="left-icon-4">
              <g id="g3912">
                <g id="g3816">
                  <path
                    id="path3814"
                    d="M186.91,414.39h-6.34v-5.34h6.3v5.34Zm-4.6-1.47h2.82v-2.41h-2.82Z"
                    transform="translate(0.86 -0.94)"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3820">
                  <rect
                    id="rect3818"
                    x="190.59"
                    y="381.45"
                    width="25.64"
                    height="1.46"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3824">
                  <polygon
                    id="polygon3822"
                    points="175.65 382.91 175.65 391.35 227.79 391.35 227.79 382.91 224.27 382.91 224.27 381.45 229.53 381.45 229.53 392.81 173.91 392.81 173.91 381.45 182.16 381.45 182.16 382.91 175.65 382.91"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3850">
                  <g id="g3828">
                    <rect
                      id="rect3826"
                      x="218.23"
                      y="397.92"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3832">
                    <rect
                      id="rect3830"
                      x="211.23"
                      y="397.92"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3836">
                    <rect
                      id="rect3834"
                      x="204.28"
                      y="397.92"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3840">
                    <rect
                      id="rect3838"
                      x="197.29"
                      y="397.92"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3844">
                    <rect
                      id="rect3842"
                      x="190.29"
                      y="397.92"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3848">
                    <rect
                      id="rect3846"
                      x="183.34"
                      y="397.92"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                </g>
                <g id="g3854">
                  <rect
                    id="rect3852"
                    x="218.23"
                    y="403.95"
                    width="2.65"
                    height="1.46"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3858">
                  <rect
                    id="rect3856"
                    x="211.23"
                    y="403.95"
                    width="2.65"
                    height="1.46"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3862">
                  <rect
                    id="rect3860"
                    x="197.29"
                    y="403.95"
                    width="2.65"
                    height="1.46"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3866">
                  <rect
                    id="rect3864"
                    x="190.29"
                    y="403.95"
                    width="2.65"
                    height="1.46"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3870">
                  <rect
                    id="rect3868"
                    x="183.34"
                    y="403.95"
                    width="2.65"
                    height="1.46"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3892">
                  <g id="g3874">
                    <rect
                      id="rect3872"
                      x="218.23"
                      y="410.04"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3878">
                    <rect
                      id="rect3876"
                      x="211.23"
                      y="410.04"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3882">
                    <rect
                      id="rect3880"
                      x="204.28"
                      y="410.04"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3886">
                    <rect
                      id="rect3884"
                      x="197.29"
                      y="410.04"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3890">
                    <rect
                      id="rect3888"
                      x="190.29"
                      y="410.04"
                      width="2.65"
                      height="1.46"
                      fill="#d9d6ef"
                    />
                  </g>
                </g>
                <g id="g3896">
                  <polygon
                    id="polygon3894"
                    points="174.99 418.99 174.99 394.93 176.73 394.93 176.73 417.53 226.7 417.53 226.7 394.93 228.44 394.93 228.44 418.99 174.99 418.99"
                    fill="#d9d6ef"
                  />
                </g>
                <g id="g3906">
                  <g id="g3900">
                    <path
                      id="path3898"
                      d="M220.94,388.6h-6.26V378.52h6.26Zm-4.52-1.46h2.78V380h-2.78Z"
                      transform="translate(0.86 -0.94)"
                      fill="#d9d6ef"
                    />
                  </g>
                  <g id="g3904">
                    <path
                      id="path3902"
                      d="M187,388.6h-6.25V378.52H187Zm-4.52-1.46h2.79V380h-2.79Z"
                      transform="translate(0.86 -0.94)"
                      fill="#d9d6ef"
                    />
                  </g>
                </g>
                <g id="g3910">
                  <path
                    id="path3908"
                    d="M207.86,408.29h-6.3v-5.37h6.3Zm-4.56-1.46h2.82v-2.41H203.3Z"
                    transform="translate(0.86 -0.94)"
                    fill="#d9d6ef"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="left-card-5">
            <path
              id="left-bg-5"
              d="M178.63,467.92h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11V479C166.32,472.86,171.83,467.92,178.63,467.92Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="left-text-5" style={{isolation: "isolate"}}>
              <text
                transform="translate(163.33 452.48) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Calendar Appt.{" "}
              </text>
              <text
                transform="translate(163.33 464.19) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                (Design Meeting)
              </text>
            </g>
            <g id="left-icon-5">
              <g id="g4014">
                <path
                  id="path4010"
                  d="M219.47,477.18h-9.59v3.89H194.36v-3.89h-9.59v3.89h-7.56V520.4H227V481.07h-7.56Zm-5.92,3.33h2.25V485h-2.24Zm-25.11,0h2.25V485h-2.25Zm34.91,13.95v22.61H180.89V494.46Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <path
                  id="path4012"
                  d="M217.4,504.07h-8.85V497.4h-21.7v16.66H217.4Zm-21.71,6.66h-5.17V507.4h5.17Zm9.19-6.66h-5.52v-3.34h5.52Zm8.84,6.66h-5.17V507.4h5.17Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
              </g>
            </g>
          </g>
          <g id="left-card-6">
            <path
              id="left-bg-5-2"
              data-name="left-bg-5"
              d="M178.6,554h48.05c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11H178.6c-6.79,0-12.3-5-12.3-11v-41C166.3,559,171.81,554,178.6,554Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="left-icon-5-2" data-name="left-icon-5">
              <g id="g4037">
                <path
                  id="path4035"
                  d="M196.82,604.24a.37.37,0,0,1-.11.33l-3.5,3.2a.41.41,0,0,1-.58,0l-3.49-3.2c-.39-.35.2-.86.58-.51l3.2,2.93L196,604.2l-3.05-12.63-2,8.28c-.11.47-.92.34-.8-.16l2-8.25-2-2.23c-.34-.37.29-.85.64-.46l2.2,2.41,2.25-2.47c.34-.37,1,.09.64.47l-2.08,2.28Zm-12.19-7.88v12.15c0,.47.82.5.82,0V596.36C185.45,595.87,184.63,595.87,184.63,596.36Zm15.76,0v12.15c0,.49.82.49.82,0V596.36C201.21,595.87,200.39,595.87,200.39,596.36Zm-15.63-16.24c-.59-4.67,3.58-8.11,8.06-8.11s8.12,3.26,8.12,7.28-3.64,7.28-8.12,7.28a8.55,8.55,0,0,1-6.56-3c-.32-.38-1,.06-.66.44a9.41,9.41,0,0,0,7.22,3.29c4.93,0,8.94-3.6,8.94-8s-4-8-8.94-8-9.43,3.7-8.88,8.94C184,580.7,184.82,580.61,184.76,580.12Zm18.3-7.23c.52.23,1,.41,1.47.58a10.45,10.45,0,0,0,0,1.77c0,.47.87.42.82-.06a8.8,8.8,0,0,1,0-1.92.36.36,0,0,0-.26-.38c-.47-.16-.93-.33-1.43-.54a10.84,10.84,0,0,1,.8-2.57c.2-.46-.57-.73-.77-.27a11.54,11.54,0,0,0-.89,3A.37.37,0,0,0,203.06,572.89Zm-6.65,14.66h-7c-6.71,0-11.43,5.08-11.43,9.45v11.51c0,.48.82.48.82,0V597c0-4.61,5-8.72,10.61-8.72h7c5.65,0,10.61,4.08,10.61,8.72v11.51c0,.49.82.49.82,0V597C207.84,592,202.45,587.55,196.41,587.55Zm-12.11-5.83c.06.16.12.32.19.48.19.43,1,.2.76-.27-.06-.14-.12-.29-.17-.43C184.92,581,184.14,581.25,184.3,581.72ZM210,578.91a7.41,7.41,0,0,1-1.41-2.36c-.16-.44-.94-.22-.78.23a7.86,7.86,0,0,0,1.55,2.58C209.7,579.71,210.4,579.32,210,578.91Zm4.81,7a16.38,16.38,0,0,1-2.87-.66c0-.43.11-.89.2-1.37a.37.37,0,0,0-.24-.4,10.82,10.82,0,0,1-1.85-1c-.46-.29-.93.31-.48.6a12.17,12.17,0,0,0,1.71.91c-.08.51-.15,1-.18,1.44a.37.37,0,0,0,.26.37,14.81,14.81,0,0,0,3.35.8A.37.37,0,1,0,214.84,585.88Zm15.39-10.34c-.51-.22-1-.41-1.48-.58a10.6,10.6,0,0,0,0-1.49c.47-.17,1-.36,1.47-.58a.37.37,0,0,0,.23-.38,11.07,11.07,0,0,0-.89-3,.41.41,0,0,0-.41-.23c-.5,0-1,.09-1.61.16a9.58,9.58,0,0,0-.84-1.3c.33-.37.65-.76,1-1.16a.35.35,0,0,0,0-.43,12.85,12.85,0,0,0-2.45-2.2.46.46,0,0,0-.49,0c-.45.27-.88.56-1.29.85a12.55,12.55,0,0,0-1.46-.75c.09-.52.15-1,.19-1.44a.38.38,0,0,0-.26-.37,14.76,14.76,0,0,0-3.36-.8.44.44,0,0,0-.42.21c-.25.47-.46.9-.64,1.32a15.5,15.5,0,0,0-1.67,0c-.19-.43-.4-.86-.65-1.32a.42.42,0,0,0-.42-.21,14.81,14.81,0,0,0-3.35.8.37.37,0,0,0-.26.37c0,.44.1.93.18,1.44a12.41,12.41,0,0,0-1.45.75c-.42-.29-.85-.58-1.3-.85a.44.44,0,0,0-.48,0,12.83,12.83,0,0,0-2.45,2.19.35.35,0,0,0,0,.44c.3.39.62.78.95,1.16a10.12,10.12,0,0,0-1,1.56c-.23.44.52.74.74.3a9.83,9.83,0,0,1,1.08-1.66.35.35,0,0,0,0-.45c-.32-.36-.64-.73-.93-1.11a12.07,12.07,0,0,1,1.88-1.68c.42.27.84.55,1.23.84a.45.45,0,0,0,.5,0,12,12,0,0,1,1.85-1,.36.36,0,0,0,.24-.39c-.09-.49-.16-1-.2-1.38a13.5,13.5,0,0,1,2.58-.62c.23.44.43.86.6,1.28a.44.44,0,0,0,.42.24,12.74,12.74,0,0,1,2.14,0,.42.42,0,0,0,.42-.24c.18-.41.37-.83.6-1.28a13.16,13.16,0,0,1,2.58.62c0,.42-.1.88-.19,1.37a.36.36,0,0,0,.23.4,11.68,11.68,0,0,1,1.86,1,.44.44,0,0,0,.49,0c.39-.29.81-.57,1.24-.84a12.07,12.07,0,0,1,1.88,1.68c-.3.39-.62.76-.94,1.11a.35.35,0,0,0,0,.45,10.43,10.43,0,0,1,1.07,1.66.41.41,0,0,0,.44.21c.54-.08,1.06-.14,1.53-.17a10.32,10.32,0,0,1,.7,2.31c-.5.2-1,.38-1.43.54a.38.38,0,0,0-.27.38,8.71,8.71,0,0,1,0,1.91.36.36,0,0,0,.27.38c.46.16.93.34,1.43.54a10.55,10.55,0,0,1-.7,2.32q-.72-.06-1.53-.18a.42.42,0,0,0-.44.21,9.2,9.2,0,0,1-1.07,1.66.35.35,0,0,0,0,.45c.33.36.64.73.94,1.11a12.07,12.07,0,0,1-1.88,1.68c-.43-.27-.85-.55-1.24-.84a.44.44,0,0,0-.49,0,12.09,12.09,0,0,1-1.86,1,.35.35,0,0,0-.23.39c.09.49.15,1,.19,1.38a13.5,13.5,0,0,1-2.58.62c-.23-.45-.42-.86-.6-1.28a.4.4,0,0,0-.42-.23,12.75,12.75,0,0,1-2.14,0,.37.37,0,1,0-.07.74,14.54,14.54,0,0,0,2,0c.18.42.39.85.64,1.32a.41.41,0,0,0,.37.21h0a15,15,0,0,0,3.36-.8.38.38,0,0,0,.26-.37c0-.44-.1-.92-.19-1.44a12.55,12.55,0,0,0,1.46-.75c.41.29.84.58,1.29.85a.44.44,0,0,0,.48,0,12.54,12.54,0,0,0,2.45-2.19.35.35,0,0,0,0-.44c-.3-.39-.62-.78-1-1.16a10.74,10.74,0,0,0,.85-1.3c.56.07,1.1.13,1.6.16a.41.41,0,0,0,.41-.23,11.07,11.07,0,0,0,.89-3A.37.37,0,0,0,230.23,575.54Zm-18.45,4.85c-.43-.27-.9.33-.47.61a9.75,9.75,0,0,0,3,1.25c.45.11.84-.56.21-.71A8.69,8.69,0,0,1,211.78,580.39Zm3.21-5.34a.4.4,0,0,0,.41.37h6.5a1.22,1.22,0,1,0,0-2.42h-2.8a.37.37,0,1,0,0,.74h2.8a.47.47,0,1,1,0,.94h-6.09v-1.54c0-.48-.82-.48-.82,0Zm1.65,7.46c5.1,0,9.25-3.72,9.25-8.29s-4.15-8.3-9.25-8.3-9.25,3.72-9.25,8.3c0,.47.82.47.82,0,0-4.17,3.78-7.57,8.43-7.57s8.43,3.4,8.43,7.57-3.78,7.56-8.43,7.56A.37.37,0,1,0,216.64,582.51Zm1.05-9.14v-4.63a1.36,1.36,0,0,0-2.7,0v3.16c0,.48.82.48.82,0v-3.16a.53.53,0,0,1,1.06,0v4.63C216.87,573.86,217.69,573.86,217.69,573.37Zm-9.11,10.14a12.07,12.07,0,0,1-2.11-1.85c.29-.38.61-.75.93-1.11a.34.34,0,0,0,0-.45,9.77,9.77,0,0,1-1.07-1.66.42.42,0,0,0-.44-.21c-.55.08-1.07.14-1.54.18a10.07,10.07,0,0,1-.73-2.58c-.06-.47-.88-.38-.82.09a11.94,11.94,0,0,0,.89,3,.43.43,0,0,0,.41.23c.5,0,1-.08,1.61-.16a12,12,0,0,0,.84,1.3c-.33.38-.65.77-.95,1.16a.35.35,0,0,0,0,.44,12.83,12.83,0,0,0,2.45,2.19C208.45,584.35,209.06,583.84,208.58,583.51Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
              </g>
            </g>
            <g
              id="left-text-5-2"
              data-name="left-text-5"
              style={{isolation: "isolate"}}
            >
              <text
                transform="translate(161.01 548.86) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Time of Day Alerts
              </text>
            </g>
          </g>
          <path
            className="left-paths"
            id="left-path-1"
            d="M244,96a115.36,115.36,0,0,1,49.87,11.81c16,7.8,30,18.28,42.59,29.62,14,12.56,26.56,26.2,38.6,39.9,12.92,14.69,25.31,29.58,37.93,44,12.89,14.74,26,29.07,39.95,42.24,13.81,13,28.42,24.92,44.21,34.61h0a178.61,178.61,0,0,0,50.7,21.63,174.12,174.12,0,0,0,60.31,3.62q-.9,11.59-2.33,23.19a196.29,196.29,0,0,1-63.43-4.54,201.82,201.82,0,0,1-57.28-24.29,297.69,297.69,0,0,1-48-37.42c-14.79-13.94-28.42-28.79-41.55-43.79-12.88-14.7-25.27-29.56-37.94-43.92-11.83-13.4-23.79-26.36-36.7-37.89-11.65-10.35-23.9-19.6-37.2-25.94-12.52-6-26.2-9.51-39.7-9.44q0-7.19,0-14.38C244,102,244,99,244,96Z"
            transform="translate(0.86 -0.94)"
            opacity="0.1"
            fill="url(#radial-gradient)"
            style={{isolation: "isolate"}}
          />
          <path
            className="left-paths"
            id="left-path-2"
            d="M243.83,190.1a176.67,176.67,0,0,1,48,6.71A220.28,220.28,0,0,1,334,214a435.09,435.09,0,0,1,38.68,23.42c12.89,8.58,25.4,17.38,38,25.79,13.12,8.79,26.32,17.22,39.89,24.71a309,309,0,0,0,44.42,20.36h0a263.78,263.78,0,0,0,51.69,12.93,301,301,0,0,0,61.9,2.23q-1.23,11.58-2.72,23.16A321.67,321.67,0,0,1,543.33,344a286.61,286.61,0,0,1-56.25-14,333,333,0,0,1-47.8-21.81c-14.41-7.95-28.2-16.7-41.63-25.68-12.85-8.59-25.36-17.36-37.93-25.7h0a413.59,413.59,0,0,0-36.63-22.13,196.65,196.65,0,0,0-37.66-15.35,153.13,153.13,0,0,0-41.58-5.76Z"
            transform="translate(0.86 -0.94)"
            opacity="0.1"
            fill="url(#radial-gradient-2)"
            style={{isolation: "isolate"}}
          />
          <path
            className="left-paths"
            id="left-path-5"
            d="M247.38,519.49a148.12,148.12,0,0,0,49.82-8.82,200.6,200.6,0,0,0,43.09-22.32,431.62,431.62,0,0,0,39-30h0c12.95-11,25.41-22.09,37.95-32.76,13-11,26-21.66,39.63-31.19a279.27,279.27,0,0,1,43.76-25.5h0a214.33,214.33,0,0,1,50.51-16,232.44,232.44,0,0,1,60.49-2.76q-.83-14.68-2.08-29.39a260.57,260.57,0,0,0-63.64,3.35,244,244,0,0,0-57.47,18.12h0A307.77,307.77,0,0,0,440,370.3c-14.71,10.3-28.53,21.45-41.87,32.79-12.91,11-25.37,22-37.93,32.63h0c-11.93,10-23.86,19.61-36.32,27.87-11.8,7.8-24,14.52-36.69,19a117.77,117.77,0,0,1-39.74,7Z"
            transform="translate(0.86 -0.94)"
            opacity="0.1"
            fill="url(#radial-gradient-3)"
            style={{isolation: "isolate"}}
          />
          <path
            className="left-paths"
            id="left-path-6"
            d="M249,598.56A106.15,106.15,0,0,0,276.17,595a119.66,119.66,0,0,0,24.75-9.77c16.62-8.85,30.88-20.46,43.42-32.8h0c14.2-13.88,26.82-28.76,38.82-43.63,12.95-16,25.33-32.19,37.92-47.86,12.81-15.94,25.81-31.43,39.74-45.71h0c13.6-13.91,28-26.73,43.65-37.18,15.4-10.26,32.08-18.37,49.51-23,18.85-5.08,38.95-6.14,58.7-3.84q-.39-15.11-1.53-30.24a185.88,185.88,0,0,0-64.87,5.08A197.35,197.35,0,0,0,487.77,353c-17.93,12-33.95,26.14-48.55,41.11h0c-15,15.33-28.64,31.53-41.74,47.81-12.92,16-25.29,32.14-37.94,47.72-11.77,14.47-23.6,28.45-36.46,40.91h0c-11.43,11-23.34,20.87-36.35,27.58a89.12,89.12,0,0,1-18.39,7.26,75.41,75.41,0,0,1-19.28,2.51Z"
            transform="translate(0.86 -0.94)"
            opacity="0.1"
            fill="url(#radial-gradient-4)"
            style={{isolation: "isolate"}}
          />
          <path
            className="left-paths"
            id="left-path-4"
            d="M244.68,426.06a309.22,309.22,0,0,0,47.63-3.73,341.9,341.9,0,0,0,42.19-9.57h0c26.91-7.88,52.15-18.16,76.86-27.36,27.81-10.31,55.76-19.3,84.06-24.94,37.18-7.49,75.57-9.79,114-8.51q-1.42-12.66-3-25.33c-38.71-2.31-77.9-1-116.64,5.5-30.6,5.18-60.41,13.68-89.45,23.46-25.66,8.61-50.52,17.87-75.39,24.19a303.33,303.33,0,0,1-38.14,7.33,272.84,272.84,0,0,1-40.2,1.92q-.84,18.53-1.93,37Z"
            transform="translate(0.86 -0.94)"
            opacity="0.1"
            fill="url(#radial-gradient-5)"
            style={{isolation: "isolate"}}
          />
          <path
            className="left-paths"
            id="left-path-3"
            d="M247,268a417.83,417.83,0,0,1,88.55,9.85c26.45,5.8,51.76,13.51,76.61,20.45h0c28.15,7.83,56.34,14.58,84.68,18.82,37.82,5.71,76.4,7.43,115.06,6.48q-1.53,12.51-3.16,25c-38.53,2-77.4,1.36-116.1-3.22h0c-30.08-3.57-59.71-9.66-88.86-16.8h0c-25.58-6.25-50.58-13-75.41-17.58a382.74,382.74,0,0,0-79.45-6.42Q248,286.27,247,268Z"
            transform="translate(0.86 -0.94)"
            opacity="0.1"
            fill="url(#radial-gradient-6)"
            style={{isolation: "isolate"}}
          />
          <path
            className="right-paths"
            id="right-path-1"
            d="M781,354.38A243,243,0,0,0,849.85,351a231.2,231.2,0,0,0,57.93-20h0a305.28,305.28,0,0,0,48.82-31c14.9-11.43,28.84-23.75,42.31-36.28,13.09-12.15,25.73-24.47,38.55-36.3h0c12.12-11.17,24.32-21.9,37.23-31.27,12.06-8.73,24.65-16.35,38-21.52a113.33,113.33,0,0,1,41.26-8q-2-12.06-4.84-24a138.5,138.5,0,0,0-45.23,9.5,195.89,195.89,0,0,0-43.38,24.43,443.63,443.63,0,0,0-39.46,33h0c-13.16,12.12-25.84,24.44-38.66,36.31-13.21,12.23-26.58,24-40.58,34.72A281.39,281.39,0,0,1,896.84,309h0a206.45,206.45,0,0,1-51.79,17.83,218.21,218.21,0,0,1-61.82,2.95Z"
            transform="translate(0.86 -0.94)"
            opacity="0.33"
            fill="url(#radial-gradient-7)"
            style={{isolation: "isolate"}}
          />
          <path
            className="right-paths"
            id="right-path-2"
            d="M782.63,354.92c41,1.21,82.37-1,123.14-8.11h0c30.92-5.44,61-13.8,90.29-23.34h0c25.81-8.37,50.86-17.32,76.06-23.71A337.68,337.68,0,0,1,1154.87,289q-1.86-14.22-4-28.43A368.74,368.74,0,0,0,1065.11,272c-26.92,6.83-52.58,15.9-77.88,24.07h0c-28.59,9.21-57.35,17.19-86.4,22.21h0C862.36,325,823,327,783.54,325.75Z"
            transform="translate(0.86 -0.94)"
            opacity="0.33"
            fill="url(#radial-gradient-8)"
            style={{isolation: "isolate"}}
          />
          <path
            className="right-paths"
            id="right-path-4"
            d="M779.81,329.1A233.09,233.09,0,0,1,849,332.7a225.27,225.27,0,0,1,58.19,21.08h0a303.84,303.84,0,0,1,48.92,32.55c15,12,28.89,25,42.34,38.07,13.09,12.75,25.72,25.67,38.55,38.07h0c12.09,11.69,24.25,22.92,37.18,32.76,12,9.1,24.5,17.07,37.78,22.49a107.9,107.9,0,0,0,40.86,8.31q-2,12.66-4.94,25.2a134,134,0,0,1-45.55-10c-16-6.6-30.42-15.66-43.56-25.71-14.16-10.8-27.1-22.67-39.49-34.64h0c-13.18-12.72-25.85-25.63-38.66-38.08C967.4,430,954.06,417.59,940,406.38a278,278,0,0,0-44.8-29.76h0A199.28,199.28,0,0,0,843.71,358a207.4,207.4,0,0,0-61.48-3.07Q781,342,779.81,329.1Z"
            transform="translate(0.86 -0.94)"
            opacity="0.33"
            fill="url(#radial-gradient-9)"
            style={{isolation: "isolate"}}
          />
          <path
            className="right-paths"
            id="right-path-3"
            d="M779.47,321.47c41.27-1.39,83,1.14,123.92,9.21,31.29,6.22,61.47,15.71,90.75,26.47,25.85,9.45,50.75,19.5,75.84,26.68h0a314.81,314.81,0,0,0,38.67,8.67,281.88,281.88,0,0,0,43.17,3.35q-1.85,16.06-4.1,32.09a316.26,316.26,0,0,1-44-3.6,350.59,350.59,0,0,1-42.63-9.45h0c-27.22-7.8-52.88-18-78.1-27.23h0c-28.39-10.31-57-19.29-85.91-24.92-38-7.48-77.27-9.72-116.5-8.37Z"
            transform="translate(0.86 -0.94)"
            opacity="0.33"
            fill="url(#radial-gradient-10)"
            style={{isolation: "isolate"}}
          />
          <g id="left-label" style={{isolation: "isolate"}}>
            <text
              transform="matrix(0.01, -1.11, 1, 0.01, 130.85, 392.81)"
              fontSize="23.68"
              fill="#d9d6ef"
              fontFamily="Helvetica-Light, Helvetica"
              fontWeight="300"
              style={{isolation: "isolate"}}
            >
              1Call Source
            </text>
          </g>
          <g id="right-label" style={{isolation: "isolate"}}>
            <text
              transform="matrix(-0.01, 1.11, -1, -0.01, 1260.72, 242.15)"
              fontSize="23.68"
              fill="#d9d6ef"
              fontFamily="Helvetica-Light, Helvetica"
              fontWeight="300"
              style={{isolation: "isolate"}}
            >
              Alert Deliveries
            </text>
          </g>
          <g id="right-card-1">
            <path
              id="right-bg-1"
              d="M1167.76,120.44h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11v-41C1155.45,125.38,1161,120.44,1167.76,120.44Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="right-icon-1">
              <g id="g4085-408">
                <path
                  id="path4081-5"
                  d="M1205,157.8a2,2,0,0,0,2.09-1.69c.11-1.56.16-3,.16-4.31,0-6.79-1.28-10.54-3-12.8a7.14,7.14,0,0,0-2.8-2.24,5.76,5.76,0,0,0-2.13-.48h-10.37a5.76,5.76,0,0,0-2.13.48,8,8,0,0,0-4,4.24c-1.08,2.33-1.8,5.7-1.81,10.8,0,1.32,0,2.75.16,4.31a2,2,0,0,0,2.09,1.69h.13a1.93,1.93,0,0,0,2-1.9c-.1-1.5-.15-2.86-.15-4.1,0-5.45.92-8.5,1.83-10.1v33.72a3.28,3.28,0,0,0,6.48,0V155.13h1.22v20.29a3.28,3.28,0,0,0,6.48,0V141.71c.15.27.31.59.47.95a24.24,24.24,0,0,1,1.35,9.14c0,1.24,0,2.6-.14,4.1a1.92,1.92,0,0,0,2,1.9Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <ellipse
                  id="circle4083-6"
                  cx="1194.95"
                  cy="128.99"
                  rx="5.9"
                  ry="5.06"
                  fill="#d9d6ef"
                />
              </g>
            </g>
            <g id="right-text-1" style={{isolation: "isolate"}}>
              <text
                transform="translate(1173.28 112.67) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Manager
              </text>
            </g>
          </g>
          <g id="right-card-2">
            <path
              id="right-bg-2"
              d="M1170.08,244.32h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11v-41C1157.77,249.26,1163.28,244.32,1170.08,244.32Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="right-icon-2">
              <g id="g4085-4">
                <path
                  id="path4081-9"
                  d="M1206.36,280.85a2,2,0,0,0,2.09-1.69c.11-1.56.16-3,.16-4.31,0-6.78-1.28-10.54-3-12.8a7,7,0,0,0-2.8-2.23,5.56,5.56,0,0,0-2.13-.48h-10.37a5.38,5.38,0,0,0-2.13.48,8,8,0,0,0-4,4.23c-1.08,2.33-1.8,5.71-1.81,10.8,0,1.32,0,2.75.16,4.31a2,2,0,0,0,2.09,1.69h.13a1.93,1.93,0,0,0,2-1.9c-.1-1.5-.15-2.86-.15-4.1,0-5.44.92-8.5,1.83-10.1v33.73a3.28,3.28,0,0,0,6.48,0v-20.3h1.21v20.3a3.28,3.28,0,0,0,6.49,0V264.76a9.69,9.69,0,0,1,.46,1c.74,1.75,1.37,4.63,1.36,9.13,0,1.24,0,2.6-.14,4.1a1.92,1.92,0,0,0,2,1.9Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <ellipse
                  id="circle4083-9"
                  cx="1196.35"
                  cy="252.05"
                  rx="5.9"
                  ry="5.06"
                  fill="#d9d6ef"
                />
              </g>
            </g>
            <g id="right-text-2" style={{isolation: "isolate"}}>
              <text
                transform="translate(1161.42 236.46) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Field Personnel
              </text>
            </g>
          </g>
          <g id="right-card-3">
            <path
              id="right-bg-3"
              d="M1168.68,376.59h48c6.79,0,12.3,4.94,12.3,11v41c0,6.09-5.51,11-12.3,11h-48c-6.8,0-12.31-5-12.31-11v-41C1156.37,381.53,1161.88,376.59,1168.68,376.59Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="right-icon-3">
              <g id="g4085-4-8">
                <path
                  id="path4081-9-3"
                  d="M1204.38,413.13a2,2,0,0,0,2.09-1.7c.11-1.56.16-3,.16-4.3,0-6.79-1.28-10.54-3-12.8a7.14,7.14,0,0,0-2.8-2.24,5.72,5.72,0,0,0-2.13-.48h-10.37a5.76,5.76,0,0,0-2.13.48,8,8,0,0,0-4,4.23c-1.08,2.34-1.8,5.71-1.81,10.81,0,1.31,0,2.74.16,4.3a2,2,0,0,0,2.09,1.7h.13a1.93,1.93,0,0,0,2-1.9c-.1-1.49-.15-2.85-.15-4.09,0-5.45.92-8.51,1.83-10.1v33.72a3.28,3.28,0,0,0,6.48,0V410.46h1.22v20.29a3.28,3.28,0,0,0,6.48,0V397a10.54,10.54,0,0,1,.47.95,24.24,24.24,0,0,1,1.35,9.14c0,1.24,0,2.6-.14,4.09a1.91,1.91,0,0,0,2,1.9Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <ellipse
                  id="circle4083-9-2"
                  cx="1194.37"
                  cy="384.32"
                  rx="5.9"
                  ry="5.06"
                  fill="#d9d6ef"
                />
              </g>
            </g>
            <g id="right-text-3" style={{isolation: "isolate"}}>
              <text
                transform="translate(1154.62 367.67) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Officel Personnel
              </text>
            </g>
          </g>
          <g id="right-card-4">
            <path
              id="right-bg-4"
              d="M1168.68,505.49h48c6.79,0,12.3,4.94,12.3,11v41c0,6.1-5.51,11-12.3,11h-48c-6.8,0-12.31-4.94-12.31-11v-41C1156.37,510.43,1161.88,505.49,1168.68,505.49Z"
              transform="translate(0.86 -0.94)"
              fill="#37254b"
            />
            <g id="right-icon-4">
              <g id="g4085-4-8-3">
                <path
                  id="path4081-9-3-9"
                  d="M1203.56,543.28a2,2,0,0,0,2.09-1.69c.11-1.56.16-3,.16-4.31,0-6.78-1.28-10.54-3-12.8a7,7,0,0,0-2.8-2.23,5.53,5.53,0,0,0-2.13-.48h-10.37a5.38,5.38,0,0,0-2.13.48,8,8,0,0,0-4,4.23c-1.08,2.33-1.8,5.71-1.81,10.8,0,1.32.05,2.75.16,4.31a2,2,0,0,0,2.09,1.69h.13a1.93,1.93,0,0,0,2-1.9c-.1-1.5-.15-2.86-.15-4.1,0-5.44.92-8.5,1.83-10.1v33.73a3.28,3.28,0,0,0,6.48,0v-20.3h1.22v20.3a3.28,3.28,0,0,0,6.48,0V527.19c.15.28.31.59.47,1,.73,1.75,1.36,4.63,1.35,9.13,0,1.24,0,2.6-.14,4.1a1.92,1.92,0,0,0,2,1.9Z"
                  transform="translate(0.86 -0.94)"
                  fill="#d9d6ef"
                />
                <ellipse
                  id="circle4083-9-2-6"
                  cx="1193.55"
                  cy="514.48"
                  rx="5.9"
                  ry="5.06"
                  fill="#d9d6ef"
                />
              </g>
            </g>
            <g id="right-text-4" style={{isolation: "isolate"}}>
              <text
                transform="translate(1204.96 520.2) scale(1.11 1)"
                fontSize="23.68"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                n
              </text>
            </g>
            <g id="right-power-text-4" style={{isolation: "isolate"}}>
              <text
                transform="translate(1153.52 499.26) scale(0.98 1)"
                fontSize="9.37"
                fill="#d9d6ef"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                External Personnel
              </text>
            </g>
            <g id="right-dots-4">
              <ellipse
                id="path5065-4"
                cx="1193.55"
                cy="616.96"
                rx="9.55"
                ry="6.78"
                fill="#d9d6ef"
              />
              <ellipse
                id="path5065-8"
                cx="1193.55"
                cy="598.86"
                rx="9.55"
                ry="6.78"
                fill="#d9d6ef"
              />
              <ellipse
                id="path5065"
                cx="1194"
                cy="579.9"
                rx="9.55"
                ry="6.78"
                fill="#d9d6ef"
              />
            </g>
          </g>
          <g className="right-icons" id="mail-icon-1">
            <g id="g5682">
              <g id="g5680">
                <path
                  id="path5668"
                  d="M1115.06,411.55a2.61,2.61,0,0,0-2.56-2.7,2.73,2.73,0,0,0-3,2.27,1.55,1.55,0,0,0,0,.43,2.61,2.61,0,0,0,2.56,2.71,2.73,2.73,0,0,0,3-2.27A1.62,1.62,0,0,0,1115.06,411.55Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5670"
                  d="M1112.15,401.52c-6.18.06-11.13,4.54-11.1,10s5,10,11.23,10,11.21-4.47,11.21-10-5-10-11.16-10Zm0,3.39a8.89,8.89,0,0,1,1,.06.38.38,0,0,1,.29.24l.48,1.36a5.85,5.85,0,0,1,.91.34l1.42-.67a.44.44,0,0,1,.39,0,7.7,7.7,0,0,1,1.41,1.26.3.3,0,0,1,0,.36l-.74,1.26a4.39,4.39,0,0,1,.39.82l1.55.42a.35.35,0,0,1,.24.28,5.84,5.84,0,0,1,0,1.77.36.36,0,0,1-.24.28l-1.55.42a4.71,4.71,0,0,1-.39.82l.74,1.26a.3.3,0,0,1,0,.36,7.7,7.7,0,0,1-1.41,1.26.41.41,0,0,1-.39,0l-1.42-.66a7.08,7.08,0,0,1-.91.34l-.48,1.36a.38.38,0,0,1-.29.24,8.53,8.53,0,0,1-2,0,.38.38,0,0,1-.29-.24l-.49-1.36a7.69,7.69,0,0,1-.91-.34l-1.42.66a.39.39,0,0,1-.38,0,7.45,7.45,0,0,1-1.42-1.26.3.3,0,0,1,0-.36L1107,414a4.71,4.71,0,0,1-.39-.82l-1.54-.42a.36.36,0,0,1-.24-.28,5.84,5.84,0,0,1,0-1.77.35.35,0,0,1,.24-.28l1.54-.42a4.39,4.39,0,0,1,.39-.82l-.74-1.26a.3.3,0,0,1,0-.36,7.45,7.45,0,0,1,1.42-1.26.42.42,0,0,1,.38,0l1.42.67a6.26,6.26,0,0,1,.91-.34l.49-1.36a.38.38,0,0,1,.29-.24A8.22,8.22,0,0,1,1112.2,404.91Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5672"
                  d="M1111.85,383.13h-49a2.4,2.4,0,0,0-1.21.32l25.71,20.68,25.68-20.68a2.4,2.4,0,0,0-1.21-.32Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5674"
                  d="M1103.3,403.85l-6.07-6.16,16.69-13.42a1.82,1.82,0,0,1,.24.91v15.41a13.41,13.41,0,0,0-10.85,3.26Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5676"
                  d="M1102.49,404.69a10.12,10.12,0,0,0-1.75,11.09h-37.85a2.4,2.4,0,0,1-1.21-.32l16.75-17,8.15,6.56a1.32,1.32,0,0,0,1.58,0l8.16-6.56Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5678"
                  d="M1077.51,397.69l-16.69-13.42a1.82,1.82,0,0,0-.24.91v28.56a1.78,1.78,0,0,0,.24.89Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
              </g>
            </g>
          </g>
          <g className="right-icons" id="mail-icon-2">
            <g id="g5682-0">
              <g id="g5680-3">
                <path
                  id="path5668-3"
                  d="M958.91,400.18a2.59,2.59,0,0,0-2.55-2.71,2.73,2.73,0,0,0-3,2.28,1.55,1.55,0,0,0,0,.43,2.6,2.6,0,0,0,2.56,2.71,2.72,2.72,0,0,0,3-2.28A1.55,1.55,0,0,0,958.91,400.18Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5670-2"
                  d="M956,390.14c-6.17.06-11.13,4.55-11.1,10s5,10,11.23,10,11.22-4.47,11.22-10-5-10-11.17-10Zm0,3.4a8.94,8.94,0,0,1,1,.06.35.35,0,0,1,.29.23l.47,1.37a6,6,0,0,1,.92.34l1.41-.67a.41.41,0,0,1,.39,0,7.12,7.12,0,0,1,1.42,1.26.3.3,0,0,1,0,.36l-.74,1.26a4.11,4.11,0,0,1,.39.82l1.55.41a.37.37,0,0,1,.24.28,5.9,5.9,0,0,1,0,1.78.35.35,0,0,1-.24.27l-1.55.43a4.31,4.31,0,0,1-.39.81l.74,1.26a.32.32,0,0,1,0,.37,7.4,7.4,0,0,1-1.42,1.25.41.41,0,0,1-.39,0l-1.41-.67a6,6,0,0,1-.92.34l-.47,1.37a.35.35,0,0,1-.29.23,8.53,8.53,0,0,1-2,0,.35.35,0,0,1-.29-.23l-.49-1.37a6,6,0,0,1-.92-.34l-1.41.67a.41.41,0,0,1-.39,0,7.65,7.65,0,0,1-1.41-1.25.32.32,0,0,1,0-.37l.74-1.26a4.31,4.31,0,0,1-.39-.81l-1.55-.43a.35.35,0,0,1-.23-.27,5.9,5.9,0,0,1,0-1.78A.38.38,0,0,1,949,399l1.55-.41a4.11,4.11,0,0,1,.39-.82l-.74-1.26a.3.3,0,0,1,0-.36,7.35,7.35,0,0,1,1.41-1.26.41.41,0,0,1,.39,0l1.41.67a6,6,0,0,1,.92-.34l.49-1.37a.35.35,0,0,1,.29-.23A8.06,8.06,0,0,1,956.05,393.54Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5672-2"
                  d="M955.71,371.76h-49a2.57,2.57,0,0,0-1.22.31l25.72,20.69,25.68-20.69a2.53,2.53,0,0,0-1.21-.31Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5674-7"
                  d="M947.16,392.47l-6.07-6.16,16.69-13.42a1.88,1.88,0,0,1,.24.91v15.42a13.39,13.39,0,0,0-10.85,3.25Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5676-8"
                  d="M946.35,393.31a10.12,10.12,0,0,0-1.75,11.1H906.75a2.44,2.44,0,0,1-1.22-.32l16.76-17,8.15,6.55a1.32,1.32,0,0,0,1.58,0l8.16-6.55Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
                <path
                  id="path5678-3"
                  d="M921.36,386.31l-16.68-13.42a1.89,1.89,0,0,0-.25.91v28.56a1.82,1.82,0,0,0,.25.9Z"
                  transform="translate(0.86 -0.94)"
                  fill="#ff0"
                />
              </g>
            </g>
          </g>
          <g className="right-icons" id="phone-icon-2">
            <path
              id="path5574-3"
              d="M1101,520.88a8.54,8.54,0,0,0-5.6-2,5.65,5.65,0,0,0-3.77,1.42l-3.62,3.41a31.66,31.66,0,0,1-14.25-12l4-3.06a4.09,4.09,0,0,0,1.68-3.18,6.1,6.1,0,0,0-2.4-4.73l-6.26-5.29a8.4,8.4,0,0,0-6.23-2,5,5,0,0,0-3.72,2.06,18.21,18.21,0,0,0-2.64,13.68c1.15,6.46,5.17,12.88,11.33,18.09a42,42,0,0,0,21.41,9.57,28.9,28.9,0,0,0,16.21-2.23,4.19,4.19,0,0,0,2.44-3.14,5.9,5.9,0,0,0-2.37-5.26Zm5.23,10.17a1.31,1.31,0,0,1-.75,1,25.05,25.05,0,0,1-14,1.88,38.19,38.19,0,0,1-19.5-8.76c-5.65-4.78-9.34-10.63-10.37-16.47a15.75,15.75,0,0,1,2.22-11.83,1.58,1.58,0,0,1,1.21-.63,4.66,4.66,0,0,1,3.37,1.17l6.25,5.29a3.5,3.5,0,0,1,1.41,2.6,1.43,1.43,0,0,1-.55,1.12l-5.93,4.49.52,1a34.26,34.26,0,0,0,17.61,14.86l1.14.45,5.31-5a2,2,0,0,1,1.33-.46,4.82,4.82,0,0,1,3.08,1.19l6.26,5.28A3.33,3.33,0,0,1,1106.19,531.05Z"
              transform="translate(0.86 -0.94)"
              fill="red"
            />
            <path
              id="path5576-8"
              d="M1091.1,502h5.84l-9.74,8.23a1.29,1.29,0,0,0,0,2,1.94,1.94,0,0,0,2.41,0l9.75-8.23V509a1.73,1.73,0,0,0,3.41,0h0v-8.3a1.73,1.73,0,0,0-1.86-1.56h-9.81a1.46,1.46,0,1,0,0,2.88Z"
              transform="translate(0.86 -0.94)"
              fill="red"
            />
          </g>
          <g className="right-icons" id="mobile-icon-2">
            <g id="g5570-1">
              <g id="g5547-2">
                <path
                  id="path5535-3"
                  d="M1027.37,439.33H1007.5c-2.74,0-5,1.92-5,4.28v10.26c0,2.36,2.23,4.27,5,4.27h3.3l2.81,3.87a1.08,1.08,0,0,0,1.37.28.87.87,0,0,0,.32-.28l2.81-3.87h9.26c2.75,0,5-1.91,5-4.27V443.61C1032.34,441.25,1030.12,439.33,1027.37,439.33Zm3,14.54a2.8,2.8,0,0,1-3,2.56h-9.81a1,1,0,0,0-.84.4l-2.26,3.12-2.27-3.12a1,1,0,0,0-.84-.4h-3.85a2.79,2.79,0,0,1-3-2.56V443.61a2.79,2.79,0,0,1,3-2.57h19.87a2.8,2.8,0,0,1,3,2.57Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5537-3"
                  d="M1025.39,445.32h-15.9a.87.87,0,1,0,0,1.71h15.9a.86.86,0,1,0,0-1.71Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5539-6"
                  d="M1025.39,449.59h-15.9a.87.87,0,1,0,0,1.71h15.9a.86.86,0,1,0,0-1.71Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5541-0"
                  d="M1021.41,460.71a.93.93,0,0,0-1,.85v4.28H990.61V435.05h29.81v1.71a.93.93,0,0,0,1,.86.94.94,0,0,0,1-.86v-6c0-2.83-2.68-5.13-6-5.13H994.58c-3.29,0-6,2.3-6,5.13v41c0,2.83,2.67,5.13,6,5.13h21.86c3.29,0,6-2.3,6-5.13V461.56A.94.94,0,0,0,1021.41,460.71Zm-26.83-33.35h21.86a3.73,3.73,0,0,1,4,3.42v2.56H990.61v-2.56A3.73,3.73,0,0,1,994.58,427.36Zm21.86,47.88H994.58a3.73,3.73,0,0,1-4-3.42v-4.27h29.81v4.27A3.73,3.73,0,0,1,1016.44,475.24Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5543-5"
                  d="M1002,431.21h7a.86.86,0,1,0,0-1.71h-7a.86.86,0,1,0,0,1.71Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5545-0"
                  d="M1005.51,468.4a3,3,0,1,0,3.48,3A3.27,3.27,0,0,0,1005.51,468.4Zm0,4.28a1.3,1.3,0,1,1,1.49-1.29h0A1.4,1.4,0,0,1,1005.51,472.68Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
              </g>
            </g>
          </g>
          <g className="right-icons" id="mobile-icon-1">
            <g id="g5570">
              <g id="g5547">
                <path
                  id="path5535"
                  d="M1104,160.44h-19.88c-2.74,0-5,1.92-5,4.28V175c0,2.36,2.22,4.27,5,4.27h3.3l2.82,3.87a1.08,1.08,0,0,0,1.37.28.87.87,0,0,0,.32-.28l2.81-3.87H1104c2.74,0,5-1.91,5-4.27V164.72C1109,162.36,1106.78,160.44,1104,160.44Zm3,14.54a2.79,2.79,0,0,1-3,2.56h-9.81a1,1,0,0,0-.85.4l-2.26,3.12-2.26-3.12a1,1,0,0,0-.84-.4h-3.86a2.8,2.8,0,0,1-3-2.56V164.72a2.8,2.8,0,0,1,3-2.57H1104a2.79,2.79,0,0,1,3,2.57Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5537"
                  d="M1102.05,166.43h-15.9a.86.86,0,1,0,0,1.71h15.9a.87.87,0,1,0,0-1.71Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5539"
                  d="M1102.05,170.7h-15.9a.86.86,0,1,0,0,1.71h15.9a.87.87,0,1,0,0-1.71Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5541"
                  d="M1098.08,181.82a.94.94,0,0,0-1,.85V187h-29.81V156.16h29.81v1.71a.94.94,0,0,0,1,.86.93.93,0,0,0,1-.86v-6c0-2.83-2.67-5.13-6-5.13h-21.86c-3.3,0-6,2.3-6,5.13v41c0,2.83,2.67,5.13,6,5.13h21.86c3.29,0,6-2.3,6-5.13V182.67A.93.93,0,0,0,1098.08,181.82Zm-26.83-33.35h21.86a3.73,3.73,0,0,1,4,3.42v2.56h-29.81v-2.56A3.73,3.73,0,0,1,1071.25,148.47Zm21.86,47.88h-21.86a3.73,3.73,0,0,1-4-3.42v-4.27h29.81v4.27A3.73,3.73,0,0,1,1093.11,196.35Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5543"
                  d="M1078.7,152.32h7a.87.87,0,1,0,0-1.71h-7a.86.86,0,1,0,0,1.71Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
                <path
                  id="path5545"
                  d="M1082.18,189.51a3,3,0,1,0,3.47,3A3.27,3.27,0,0,0,1082.18,189.51Zm0,4.28a1.3,1.3,0,1,1,1.49-1.29h0A1.4,1.4,0,0,1,1082.18,193.79Z"
                  transform="translate(0.86 -0.94)"
                  fill="aqua"
                />
              </g>
            </g>
          </g>
          <g className="right-icons" id="phone-icon-1">
            <path
              id="path5574"
              d="M1094.16,290.58a8.44,8.44,0,0,0-5.6-2,5.66,5.66,0,0,0-3.77,1.41l-3.62,3.42a31.74,31.74,0,0,1-14.25-12l4-3a4.11,4.11,0,0,0,1.68-3.19,6.1,6.1,0,0,0-2.4-4.73l-6.26-5.28a8.41,8.41,0,0,0-6.23-2,5,5,0,0,0-3.72,2.06,18.22,18.22,0,0,0-2.64,13.69c1.15,6.45,5.17,12.87,11.33,18.08a41.79,41.79,0,0,0,21.41,9.57,28.8,28.8,0,0,0,16.21-2.22,4.21,4.21,0,0,0,2.44-3.14,5.94,5.94,0,0,0-2.36-5.27Zm5.23,10.16a1.24,1.24,0,0,1-.75,1,24.86,24.86,0,0,1-14,1.88,38.11,38.11,0,0,1-19.5-8.76c-5.65-4.77-9.33-10.62-10.37-16.47a15.75,15.75,0,0,1,2.22-11.83,1.61,1.61,0,0,1,1.21-.63,4.59,4.59,0,0,1,3.37,1.18l6.25,5.28a3.5,3.5,0,0,1,1.41,2.61,1.44,1.44,0,0,1-.54,1.12l-5.94,4.48.53,1a34.17,34.17,0,0,0,17.6,14.87l1.14.44,5.31-5a2,2,0,0,1,1.33-.46,4.86,4.86,0,0,1,3.09,1.18l6.25,5.29A3.29,3.29,0,0,1,1099.39,300.74Z"
              transform="translate(0.86 -0.94)"
              fill="red"
            />
            <path
              id="path5576"
              d="M1084.3,271.72h5.84L1080.4,280a1.29,1.29,0,0,0,0,2,1.94,1.94,0,0,0,2.41,0l9.75-8.23v4.94a1.73,1.73,0,0,0,3.41,0h0v-8.29a1.73,1.73,0,0,0-1.85-1.57h-9.82a1.46,1.46,0,1,0,0,2.88Z"
              transform="translate(0.86 -0.94)"
              fill="red"
            />
          </g>
          <g className="left-tags" id="left-tag-1">
            <g id="g6202">
              <path
                id="path6194"
                d="M329.3,83.93l-55.95-.35c-2,5.64-7,10.12-13.46,12l-.08,8.67c6.4,1.91,11.37,6.45,13.24,12.11l55.95.34c2-5.64,7-10.12,13.46-11.94l.08-8.68C336.14,94.13,331.17,89.58,329.3,83.93Z"
                transform="translate(0.86 -0.94)"
                fill="#fff"
              />
              <path
                id="path6196"
                d="M334.23,78.94l-65.73-.4a12.22,12.22,0,0,1-4.45,9.07,16,16,0,0,1-9.86,3.77l-.15,16.9c7.84.41,14.07,6.1,14.08,13l65.73.4c.13-6.91,6.45-12.52,14.31-12.84L348.32,92C340.46,91.54,334.24,85.85,334.23,78.94ZM344.9,95.35l-.1,10.07a1,1,0,0,1-.84.92c-6.31,1.54-11.26,6-12.92,11.51a1.15,1.15,0,0,1-1.14.74h0l-57.77-.36a1.14,1.14,0,0,1-1.14-.75c-1.54-5.58-6.41-10-12.7-11.67a1,1,0,0,1-.83-.93l.09-10.07a1,1,0,0,1,.85-.92c6.32-1.53,11.27-5.94,12.92-11.51a1.15,1.15,0,0,1,1.14-.74h0l57.76.36a1.14,1.14,0,0,1,1.14.75c1.55,5.58,6.42,10,12.71,11.67A1,1,0,0,1,344.9,95.35Z"
                transform="translate(0.86 -0.94)"
                fill="#fff"
              />
              <path
                id="path6198"
                d="M350.32,90.31a1.26,1.26,0,0,0-.87-.27h-.3c-7,0-12.62-5.07-12.57-11.2,0-.27,0-.52.06-.78a.87.87,0,0,0-.3-.74,1.33,1.33,0,0,0-.86-.31l-68.19-.42a1.62,1.62,0,0,0-.86.31.86.86,0,0,0-.32.73,6.81,6.81,0,0,1,.05.78,10.46,10.46,0,0,1-3.81,7.86,13.5,13.5,0,0,1-8.84,3.18h-.1l-.35,0a1.26,1.26,0,0,0-.85.27.92.92,0,0,0-.37.69l-.16,18.82a.89.89,0,0,0,.34.7,1.27,1.27,0,0,0,.85.27h.33c7,0,12.62,5.07,12.56,11.2a6.81,6.81,0,0,1-.05.78.86.86,0,0,0,.29.74,1.3,1.3,0,0,0,.87.31l68.18.42h0a1.3,1.3,0,0,0,.85-.35.93.93,0,0,0,.32-.77c0-.23,0-.46,0-.69.06-6.14,5.79-11,12.76-11h.35a1.4,1.4,0,0,0,.85-.28.9.9,0,0,0,.35-.68L350.68,91A.9.9,0,0,0,350.32,90.31Zm-2.16,18.54c-7.86.32-14.18,5.93-14.32,12.84l-65.73-.4c0-6.91-6.23-12.6-14.08-13l.15-16.89a16.06,16.06,0,0,0,9.87-3.77,12.22,12.22,0,0,0,4.45-9.07l65.73.4c0,6.91,6.22,12.6,14.09,13Z"
                transform="translate(0.86 -0.94)"
                fill="#fff"
              />
              <path
                id="path6200"
                d="M331.36,82.75a1.14,1.14,0,0,0-1.14-.75l-57.76-.35h0a1.14,1.14,0,0,0-1.14.73c-1.65,5.57-6.6,10-12.92,11.51a1,1,0,0,0-.85.92l-.09,10.07a1,1,0,0,0,.83.93c6.29,1.62,11.16,6.09,12.7,11.67a1.14,1.14,0,0,0,1.14.75l57.77.36h0a1.15,1.15,0,0,0,1.14-.74c1.66-5.56,6.61-10,12.92-11.51a1,1,0,0,0,.84-.92l.1-10.07a1,1,0,0,0-.83-.93C337.78,92.8,332.91,88.33,331.36,82.75Zm11.1,22C336,106.53,331,111,329,116.65l-55.95-.34c-1.87-5.66-6.84-10.2-13.24-12.11l.08-8.67c6.44-1.83,11.49-6.31,13.46-12l55.95.35c1.87,5.65,6.84,10.2,13.24,12.1Z"
                transform="translate(0.86 -0.94)"
                fill="#fff"
              />
            </g>
            <g id="text5880" style={{isolation: "isolate"}}>
              <text
                transform="translate(273.75 96.9) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Water Line
              </text>
              <text
                transform="translate(273.75 111.7) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                <tspan xmlSpace="preserve"> Broke!</tspan>
              </text>
            </g>
          </g>
          <g className="left-tags" id="left-tag-2">
            <g id="g6226-2">
              <g id="g6204-7">
                <g id="g6202-4">
                  <path
                    id="path6194-8"
                    d="M367.07,220.65l-46.9-.33A17.67,17.67,0,0,1,308.89,232l-.07,8.48a17.64,17.64,0,0,1,11.1,11.86l46.91.33A17.67,17.67,0,0,1,378.11,241l.07-8.49A17.62,17.62,0,0,1,367.07,220.65Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6196-2"
                    d="M371.21,215.78l-55.1-.4a12.79,12.79,0,0,1-3.74,8.88A12.41,12.41,0,0,1,304.1,228L304,244.49a12.69,12.69,0,0,1,11.8,12.73l55.11.4a12.73,12.73,0,0,1,12-12.57l.13-16.53A12.72,12.72,0,0,1,371.21,215.78Zm9,16.05-.08,9.86a1,1,0,0,1-.71.9,15.72,15.72,0,0,0-10.83,11.27,1,1,0,0,1-1,.72h0l-48.44-.35a1,1,0,0,1-1-.73,15.68,15.68,0,0,0-10.65-11.43,1,1,0,0,1-.69-.91l.08-9.85a1,1,0,0,1,.71-.9,15.71,15.71,0,0,0,10.83-11.27,1,1,0,0,1,1-.72h0l48.43.35a1,1,0,0,1,1,.73,15.65,15.65,0,0,0,10.65,11.42A1,1,0,0,1,380.16,231.83Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6198-6"
                    d="M384.7,226.9a1,1,0,0,0-.73-.26h-.25a10.76,10.76,0,0,1-10.53-11c0-.26,0-.52,0-.77a.93.93,0,0,0-.25-.72,1.06,1.06,0,0,0-.72-.31l-57.17-.41a1.3,1.3,0,0,0-.72.3,1,1,0,0,0-.27.72c0,.25,0,.51,0,.77A11,11,0,0,1,311,223a10.41,10.41,0,0,1-7.42,3.11h-.07l-.3,0a1,1,0,0,0-.71.27.88.88,0,0,0-.31.67L302,245.41a.92.92,0,0,0,.29.68,1,1,0,0,0,.71.27h.28a10.77,10.77,0,0,1,10.53,11,6.33,6.33,0,0,1-.05.76,1,1,0,0,0,.25.73,1,1,0,0,0,.73.31l57.16.41h0a1.06,1.06,0,0,0,1-1.1c0-.23,0-.45,0-.68a10.8,10.8,0,0,1,10.69-10.81h.3a1,1,0,0,0,.71-.27.92.92,0,0,0,.29-.67l.15-18.41A1,1,0,0,0,384.7,226.9Zm-1.81,18.15a12.72,12.72,0,0,0-12,12.57l-55.11-.4A12.71,12.71,0,0,0,304,244.48L304.1,228a12.44,12.44,0,0,0,8.27-3.69,12.83,12.83,0,0,0,3.74-8.88l55.1.4A12.72,12.72,0,0,0,383,228.52Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6200-2"
                    d="M368.81,219.5a1,1,0,0,0-1-.73l-48.43-.35h0a1,1,0,0,0-1,.72,15.7,15.7,0,0,1-10.83,11.27,1,1,0,0,0-.71.9l-.08,9.85a1,1,0,0,0,.69.91,15.68,15.68,0,0,1,10.65,11.43,1,1,0,0,0,1,.73l48.44.35h0a1,1,0,0,0,1-.72,15.72,15.72,0,0,1,10.83-11.27,1,1,0,0,0,.71-.9l.08-9.86a1,1,0,0,0-.7-.91A15.67,15.67,0,0,1,368.81,219.5Zm9.3,21.49a17.67,17.67,0,0,0-11.28,11.69l-46.91-.33a17.64,17.64,0,0,0-11.1-11.86l.07-8.48a17.67,17.67,0,0,0,11.28-11.69l46.9.33a17.62,17.62,0,0,0,11.11,11.85Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="text5880-3" style={{isolation: "isolate"}}>
              <text
                transform="translate(321.65 231.06) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Can&apos;t{" "}
              </text>
              <text
                transform="translate(321.65 243.69) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                find Line!
              </text>
            </g>
          </g>
          <g className="left-tags" id="left-tag-3">
            <g id="g6226-2-6">
              <g id="g6204-7-4">
                <g id="g6202-4-2">
                  <path
                    id="path6194-8-8"
                    d="M325.57,280.15l-46.9-.33a17.67,17.67,0,0,1-11.28,11.69l-.07,8.48a17.64,17.64,0,0,1,11.1,11.86l46.91.33a17.67,17.67,0,0,1,11.28-11.69l.07-8.49A17.62,17.62,0,0,1,325.57,280.15Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6196-2-4"
                    d="M329.71,275.28l-55.1-.4a12.79,12.79,0,0,1-3.74,8.88,12.41,12.41,0,0,1-8.27,3.69L262.48,304a12.69,12.69,0,0,1,11.8,12.73l55.11.4a12.73,12.73,0,0,1,12-12.57l.13-16.53A12.72,12.72,0,0,1,329.71,275.28Zm9,16.05-.08,9.86a1,1,0,0,1-.71.9A15.72,15.72,0,0,0,327,313.36a1,1,0,0,1-1,.72h0l-48.44-.35a1,1,0,0,1-1-.73A15.68,15.68,0,0,0,266,301.57a1,1,0,0,1-.69-.91l.08-9.85a1,1,0,0,1,.71-.9A15.71,15.71,0,0,0,277,278.64a1,1,0,0,1,1-.72h0l48.43.35a1,1,0,0,1,1,.73A15.65,15.65,0,0,0,338,290.42,1,1,0,0,1,338.66,291.33Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6198-6-3"
                    d="M343.2,286.4a1,1,0,0,0-.73-.26h-.25a10.76,10.76,0,0,1-10.53-11c0-.26,0-.52,0-.77a.93.93,0,0,0-.25-.72,1.06,1.06,0,0,0-.72-.31L273.59,273a1.3,1.3,0,0,0-.72.3,1,1,0,0,0-.27.72c0,.25,0,.51,0,.77a11,11,0,0,1-3.19,7.69,10.41,10.41,0,0,1-7.42,3.11H262l-.3,0a1,1,0,0,0-.71.27.88.88,0,0,0-.31.67l-.14,18.42a.92.92,0,0,0,.29.68,1,1,0,0,0,.71.27h.28a10.77,10.77,0,0,1,10.53,11,6.33,6.33,0,0,1-.05.76,1,1,0,0,0,.25.73,1,1,0,0,0,.73.31l57.16.41h0a1.06,1.06,0,0,0,1-1.1c0-.23,0-.45,0-.68a10.8,10.8,0,0,1,10.69-10.81h.3a1,1,0,0,0,.71-.27.92.92,0,0,0,.29-.67l.15-18.41A1,1,0,0,0,343.2,286.4Zm-1.81,18.15a12.72,12.72,0,0,0-12,12.57l-55.11-.4A12.71,12.71,0,0,0,262.48,304l.12-16.53a12.44,12.44,0,0,0,8.27-3.69,12.83,12.83,0,0,0,3.74-8.88l55.1.4A12.72,12.72,0,0,0,341.52,288Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6200-2-7"
                    d="M327.31,279a1,1,0,0,0-1-.73l-48.43-.35h0a1,1,0,0,0-1,.72,15.7,15.7,0,0,1-10.83,11.27,1,1,0,0,0-.71.9l-.08,9.85a1,1,0,0,0,.69.91A15.68,15.68,0,0,1,276.68,313a1,1,0,0,0,1,.73l48.44.35h0a1,1,0,0,0,1-.72,15.72,15.72,0,0,1,10.83-11.27,1,1,0,0,0,.71-.9l.08-9.86a1,1,0,0,0-.7-.91A15.67,15.67,0,0,1,327.31,279Zm9.3,21.49a17.67,17.67,0,0,0-11.28,11.69l-46.91-.33A17.64,17.64,0,0,0,267.32,300l.07-8.48a17.67,17.67,0,0,0,11.28-11.69l46.9.33A17.62,17.62,0,0,0,336.68,292Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="text5880-3-69" style={{isolation: "isolate"}}>
              <text
                transform="translate(281.08 289.5) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                New{" "}
              </text>
              <text
                transform="translate(281.08 302.13) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Marking
              </text>
            </g>
          </g>
          <g className="left-tags" id="left-tag-6">
            <g id="g6226-2-6-5">
              <g id="g6204-7-4-7">
                <g id="g6202-4-2-6">
                  <path
                    id="path6194-8-8-8"
                    d="M464.57,429.15l-46.9-.33a17.67,17.67,0,0,1-11.28,11.69l-.07,8.48a17.64,17.64,0,0,1,11.1,11.86l46.91.33a17.67,17.67,0,0,1,11.28-11.69l.07-8.49A17.62,17.62,0,0,1,464.57,429.15Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6196-2-4-4"
                    d="M468.71,424.28l-55.1-.4a12.79,12.79,0,0,1-3.74,8.88,12.41,12.41,0,0,1-8.27,3.69L401.48,453a12.69,12.69,0,0,1,11.8,12.73l55.11.4a12.73,12.73,0,0,1,12-12.57l.13-16.53A12.72,12.72,0,0,1,468.71,424.28Zm9,16.05-.08,9.86a1,1,0,0,1-.71.9A15.72,15.72,0,0,0,466,462.36a1,1,0,0,1-1,.72h0l-48.44-.35a1,1,0,0,1-1-.73A15.68,15.68,0,0,0,405,450.57a1,1,0,0,1-.69-.91l.08-9.85a1,1,0,0,1,.71-.9A15.71,15.71,0,0,0,416,427.64a1,1,0,0,1,1-.72h0l48.43.35a1,1,0,0,1,1,.73A15.65,15.65,0,0,0,477,439.42,1,1,0,0,1,477.66,440.33Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6198-6-3-6"
                    d="M482.2,435.4a1,1,0,0,0-.73-.26h-.25a10.76,10.76,0,0,1-10.53-11c0-.26,0-.52,0-.77a.93.93,0,0,0-.25-.72,1.06,1.06,0,0,0-.72-.31L412.59,422a1.3,1.3,0,0,0-.72.3,1,1,0,0,0-.27.72c0,.25,0,.51,0,.77a11,11,0,0,1-3.19,7.69,10.41,10.41,0,0,1-7.42,3.11H401l-.3,0a1,1,0,0,0-.71.27.88.88,0,0,0-.31.67l-.14,18.42a.92.92,0,0,0,.29.68,1,1,0,0,0,.71.27h.28a10.77,10.77,0,0,1,10.53,11,6.33,6.33,0,0,1-.05.76,1,1,0,0,0,.25.73,1,1,0,0,0,.73.31l57.16.41h0a1.06,1.06,0,0,0,1-1.1c0-.23,0-.45,0-.68a10.8,10.8,0,0,1,10.69-10.81h.3a1,1,0,0,0,.71-.27.92.92,0,0,0,.29-.67l.15-18.41A1,1,0,0,0,482.2,435.4Zm-1.81,18.15a12.72,12.72,0,0,0-12,12.57l-55.11-.4A12.71,12.71,0,0,0,401.48,453l.12-16.53a12.44,12.44,0,0,0,8.27-3.69,12.83,12.83,0,0,0,3.74-8.88l55.1.4A12.72,12.72,0,0,0,480.52,437Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6200-2-7-1"
                    d="M466.31,428a1,1,0,0,0-1-.73l-48.43-.35h0a1,1,0,0,0-1,.72,15.7,15.7,0,0,1-10.83,11.27,1,1,0,0,0-.71.9l-.08,9.85a1,1,0,0,0,.69.91A15.68,15.68,0,0,1,415.68,462a1,1,0,0,0,1,.73l48.44.35h0a1,1,0,0,0,1-.72,15.72,15.72,0,0,1,10.83-11.27,1,1,0,0,0,.71-.9l.08-9.86a1,1,0,0,0-.7-.91A15.67,15.67,0,0,1,466.31,428Zm9.3,21.49a17.67,17.67,0,0,0-11.28,11.69l-46.91-.33A17.64,17.64,0,0,0,406.32,449l.07-8.48a17.67,17.67,0,0,0,11.28-11.69l46.9.33A17.62,17.62,0,0,0,475.68,441Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="text5880-3-6" style={{isolation: "isolate"}}>
              <text
                transform="translate(413.14 446.36) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                4PM - 8PM
              </text>
            </g>
          </g>
          <g className="left-tags" id="left-tag-5">
            <g id="g6226-2-6-5-1">
              <g id="g6204-7-4-7-5">
                <g id="g6202-4-2-6-0">
                  <path
                    id="path6194-8-8-8-8"
                    d="M325.57,475.15l-46.9-.33a17.67,17.67,0,0,1-11.28,11.69l-.07,8.48a17.64,17.64,0,0,1,11.1,11.86l46.91.33a17.67,17.67,0,0,1,11.28-11.69l.07-8.49A17.62,17.62,0,0,1,325.57,475.15Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6196-2-4-4-8"
                    d="M329.71,470.28l-55.1-.4a12.79,12.79,0,0,1-3.74,8.88,12.41,12.41,0,0,1-8.27,3.69L262.48,499a12.69,12.69,0,0,1,11.8,12.73l55.11.4a12.73,12.73,0,0,1,12-12.57l.13-16.53A12.72,12.72,0,0,1,329.71,470.28Zm9,16.05-.08,9.86a1,1,0,0,1-.71.9A15.72,15.72,0,0,0,327,508.36a1,1,0,0,1-1,.72h0l-48.44-.35a1,1,0,0,1-1-.73A15.68,15.68,0,0,0,266,496.57a1,1,0,0,1-.69-.91l.08-9.85a1,1,0,0,1,.71-.9A15.71,15.71,0,0,0,277,473.64a1,1,0,0,1,1-.72h0l48.43.35a1,1,0,0,1,1,.73A15.65,15.65,0,0,0,338,485.42,1,1,0,0,1,338.66,486.33Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6198-6-3-6-0"
                    d="M343.2,481.4a1,1,0,0,0-.73-.26h-.25a10.76,10.76,0,0,1-10.53-11c0-.26,0-.52,0-.77a.93.93,0,0,0-.25-.72,1.06,1.06,0,0,0-.72-.31L273.59,468a1.3,1.3,0,0,0-.72.3,1,1,0,0,0-.27.72c0,.25,0,.51,0,.77a11,11,0,0,1-3.19,7.69,10.41,10.41,0,0,1-7.42,3.11H262l-.3,0a1,1,0,0,0-.71.27.88.88,0,0,0-.31.67l-.14,18.42a.92.92,0,0,0,.29.68,1,1,0,0,0,.71.27h.28a10.77,10.77,0,0,1,10.53,11,6.33,6.33,0,0,1-.05.76,1,1,0,0,0,.25.73,1,1,0,0,0,.73.31l57.16.41h0a1.06,1.06,0,0,0,1-1.1c0-.23,0-.45,0-.68a10.8,10.8,0,0,1,10.69-10.81h.3a1,1,0,0,0,.71-.27.92.92,0,0,0,.29-.67l.15-18.41A1,1,0,0,0,343.2,481.4Zm-1.81,18.15a12.72,12.72,0,0,0-12,12.57l-55.11-.4A12.71,12.71,0,0,0,262.48,499l.12-16.53a12.44,12.44,0,0,0,8.27-3.69,12.83,12.83,0,0,0,3.74-8.88l55.1.4A12.72,12.72,0,0,0,341.52,483Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6200-2-7-1-5"
                    d="M327.31,474a1,1,0,0,0-1-.73l-48.43-.35h0a1,1,0,0,0-1,.72,15.7,15.7,0,0,1-10.83,11.27,1,1,0,0,0-.71.9l-.08,9.85a1,1,0,0,0,.69.91A15.68,15.68,0,0,1,276.68,508a1,1,0,0,0,1,.73l48.44.35h0a1,1,0,0,0,1-.72,15.72,15.72,0,0,1,10.83-11.27,1,1,0,0,0,.71-.9l.08-9.86a1,1,0,0,0-.7-.91A15.67,15.67,0,0,1,327.31,474Zm9.3,21.49a17.67,17.67,0,0,0-11.28,11.69l-46.91-.33A17.64,17.64,0,0,0,267.32,495l.07-8.48a17.67,17.67,0,0,0,11.28-11.69l46.9.33A17.62,17.62,0,0,0,336.68,487Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="text5880-3-0-9-0" style={{isolation: "isolate"}}>
              <text
                transform="translate(277.09 485.93) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Schedule
              </text>
              <text
                transform="translate(277.09 500.73) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                <tspan xmlSpace="preserve"> Meeting</tspan>
              </text>
            </g>
          </g>
          <g className="left-tags" id="left-tag-4">
            <g id="g6226-2-6-5-1-1">
              <g id="g6204-7-4-7-5-0">
                <g id="g6202-4-2-6-0-8">
                  <path
                    id="path6194-8-8-8-8-0"
                    d="M405.75,353.74l-46.9-.34a17.66,17.66,0,0,1-11.29,11.69l-.07,8.49a17.6,17.6,0,0,1,11.1,11.85l46.91.33a17.64,17.64,0,0,1,11.29-11.68l.06-8.5A17.63,17.63,0,0,1,405.75,353.74Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6196-2-4-4-8-1"
                    d="M409.89,348.86l-55.11-.4a12.78,12.78,0,0,1-3.73,8.89,12.42,12.42,0,0,1-8.27,3.68l-.13,16.54a12.71,12.71,0,0,1,11.81,12.74l55.1.39a12.74,12.74,0,0,1,12-12.57l.13-16.53A12.71,12.71,0,0,1,409.89,348.86Zm8.94,16.05-.08,9.86a1,1,0,0,1-.7.9,15.7,15.7,0,0,0-10.83,11.27,1,1,0,0,1-1,.72h0l-48.44-.35a1,1,0,0,1-.95-.73,15.7,15.7,0,0,0-10.65-11.43.92.92,0,0,1-.69-.9l.08-9.86a1,1,0,0,1,.7-.9,15.68,15.68,0,0,0,10.83-11.26,1,1,0,0,1,1-.73h0l48.43.35a1,1,0,0,1,1,.73A15.66,15.66,0,0,0,418.14,364,1,1,0,0,1,418.83,364.91Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6198-6-3-6-0-1"
                    d="M423.37,360a1,1,0,0,0-.73-.26h-.25a10.76,10.76,0,0,1-10.53-11c0-.26,0-.52.05-.77a.94.94,0,0,0-.26-.72,1,1,0,0,0-.72-.3l-57.16-.41a1.25,1.25,0,0,0-.73.29.94.94,0,0,0-.26.72c0,.26,0,.51,0,.77a11,11,0,0,1-3.2,7.69,10.42,10.42,0,0,1-7.41,3.12h-.37a1,1,0,0,0-.72.26.91.91,0,0,0-.3.67l-.15,18.42a.93.93,0,0,0,.3.68,1,1,0,0,0,.71.28l.27,0a10.78,10.78,0,0,1,10.54,11c0,.25,0,.5-.05.76a.89.89,0,0,0,.25.72,1,1,0,0,0,.72.31l57.17.41h0a1.06,1.06,0,0,0,.72-.34,1,1,0,0,0,.26-.76c0-.23,0-.45,0-.68A10.81,10.81,0,0,1,422.23,380h.29a1.07,1.07,0,0,0,.71-.26.93.93,0,0,0,.3-.67l.14-18.42A.88.88,0,0,0,423.37,360Zm-1.8,18.15a12.73,12.73,0,0,0-12,12.57l-55.1-.39a12.71,12.71,0,0,0-11.81-12.74l.13-16.54a12.42,12.42,0,0,0,8.27-3.68,12.82,12.82,0,0,0,3.73-8.89l55.11.4A12.71,12.71,0,0,0,421.7,361.6Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                  <path
                    id="path6200-2-7-1-5-8"
                    d="M407.48,352.59a1,1,0,0,0-1-.74l-48.43-.35h0a1,1,0,0,0-1,.73,15.68,15.68,0,0,1-10.83,11.26.94.94,0,0,0-.7.9l-.08,9.86a.94.94,0,0,0,.69.91,15.67,15.67,0,0,1,10.65,11.42,1,1,0,0,0,.95.74l48.44.34h0a1,1,0,0,0,1-.72,15.7,15.7,0,0,1,10.83-11.27.94.94,0,0,0,.7-.9l.08-9.85a1,1,0,0,0-.69-.91A15.7,15.7,0,0,1,407.48,352.59Zm9.31,21.49a17.64,17.64,0,0,0-11.29,11.68l-46.91-.33a17.6,17.6,0,0,0-11.1-11.85l.07-8.49a17.66,17.66,0,0,0,11.29-11.69l46.9.34a17.63,17.63,0,0,0,11.11,11.84Z"
                    transform="translate(0.86 -0.94)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <g id="text5880-3-0-9" style={{isolation: "isolate"}}>
              <text
                transform="translate(357.09 361.93) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                Schedule
              </text>
              <text
                transform="translate(357.09 376.73) scale(1.11 1)"
                fontSize="10.1"
                fontFamily="Helvetica-Light, Helvetica"
                fontWeight="300"
                style={{isolation: "isolate"}}
              >
                <tspan xmlSpace="preserve"> Meeting</tspan>
              </text>
            </g>
          </g>
          <path
            className="motion-paths"
            id="left-mp-1"
            d="M609.64,337c-4.15.05-9.76,0-16.41-.18-3.24-.12-11.13-.39-18.67-1.14a195.12,195.12,0,0,1-35.46-7.16,197.9,197.9,0,0,1-29.05-10.19A183.71,183.71,0,0,1,485,304.74c-9.07-5.88-15.05-10.91-23.58-18.1-9.75-8.22-16.73-15-21.88-20-7.3-7.11-12.32-12.43-19.8-20.37q-10.35-11-21.88-24c-8.79-9.93-15.73-18.14-23.2-27-13.59-16.08-14.09-17.11-19.8-23.2-7.39-7.87-13.61-13.68-20.18-19.8-8.29-7.73-12.43-11.59-18.3-16a221,221,0,0,0-19.05-12.63c-7.56-4.67-11.45-7.06-17.16-9.62a81.5,81.5,0,0,0-16.22-5.66,75.7,75.7,0,0,0-16.6-1.89"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="left-mp-2"
            d="M610.41,333.8c-5.56.16-13.26.31-22.46.24-12.22-.1-20.4-.16-31.49-1.19-3.14-.29-13.86-1.35-27.81-4a230.06,230.06,0,0,1-26.14-6.3,227.89,227.89,0,0,1-28.88-11.29c-5.06-2.32-10.62-5.19-21.74-10.93-10.6-5.48-15.9-8.22-21.39-11.41-8.67-5-15.06-9.35-21.63-13.79-8.79-5.94-8.84-6.36-20.09-14.14-8.24-5.7-14.25-9.66-22.69-15.21-11.47-7.54-17.3-11.37-22.23-14.14-7.58-4.27-13.58-7.07-20.32-10.22-4.83-2.26-10.75-4.76-22.58-9.75-9-3.8-12.45-5.16-17.23-6.65a127.07,127.07,0,0,0-13-3.33c-5.75-1.15-10.23-1.62-11.89-1.78a114.62,114.62,0,0,0-14.85-.48"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="left-mp-3"
            d="M609.57,334.46c-20.06.48-38.25.21-54.23-.44-11.3-.46-23.88-1-40.62-2.68-4.29-.43-25.34-2.61-53.34-7.81-12.25-2.28-10.42-2.27-35.26-7.14-14-2.75-26.43-5.07-35.26-6.7-19.11-3.51-17.76-3.08-33.47-6-14.35-2.69-18.19-3.56-29-5.36-10.27-1.7-17.95-2.77-22.31-3.35s-10.57-1.39-19-2.23c-5.64-.56-11.68-1.15-19.64-1.56-5.72-.29-12.15-.48-19.19-.45"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="left-mp-4"
            d="M246.25,400.88a77,77,0,0,0,16.31.51c5-.38,7.23-1.06,18.55-2.75,5.14-.76,6.49-.89,11.16-1.54,3.37-.47,16-2.27,27.31-4.47,12.23-2.37,21.25-4.89,30.73-7.55,10.82-3,14.82-4.51,35.89-11.34,25.56-8.28,38.54-12.47,48.6-15.11,11.11-2.91,19.68-4.74,34.52-7.9s22.65-4.81,33.83-6.52c14.7-2.26,26.57-3.29,33.31-3.78,9.91-.72,19-.89,36.75-1.2,13.23-.23,24.26-.32,32.11-.35"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="left-mp-5"
            d="M248,504.22a141.69,141.69,0,0,0,20.31-2.74,146.57,146.57,0,0,0,20.32-5.86c11-4,18.72-8.29,27-12.89,2.72-1.52,11.35-6.4,25-15.63,19.9-13.45,34.2-25.14,38.3-28.53,15.77-13,14.33-13.53,31.65-28.13,11.87-10,21.71-18.3,35.94-27.74,16.73-11.09,30.44-17.74,42.2-23.45,13.06-6.33,21.92-10.63,35.17-14.85,9.27-2.95,20.09-6.39,34.78-7.81,7.45-.72,10.7-.42,29.69-1.56,7.25-.44,13.21-.87,17.2-1.18"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="left-mp-6"
            d="M248.63,583a124.37,124.37,0,0,0,46.47-14.26c13.56-7.31,22.39-15.45,29.58-22.18,22.93-21.48,34.4-32.22,44.89-43.84,6.46-7.15,8.42-9.66,42.78-52.28,21.69-26.91,32.72-40.55,42.25-49.65a317.38,317.38,0,0,1,38.55-31.16c15.43-10.62,24.35-16.77,38.56-22.18,17.49-6.66,32.95-8.37,43.83-9.51a212.22,212.22,0,0,1,28-1.05"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="right-mp-1"
            d="M1152.21,154.16a169.67,169.67,0,0,0-35.9,7.13,181.09,181.09,0,0,0-34.26,15.08c-13.12,7.4-22,14.48-29.88,20.83-10.15,8.16-13.16,11.65-32.89,30.42-14.23,13.54-24.47,23.28-37.83,35.09-15.53,13.72-23.29,20.58-35.08,29.05a310.67,310.67,0,0,1-37.83,23.3C898,320.53,884.31,327.57,865,333.42a218.19,218.19,0,0,1-31.8,7.13A231.19,231.19,0,0,1,806,342.74c-9,.22-16.79-.1-23-.55"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="right-mp-2"
            d="M1151.85,278.09c-23.09,1.14-42.44,3.29-57,5.29a422.29,422.29,0,0,0-41.61,7.32c-12.38,2.88-13.68,3.85-40.1,11.6-22.86,6.71-20,5.43-59.52,16.64-24.31,6.9-26.61,7.73-35,9.59-16.68,3.66-30.45,5.43-41.36,6.81-11.82,1.49-20.3,2.18-36.57,3.53-11.74,1-19.8,1.62-30.77,2-10.79.39-19.81.37-26.22.26"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="right-mp-3"
            d="M781.08,336c7,0,16.76.12,28.36.52s20.53.7,32.45,1.78c4.85.45,17.25,1.66,33.22,4.35,14,2.35,23.75,4.67,38.58,8.17,14.09,3.34,25,5.92,39.35,10.23,8.37,2.51,9.19,3,39.35,13.28,20.84,7.12,31.26,10.67,37.3,12.52,4.31,1.32,21.74,6.6,45.23,12,23,5.31,40.67,8.15,45.74,8.94,11.24,1.77,21,3,28.62,3.84"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            className="motion-paths"
            id="right-mp-4"
            d="M782,340a186,186,0,0,1,23-.5,216.6,216.6,0,0,1,24,2.51c13,1.87,19.51,2.81,27.29,5,11.1,3.12,18.5,6.88,31.55,13.52,2.58,1.31,4.94,2.55,28.29,16,22.31,12.87,24.93,14.49,29.05,17.53,5.69,4.2,7.5,6.13,21.53,19,21,19.3,19.5,17.31,32.3,29.29,19,17.8,17.11,17.29,31.3,30.3a421.7,421.7,0,0,0,37.05,31.05c15.44,11.35,24.23,17.82,37.56,23.53a130.79,130.79,0,0,0,44.57,10.27"
            transform="translate(0.86 -0.94)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <rect
            id="inner-logo-shadow"
            x="607.08"
            y="270.33"
            width="178"
            height="138"
            rx="17.9"
            opacity="0.39"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            fill="none"
          />
          <rect
            id="outer-logo-shadow"
            x="595.08"
            y="258.33"
            width="202"
            height="162"
            rx="30.13"
            opacity="0.39"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            fill="none"
          />
          <g id="logo-card">
            <path
              id="logo-stroke-gradient"
              d="M624.31,277.4H766c6.79,0,12.3,4.94,12.3,11v104c0,6.09-5.51,11-12.3,11H624.31c-6.8,0-12.31-4.94-12.31-11v-104C612,282.34,617.51,277.4,624.31,277.4Z"
              transform="translate(0.86 -0.94)"
              fill="url(#linear-gradient)"
            />
            <rect
              id="logo-bg"
              x="631.24"
              y="292.31"
              width="132.55"
              height="95.55"
              fill="#1c0732"
            />
            <image
              id="logo-img"
              width="1380"
              height="768"
              transform="translate(640.87 313.71) scale(0.08 0.07)"
              xlinkHref="data:image/png;base64,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"
              style={{isolation: "isolate"}}
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};
export default JordanCuadrado;
