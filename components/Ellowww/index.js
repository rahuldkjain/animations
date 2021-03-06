import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    gsap.set("#needle", {
      transformOrigin: "70% 75%",
    });

    var tl = new gsap.timeline({
      repeat: -1,
      repeatDelay: -2.71,
      repeatRefresh: true,
      ease: "Linear.easeNone",
    });
    tl.add("start");
    tl.to(
      "#needle",
      {
        rotateZ: 360,
        duration: 2.2,
        // repeat: -1,
        // repeatDelay: 0.2,
        ease: "Linear.easeNone",
      },
      "start"
    );
    tl.fromTo(
      "#zigzag",
      {
        strokeDashoffset: 100,
      },
      {
        strokeDashoffset: 0,
        duration: 5.4,
      },
      "start"
    );
    tl.fromTo(
      "#zigzag",
      {
        fill: "none",
      },
      {
        fill: "#05203c",
        duration: 1,
      },
      "start+=1"
    );
  }, []);
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180.35"
        height="225"
        viewBox="0 0 164.35 218"
      >
        <g id="loader" transform="translate(-877.82 -431)">
          <path
            id="needle-ring"
            d="M233,204.47a34.46,34.46,0,1,1,34.46-34.46A34.5,34.5,0,0,1,233,204.47m0-63.62A29.15,29.15,0,1,0,262.15,170,29.187,29.187,0,0,0,233,140.85"
            transform="translate(727 307)"
            fill="#12bcc6"
          />
          <path
            id="border"
            d="M233,129.15a40.86,40.86,0,0,1,38.8,53.64h28.57a9.649,9.649,0,0,1,9.65,9.65V327.2a9.649,9.649,0,0,1-9.65,9.65H165.63a9.649,9.649,0,0,1-9.65-9.65V192.45a9.649,9.649,0,0,1,9.65-9.65h28.58A40.869,40.869,0,0,1,233,129.15m0-5.15a46.06,46.06,0,0,0-46.01,46,45.366,45.366,0,0,0,.64,7.64H165.62a14.818,14.818,0,0,0-14.8,14.8V327.2a14.818,14.818,0,0,0,14.8,14.8H300.37a14.818,14.818,0,0,0,14.8-14.8V192.45a14.818,14.818,0,0,0-14.8-14.8H278.36A46,46,0,0,0,233,124"
            transform="translate(727 307)"
            fill="#12bcc6"
          />
          <path
            id="needle"
            d="M222.22,156.14a1.206,1.206,0,0,0-.2,1.69l7.27,9.23a4.751,4.751,0,0,0-.83,1.65,4.816,4.816,0,1,0,5.92-3.35,4.732,4.732,0,0,0-3.18.24l-7.29-9.26a1.206,1.206,0,0,0-1.69-.2"
            transform="translate(727 307)"
            fill="#05203c"
          />
          <path
            id="zigzag"
            pathLength="100"
            stroke="black"
            strokeWidth="1"
            d="M192.14,194.98h8.32a41.21,41.21,0,0,0,10.81,9.79h-9.34v14.19h14.19v-11.6a40.49,40.49,0,0,0,9.78,2.99v42.37h-9.78V228.74H192.14Zm57.73,129.68H168.16v-9.79h23.97V300.68H168.16V194.98h9.78v95.91h23.98v23.97h38.16V290.89h9.78v33.77Zm-33.76-33.77h9.78v9.78h-9.78Zm33.76-14.19H192.13V242.94h9.79v23.98h38.16v-56.6a40.755,40.755,0,0,0,9.78-3.04V276.7Zm14.2-80.15c.44-.51.86-1.04,1.27-1.57h8.51v9.79h-9.78Zm33.76,128.11H264.07v-9.79h23.98V290.9h9.78Zm0-47.96h-9.78v-9.78h9.78Zm0-23.98H273.85v47.96h-9.78V218.96h9.78v23.98h14.2V218.96h9.78Zm0-47.95h-9.78v-9.79h9.78Z"
            transform="translate(727 307)"
            fill="none"
          />
        </g>
      </svg>
    </Container>
  );
};
export default Component;
