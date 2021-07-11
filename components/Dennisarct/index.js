import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    const revealMask = (target, fDashOffset, duration) => {
      var tl = new gsap.timeline();
      tl.to(target, {
        strokeDashoffset: fDashOffset,
        ease: "Linear.easeNone",
        duration: duration,
      });
      return tl;
    };
    const type = (target, duration) => {
      var tl = new gsap.timeline();
      tl.fromTo(
        target,
        {
          attr: {
            d: "M0,110 h0",
          },
        },
        {
          attr: {
            d: "M0,110 h1100",
          },
          duration: duration,
        }
      );
      return tl;
    };
    const typeTimeline = () => {
      var tl = new gsap.timeline();
      tl.add("one");
      tl.add(type("#line-1", 30), "one");
      tl.add("two");
      tl.add(type("#line-2", 30), "two-=27");
      return tl;
    };

    const derivation = () => {
      var tl = new gsap.timeline();
      tl.add("four");
      tl.add(revealMask("#mask-path-d-1", 60, 0.5), "four");
      tl.add("five");
      tl.add(revealMask("#mask-path-d-2", 100, 0.5), "five");
      tl.add("six");
      tl.add(revealMask("#mask-path-d-3", 120, 0.5), "six");
      tl.add("seven");
      tl.add(revealMask("#mask-path-d-4", 0, 0.5), "seven");
      tl.add("eight");
      tl.add(revealMask("#mask-path-d-5", 0, 0.5), "eight");
      tl.add("nine");
      tl.add(revealMask("#mask-path-d-6", 60, 0.5), "nine");
      tl.add("ten");
      tl.add(revealMask("#mask-path-d-7", 0, 0.5), "ten");
      tl.add("eleven");
      tl.add(revealMask("#mask-path-d-8", 200, 0.7), "eleven");
      tl.add("twelve");
      tl.add(revealMask("#mask-path-d-9", 0, 0.5), "twelve");
      tl.add("thirteen");
      tl.add(revealMask("#mask-path-d-10", 60, 0.5), "thirteen");
      tl.add("fourteen");
      tl.add(revealMask("#mask-path-d-11", 60, 0.3), "fourteen");
      tl.add("fifteen");
      tl.add(revealMask("#mask-path-d-12", 60, 0.3), "fifteen");
      tl.add("sixteen");
      tl.add(revealMask("#mask-path-d-13", 60, 0.5), "sixteen");
      tl.add("seventeen");
      tl.add(revealMask("#mask-path-d-14", 100, 0.5), "seventeen");
      tl.add("eighteen");
      tl.add(revealMask("#mask-path-d-15", 0, 0.5), "eighteen");
      tl.add("nineteen");
      tl.add(revealMask("#mask-path-d-16", 240, 0.5), "nineteen");
      tl.add("twenty");
      tl.add(revealMask("#mask-path-d-17", 60, 0.5), "twenty");
      tl.add("twentyOne");
      tl.add(revealMask("#mask-path-d-18", 120, 0.5), "twentyOne");
      tl.add("twentyTwo");
      tl.add(revealMask("#mask-path-d-19", 0, 0.5), "twentyTwo");
      tl.add("twentyThree");
      tl.add(revealMask("#mask-path-d-20", 60, 0.5), "twentyThree");
      tl.add("twentyFour");
      tl.add(revealMask("#mask-path-d-21", 0, 0.5), "twentyFour");
      tl.add("twentyFive");
      tl.add(revealMask("#mask-path-d-22", 60, 0.5), "twentyFive");
      tl.add("twentySix");
      tl.add(revealMask("#mask-path-d-23", 0, 0.5), "twentySix");
      tl.add("twentySeven");
      tl.add(revealMask("#mask-path-d-24", 200, 0.5), "twentySeven");
      tl.add("twentyEight");
      tl.add(revealMask("#mask-path-d-25", 100, 0.5), "twentyEight");
      tl.add("twentyNine");
      tl.add(revealMask("#mask-path-d-26", 0, 0.5), "twentyNine");
      tl.add("thirty");
      tl.add(revealMask("#mask-path-d-27", 60, 0.5), "thirty");
      tl.add("thirtyOne");
      tl.add(revealMask("#mask-path-d-28", 0, 0.5), "thirtyOne");
      tl.add("thirtyTwo");
      tl.add(revealMask("#mask-path-d-29", 60, 0.5), "thirtyTwo");
      tl.add("thirtyThree");
      tl.add(revealMask("#mask-path-d-30", 0, 0.5), "thirtyThree");
      tl.add("thirtyFour");
      tl.add(revealMask("#mask-path-d-31", 0, 0.5), "thirtyFour");
      tl.add("thirtyFive");
      tl.add(revealMask("#mask-path-d-32", 140, 0.5), "thirtyFive");
      tl.add("thirtySix");
      tl.add(revealMask("#mask-path-d-33", 0, 0.5), "thirtySix");
      tl.add("thirtySeven");
      tl.add(revealMask("#mask-path-d-34", 0, 0.5), "thirtySeven");
      tl.add("thirtyEight");
      tl.add(revealMask("#mask-path-d-35", 0, 0.5), "thirtyEight");
      tl.add("thirtyNine");
      tl.add(revealMask("#mask-path-d-36", 0, 0.5), "thirtyNine");
      tl.add("fourty");
      tl.add(revealMask("#mask-path-d-37", 140, 0.5), "fourty");
      tl.add("fourtyOne");
      tl.add(revealMask("#mask-path-d-38", 0, 1), "fourtyOne");
      tl.add("fourtyTwo");
      tl.add(revealMask("#mask-path-d-39", 200, 0.5), "fourtyTwo");
      tl.add("fourtyThree");
      tl.add(revealMask("#mask-path-d-40", 0, 1), "fourtyThree");
      tl.add("fourtyFour");
      tl.add(revealMask("#mask-path-d-41", 200, 0.7), "fourtyFour");
      tl.timeScale(1.5);
      return tl;
    };

    var tl = new gsap.timeline();
    tl.add("one");
    tl.set(
      "#edit-icon",
      {
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: "0.3",
      },
      "one"
    );
    tl.set(
      "#edit-icon-bg",
      {
        fill: "red",
      },
      "one"
    );
    tl.add(revealMask("#mark-mask", 600, 0.5), "one");
    tl.add("two");
    tl.add(revealMask("#arrow-line-mask", 0, 0.5), "two");
    tl.add("three");
    tl.add(revealMask("#arrow-head-mask", 0, 0.6), "three");
    tl.add("four");
    tl.add(derivation(), "four");
    tl.add("fourtyFive");
    tl.add(revealMask("#graph-mask", 1000, 3), "fourtyFive+=1");
    tl.add("fourtySix");
    tl.set(
      "#edit-icon",
      {
        fill: "#070707",
        stroke: "#070707",
        strokeWidth: "0.3",
      },
      "fourtySix"
    );
    tl.set(
      "#edit-icon-bg",
      {
        fill: "#ffffff",
      },
      "fourtySix"
    );
    tl.set(
      "#type-icon-bg",
      {
        fill: "#cfcfcf",
      },
      "fourtySix"
    );
    tl.add("fourtySeven");
    tl.add(typeTimeline(), "fourtySeven");
    tl.pause();

    tl.restart();
    setInterval(() => {
      tl.restart();
    }, 28000);
  }, []);
  return (
    <Container>
      <div className="svg-container">
        <svg
          id="platform-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1414 924"
        >
          <image
            width="1414"
            height="924"
            xlinkHref="EmbededPlatformContent.png"
            style={{"isolation": "isolate"}}
          />
          <defs>
            <g id="derivation-mask">
              <mask id="mask-p-1">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-1"
                  d="M646.33,598.67a32.39,32.39,0,0,1-1.43-6.14,40,40,0,0,1-.11-7.57c.14-2.94.21-4.44.77-6a13.85,13.85,0,0,1,2.63-4.5"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-2">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-2"
                  d="M656.31,602c-5.52,0-9.93-.21-13-.44a35,35,0,0,1-6-.87,23.14,23.14,0,0,1-6.47-2.42,20.36,20.36,0,0,1-3.84-2.85"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-3">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-3"
                  d="M657,623.57a19.4,19.4,0,0,1-4.5,1.32,4.62,4.62,0,0,0-2.08.55,8,8,0,0,1-2.09,1.31c-.84.22-1-.12-1.86.11-1.66.48-2.5,1.91-3.07,1.54-.38-.24-.17-.79-.55-1.1-.93-.74-3.3,1.82-4.28,1s-.74-2.61-.11-3.73,1.5-1,3.18-2.52a7,7,0,0,0,2.2-3.07,5,5,0,0,0-.11-3.62,5.13,5.13,0,0,0-3.07-2.53c-1.16-.4-1.23,0-3.51-.33-1.56-.21-1.89-.44-3.84-.76-1.14-.19-2.06-.28-2.64-.33"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-4">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-4"
                  d="M697.91,573.31A9,9,0,0,0,688,575.1a16,16,0,0,0-2.38,3.76,31.82,31.82,0,0,0-2.57,5.55,29.21,29.21,0,0,0-1,4.36,36.13,36.13,0,0,0-.8,6.94,30.94,30.94,0,0,0,.8,6.54c.7,3.48,1.14,3.48,1.58,6.35.23,1.47.05,1,.4,6.14.25,3.7.37,4.27,0,5.35a8.66,8.66,0,0,1-3.17,4,15,15,0,0,1-6.15,2.77,83.87,83.87,0,0,0-15.66,5.55"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-5">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-5"
                  d="M707.92,608.19c.38.31,1,.76,1.7,1.28,1.52,1.07,2.1,1.29,3.54,2.25,1.71,1.15,2.56,1.72,3,2.5a5.56,5.56,0,0,1,.73,3.53,5.34,5.34,0,0,1-1.95,3.53,5.39,5.39,0,0,1-4.08,1"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-6">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-6"
                  d="M734.71,620a19.6,19.6,0,0,1-7.79.55c-3-.41-4-1.31-4.26-1.58a6.33,6.33,0,0,1-1.53-4.57c0-1.52.53-2.13,1.22-4.44a30,30,0,0,0,1-4.51"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </mask>
              <mask id="mask-p-7">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-7"
                  d="M740.23,582a4.67,4.67,0,0,1,3.54,0,6.16,6.16,0,0,1,1.33,1,6.26,6.26,0,0,1,1.24,1.57,10.12,10.12,0,0,1,.64,2.15c.41,1.61.44,1.85.32,2.16s-.47.63-1.14,1.2-.9.59-1.61,1.19c-.26.22-.62.59-1.33,1.33s-.73.78-.74.92c0,.62.91.75,1.33,1.79a2.46,2.46,0,0,1,.1,1.52,2.73,2.73,0,0,1-.92,1.33,4,4,0,0,1-1.52.78,9.21,9.21,0,0,0-3.35,2"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-8">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-8"
                  d="M804.4,623a28.44,28.44,0,0,0-3.95-6.21,20.91,20.91,0,0,1-3.19-4.11,15.33,15.33,0,0,1-1.55-4.49,26.89,26.89,0,0,1-.17-4.82c0-1.13,0-3.53-.25-5.83-.12-1.31-.63-6.75-1.59-6.8s-1.65,4-1.85,5a34.14,34.14,0,0,0-.54,9.32c.34,3.69,1.08,4.72.37,7-.07.25,0,.06-1.51,3.57a28.67,28.67,0,0,1-1.68,3.73c-.92,1.56-1.6,2.71-3,3.36a4.78,4.78,0,0,1-3.9.08,5,5,0,0,1-2.51-3.48,8.1,8.1,0,0,1,.16-4.15,8.79,8.79,0,0,1,1.43-3.65A7,7,0,0,1,783.8,609a17.87,17.87,0,0,1,3.48-.59c.68-.08,1.25-.13,1.63-.16"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-9">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-9"
                  d="M809.38,602.53a17,17,0,0,1,2.51,2.05,11.6,11.6,0,0,1,2.52,3.25,11,11,0,0,1,1,5c.07,2.68.27,4-.53,4.57s-2.63.11-4.23-1.06"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-10">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-10"
                  d="M828.79,620.23c-1-.1-7.15-.8-8.82-4.73-.6-1.39-.57-3.08-.53-5.42a30,30,0,0,1,.53-5c.25-1.43.55-2.63.79-3.51"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-11">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-11"
                  d="M615.91,691.2a71.29,71.29,0,0,1-21.63,1.34c-1.12-.1-2.22-.23-3.29-.38"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-12">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-12"
                  d="M620.46,697.39a34.41,34.41,0,0,1-19.39,5,32.31,32.31,0,0,1-7-1.19"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-13">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-13"
                  d="M679.63,686.45a95.32,95.32,0,0,1-1.7-25.41"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-14">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-14"
                  d="M693,695.16c-6.35-.07-12.67-.27-19.07-.57a23.78,23.78,0,0,1-9.46-2,21.7,21.7,0,0,1-5.87-4"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-15">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-15"
                  d="M660,709.78c1.61-.89,3-1.55,4-2a17.49,17.49,0,0,1,3-1.15,14.52,14.52,0,0,1,3.73-.43c1.65,0,2.48,0,3.3.43a5,5,0,0,1,1.72,1.86,6,6,0,0,1,1.29,3.87,6.36,6.36,0,0,1-1.58,3.16,19.14,19.14,0,0,1-1.86,2c-2.31,2.33-2.82,2.66-2.73,3.16.21,1.08,2.94,1.39,3.3,1.43,1.68.19,2.76-.17,5.74-.86,1-.23,2.5-.57,4.39-.94"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-16">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-16"
                  d="M735.27,721.68a45.08,45.08,0,0,0-9-.86,15.87,15.87,0,0,1-4-.14c-1.85-.39-2.45-1.22-6.6-3.44a26.79,26.79,0,0,1-5.16-3.16,12.72,12.72,0,0,1-3.87-4.73c-.34-.79-.26-.88-1-4.87a52.24,52.24,0,0,1-1-5.59,46.58,46.58,0,0,1,.29-5.45,55.31,55.31,0,0,1,.57-5.59c.62-2.52,1.32-2.36,2.73-6.31.77-2.17,1-3.16,2-5.88a44.59,44.59,0,0,1,1.87-4.3,51.13,51.13,0,0,1,2.87-4.73,28.27,28.27,0,0,1,3.29-4.58,20.78,20.78,0,0,1,3-2.44,60.7,60.7,0,0,1,5.59-3.59"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-17">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-17"
                  d="M780.57,672.51a38.77,38.77,0,0,1-2.29-6.74,15.32,15.32,0,0,1-.72-4.87c.15-2.09.83-3,1-5.45a15.37,15.37,0,0,0-.15-3.44"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-18">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-18"
                  d="M794.05,679a85.44,85.44,0,0,1-18.64,2.58,103.57,103.57,0,0,1-14.19-.71c-3.89-.42-6.6-.91-7.88-1.15-2.73-.52-5.06-1.09-6.89-1.58"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-19">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-19"
                  d="M747.6,694.59l3.44.71c2.41.5,3.92.8,5.88,1.29,3.47.88,4.16,1.3,4.73,1.87a4.42,4.42,0,0,1,1.43,3,4.69,4.69,0,0,1-2,3.58c-1.2.84-2,.51-5.31,1-2.53.37-4.61.68-4.73,1.43s1.93,1.83,3.16,2.29c2,.77,3,.34,3.58,1.15a3.2,3.2,0,0,1-.57,3.73c-1,1-2.43.86-5,.86a63.73,63.73,0,0,0-7.46.43"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-20">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-20"
                  d="M777.55,716.48a20.45,20.45,0,0,1-1.42-3.54,20.75,20.75,0,0,1,.86-14.05"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-21">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-21"
                  d="M766.52,709.64a52.37,52.37,0,0,1,9.18-2.58,68.73,68.73,0,0,1,7.45-.86c3.46-.28,6.63-.4,9.47-.43"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </mask>
              <mask id="mask-p-22">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-22"
                  d="M799.64,714.23A67.29,67.29,0,0,1,798.35,701c0-1.49,0-2.92.14-4.3"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </mask>
              <mask id="mask-p-23">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-23"
                  d="M821.26,651.82c.13-.25,1.5-2.88,4-3,2.12-.14,3.63,1.66,4.13,2.25,2.47,2.93,1.08,5.67,2.68,11.42,1,3.49,1.57,2.8,2.58,6.23.87,3,.75,4.61.75,12.76,0,8.43.11,8.26,0,12.39-.15,5.27-.24,7.95-.75,10.51-.74,3.64-1.49,7.36-4.13,10.51-1.82,2.16-4.5,4-10.52,5.63a60.21,60.21,0,0,1-26.28.76"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </mask>
              <mask id="mask-p-24">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-24"
                  d="M889.12,706.54a13.7,13.7,0,0,1-6.33-.59,21.06,21.06,0,0,1-4.67-2.6c-2.1-1.36-2.36-1.8-2.49-2.07-.74-1.55,0-3.4.83-5.33s1.34-2.06,1.9-4a16.19,16.19,0,0,1,.77-2.72c.47-1.1.94-1.68.71-2s-1.1-.25-1.66,0c-1.9.81-1.73,3.83-3,8.4-.54,1.91-.46,1-2.13,5.62-2.37,6.57-2.81,9.19-4.67,9.64-.73.18-1.65,0-1.84-.41-.27-.62,1.17-1.29,2.07-3.14a8.06,8.06,0,0,0,.6-4.61c-.2-1.47-.55-1.25-1-3.43-.41-2-.15-2.24-.65-3.79-.3-.92-.51-1.21-.95-2.55-.28-.88-.47-1.62-.59-2.13"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-25">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-25"
                  d="M922.09,676.06a28.53,28.53,0,0,1-4.47-1.92c-2.51-1.34-4.92-2.62-6.71-5.11-1.63-2.27-1.95-4.43-2.55-8.63-.42-2.89-.69-4.86,0-7.35a17.61,17.61,0,0,1,2.55-5.11,37,37,0,0,1,3.84-4.79c1.56-1.77,3.5-3.93,5.75-6.39"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-26">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-26"
                  d="M931,647.94c3.24.27,4.64,1.68,5.11,2.24a12.37,12.37,0,0,1,1.6,2.87c.64,1.4,1.28,3.2,1.28,3.2a1.55,1.55,0,0,1,.13,1.13,1.65,1.65,0,0,1-.45.64,6.67,6.67,0,0,1-1.35,1.09c-.5.3-.44.19-1.17.6a4.71,4.71,0,0,0-1.35.94,1.78,1.78,0,0,0-.57.86c0,.25,0,.48.53,1.54a5.93,5.93,0,0,1,.68,1.51,2.51,2.51,0,0,1-.15,1.31c-.16.36-.41.63-1.88,1.47-.87.5-1.64.89-2.49,1.32l-1.43.71"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-27">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-27"
                  d="M957.61,669.82c-.08-2.8-.05-5.06,0-6.68,0-1,0-.8.16-4.13.11-2.73.11-3,.17-3.46a15.66,15.66,0,0,1,1.48-4.95"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-28">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-28"
                  d="M947.79,661.74c1.23-.45,3-1,5.2-1.65a38.47,38.47,0,0,1,10.8-1.9,28.63,28.63,0,0,1,6.77.82"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-29">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-29"
                  d="M986.27,665.61c-1-6.9-.75-8.48-.75-8.48a37.23,37.23,0,0,0,.94-4.52,19.79,19.79,0,0,0,0-3.39"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-30">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-30"
                  d="M1007.73,634.35a6.21,6.21,0,0,0-3,3.58c-.37,1.51.23,2.59,1.32,5.46a44.52,44.52,0,0,1,2.45,7.72,24.07,24.07,0,0,1,.19,7.53c-.29,2.45-.5,4.16-1.7,5.84a9.45,9.45,0,0,1-4,3c-3.79,1.78-8.09,3.8-13,6"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-31">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-31"
                  d="M1021.67,685.94c.32,1.79.74,4.23,1.13,7.16.12.88.46,3.48.75,7,.56,6.59.24,7.9,0,8.66s-.38,1-1.44,4c-1,2.83-1,3-1.2,3.18-2.85,2.69-20.77-8.45-19.2-13.18.32-1,2.72-1.83,7.53-3.58a52.44,52.44,0,0,1,7.72-2.45,35.13,35.13,0,0,1,13.37.19,41.45,41.45,0,0,1,7.68,2.19"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-32">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-32"
                  d="M1098.06,709.61a70.42,70.42,0,0,1-9.81,2.23,19.26,19.26,0,0,1-5.5.15c-1.22-.16-1.33-.31-2.83-.6-4.79-.93-6.1.31-7.58-1a7,7,0,0,1-2.08-5.05,8.57,8.57,0,0,1,1.94-4.91,18.49,18.49,0,0,1,4.6-4.46,38.46,38.46,0,0,1,5.06-3.27,48.05,48.05,0,0,1,4.6-2.23"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-33">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-33"
                  d="M671.45,795l24.28,3.77"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-34">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-34"
                  d="M668.12,807.68l20.4,2.66"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-35">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-35"
                  d="M763.4,766.16q2.33,7.77,4.66,15.56"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-36">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-36"
                  d="M739.57,796.19l51.25-1.31"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-37">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-37"
                  d="M785,811.66c-5.28,2.63-9.61,4.42-12.59,5.57-4.13,1.58-7.15,2.51-8.56,5.42-.24.49-1.36,2.81-.28,4.87a5.32,5.32,0,0,0,3.62,2.44,6.16,6.16,0,0,0,4.17-.56c.45-.23,2.4-1.23,2.3-2.36-.09-.93-1.48-1-3.2-2.37-1.29-1-2-2.19-3.41-4.59-1.79-3-2.74-4.58-2.23-5.91.33-.84,1.26-1.47,3.07-2.79a44,44,0,0,1,4-2.43c1-.59,1.91-1.07,2.5-1.39"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-38">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-38"
                  d="M814.55,806.33a5.27,5.27,0,0,1,2.27-2,4.85,4.85,0,0,1,4.64.21c2.53,1.84,1.23,6.49,1.14,6.81-.53,1.8-1.3,2.18-2.27,4.23a14.69,14.69,0,0,0-1.45,6.08c-.12,0-1.45-17.94,6.5-22.08,2.06-1.06,4.87-1.29,5.68-.2,1,1.36-1.87,3.78-2.06,8.66-.07,1.52-.17,4.11,1.54,6,2.37,2.61,6.49,1.95,7,1.86"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </mask>
              <mask id="mask-p-39">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-39"
                  d="M862.42,794.05c-3-19.32-2.94-25.57-1.65-25.9,2-.5,8.86,12.57,5,16.93-1.34,1.49-4,1.76-9.19,2.37a5.42,5.42,0,0,1-3.3-.41c-.46-.25-1.54-.93-2.58-3.51-.64-1.61-1-3.33-1.24-8-.06-1.42-.12-3.36-.1-5.67"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-40">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-40"
                  d="M928.37,790.35c0,1.09.12,2.6.28,4.39a58.27,58.27,0,0,0,.84,6.43c.83,4.25,1.69,4.58,2,6.91.66,4.23-1.13,9.84-4.2,11.19-5.89,2.59-16.46-7.24-15.11-11.1.5-1.44,3.71-1.9,7.74-2.52a33.41,33.41,0,0,1,3.83-.37,63.9,63.9,0,0,1,14.46,1.4"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
              </mask>
              <mask id="mask-p-41">
                <path
                  className="derivation-mask-path"
                  id="mask-path-d-41"
                  d="M979.35,816.52a22.79,22.79,0,0,1-13.92-.54c-2-.78-4.69-1.89-5.36-4.28-.56-2,.58-3.9,1.61-5.62,1.41-2.36,2.71-3.12,6.69-7,1.42-1.37,2.53-2.51,3.21-3.22"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </mask>
            </g>
            <mask id="mark-mask">
              <path
                id="mark-mask-path"
                d="M220.32,313.22c5.9,1.53,9.61.8,11.93-.2a10.46,10.46,0,0,1,4.19-1.26c2.17-.1,2.9,1,6.49,1.88a74.48,74.48,0,0,1,7.33,1.89,28.54,28.54,0,0,1,5.65,2.51,36.8,36.8,0,0,1,5.44,4.19c2.47,2.11,2.18,2.09,5,4.6,3.65,3.24,4.41,3.53,5.44,5.24a12.35,12.35,0,0,1,1.68,4.81,12.75,12.75,0,0,1-1.05,6.7c-1.72,4-4.93,6-8.38,8.17a45.86,45.86,0,0,1-8.58,4A108.92,108.92,0,0,1,241,360.12a112.45,112.45,0,0,1-11.51,2.1c-4.83.61-8.54.74-11.52.84-2.49.08-5.08.05-10.26,0-7.9-.09-9-.26-9.84-.42-3.26-.63-3.6-1.23-8.16-2.1-2.92-.55-3.49-.44-5.87-1a40.41,40.41,0,0,1-6.49-2.31c-2.9-1.31-2.44-1.72-7.74-4.39a22.49,22.49,0,0,1-5.24-3.14,20.38,20.38,0,0,1-3.56-4.19,14.77,14.77,0,0,1-2.51-5.24,10.53,10.53,0,0,1,0-5.23c.49-1.77,1.34-2.83,2.93-4.82a32.86,32.86,0,0,1,4.61-4.6,47.67,47.67,0,0,1,4.4-3.35,35.41,35.41,0,0,1,4.6-2.72c2-1,1.74-.6,4.61-1.89,2-.9,2.84-1.42,5.44-2.51,2.36-1,1.65-.69,6.07-2.3a63.36,63.36,0,0,1,6.28-2.1c1.76-.43,1.73-.25,5.87-1,3.81-.74,4.53-1,6.7-1.26a63.89,63.89,0,0,1,6.49-.42c3-.09,5.23,0,5.86,0,1.11,0,3.3.13,6.07.42,1.68.17,3.29.39,4.82.63"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6"
              />
            </mask>
            <mask id="arrow-line-mask">
              <path
                id="arrow-line-mask-path"
                d="M257.24,347q2.52,1.23,5.27,2.8c1,.58.78.49,5.27,3.3,2.59,1.62,2.85,1.76,3.62,2.3,1.94,1.36,2.07,1.66,3.62,2.64,1.79,1.12,2,1,3.46,2,1.2.83,1.12,1,3,2.47a31.78,31.78,0,0,0,4.11,3c1.34.78,1.4.65,3.13,1.64,1.1.64,1.56,1,3.13,2s2.6,1.64,3.95,2.47c2.2,1.38,4.1,2.38,5.2,3.08,2.11,1.21,3.17,1.82,4.45,2.47,2.76,1.41,2.9,1.23,5.27,2.47s2.49,1.56,4.94,2.8c1.89.95,1.89.79,3.95,1.81s2.46,1.39,5.11,2.8,2.69,1.24,4.94,2.47c2.76,1.51,3,1.92,5.27,3.13.62.33,1.3.68,5.6,2.47,6.26,2.62,6.36,2.53,8.23,3.46,3.26,1.61,2.87,1.82,5.93,3.29,3.5,1.69,3.93,1.37,7.74,3.13,3.53,1.63,3.27,1.95,6.42,3.29,2.25,1,2.48.84,6.92,2.48,1.8.66,3.65,1.33,5.93,2.3,2.62,1.11,3.49,1.62,7.74,3.62,1.49.71,3.92,1.86,6.42,3,4.16,1.84,5.62,2.3,10.87,4.44,2.33.95,4.79,2,9.72,4.12,6.35,2.73,9.53,4.09,12.84,5.6,6.08,2.78,6,3,11.86,5.6s5.71,2.38,11.36,4.94c5,2.27,5.19,2.52,12.19,5.76,4.42,2.06,4.11,1.84,9.39,4.29l10.86,5.1,8.73,4.12c5.52,2.63,8.28,3.94,11.86,5.76,4.89,2.49,4.31,2.35,9.39,4.94,4.69,2.4,5.32,2.58,12,5.93,3.71,1.86,5.64,2.82,8.4,4.28,4.49,2.38,4.89,2.74,10.21,5.6s5.16,2.63,8.73,4.61c4,2.24,3.87,2.33,9.55,5.6,6.39,3.68,7,3.81,9.88,5.77.72.49,2.63,1.92,6.42,4.77,4.22,3.17,6.33,4.76,7.41,5.6,4.48,3.49,4.84,4,9.39,7.58,2.28,1.79,4.56,3.58,7.41,5.6A134.51,134.51,0,0,0,616,537.05"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
            </mask>
            <mask id="graph-mask">
              <path
                id="graph-mask-path"
                d="M1162.76,169.66c.15,10.13.28,18.35.37,23.85.24,14.71.32,18.13.37,25.32.09,14.15-.13,13.65,0,21.65.27,16.82,1.23,17.93,1.47,31.56.2,12-.39,21-1.11,31.92-.74,11.39-1.28,19.5-2.93,30.09-1.52,9.7-2.28,10.65-3.3,19.45-.5,4.28-.63,6.67-1.84,10.28a37.9,37.9,0,0,1-7.34,12.47c-2.33,2.68-6.4,7.35-13.21,9.91-3.14,1.18-6.86,1.4-14.31,1.84a126.21,126.21,0,0,1-15.41,0,76.7,76.7,0,0,1-12.48-1.47c-3.51-.79-13.18-3-21.65-10.64-6-5.4-8.82-11.07-11.74-16.88-4.18-8.31-5.7-14.79-8.44-26.42a221.83,221.83,0,0,1-4.77-28.26c-1.11-10.95-.16-9.79-1.17-22.86-1.72-22.18-4.57-23.71-3.7-36.85a123,123,0,0,0,.26-16.64c-.18-3.28-.52-6.85-1-12.42s-.7-6.5-1.06-10.83c-.46-5.47-.69-8.28-.66-11.63a75.91,75.91,0,0,1,.79-10.43"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
            </mask>
            <mask id="arrow-head-mask">
              <path
                id="arrow-head-mask-path"
                d="M600.18,523.89c1-.71,1.81-1.3,2.34-1.72a3.72,3.72,0,0,1,1.24-.74,3.33,3.33,0,0,1,1.6-.13,3.8,3.8,0,0,1,1.85,1.11,23.62,23.62,0,0,1,2.58,2.71c1.81,2.26,2.72,3.39,2.84,3.58,1.17,1.91,1.93,3.14,1.72,4.68s-1.27,2.56-2.4,3.64a14.24,14.24,0,0,1-4.25,2.77,62.74,62.74,0,0,1-11.83,3.57"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
            </mask>
          </defs>
          <path
            mask="url(#graph-mask)"
            id="graph"
            d="M1043.91,245.07c.26,5.62.61,11.23.76,16.85.22,8.37,2.11,16.48,3.51,24.68a165,165,0,0,1,2,16.72c1,13.82,2.33,27.63,6.39,40.9,4.61,15.06,12.57,28,26.21,36.79,4.22,2.72,9,3.78,13.82,4.52a102.1,102.1,0,0,0,29.52,0c5.93-.83,12.26-1.54,16.52-6.81.47-1.57,2.15-2.06,3-3.34,5.64-7,8-15.2,9.28-23.86.33-2.22.12-4.59,1.48-6.59.77-5.32,1.35-10.68,2.36-15.95,2.25-11.7,2.9-23.57,3.54-35.39a322.86,322.86,0,0,0-.11-36.28c-.25-4.26-.66-8.53-.66-12.8,0-21-.17-41.92-1.51-62.86a28.08,28.08,0,0,1,.35-6.54c.34-1.92,1.52-3.22,3.81-2.53,1,.29,1.48.85,1.08,1.85-1.74,4.36-1,8.91-.64,13.31,1,12.38,1.17,24.77,1.28,37.17.19,22,1.7,44,1.11,66a277.83,277.83,0,0,1-3.37,33.56,16.92,16.92,0,0,0-.4,5.26c.92,2.83-.3,5.56-.5,8.32-.57,7.86-.74,15.79-3,23.46-.77,2.69-1.59,5.37-2.35,8.07-.28,1-.64,2-1.85,2.33a44.45,44.45,0,0,1-15.86,14.48,14.11,14.11,0,0,1-4.24,1.67c-11.11,2.34-22.35,1.82-33.57,1.78-3.21,0-6.29-1.36-9.54-1.27-3.41-.58-6.81-1.18-9.83-3-4.36,0-7.15-3.1-10.15-5.54-8.19-6.68-13.32-15.51-17.08-25.24a150.53,150.53,0,0,1-7.11-24.9,263.38,263.38,0,0,1-5-36.13c-.27-4.67,0-9.43-.7-14-1.46-8.86-1.15-17.81-2.2-26.65-.65-5.47-1.75-10.92-1.29-16.4.83-9.71-.23-19.28-1.26-28.88a9.16,9.16,0,0,1,.14-4.62c-.35-3.82-.71-7.64-1-11.46a3.19,3.19,0,0,1,2.15-3.43,3.42,3.42,0,0,1,3.44,1c.57.5.59,1.06-.16,1.48-2.47,2.54-2.71,8.79-.38,11,1.13,1.08,1,2.48,1,3.76C1043.35,218.72,1044.29,231.88,1043.91,245.07Z"
            fill="#9e1b24"
          />
          <path
            mask="url(#arrow-line-mask)"
            id="arrow-line"
            d="M613.87,535.34h0l-1.31,1.18-.27.24-.3.22a6.87,6.87,0,0,1-.83.48h0l-.39.13a8.52,8.52,0,0,1-1,.23h-1.38a1.15,1.15,0,0,0,.86-.91c.27-1-.28-1.47-1-2-2.55-1.87-5.07-3.72-7.55-5.72-10.48-8.26-20.61-17-32.15-23.79q-31.83-18.86-65.18-34.85c-13-6.26-26-12.59-39.19-18.53-4.46-2-9.24-3.42-13.46-5.51-4.43-2.19-9.07-4.17-13.5-6.43-10.14-5.14-20.71-9.36-31.14-13.92-9.86-4.3-19.75-8.55-29.63-12.84-.94-.42-1.86-1-2.86-.22-2-1.27-3.83-2.79-6.19-3.37a13,13,0,0,0-1.8-1.14c-14.43-6.37-28.84-12.79-42.92-19.92-3.51-1.78-7.41-3.1-10.62-5.1-6.92-4.42-14.15-8.22-21.32-12.16l-1.33-.79c0-.34-.15-.47-.48-.39l-.72-.34a67.11,67.11,0,0,0-11.21-7.1.35.35,0,0,0-.28-.15,5.43,5.43,0,0,0-3.07-2.15,11.5,11.5,0,0,0-.86-.85c-.44-.38-.91-.74-1.37-1.09a3,3,0,0,0-.52-.42l-.62-.47-.18-.13-.17-.13.06.05-.42-.32c-.79-.55-1.66-1-2.49-1.55l-.64-.4c-.11-.07-.27-.22-.42-.32-.31-.32-.61-.67-.94-1a2.18,2.18,0,0,0-.45-.35c-.45-.61-1.52-.79-2.18-1.25A13.83,13.83,0,0,0,260,351c-1-.37-2.09-.5-1.76-2s1.6-1.46,2.69-1.39c2.63.15,4.79,1.52,6.95,2.86.59.37,1.07,1,1.82,1a5.64,5.64,0,0,0,1.65,1.07c1.25.54,2.53,1.21,3.82,1.68a1.47,1.47,0,0,0,.27.47l2,1.59,1.61,1.22,1.29.77a5.13,5.13,0,0,0,3.12,2.31l1.12.65a5.73,5.73,0,0,0,3.27,2.35l1.21.58a8.79,8.79,0,0,0,3.6,2.53l1.12.6a.61.61,0,0,0,.58.64.62.62,0,0,0,.19,0l1.24.58c.52.55.94,1.27,1.88,1.18l1.23.62a4.74,4.74,0,0,0,3,1.9c.24.14.48.28.71.43.8.48,1.46,1.31,2.46,1.39l1.53.8c3.83,2.81,8.26,4.51,12.45,6.64l1.73.93a9.38,9.38,0,0,0,3.73,2.15l.8.28a13.13,13.13,0,0,0,6.52,2.57,3.32,3.32,0,0,0,1.91,2.1c10.72,5.1,21.62,10,32.49,14.86,6.23,2.8,12.57,5.31,19,7.69,4.87,1.78,9.29,4.78,14.1,6.78,19.05,7.94,37.65,16.94,56.93,24.35,4.19,1.59,8,4,12,6,9.4,4.61,18.94,8.95,28.4,13.45,18.4,8.74,36.41,18.25,54.23,28.1,16.15,8.94,32,18.37,46,30.55a8,8,0,0,0,4.61,2.37.93.93,0,0,0,.18.39.89.89,0,0,0,.08.17,1.11,1.11,0,0,0,.07.16h0v.08a2.7,2.7,0,0,0,1.08,1.77c2.17,1.4,4.22,2.92,6.32,4.4.66,1.61,2.37,1.81,3.66,2.54a1.46,1.46,0,0,0,.34-.22,9.75,9.75,0,0,0,.5,1.15h0a.6.6,0,0,0,.07.34c.07.11,0,.27,0,.41S613.87,535.18,613.87,535.34Z"
            fill="#b3313a"
          />
          <g id="derivation">
            <g id="derivation-handwriting">
              <path
                mask="url(#mask-p-41)"
                id="p-41"
                d="M970.45,818.08c-3.61.1-7.14-.34-10.28-2.26s-3.93-4.74-2.43-7.88a29.89,29.89,0,0,1,8-10A4.7,4.7,0,0,1,969,797c2,0,2.83,1.83,1.8,3.78-1.47,2.76-4,4.62-6,6.94-2.61,3.08-2.07,4.93,1.92,5.55a50.27,50.27,0,0,0,6.72.24c1.55,0,2.85.35,2.82,2.31s-1.3,2.27-2.88,2.23C972.45,818.06,971.45,818.08,970.45,818.08Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-40)"
                id="p-40"
                d="M933.45,810.54a12.26,12.26,0,0,1-2.6,6.63,2.13,2.13,0,0,1-2.94.67l-.06,0h0l-.13-.09c-1.27-.8-.93-1.62-.29-2.69,1.34-2.27,2.66-5.25,1-7.19s-4.65-.68-7,.29a5.81,5.81,0,0,1-1.42.42,2.49,2.49,0,0,1-3-1.82h0v-.17c-.43-1.53.71-2.42,1.94-2.7a29.7,29.7,0,0,1,6.15-.8c1.87,0,2.32-.7,2-2.41-.33-2-.52-4-.7-5.93a2.25,2.25,0,0,1,1.78-2.64h0a1.84,1.84,0,0,1,.74,0c1.55,0,2.32,1,2.34,2.6a35.14,35.14,0,0,0,.29,5.71c.35,2,1.18,3.17,3.33,3.24a3.87,3.87,0,0,1,1.87.58,2.4,2.4,0,0,1,.9,2.88c-.37,1.2-1.35,1.16-2.24.85C933.45,807.21,933,808.15,933.45,810.54Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-39)"
                id="p-39"
                d="M858.66,780.81v-2.74A2.09,2.09,0,0,1,860,775.9a1.43,1.43,0,0,1,1.76.55c.58.8,1.74,1.51,1,2.73a4.51,4.51,0,0,0-.57,2.12c-.08,1.69.36,2.68,2.29,1.75,1.68-.8,2.75,0,3.28,1.5s-.57,2-1.67,2.51c-1.31.57-2.48,1.15-2.68,2.89a2,2,0,0,1-2,1.65,1.47,1.47,0,0,1-1.53-1.34c-.27-1.24-1.23-1.16-2.16-1.07-7.09.66-10.49-3.69-10.3-10.49a39.3,39.3,0,0,1,.17-4.47,3.7,3.7,0,0,1,2.43-2.94c1.24-.59,2.07-.73,2.07,1.31,0,3.14.58,6.27.55,9.43,0,2.06,1.72,3.32,4,3.26,2.49-.07,1.78-1.84,1.83-3.23v-1.25Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-38)"
                id="p-38"
                d="M826.51,807.66c.37-.65.6-1.17.92-1.63.68-1,1.6-1.56,2.76-1a2.36,2.36,0,0,1,1.36,2.88c-.81,3.66-.47,4.2,3.23,5.45,1,.34,2.25.69,1.83,2.15a2.3,2.3,0,0,1-2.54,2H834a1.43,1.43,0,0,1-.41-.09c-3.51-.73-6.16-2.35-7.1-6.64-1.6,3-3.08,5.54-4.3,8.18-.62,1.36-1.4,2.14-2.81,1.78-1.63-.4-1-1.84-.7-2.7.84-2.77,1.91-5.47,2.89-8.19.32-.87.67-1.74,0-2.58a2,2,0,0,0-2.46-.42c-1.54.65-2.55-.35-3.45-1.29-1.18-1.24-1-2.38.62-3.17a7.27,7.27,0,0,1,9.3,3.43C825.82,806.34,825.71,807.09,826.51,807.66Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-37)"
                id="p-37"
                d="M761.55,828.23a1.28,1.28,0,0,0-.25-.15c0-1.34,0-2.67.07-4v-.79h0a.22.22,0,0,0,.29-.09c2.25-1.52,3.63-3.32,1.91-6.08-.77-1.24.06-2.4.14-3.59a1.22,1.22,0,0,0,.24-.43c1.29-.64,2-1.94,3.07-2.83,1.27-1,2.29-2.42,3.88-3a2.29,2.29,0,0,1,3.11.85,1.09,1.09,0,0,1,.08.15c.78,1.36-.23,2.07-1,2.66a34.88,34.88,0,0,1-4,2.46,4.94,4.94,0,0,0-2.36,2.76,1.55,1.55,0,0,0,.17,1.65c.51.5,1.12.17,1.58-.14,2.61-1.77,5.76-2.51,8.29-4.41l.59-.24a24.62,24.62,0,0,0,3.24-1.19c1.22-.64,2.47-1.58,3.41.08s-.37,2.38-1.68,2.94l-11,4.69c-1.51.65-1.7,1.46-.33,2.52s2.58,2.07,3.87,3.1l.24.54c0,4.79-1.21,6.07-6,6.44a9.57,9.57,0,0,1-5.15-1.24l-.57-.69a1,1,0,0,0-.84-.84.23.23,0,0,0-.28-.11C762.38,828.63,762,828.39,761.55,828.23Zm3.68-3c-.26,2.38.83,3.1,2.21,3.39.77.17,1.2-.44,1.26-1.21.07-1.07-1.75-3.85-2.47-3.7a1.26,1.26,0,0,0-1,1.45v.08Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-36)"
                id="p-36"
                d="M750.56,799h-5.11c-1.18,0-2.13-.41-2.35-1.75a2.23,2.23,0,0,1,1.71-2.65h0a7.14,7.14,0,0,1,2.42-.48c11.89.24,23.76-.63,35.64-.73,1.09,0,2.24-.1,2.76,1.16a2.12,2.12,0,0,1-2.1,2.89c-8.24,0-16.43.77-24.64,1.18C755.91,798.81,752.93,798.91,750.56,799Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-35)"
                id="p-35"
                d="M769.85,778.72c.16,1.8-.53,2.63-1.79,3a2,2,0,0,1-2.59-1.13v-.05a2.36,2.36,0,0,1-.1-.38c-.8-2.35-1.54-4.72-2.39-7s1.49-2.62,2.49-3.36,1.81.42,2.35,1.43C769.13,773.7,769,776.54,769.85,778.72Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-34)"
                id="p-34"
                d="M677.84,812.12a28.14,28.14,0,0,1-6.21-.54,3,3,0,0,1-2.43-3.48h0a3.07,3.07,0,0,1,.14-.52c.3-1.13,1.13-1.68,2-1,1.39,1,2.86.75,4.32.78a45.77,45.77,0,0,1,9.91.84c1,.26,2,.41,1.85,1.81s-1.07,1.5-2.13,1.58C682.82,811.73,680.33,811.93,677.84,812.12Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-33)"
                id="p-33"
                d="M674.61,794.37c2.8-.74,5.71-.4,8.6-.48a20.14,20.14,0,0,1,7.53,1.21c1.77.64,2,1.86,1.73,3.32-.35,1.73-1.6.83-2.59.73-4.29-.42-8.62.08-12.91-.46a8.85,8.85,0,0,1-3.44-1.31,2.17,2.17,0,0,1-.77-2.66C673.06,793.63,673.86,794,674.61,794.37Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-32)"
                id="p-32"
                d="M1085.76,710c2.58.29,5.48-.46,8.42-1,1.21-.21,2.34-.37,2.8,1.2a2,2,0,0,1-1,2.63,2.14,2.14,0,0,1-.65.16,48.39,48.39,0,0,1-16.78,1.22c-3.07-.37-6.09-.75-8.49-3-2.57-2.44-3.2-4.94-1.47-8A36,36,0,0,1,1081.17,690a2.25,2.25,0,0,1,3.16.26,3.62,3.62,0,0,1,.27.41,2.59,2.59,0,0,1,0,3.65h0l-.15.14a4.2,4.2,0,0,1-1.94,1.08c-4.72.91-7.31,4.36-9.61,8.06-1.22,2-.36,4.06,2,5C1078.13,710,1081.74,710,1085.76,710Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-31)"
                id="p-31"
                d="M1015.53,699.54c-2.68-.12-5.33-.18-7.58,1.71a1.28,1.28,0,0,1-1.81,0h0a1.24,1.24,0,0,1-.18-.22,1.58,1.58,0,0,1,.26-2.22h0a12.92,12.92,0,0,1,10.45-4.41c2.47,0,4.09-.18,3.33-3.28-.35-1.47.8-2.08,2-2.42s1.81.51,2.28,1.46c.11.22.31.44.31.67.09,4.23,3.25,4.3,6.23,4.64a19.48,19.48,0,0,1,5.59,1.16c1.08.47,1.91,1.06,1.6,2.42a2,2,0,0,1-2.34,1.59h0a2,2,0,0,1-.33-.09c-2.3-.53-4.65-.3-7-.62-1.92-.28-2.71.67-2.5,2.39.31,2.69-.43,5.25-.73,7.87-.21,1.81-1.19,2.72-3,2.51-2.13-.24-1.56-1.87-1.32-3.07a56,56,0,0,0,.78-7.19c.16-2-.48-3.21-2.79-2.93A25.18,25.18,0,0,1,1015.53,699.54Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-30)"
                id="p-30"
                d="M1007.13,654.48c.42-3.91-2.09-7.46-3.47-11.33-1-2.93-.73-5.58,1.22-7,.41-.29.85-1,1.51-.47a1,1,0,0,1,.24,1.37c-.78,1.19,0,2,.56,2.92,4.06,6.9,5.86,14.1,3.41,22.06-1.42,4.62-4.8,7.11-8.73,9.29-2.27,1.25-4.9,1.38-7.13,2.76a2,2,0,0,1-2.71-.82h0a1.22,1.22,0,0,1-.14-.33c-.57-1.28-.42-2.53,1-3.12,1.76-.71,3.6-1.23,5.38-1.9C1004.34,665.62,1007.13,661.54,1007.13,654.48Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-29)"
                id="p-29"
                d="M983.67,658.09a41.7,41.7,0,0,1,0-5c.15-1.42,1-2.63,2.64-2.28s2.9,1.48,2.09,3.23c-1.46,3.17-1.22,6.25-.26,9.43a1.43,1.43,0,0,1-.62,1.92,1.36,1.36,0,0,1-.47.15c-1.66.31-2.91-.34-3.19-2a49.85,49.85,0,0,1-.33-5.46Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-28)"
                id="p-28"
                d="M955.39,664.14a1,1,0,0,0,0,.54v.12a1.43,1.43,0,0,1-.07.28c-.19-1.63-1.09-2.54-3.82-2.07-1.72.32-2.62-2.24-1.44-3.67a3,3,0,0,1,1.12-1,6.22,6.22,0,0,0,5-3.53v.09a1.09,1.09,0,0,0,.08.15.79.79,0,0,0-.12.3,2.29,2.29,0,0,1-.07.36.73.73,0,0,0-.23.41,4.32,4.32,0,0,1-.17.94h0a1.12,1.12,0,0,1-.11.34,8.35,8.35,0,0,0-.34,1.21c-.08.5-.11,1-.15,1.52a6.87,6.87,0,0,0,0,1.57.58.58,0,0,0,.08.18v.47a7.51,7.51,0,0,0,.15,1.16A3.42,3.42,0,0,1,955.39,664.14Zm13.78-5.31a.86.86,0,0,0,0-.32h0a1.87,1.87,0,0,0-2.06-1.66h0c-1.68-.08-3.34-.08-5-.08-1,0-1.59-.19-1.8-.74a.49.49,0,0,1-.17.06h0a1.16,1.16,0,0,1,.07.8,1.14,1.14,0,0,1,0,.45,1.12,1.12,0,0,1-.11.82,1.15,1.15,0,0,1,0,.37,1,1,0,0,1-.18.83v.19a1.13,1.13,0,0,1-.12.63,1,1,0,0,1-.16.46.38.38,0,0,1,0,.15,1,1,0,0,1-.19.61V662h.1c.21-1.33,1.27-1.68,3-1.44a24.72,24.72,0,0,0,4.71.17h.4a1.81,1.81,0,0,0,1.51-1.93Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-27)"
                id="p-27"
                d="M959.5,663.39a9.27,9.27,0,0,1,0,1.49v2.58c0,1.27-.67,1.8-1.85,1.81s-2-.24-2.17-1.53a3,3,0,0,1-.13-.73,7.68,7.68,0,0,0-.1-2.53,1.06,1.06,0,0,0,0-.56,14.72,14.72,0,0,1-.23-4.49,33.17,33.17,0,0,1,1-4.19h0a6.4,6.4,0,0,0,.76-2.16,1.65,1.65,0,0,1,2-1.16,1.68,1.68,0,0,1,.39.16,2,2,0,0,1,1.34,2.49v.13a1.84,1.84,0,0,0-.09,1.4,16.08,16.08,0,0,1-.19,2.94c-.15.92-.49,1.78-.61,2.7A3.55,3.55,0,0,0,959.5,663.39Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-26)"
                id="p-26"
                d="M932.66,648.54l.54-.41c4-.06,5.26.76,6.66,4.86,1.16,3.39,1.2,6.4-2,8.36-.94.58-1,1.21-.7,2.27.59,1.79-.2,3.23-1.69,4.28-1.13.81-2.31,1.57-3.46,2.35h-1c-.52-1.46-1.54-3,.94-3.77,1.54-.46,2.71-1,1-2.77-.53-.56-.22-1.62.08-2.41a6,6,0,0,1,3.14-3.68c1.63-.73,1.86-1.78.39-3-.5-.41-.85-1-1.59-1.12l-.14-.13C934.13,651.7,932,650.7,932.66,648.54Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-25)"
                id="p-25"
                d="M905.7,659.25c-.38-8.49,3.84-14.73,9.73-20.14,1-.9,2.16-1.51,3.31-.44s.46,2.07-.09,3.16c-1.12,2.2-3.07,3.68-4.55,5.56-3.87,4.9-6,10.22-3.16,16.35,1.5,3.27,4.37,5.32,7.3,7.27,1.35.9,4,1.49,2.43,4s-3.28.39-4.78-.5c-4-2.41-7.55-5.31-9.37-9.9C905.82,662.81,906,661,905.7,659.25Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-24)"
                id="p-24"
                d="M872.88,700.44a24.08,24.08,0,0,1,2.61-9.61,8.43,8.43,0,0,1,1.24-1.83,2.22,2.22,0,0,1,2.43-.82c1,.36,1.2,1.28,1.26,2.24.11,1.84-.87,3.35-1.51,5-2,5-.45,7.15,3.77,7.85,1.23.2,2.44.48,3.67.7s2.37.35,2.2,1.79a2.31,2.31,0,0,1-2.42,2.19H886c-4.34-.26-8.4-1.16-11.19-5-.4-.54-.53-1.69-1.54-1.21-.84.4-.37,1.3-.29,2a7.44,7.44,0,0,1,0,2.21c-.62,3.34-1.61,3.91-4.77,2.73-1.14-.42-3-.73-.81-2.4.61-.47.36-1.21.18-1.86-.56-2.08-.46-4.28-1.29-6.32a6.85,6.85,0,0,1-.15-2.47,2.69,2.69,0,0,1,2.23-2.91c1.23-.16,2,1.13,2.33,2.22A29.57,29.57,0,0,0,872.88,700.44Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-23)"
                id="p-23"
                d="M833.06,684.28c0-4.91.3-9.84-.08-14.72-.42-5.45-1.2-11-4.75-15.48-1.25-1.59-2.54-3.43-5.12-2a1.46,1.46,0,0,1-1.85-.26,1.85,1.85,0,0,1,.08-2.1c1.88-3.55,5.68-3.85,9.13-.69,2.88,2.64,3.91,6.25,5,9.8a53.34,53.34,0,0,1,2.07,13.52c.38,9,1.12,18,.09,26.93-1,8.56-3.12,16.7-11.71,21.21a24.73,24.73,0,0,1-8.43,2.88c-5,.59-10.07,1.3-15.15.36a3,3,0,0,1-2-.81,2.07,2.07,0,0,1-.58-2.48c.45-.84,1.21-.79,2.13-.75,5.63.21,11.26.4,16.81-1,8.12-2,11.19-6,13.43-14.58C833.85,697.54,833,690.89,833.06,684.28Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-22)"
                id="p-22"
                d="M795.73,705.06l-.18-3.91a15.34,15.34,0,0,1,.5-1.63c.4-1,.91-1.89,2.19-1.46a2,2,0,0,1,1.29,2.39,20.22,20.22,0,0,0,.89,11c.32.76.56,1.72-.54,2.1a1.75,1.75,0,0,1-2.3-.92h0a7.05,7.05,0,0,1-.84-3.07C796.64,708,796.74,706.4,795.73,705.06Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-21)"
                id="p-21"
                d="M774.53,712.15v.05c-.57-.88-1.71-1-3.23-.7a2,2,0,0,1-2.56-1.21h0v-.13c-.39-1.35-.11-2.79,1.15-3.22a6,6,0,0,0,4.05-3.44h.21a2.29,2.29,0,0,1-.38.74,6,6,0,0,0,0,2.15c.07.67.17,1.34.3,2a15.32,15.32,0,0,1,.49,3.69h0ZM789.19,704c-2.58-.06-5.16,0-7.74,0-1.21,0-2.33.15-2.73-1.24l-.2.07a1,1,0,0,1-.26.62h0c0,.06-.07.12-.1.19h0l-.06.21a1.11,1.11,0,0,1-.16.95,12.6,12.6,0,0,1-.08,1.73v.26a1.09,1.09,0,0,1,0,.83,1.07,1.07,0,0,1,0,.47,1.1,1.1,0,0,1,0,.57l.09.25V709a2.56,2.56,0,0,1,1.87-1c1.79-.27,3.64-.26,5.46-.37v.12h3.75c1.44.06,2.73-.23,2.72-2S790.5,704,789.19,704Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-20)"
                id="p-20"
                d="M779,713.43c.68,1.29.53,2.34-.84,2.85a2.13,2.13,0,0,1-2.87-.91,2,2,0,0,1-.22-.67,2,2,0,0,1-.12-.48,3.09,3.09,0,0,0-.51-2.19h0a32.21,32.21,0,0,0-.71-4.25,9.9,9.9,0,0,1-.19-3.21,1.09,1.09,0,0,0,.14-.43,6.43,6.43,0,0,0,.73-2.27c.08-.57.27-2,1.65-1.75s2.42.9,2.57,2.08a5.05,5.05,0,0,0,.12.56c-1,1.85-.78,4.23-.75,6.3a1.81,1.81,0,0,0,.16,2C778.52,711.82,778.58,712.71,779,713.43Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-19)"
                id="p-19"
                d="M752.72,705.6l1.08-.26c2.44.32,4.53-.8,6.48-1.92s1.72-3.13-.57-3.8c-2.91-.84-5.87-1.7-9-1.41l-1-.26a1.45,1.45,0,0,0-1.42-1,.69.69,0,0,0-.2-.3c.25-2.52,1.8-3.33,4.12-3.11a25.37,25.37,0,0,1,8.51,2.58c4.51,2.14,4.88,3.58,2.62,8.18a5,5,0,0,0-.27.93.4.4,0,0,0-.2.24c-1.14.43-1.64,1.63-2.63,2.21-1.54.9-2.23,1.63-1.13,3.66,1.73,3.17-.55,6.19-4.16,6.07-1.82-.06-3.65.12-5.46,0-1.35-.13-3.59,1-3.69-1.56s2.2-1.56,3.53-1.76c2.14-.31,4.31-.42,6.52-.62-.78-2-2.51-1.86-3.84-2.41-1.12-.47-2.15-1.09-2.21-2.43s.83-2.07,2.09-2.41A2.78,2.78,0,0,0,752.72,705.6Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-18)"
                id="p-18"
                d="M747.13,679.81a1.12,1.12,0,0,0-.08-.51c.71-.42.72-1.17.87-1.85a.49.49,0,0,0,.18-.17c2.79-.31,5.38.72,8.06,1.15a101.46,101.46,0,0,0,22.09,1.11c4-.26,8-.34,11.82-1.42,1.21-.34,2-.34,2.39.81a1.73,1.73,0,0,1-1,2.21h0a1.71,1.71,0,0,1-.5.1,47.49,47.49,0,0,1-7.1,1.23,222.37,222.37,0,0,1-28.16-.32C752.76,681.86,749.68,681.7,747.13,679.81Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-17)"
                id="p-17"
                d="M776,660.18V656.7c0-1.54.47-3.18,2.13-3a3.26,3.26,0,0,1,3.06,3.36,5.58,5.58,0,0,1-.46,2.42c-1.7,3.13-.9,6.11.4,9.06.36.82,1.13,1.59.38,2.49a2.55,2.55,0,0,1-2.55.6c-1.15-.23-1.54-1.06-1.71-2.15C776.75,666.4,775.76,663.37,776,660.18Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-16)"
                id="p-16"
                d="M702.32,698.16c.1-9.28,3.41-17.64,7.46-25.8a62.64,62.64,0,0,1,8.94-13.44c.71-.81,1.43-1.6,2.21-2.34,1.38-1.3,2.71-1.07,3.85.33s1.6,3-.24,4c-7.83,4.35-10.24,12.46-13.79,19.73a42,42,0,0,0-4,19.55c.14,8.18,6,14.84,13,17.32,3.88,1.38,7.87,1.13,11.77,1.93,1.35.28,2.42.57,2.3,2.28s-1.3,1.87-2.64,1.87c-9.17,0-17.34-2.44-23.71-9.49C704.45,710.81,702.45,704.64,702.32,698.16Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-15)"
                id="p-15"
                d="M668,704.06a57.82,57.82,0,0,1,6.26,1c5,1.13,6.06,6.69,4,10.08-.7,1.12-1.49,2.18-2.26,3.26s-.4,1.44.8,1.5c1.56.07,2.86-.81,4.34-1s2.76-.39,3.19,1.41-.69,2.54-2.07,2.87c-3,.73-6.09,1.55-9.29,1a3.7,3.7,0,0,1-3.18-4.14v0a3.5,3.5,0,0,1,.15-.64c.62-2,2.34-3.16,3.45-4.79a7.37,7.37,0,0,0,1.28-2.66,2.73,2.73,0,0,0-2-3.29,3.09,3.09,0,0,0-.86-.06c-2.56,0-4.8,1.25-7.23,1.73-1.4.27-3.19,1.09-3.82-.94s.72-3.26,2.34-4.17A12.52,12.52,0,0,1,668,704.06Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-14)"
                id="p-14"
                d="M682.61,696.7c-6.44.33-12.73-.72-19-2a6.07,6.07,0,0,1-1.66-.48c-1.51-.89-2.89-2-1.91-4s2.65-1.85,4.12-.58c4.41,3.82,9.89,3.28,15.1,3.71,3.46.29,7,.08,10.45.1,1.19,0,2.46-.07,2.53,1.63s-1.26,1.63-2.42,1.64Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-13)"
                id="p-13"
                d="M680.28,666.54c-1.39,5.5.35,11.07,1.22,16.7.27,1.69-.21,2.88-1.87,3.21s-1.85-1.18-2.17-2.38a107.32,107.32,0,0,1-2.56-14.68,14.45,14.45,0,0,1,.27-3.71c.25-1.6.9-3,2.85-2.74S680.27,664.62,680.28,666.54Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-12)"
                id="p-12"
                d="M600.13,704.68c-1.06-.12-2.14-.18-3.2-.37-1.36-.25-2.33-.94-2-2.53s1-2.73,2.63-2.28c5.06,1.41,9.77-.17,14.55-1.35,1.64-.41,3.15-.14,3.52,1.74s-.87,2.35-2.45,2.73A60.68,60.68,0,0,1,600.13,704.68Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-11)"
                id="p-11"
                d="M599.79,694.81h-4.48c-1.59,0-2-1.09-1.89-2.32s.54-2.63,2.31-2.22c4,.93,7.9-.46,11.85-.52,1.82,0,3.64-.18,5.46-.31,1.4-.1,2.3.51,2.37,1.91a1.94,1.94,0,0,1-1.56,2.26h0a1.62,1.62,0,0,1-.44,0c-4.54.37-9.07.84-13.6,1.28Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-10)"
                id="p-10"
                d="M829,619.68c-.37,1.49-1.64,1.68-3.06,1.29a35.46,35.46,0,0,1-6.42-2.62l-.14-.14c-.63-.32-.7-2.46-1.73-1.34l-.07-.06a1.72,1.72,0,0,0,.07-.21,5.44,5.44,0,0,0-.08-1.45,1.14,1.14,0,0,0,0-.58,1,1,0,0,0,0-.6,1.1,1.1,0,0,0,0-.51.67.67,0,0,0,0-.2,1.16,1.16,0,0,0,0-.64,1.14,1.14,0,0,0-.05-.37,1.11,1.11,0,0,0-.07-.65v-.08a1.08,1.08,0,0,0-.1-.56,1.18,1.18,0,0,0-.12-.49,1.09,1.09,0,0,0-.2-.84,1.07,1.07,0,0,0-.12-.58.81.81,0,0,0-.06-.31,2.68,2.68,0,0,0-.11-.49.92.92,0,0,0-.15-.51,1.07,1.07,0,0,0-.13-.38v-.06a1,1,0,0,0-.31-.56h0a.6.6,0,0,0,.09-.15c.64.48,1.12.22,1.37-1.19a2.5,2.5,0,0,1,.28-1c.58-.83.85-2.26,2.28-1.83s1.79,1.65,1.59,3a14.34,14.34,0,0,1-.66,2.9c-2.12,5.66.57,8,5.78,9.49C827.82,618.21,829.36,618.19,829,619.68Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-9)"
                id="p-9"
                d="M817.69,614.87a7.48,7.48,0,0,0,.2,1.15.54.54,0,0,0,0,.18,1,1,0,0,0-.16.64,3.09,3.09,0,0,0-.33.39c-1.58,2.28-3.5,2.5-5.84,2.07l-.12-.11c-1.19-2.3-.22-3.86,1.76-5.06a.24.24,0,0,0,.19-.16c1.26-.11.94-1.2.72-1.68-1.11-2.36-2-5-4-6.95-.07-.55-.13-1.1-.19-1.64.86-1.57,2-1.64,3.18-.45a29.71,29.71,0,0,1,2.33,2.56,3.47,3.47,0,0,0,.75.78.86.86,0,0,0,.27.38c.06.22.12.45.19.67a17.15,17.15,0,0,1,.47,1.7c.14.57.29,1.15.41,1.73a5.23,5.23,0,0,1,.07.68,6.07,6.07,0,0,0,.12.84C817.74,613.35,817.61,614.11,817.69,614.87Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-8)"
                id="p-8"
                d="M798,617l-.28-.5c-.14-1.41-1.45-2.14-2-3.33-.25-.57-.31-1.42-1.24-1.25a1.58,1.58,0,0,0-1.36,1.29c-.31,3.23-2.29,5.74-3.51,8.58a.37.37,0,0,0-.18.21,23.67,23.67,0,0,1-5.41,3.22h-1.55l-4-2.24-.1-.11a2.2,2.2,0,0,0-.15-.72c-2.22-4.48-.85-8.54,1.89-12.09a9.37,9.37,0,0,1,9.7-3.66c1.4.28,1.83-.38,1.84-1.59v-6c0-1.41.14-2.74,2-2.84a2.65,2.65,0,0,1,3.09,2.12v.37a19.84,19.84,0,0,1,0,4.22c-.44,4.85,1.42,8.84,4.3,12.6,1.5,2,3.93,3.37,4.19,6.2l-.11.13c-1.24.67-2.48,1-3.66-.12l-.11-.18a3.25,3.25,0,0,0-2-2.22l-.09-.09A2.22,2.22,0,0,0,798,617Zm-17.1.37a3.53,3.53,0,0,0,2.55,4c1.67.51,2.58-1,3.19-2.2,1.12-2.19,2-4.53,2.93-6.8.29-.68.42-1.25-.56-1.49a6.61,6.61,0,0,0-7.94,4.91,6.27,6.27,0,0,0-.19,1.55Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-7)"
                id="p-7"
                d="M741,580.06l.54-.41c4-.06,5.26.76,6.66,4.86,1.16,3.39,1.2,6.4-2,8.36-.94.58-1,1.21-.7,2.27.59,1.79-.2,3.23-1.69,4.28-1.13.81-2.31,1.57-3.46,2.35h-1c-.52-1.46-1.54-3,.94-3.77,1.54-.46,2.71-1,1-2.77-.53-.56-.22-1.62.08-2.41a6,6,0,0,1,3.14-3.68c1.63-.73,1.86-1.78.39-3-.5-.41-.85-1-1.59-1.12l-.14-.13C742.43,583.22,740.3,582.22,741,580.06Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-6)"
                id="p-6"
                d="M731,622.18c-3.61.93-7,.41-9.76-2.11-1.11-1-1.74-1.15-2.19-.7h0a1,1,0,0,0,.19-.39,1,1,0,0,0,.1-.55.33.33,0,0,0,0-.14,1.12,1.12,0,0,0,.09-.44h0a2,2,0,0,0,0-.69,1.09,1.09,0,0,0,0-.44.21.21,0,0,0,0-.11h0v-.34a3.89,3.89,0,0,0-.13-.68v-.09a3.24,3.24,0,0,0-.15-.74.51.51,0,0,0-.09-.16v-.11a1,1,0,0,0-.26-.63.72.72,0,0,0-.21-.25l-.09-.12a1.5,1.5,0,0,0-.1-.16,1.16,1.16,0,0,0-.4-.33,1.05,1.05,0,0,0-.2-.27v-.08h0c.31.37.62.73.93,1.13.34-2.4.73-4.14,1.84-5.66a2.74,2.74,0,0,1,3.21-1.23c1.35.38,1.66,1.46,1.65,2.74a14.33,14.33,0,0,1-.75,4.15c-.93,2.94.08,4.55,3.17,4.89a14.68,14.68,0,0,0,2.48-.13c.88,0,1.94-.44,2.15,1C732.62,620.7,732.43,621.8,731,622.18Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-5)"
                id="p-5"
                d="M719.05,619.34a3.37,3.37,0,0,0-.74,1.53,4.84,4.84,0,0,1-2,2.77,3.22,3.22,0,0,1-5-1.84,1.77,1.77,0,0,1,.94-2.32h0l.19-.07c2.11-.83,2.42-2.38.89-4.24a15.79,15.79,0,0,0-3.61-2.62c-1.23-.84-2.29-1.93-1.33-3.51.85-1.4,2.24-1.6,3.73-1,2.61,1.09,4.49,3,6.56,5.66v0a9.41,9.41,0,0,1,.73,4.06c-.06.41-.15.81-.22,1.22A1.17,1.17,0,0,0,719.05,619.34Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-4)"
                id="p-4"
                d="M683.77,592.81c-.18,4.4.88,8.27,1.73,12.15a43.05,43.05,0,0,1,1.08,12.34c-.28,4.13-2.47,7-5.65,9.19-4.94,3.41-10.77,4.63-16.41,6.28-1.41.41-2.07-.42-2.42-1.5a1.8,1.8,0,0,1,1-2.34h0a1.69,1.69,0,0,1,.44-.12c3.56-1.1,7.09-2.29,10.65-3.39a17.75,17.75,0,0,0,5.73-3.34c2.46-2,2.73-4.82,2.26-7.74-.39-2.46-1.24-4.82-1.82-7.23-2.28-9.61-2-19.12,2.38-28.17a17.43,17.43,0,0,1,6.82-7.72,6.57,6.57,0,0,1,6.79.61,1.73,1.73,0,0,1,.67,1.74,1.14,1.14,0,0,1-1.26,1c-4.46-1.28-5.79,2.57-7.55,5C685.25,583.54,683.13,588,683.77,592.81Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-3)"
                id="p-3"
                d="M641,630.54c-1.93,0-3.89.11-4.84-2.13s-.1-3.94,1.4-5.63c1.26-1.44,3-2.36,4-4,1.32-2.14.7-3.46-1.79-3.75-2-.23-4,.24-5.94-.39-1.27-.41-2.15-1.13-2-2.45s.82-2.52,2.28-2.59a12.64,12.64,0,0,1,10.14,3.69c2.39,2.52,2.21,5.58.57,8.55-.32.58-.72,1.12-1,1.71s-1.15,1-.47,1.7,1.27.19,1.88,0l8.35-3c1.57-.59,2.28.21,2.89,1.47a1.8,1.8,0,0,1-.65,2.46h0a1.57,1.57,0,0,1-.42.18C650.72,628.14,646.2,630.54,641,630.54Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-2)"
                id="p-2"
                d="M648.58,604.45c-5.78-1-12-.38-17.56-3.32a25,25,0,0,1-2.79-1.62,2.14,2.14,0,0,1-.81-2.92h0v-.08c.68-1.09,1.83-2,3.13-1,6.22,4.76,13.54,4.28,20.71,4.46,1.71,0,2.78.54,2.88,2.26.11,2-1.36,1.93-2.74,2A16.67,16.67,0,0,0,648.58,604.45Z"
                fill="#b3313a"
              />
              <path
                mask="url(#mask-p-1)"
                id="p-1"
                d="M642.31,584.42c.23-2-.29-4.74,1.24-7.28a3.52,3.52,0,0,1,2.87-1.67,1.47,1.47,0,0,1,1.52.64,1,1,0,0,1-.07,1.41.27.27,0,0,1-.08.07l-.1.07c-1,.82-.94,1.79-.62,2.91a10.34,10.34,0,0,1,.33,2.47c.16,4.15-.13,8.32.77,12.43.3,1.36-.06,2.55-1.75,2.68-1.53.13-2.4-.47-2.82-2.11A44.6,44.6,0,0,1,642.31,584.42Z"
                fill="#b3313a"
              />
            </g>
          </g>
          <g id="notes-text">
            <path id="line-1"></path>
            <path id="line-2"></path>
            <text
              transform="translate(650.1 76.42)"
              fontSize="25"
              fontFamily="RobotoMono-Regular, Roboto Mono"
              style={{"isolation": "isolate"}}
              id="text-line-1"
            >
              <textPath xlinkHref="#line-1">Don’t forget</textPath>
            </text>
            <text
              transform="translate(650.1 106.42)"
              fontSize="25"
              fontFamily="RobotoMono-Regular, Roboto Mono"
              style={{"isolation": "isolate"}}
            >
              <textPath xlinkHref="#line-2">the constant!</textPath>
            </text>
          </g>
          <path
            mask="url(#mark-mask)"
            id="mark"
            d="M265,353.72a56.25,56.25,0,0,1,6.45-5.28,28.65,28.65,0,0,0,4.31-7.66v-2.1c-.91-1-.6-2.17-.63-3.3-.08-.22-.17-.44-.26-.67a2.62,2.62,0,0,1-.24-.34.25.25,0,0,1,.07-.2c-.2-.45-.4-.91-.59-1.36a.67.67,0,0,1-.59-.72.21.21,0,0,1,0-.11c-.13-.27-.26-.53-.38-.79a.7.7,0,0,1-.65-.75h0v-.12c-.16-.25-.31-.5-.46-.75a1.36,1.36,0,0,1-1.09-1.45,1.18,1.18,0,0,0-.27-.32,3.8,3.8,0,0,1-2-2.11l-.48-.47h0l-.4-.41a.74.74,0,0,1-.74-.62l-.44-.46a.63.63,0,0,1-.61-.61l-1.89-1.7c-.7.06-1-.34-1.22-.95l-1-.65-.12-.12a1.05,1.05,0,0,0-.29-.34.7.7,0,0,1-.85-.51h0l-.75-.5a.31.31,0,0,1-.28-.21l-1.58-.87-.51-.36a.6.6,0,0,0-.28-.24c-4.47-1.71-8.78-4-13.55-4.75a20.48,20.48,0,0,1-8.86-3.85c-2.7-1.92-5.94-2.26-9.21-2.18h-6.94l-2.22.15c-3.67.47-7.37.81-11,1.43a96.25,96.25,0,0,0-21.34,5.9,2.49,2.49,0,0,1-.77.08l-.72.23c-2.86,1.2-5.52,2.88-8.61,3.51-1.35,2.33-3.87,3-6,4.27a.31.31,0,0,1-.24.16c-1.48,1.79-3.53,2.9-5.27,4.38a19.48,19.48,0,0,0-6.5,10.38v2.43a31.57,31.57,0,0,0,5,10.32.38.38,0,0,1,.2.23l8.8,6.37.2.12a81.3,81.3,0,0,0,17.8,6.92,67.32,67.32,0,0,0,16.1,2.15c7.31.09,14.62.4,21.92-.42a20.21,20.21,0,0,1,2.91.08l1.29-.2c2.46-1.36,5.29-1.27,7.94-1.85a114.22,114.22,0,0,0,24.7-8.06,5,5,0,0,1,2-.55C264.9,353.81,264.94,353.81,265,353.72Zm-5.95-1.26c-3.05,1.33-6.53,1.38-9.48,3.08a.91.91,0,0,1-1.15-.45l-1.17.52c-4.42,2-9.14,2.85-13.81,3.95-3.67.86-7.44,1.11-11.13,1.64a49.79,49.79,0,0,1-8.46.06c-3-.1-6.06-.12-9.09-.13a5.5,5.5,0,0,1-3-.85,1.54,1.54,0,0,1-1.52.16c-1.78.13-3.58.35-5.15-.85l-2-.29c-.21.25-.36.22-.44-.1a.3.3,0,0,1-.25-.11.78.78,0,0,1-.94-.22,2,2,0,0,1-1.57-.8l-.19.09-.2-.05a25.64,25.64,0,0,1-9.66-2.69c-2.22-.37-4.38-.86-6.08-2.5-3.27-1.95-6.59-3.84-9.19-6.71-5.1-5.65-6-11.37.56-16.76,4.38-3.61,8.83-7.13,14.27-9.08,3.6-2.63,7.79-3.81,12-4.89.39-.1.69-.53,1-.8A44.29,44.29,0,0,1,206.13,311c6.38-.81,12.8-1.14,19.21-1.53a13.2,13.2,0,0,1,6.23,1.1,19.47,19.47,0,0,1-5.74.59c-1.55,0-3.15.31-3,2.18.14,2.13,1.88,1.54,3.32,1.42,13.15-1.11,25.31,1.38,35.73,10a3.85,3.85,0,0,1,.54.89l.13.11a.41.41,0,0,1,.47.34h0a.33.33,0,0,1,0,.14.82.82,0,0,1,.32.32c.36-.09.52.06.53.41a.6.6,0,0,1,.28.31,17.42,17.42,0,0,1,7.56,10c1,3.39-2.47,9.88-5.76,11.09h-.07a9.36,9.36,0,0,1-4.8,2.89c-.31.69-1.37.95-2,1.24Z"
            fill="#b3313a"
          />
          <path
            mask="url(#arrow-head-mask)"
            id="arrow-head"
            d="M610.21,541.39c-2.83,1.22-5.9,1.56-8.83,2.4-1,.3-2.37.89-2.77-.78s.46-2.65,2.17-3c2.18-.5,4.33-1.18,6.49-1.77.57-.15,1.18-.13,1.51-.74a1.5,1.5,0,0,0,.34-.16,2.21,2.21,0,0,0,.71-.24,3.69,3.69,0,0,0,2-1.35,2.51,2.51,0,0,0,1.28-2.81v-.12a.28.28,0,0,0,.08-.15,3.3,3.3,0,0,0-2.48-2.64l-1.89-2.14c0-.37-.17-.36-.43-.29-2.37-1.26-3.06-5.64-7.06-3.87h0a.82.82,0,0,0-.2-.12h.18c-.13-3.93,2.25-5.44,6-4,4.88,1.87,7.27,5.9,8.75,10.39C617.86,535.54,615.66,539.1,610.21,541.39Z"
            fill="#b3313a"
          />
          <rect
            id="type-rect"
            x="1020.3"
            y="0.16"
            width="78.56"
            height="78.56"
            fill="#fff"
          />
          <rect
            id="edit-rect"
            x="787.71"
            width="75.76"
            height="73.2"
            fill="#fff"
          />
          <g id="edit-group">
            <path
              id="edit-icon-bg"
              d="M858.28,32.62a31.2,31.2,0,1,1-31.2-31.2A31.2,31.2,0,0,1,858.28,32.62Z"
              fill="#fff"
              stroke="#cfcfcf"
              strokeMiterlimit="10"
              style={{"isolation": "isolate"}}
            />
            <path
              id="edit-icon"
              d="M842.28,24.34c.2,1.2-.6,2.1-1.4,2.9l-17,17.1c-1,1-2.3,1.1-3.5,1.5s-4.2,1.3-6.4,1.8-2.4-.3-1.9-2,1.6-5.4,2.3-8.1a5.41,5.41,0,0,1,1.5-2.1l15.8-15.9c1.7-1.6,3.3-2.7,5.7-1.7S842.18,21.74,842.28,24.34Zm-4.4-3.4c-1.3-.3-2.1-1.6-3.4-.4L818,37.14c-.7.7-.5,1.1.1,1.6s.9,1.2,1.8.3l8.5-8.6Zm.7,1.1-17.3,17.3c-.6.6-1.6,1.1-.4,2.3s1.7.1,2.3-.5L838.38,26C839.68,24.84,840.08,23.74,838.58,22Zm-23.5,22.6,5-1.5-3.5-3.6Z"
              fill="#1b1c1c"
              stroke="#000"
              strokeMiterlimit="10"
            />
          </g>
          <g id="type-group">
            <path
              id="type-icon-bg"
              d="M1092.51,31.9A31.2,31.2,0,1,1,1061.31.7,31.2,31.2,0,0,1,1092.51,31.9Z"
              fill="#fff"
              stroke="#cfcfcf"
              strokeMiterlimit="10"
              style={{"isolation": "isolate"}}
            />
            <path
              id="type-icon"
              d="M1050.55,31.58v-8.2a2.79,2.79,0,0,1,2.46-3.1,2.29,2.29,0,0,1,.64,0h16.8c2.1,0,3,1.1,3,3.2v10.9a2.22,2.22,0,0,1-.6,1.9l-6.3,6.3a2.42,2.42,0,0,1-1.8.7h-11c-2.2.1-3.2-1-3.2-3.2Zm20.3,3c-5.4-1.4-6.3-.8-6.3,4.6,0,.5-.3,1.2.2,1.6Z"
              fill="#070707"
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};
export default Component;
