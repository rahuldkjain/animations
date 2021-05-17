import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    // set f, m color to green
    gsap.set("#f, #m", {
      fill: "#299926",
    });

    // main timeline
    var main = new gsap.timeline({ repeat: -1 });

    // stagger peacefm
    main.set(".upper_text", {
      visibility: "visible",
    });
    main.fromTo(
      ".upper_text",
      {
        y: 950,
      },
      {
        y: 0,
        stagger: 0.1,
        ease: "elastic.out(1, 0.4)",
        duration: 1.8,
      }
    );

    main.add("check_1");

    // bring backgrounds
    main.set(
      "#green_background",
      {
        visibility: "visible",
      },
      "check_1-=1.2"
    );
    main.fromTo(
      "#green_background",
      {
        x: -400,
      },
      {
        x: 0,
        ease: "Linear.easeNone",
        duration: 0.4,
      },
      "check_1-=1.2"
    );
    main.set(
      "#orange_background",
      {
        visibility: "visible",
      },
      "check_1-=1.2"
    );
    main.fromTo(
      "#orange_background",
      {
        x: 400,
      },
      {
        x: 0,
        ease: "Linear.easeNone",
        duration: 0.4,
      },
      "check_1-=1.2"
    );

    main.add("check_2");

    // change f,m color to orange
    main.to(
      "#f, #m",
      {
        fill: "#f7a30a",
      },
      "check_1-=1.2"
    );

    // reveal lower text
    main.set(
      ".lower_text",
      {
        visibility: "visible",
      },
      "check_2-=1"
    );
    main.fromTo(
      ".lower_text",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.05,
      },
      "check_2-=1"
    );
  }, []);
  return (
    <Container>
      <div className="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="900"
          height="900"
          viewBox="0 0 1379.239 550"
        >
          <g id="peacefm" transform="translate(-271 -315)">
            <path
              id="green_background"
              d="M695.34,766.01,708.6,641.565h519.36L1215.332,766.01Z"
              transform="translate(0 1)"
              fill="#299926"
            />
            <path
              id="orange_background"
              d="M1216.42,766.038l12.419-124.284,392.476.5-12.46,123.307Z"
              transform="translate(0 1)"
              fill="#f7a32a"
            />
            <path
              id="p"
              className="upper_text"
              d="M245.74,310.94c17.07-9,37.82-12,56.4-6.14,13.77,4.33,25.24,14.43,32.4,26.84,9.9,17,13.09,37.12,12.82,56.58-.7,21.17-4.56,42.35-12.44,62.06-6.24,15.46-15.18,30-27.26,41.58-15.45,15.44-36.64,25.55-58.64,26-13.39.25-27.6-3.58-37.2-13.37-2.6-2.41-3.92-5.89-6.74-8.08-4.13,32.31-8.71,64.56-13,96.85-.41,1.17.13,4-2.06,3.34H126.37c6.39-46.13,12.51-92.29,18.79-138.43,6.72-50.69,14.3-101.29,19.08-152.21,18.79-.09,37.59,0,56.39,0-.11,8.83-.26,17.66-.2,26.49C227.67,324,235.8,316.11,245.74,310.94Zm1.39,44.18c-9.86,2.52-17.9,10-22.53,18.91-4.76,8.72-5.39,18.79-6.72,28.43-1.33,10.25-2.85,20.47-4.08,30.73-.82,10.21,1.32,21.82,9.56,28.71,7.63,6.42,18.93,6,27.53,1.87,9.83-4.81,16.42-14.27,20.78-24,7.05-16.5,9.67-34.72,8.91-52.58-.79-9.64-3.14-20.06-10.49-26.92C264,354.52,255,353.43,247.13,355.12Z"
              transform="translate(144.63 102.49)"
              fill="#299926"
            />
            <path
              id="e-1"
              className="upper_text"
              d="M434.44,306.47c19.4-5.94,40.81-6.63,60.12,0a59.53,59.53,0,0,1,33.31,28.69c9.89,18.64,10.91,40.48,9.23,61.09-1.37,12.33-2.82,24.77-6.54,36.65-39-.08-78.09.18-117.13-.13a27.52,27.52,0,0,0,8.94,25.2c7.56,6.8,17.81,9.54,27.71,10.57,20.14,1.5,40.38-1.75,59.62-7.66.89,15.05,1.74,30.1,2.4,45.16-21.72,8.05-45,11.08-68.07,11.45-19,.05-38.56-2.65-55.29-12.12A67.73,67.73,0,0,1,358.28,470c-7.88-20.65-7.33-43.48-3.42-64.93a144.571,144.571,0,0,1,23.52-56.45C391.86,329.07,411.61,313.51,434.44,306.47Zm1.82,48c-9.61,8.73-14.72,21.27-17.56,33.7,20,0,40-.05,60,0a57.27,57.27,0,0,0-1.25-25.87c-1.84-6.17-6.14-11.86-12.31-14.15-9.8-3.77-21.29-.71-28.88,6.28Z"
              transform="translate(144.63 102.49)"
              fill="#299926"
            />
            <path
              id="peacefm-a"
              className="upper_text"
              d="M567.18,319.64c21.58-11,45.75-16.18,69.81-17.66,17.94-.77,36.68.6,53,8.72a53.45,53.45,0,0,1,26.61,30.9c6.72,19.51,4.36,40.61,1.48,60.61-2.88,21-5.66,42-8.49,62.94-2.14,16.06-4,32.26-3.25,48.49-19.55.22-39.1.07-58.65.08,0-6.8-.6-13.57-1-20.34-8.86,9-19.35,16.63-31.53,20.38-17.31,5.46-37.11,6.31-53.63-2.12-13.93-7-23.5-21.13-26.08-36.36-2.79-16.29.41-33.34,7.8-48,7.77-15.5,21.13-27.63,36.38-35.59,23.51-12.44,50.48-16.34,76.77-16.86.69-6.93.46-14.88-4.86-20.08-6.79-6.3-16.66-7-25.46-7a110.49,110.49,0,0,0-52.45,14.05C571,347.78,569.55,333.63,567.18,319.64Zm49.87,102.84c-8.06,4-14.86,11.06-17.13,19.9-1.86,7-2.32,15,1.58,21.4,3,5,8.89,7.56,14.56,7.77a32.84,32.84,0,0,0,25.29-11,34.269,34.269,0,0,0,7.81-17.28c1.31-9.2,2.49-18.42,3.8-27.62C640.75,415.77,628.13,416.94,617.05,422.48Z"
              transform="translate(144.63 102.49)"
              fill="#299926"
            />
            <path
              id="peacefm-c"
              className="upper_text"
              d="M844,303.05c18.95-1.91,38.47-.62,56.48,5.88-5.56,16.28-10.58,32.75-16,49.07-13.89-4.84-29.42-6.51-43.69-2.4-18.51,5.59-31.8,22.24-36.91,40.41-4.4,15.87-5.9,33.72,1.36,49,5.37,11.52,17.17,19.27,29.69,20.64a83.48,83.48,0,0,0,36.73-4.77c-.12,16.32-.13,32.65-.8,49-15.51,5.81-32.25,7.46-48.7,7.7-20-.15-40.68-4.1-57.23-15.83-15.53-10.52-25.41-27.85-29.19-46-4-19.48-2.61-39.82,2-59.06,7.07-29.3,24.57-56.3,49.69-73.24C804.15,312,823.86,305.25,844,303.05Z"
              transform="translate(144.63 102.49)"
              fill="#299926"
            />
            <path
              id="e-2"
              className="upper_text"
              d="M959.14,310.57a103,103,0,0,1,54.94-7.91c13.55,1.8,27,6.93,37.07,16.42,10.82,9.91,17.23,23.85,20,38.09,3.71,18.85,2.37,38.29-.81,57.12a141.272,141.272,0,0,1-4,18.51c-39.27.33-78.56.06-117.83.13-.5,8.09,1.5,16.64,7.1,22.73,7.44,8.31,18.74,11.69,29.5,12.87,20.33,1.59,40.8-1.59,60.2-7.65.83,15.09,1.84,30.17,2.38,45.27a186,186,0,0,1-41.57,9.65c-17.64,2-35.64,2.73-53.19-.43-16.13-2.84-32-9.6-43.68-21.38-10.73-10.68-17.14-25.09-19.8-39.86-3.12-17.49-1.81-35.52,1.77-52.84a143.931,143.931,0,0,1,25.5-56.43,109.848,109.848,0,0,1,42.42-34.29Zm11.67,44.84c-8.86,8.74-13.9,20.72-16.4,32.75,20-.06,40,0,60,0,1.33-8.92,1.19-18.2-1.68-26.82-2-6.09-6.63-11.52-12.86-13.51C989.76,344.42,978.22,348,970.81,355.41Z"
              transform="translate(144.63 102.49)"
              fill="#299926"
            />
            <path
              id="f"
              className="upper_text"
              d="M1180.06,215.48c19-4.59,39.09-3.65,57.86,1.37-3.25,16.69-7.25,33.24-10.64,49.92a62.749,62.749,0,0,0-20.21-2.41,26.18,26.18,0,0,0-22.13,11.82c-5.78,8.8-7.41,19.51-8.82,29.74h38.46q-3.3,23.4-6.28,46.83c-12.76.17-25.52,0-38.28.1-7,53.65-14.44,107.25-21.67,160.88h-65.16c7.44-53.61,14.58-107.26,21.81-160.89h-27.65q3.08-23.49,6.3-47c9.17,0,18.35.05,27.53,0,1.8-10.33,3.13-20.86,6.66-30.81a95.51,95.51,0,0,1,22.46-37.15,86.23,86.23,0,0,1,39.76-22.4Z"
              transform="translate(144.63 102.49)"
              fill="#f7a30a"
            />
            <path
              id="m"
              className="upper_text"
              d="M1427.88,305.83a72.22,72.22,0,0,1,41.3-1.83,44,44,0,0,1,23.67,15.32c9.28,11.79,12.2,27.2,12.7,41.85.43,13.41-1.59,26.71-3.33,40Q1494.6,457.42,1487,513.7q-32.05.06-64.1,0c4.65-32.8,8.9-65.66,13.42-98.48,1.59-13.56,4.5-27.17,3.11-40.88-.73-5.72-2.24-11.91-6.82-15.79-5-4.43-12.41-4.61-18.56-3-9.28,2.52-16.22,10.31-19.83,19-3.24,7.14-4,15-5,22.72-5.33,38.83-10.47,77.68-15.81,116.51h-64c4.77-34.18,9.24-68.39,13.94-102.57,1.38-12.58,4.38-25.17,2.92-37.87-.77-5.6-2.65-11.55-7.25-15.17-3.88-3.13-9.15-3.84-14-3.26-10.44,1.5-19.28,9.07-23.67,18.48-4.67,9.23-4.89,19.76-6.47,29.77C1270,440,1264.86,476.8,1260.1,513.68q-32.07.11-64.15,0c6.21-44.81,12.16-89.66,18.24-134.49q4.9-36.56,8.41-73.29h55.68c-.4,8.76-.82,17.53-.6,26.31,6.27-5.76,12-12.17,19.32-16.75,16.35-11.49,37.43-16.34,57.08-12.26,8.78,1.86,17.33,5.83,23.6,12.39A43.41,43.41,0,0,1,1388.05,334C1398.76,321.6,1412.13,311,1427.88,305.83Z"
              transform="translate(144.63 102.49)"
              fill="#f7a30a"
            />
            <path
              id="o_down_1"
              className="lower_text"
              d="M649,565.19c8.83-.44,18.4,1.79,24.72,8.35,7.23,7.14,9.43,17.92,8.77,27.75-.86,11.33-4.3,22.89-11.81,31.64-8.17,9.73-21.16,14.93-33.79,14.13-8-.31-16.09-3.28-21.53-9.29-6.08-6.55-8.19-15.84-7.9-24.56.36-13,4.56-26.32,13.82-35.7A41.774,41.774,0,0,1,649,565.19Zm-4.52,18.68c-4.78,2.2-7.38,7.24-9.07,12a53.339,53.339,0,0,0-2.68,22.35c.52,4,2,8.62,6,10.35,4.22,1.83,9.06-.42,11.62-3.94,4.53-6.08,6.12-13.75,7-21.13.32-5.69.54-11.87-2.63-16.88-2.04-3.43-6.72-4.4-10.2-2.75Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="n_down_1"
              className="lower_text"
              d="M747.09,565.86c7.91-1.67,17.52-.43,22.78,6.33,5,6.8,5.34,15.81,4.49,23.91-2.2,16.48-4.47,32.95-6.61,49.44q-12.36.12-24.7,0c1.89-15.47,4.23-30.87,6.21-46.33.44-3.84.64-8.21-1.93-11.39-2.11-2.6-5.9-2.61-8.88-1.9-5.3,1.62-8.36,7-9.16,12.17-2.48,15.82-4.15,31.77-6.71,47.57-8.19-.21-16.38,0-24.57-.12,3.55-26.24,7.55-52.44,10.1-78.8,7.11-.06,14.22,0,21.33,0-.06,3.35-.11,6.7-.1,10C734.1,571.61,740,567.19,747.09,565.86Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="l_down"
              className="lower_text"
              d="M807.42,532.56c8.19.1,16.39,0,24.6.05a30.587,30.587,0,0,1-1.34,6.83c8.51.18,17-.08,25.54.1,3.1-4.38,8.24-7.46,13.74-6.88,4.38,0,7.83,3.18,9.72,6.89,68.37-.14,136.74,0,205.11,0v.24c-68.39-.2-136.78,0-205.17-.11.3,3.58.41,7.42-1.52,10.61-3.69,7.41-15.09,10.33-21.09,4.08-3.84-4-2.85-10.06-.81-14.65-8.53.1-17.07-.35-25.58.45-.77,11.9-3.11,23.67-4.42,35.53-3.16,23.33-6.28,46.67-9.55,70-8.22-.12-16.44,0-24.66-.08,4.89-35.36,9.57-70.75,14.4-106.12a56.524,56.524,0,0,1,1.03-6.94Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="i_down"
              className="lower_text"
              d="M851.82,566.77c8.25-.1,16.51-.07,24.77,0-3.54,26.25-7.3,52.49-10.53,78.78-8.3.11-16.6.07-24.9,0Q846.58,606.17,851.82,566.77Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="n_down_2"
              className="lower_text"
              d="M941.19,565.53c7.4-1.1,16.1.36,20.93,6.62,5.29,6.76,5,15.87,4.49,24-2,16.5-4.57,32.92-6.54,49.42-8.26.06-16.52,0-24.78,0,2.08-15.14,4.07-30.29,6.11-45.43.37-4.31,1.08-9.61-2.37-12.92-4.28-3.48-11.09-1.41-14.12,2.83-2.69,3.31-3.41,7.63-4,11.74-1.88,14.59-3.92,29.17-5.86,43.76H890.32c3.45-26.3,7.39-52.54,10.24-78.91,7,.1,14,0,21.06.05-.07,3.42-.1,6.84-.16,10.26C926.57,571.15,933.41,566.59,941.19,565.53Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="e_down"
              className="lower_text"
              d="M1025,565.33c10.14-1.17,21.88,2.4,26.9,11.94,6.12,11.53,4.28,25.29,1.42,37.5-15,.21-29.94,0-44.91.1-.23,5.24,2.82,10.42,7.91,12.09,9.4,3.32,19.69,1.19,29-1.41.3,5.65.48,11.31,1,17-9,3.48-18.7,4.54-28.26,4.47-8.4-.15-17.29-2.28-23.58-8.15-5.23-4.69-8-11.58-8.76-18.45-1.38-15,3.26-30.79,13.44-42.08A39.4,39.4,0,0,1,1025,565.33Zm-6.71,19.07c-4.24,3.23-6.13,8.43-7.73,13.31,7.69.4,15.39,0,23.09.19.14-4.36.7-9.3-2.22-12.94-3.25-3.96-9.43-3.46-13.19-.56Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="dot_down"
              className="lower_text"
              d="M1114.54,616.86c5.46-1.22,12,1.19,14.17,6.61,3.24,8.45-1,19.55-9.78,22.68-5.59,2.06-13.08,1-16.23-4.56C1097.43,632.14,1104,618.88,1114.54,616.86Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="c_down"
              className="lower_text"
              d="M1173.33,571.44a49.39,49.39,0,0,1,39.76-3.46c-2.15,6-4,12.17-6,18.23-6.14-1.5-12.9-2.57-18.84.22-8.6,3.93-13.11,13.69-13.08,22.8-.49,5.77,1.3,12.13,6.27,15.56,6.17,4.15,14.13,2.83,20.84.84.11,6.17-.51,12.32-.51,18.48a57.791,57.791,0,0,1-26.18,2.32c-8.33-1.26-16.55-5.51-21-12.84-5.58-9-5.76-20.26-3.66-30.35C1153.45,590.12,1161.54,578,1173.33,571.44Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="o_down_2"
              className="lower_text"
              d="M1261.17,565.42c9.23-1.08,19.37.91,26.37,7.39,6.43,6,9.35,14.91,9.38,23.52.4,14.9-4.4,30.75-15.88,40.81a42,42,0,0,1-36.86,8.89c-7.12-1.72-13.76-6.07-17.48-12.46-4.74-7.87-5.57-17.51-4.3-26.44,1.65-14.49,9.06-29.07,22.08-36.41a41.849,41.849,0,0,1,16.69-5.3Zm-1.81,18.3c-6.08,2.63-8.81,9.39-10.48,15.36-1.71,7.58-3,15.66-.72,23.28.95,3.16,3.38,6.2,6.84,6.68,4.55,1,8.59-2.35,10.9-5.94,3.71-5.91,5.2-12.94,5.89-19.81.36-5.53.47-11.53-2.42-16.46C1267.46,583.39,1262.86,582.25,1259.36,583.72Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
            <path
              id="m_down"
              className="lower_text"
              d="M1343.47,576.47c5.53-5.07,11.76-10.09,19.52-11,9-1.88,19.83,2.21,22.48,11.67,5.19-5.58,11.67-10.44,19.41-11.55,7.63-1.42,17,.35,21.3,7.45s4.4,16,3.33,24.06c-2.12,16.14-4.34,32.26-6.45,48.4-8.16.07-16.31,0-24.45,0,1.78-11.13,3-22.34,4.65-33.49.89-7.38,2.65-15,1.09-22.34-1.52-5.63-9.35-5.56-12.91-2-4,3.3-5,8.69-5.54,13.57-1.86,14.75-4.28,29.43-5.79,44.23-8.18.16-16.36,0-24.53.06,2.07-14.45,4-28.93,5.9-43.41.57-4.54,1.42-9.4-.63-13.71-1.93-3.81-7.19-3.81-10.5-2-4.58,2.43-6.71,7.66-7.25,12.58-2,15.5-4.25,31-6.23,46.49-8.13.1-16.25,0-24.37.05,3.43-26.3,7.51-52.51,10.19-78.9h21C1343.58,570,1343.47,573.22,1343.47,576.47Z"
              transform="translate(144.63 102.49)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};
export default Component;
