import { useEffect } from "react";
import gsap from "gsap";
import { Container } from "./style";
const Component = () => {
  useEffect(() => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var oppositeIndex = [10, 15, 20, 33, 38, 48, 57, 78, 81, 85, 89];
    var masks = document.getElementsByClassName("line-mask");

    const equalise = (el, offset) => {
      var tl = new gsap.timeline({ repeat: -1, yoyo: true });
      let duration = Math.random() + getRandomInt(1, 3);
      let delay = Math.random();
      tl.fromTo(
        el,
        {
          strokeDashoffset: 0,
        },
        {
          strokeDashoffset: offset,
          delay: delay,
          duration: duration,
        }
      );
    };

    for (var i = 0; i < masks.length; i++) {
      let el = masks[i];
      const length = el.getTotalLength();
      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;
      if (!oppositeIndex.includes(i)) {
        equalise(el, length / (1 + Math.random()));
      } else {
        equalise(el, -length / (1 + Math.random()));
      }
    }
  }, []);
  return (
    <Container>
      <div className="henry-logoc-container">
        <svg
          id="logo-c"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198.14 245.15"
        >
          <defs>
            <mask id="m-1">
              <path
                className="line-mask"
                id="mp-1"
                d="M-201.06,104.4H-231.7"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-2">
              <path
                className="line-mask"
                id="mp-2"
                d="M-201.06,102.27l-18.94-.78"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-3">
              <path
                className="line-mask"
                id="mp-3"
                d="M-200.79,100.14-226,98.31"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-4">
              <path
                className="line-mask"
                id="mp-4"
                d="M-200.79,98l-35.88-3.84"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-5">
              <path
                className="line-mask"
                id="mp-5"
                d="M-200.27,96.1l-11-1.68"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-6">
              <path
                className="line-mask"
                id="mp-6"
                d="M-200.27,93.65l-20.61-3.53"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-7">
              <path
                className="line-mask"
                id="mp-7"
                d="M-199.77,91.88l-30.6-6.9"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-8">
              <path
                className="line-mask"
                id="mp-8"
                d="M-198.88,89.73l-8-2.28"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-9">
              <path
                className="line-mask"
                id="mp-9"
                d="M-198.57,87.45l-24-6.83"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-10">
              <path
                className="line-mask"
                id="mp-10"
                d="M-197.31,85.54l-29.85-9.49"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-11">
              <path
                className="line-mask"
                id="mp-11"
                d="M-206.87,79.92l9.87,3.55"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-12">
              <path
                className="line-mask"
                id="mp-12"
                d="M-196.62,81.41l-14.66-5.52"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-13">
              <path
                className="line-mask"
                id="mp-13"
                d="M-195.82,79.55-224,67.1"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-14">
              <path
                className="line-mask"
                id="mp-14"
                d="M-194.72,77.49-233.29,59"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-15">
              <path
                className="line-mask"
                id="mp-15"
                d="M-193.9,75.56l-27.41-14.47"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-16">
              <path
                className="line-mask"
                id="mp-16"
                d="M-202.72,68.37l10,5.62"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-17">
              <path
                className="line-mask"
                id="mp-17"
                d="M-191.64,72.26l-31.61-20.41"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-18">
              <path
                className="line-mask"
                id="mp-18"
                d="M-190.56,70.39l-35.55-24.13"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-19">
              <path
                className="line-mask"
                id="mp-19"
                d="M-189.23,68.37-215,50"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-20">
              <path
                className="line-mask"
                id="mp-20"
                d="M-188,67l-37.2-29.19"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-21">
              <path
                className="line-mask"
                id="mp-21"
                data-name="mp-20"
                d="M-213.17,43l26.69,22.41"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-22">
              <path
                className="line-mask"
                id="mp-22"
                d="M-185,63.75-200.14,50"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-23">
              <path
                className="line-mask"
                id="mp-23"
                d="M-183.74,62.05l-24.6-23.81"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-24">
              <path
                className="line-mask"
                id="mp-24"
                d="M-182.09,60.59-207.61,34"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-25">
              <path
                className="line-mask"
                id="mp-25"
                d="M-180.43,59l-7.87-8.25"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-26">
              <path
                className="line-mask"
                id="mp-26"
                d="M-178.94,57.6l-12.7-15.12"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-27">
              <path
                className="line-mask"
                id="mp-27"
                d="M-177.21,56.33l-18.08-22.69"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-28">
              <path
                className="line-mask"
                id="mp-28"
                d="M-175.79,54.91l-13.15-18.18"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-29">
              <path
                className="line-mask"
                id="mp-29"
                d="M-173.9,53.74l-4.49-6.47"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-30">
              <path
                className="line-mask"
                id="mp-30"
                d="M-171.8,52.82l-16.79-26.69"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-31">
              <path
                className="line-mask"
                id="mp-31"
                d="M-170,51.85l-5.47-9.37"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-32">
              <path
                className="line-mask"
                id="mp-32"
                d="M-168.07,50.74l-19.52-36.49"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-33">
              <path
                className="line-mask"
                id="mp-33"
                d="M-166.28,49.68l-10.93-22.37"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-34">
              <path
                className="line-mask"
                id="mp-34"
                d="M-170.48,35.72l5.83,12.76"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-35">
              <path
                className="line-mask"
                id="mp-35"
                d="M-162.53,47.71l-3.75-8.24"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-36">
              <path
                className="line-mask"
                id="mp-36"
                d="M-160.57,47.16l-12.2-33.55"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-37">
              <path
                className="line-mask"
                id="mp-37"
                d="M-158.64,46.26-172.77,2.7"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-38">
              <path
                className="line-mask"
                id="mp-38"
                d="M-156.5,45.82l-6-20.45"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-39">
              <path
                className="line-mask"
                id="mp-39"
                d="M-164.15,6.83l9.64,38.47"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-40">
              <path
                className="line-mask"
                id="mp-40"
                d="M-152.44,45l-2.46-11.35"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-41">
              <path
                className="line-mask"
                id="mp-41"
                d="M-150.23,44.49l-6.85-37"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-42">
              <path
                className="line-mask"
                id="mp-42"
                d="M-148.16,44.3l-2.07-15"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-43">
              <path
                className="line-mask"
                id="mp-43"
                d="M-145.95,44l-4.88-45.45"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-44">
              <path
                className="line-mask"
                id="mp-44"
                d="M-143.89,43.61-146.81,2.7"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-45">
              <path
                className="line-mask"
                id="mp-45"
                d="M-141.82,43.4l-.78-19.09"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-46">
              <path
                className="line-mask"
                id="mp-46"
                d="M-139.84,43.61V22.23"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-47">
              <path
                className="line-mask"
                id="mp-47"
                d="M-137.4,43.29l.38-24.41"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-48">
              <path
                className="line-mask"
                id="mp-48"
                d="M-135.47,43.61-132.59.09"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-49">
              <path
                className="line-mask"
                id="mp-49"
                d="M-128.56-3l-4.85,47"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-50">
              <path
                className="line-mask"
                id="mp-50"
                d="M-131.12,44.3l3.48-27.56"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-51">
              <path
                className="line-mask"
                id="mp-51"
                d="M-129.38,44.58l6.46-36.08"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-52">
              <path
                className="line-mask"
                id="mp-52"
                d="M-127.06,44.84l8.63-42.14"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-53">
              <path
                className="line-mask"
                id="mp-53"
                d="M-125.38,45.57l7.93-30.4"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-54">
              <path
                className="line-mask"
                id="mp-54"
                d="M-122.92,46l7-25.09"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-55">
              <path
                className="line-mask"
                id="mp-55"
                d="M-121.07,46.85l8.84-27"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-56">
              <path
                className="line-mask"
                id="mp-56"
                d="M-119,47.33-106.65,13"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-57">
              <path
                className="line-mask"
                id="mp-57"
                d="M-117.4,48.18l9.11-21.64"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-58">
              <path
                className="line-mask"
                id="mp-58"
                d="M-96.46,6.9l-18.62,41.82"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-59">
              <path
                className="line-mask"
                id="mp-59"
                d="M-113.06,49.38l15-30.18"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-60">
              <path
                className="line-mask"
                id="mp-60"
                data-name="mp=59"
                d="M-111.48,50.57l13-24"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-61">
              <path
                className="line-mask"
                id="mp-61"
                d="M-109.39,51.36-85.33,9.19"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-62">
              <path
                className="line-mask"
                id="mp-62"
                d="M-107.76,52.62-86,18.31"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-63">
              <path
                className="line-mask"
                id="mp-63"
                d="M-105.89,53.92-94.12,37"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-64">
              <path
                className="line-mask"
                id="mp-64"
                d="M-104.15,55l25.43-34.59"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-65">
              <path
                className="line-mask"
                id="mp-65"
                d="M-102.42,56.36-85.33,35"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-66">
              <path
                className="line-mask"
                id="mp-66"
                d="M-101.11,57.85l26.17-31"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-67">
              <path
                className="line-mask"
                id="mp-67"
                d="M-99.24,59.35-80,37.69"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-68">
              <path
                className="line-mask"
                id="mp-68"
                d="M-97.64,60.45-72,34"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-69">
              <path
                className="line-mask"
                id="mp-69"
                d="M-96.19,62.18-83,49.38"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-70">
              <path
                className="line-mask"
                id="mp-70"
                d="M-95,63.65l23.38-20.46"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-71">
              <path
                className="line-mask"
                id="mp-71"
                d="M-93.21,65.12-73,48.18"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-72">
              <path
                className="line-mask"
                id="mp-72"
                d="M-92.13,67.05-76.31,55"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-73">
              <path
                className="line-mask"
                id="mp-73"
                d="M-90.56,68.85l25.25-18.47"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-74">
              <path
                className="line-mask"
                id="mp-74"
                d="M-89.64,70.39l31.52-21"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-75">
              <path
                className="line-mask"
                id="mp-75"
                d="M-88.56,72.42-62.25,56.1"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-76">
              <path
                className="line-mask"
                id="mp-76"
                d="M-87.63,74.33-64.25,61"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-77">
              <path
                className="line-mask"
                id="mp-77"
                d="M-86.46,76.18l22.85-12.53"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-78">
              <path
                className="line-mask"
                id="mp-78"
                d="M-85.33,77.7l27.21-13.09"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-79">
              <path
                className="line-mask"
                id="mp-79"
                d="M-51.35,65.12-84.22,79.55"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-80">
              <path
                className="line-mask"
                id="mp-80"
                d="M-83.35,81.62l41.56-17"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-81">
              <path
                className="line-mask"
                id="mp-81"
                d="M-83,83.4l31.37-11.06"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-82">
              <path
                className="line-mask"
                id="mp-82"
                d="M-41.29,72.42l-41,13.34"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-83">
              <path
                className="line-mask"
                id="mp-83"
                d="M-81.6,88l30.25-8.94"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-84">
              <path
                className="line-mask"
                id="mp-84"
                d="M-80.81,89.61l20.91-5.42"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-85">
              <path
                className="line-mask"
                id="mp-85"
                d="M-80.33,92l12.55-3"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-86">
              <path
                className="line-mask"
                id="mp-86"
                d="M-36.87,86.16-80,93.66"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-87">
              <path
                className="line-mask"
                id="mp-87"
                d="M-79.58,95.7l32.94-4.31"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-88">
              <path
                className="line-mask"
                id="mp-88"
                d="M-79.58,98.3-62,96.09"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-89">
              <path
                className="line-mask"
                id="mp-89"
                d="M-79,100.3-48.85,98"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-90">
              <path
                className="line-mask"
                id="mp-90"
                d="M-58.12,101.44-79,102"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
            <mask id="m-91">
              <path
                className="line-mask"
                id="mp-91"
                d="M-79.28,104.38h31.71"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </mask>
          </defs>
          <g id="base">
            <path
              id="q-circle"
              d="M-224,106c0,47,37.84,85.19,84.35,85.19,46.75,0,84.78-38.22,84.78-85.19h-22.5c0,33.87-27.84,61.42-62.06,61.42s-62.06-27.55-62.06-61.42Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <circle id="dot" cx="97.85" cy="228.65" r="16.5" fill="#ea5556" />
          </g>
          <g>
            <path
              mask="url(#m-61)"
              id="p-61"
              d="M-108.55,51.36c-.45-.1-.72-.24-.81-.44s0-.52.25-1l9.81-17,12.77-22.05a1.57,1.57,0,0,1,.74-.53l.29-.15a.72.72,0,0,0,0,.32,1.37,1.37,0,0,1,0,.85q-10.48,18.26-21,36.46l-2,3.35Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-80)"
              id="p-80"
              d="M-83,80.85l.37-.18.91-.41L-43.86,65l.27-.11a1.65,1.65,0,0,1,.68-.22h0a1.48,1.48,0,0,1,.58.16l.18.08-.06.21a2.33,2.33,0,0,1-.26.66c-.06.1-.24.15-.4.2l-.21.08-39,15.74-.29.09-.21.05Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-58)"
              id="p-58"
              d="M-114.15,48.58l-1.29-.57c.48-1.1.93-2.14,1.39-3.17L-98.21,9.27a3.1,3.1,0,0,1,.44-.94,3.66,3.66,0,0,1,1-.42c.11.34.38.71.3,1a9.31,9.31,0,0,1-.75,1.78l-16.2,36.39A15.06,15.06,0,0,0-114.15,48.58Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-49)"
              id="p-49"
              d="M-132.78,43.4l-1.25-.17V42.3Q-132.32,26-130.6,9.77c.31-2.87.59-5.73,1-8.6.06-.41.54-.77.83-1.15.19.46.59.91.55,1.33q-2.13,20.79-4.34,41.59A2.43,2.43,0,0,1-132.78,43.4Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-43)"
              id="p-43"
              d="M-147.22,39.79c-.26-2.44-.52-4.86-.78-7.28l-.46-4.46q-1.35-12.75-2.65-25.51a6.1,6.1,0,0,0-.14-.72c-.13-.54-.27-1.15,0-1.47a.69.69,0,0,1,.5-.26h.21a.68.68,0,0,1,.49.18c.24.26.21.82.17,1.32a4.45,4.45,0,0,0,0,.73q1.84,16.92,3.59,33.81l.69,6.53a1.5,1.5,0,0,1,0,.3v.2l-1.18.13Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-20)"
              id="p-20"
              d="M-201.35,57.1l-19.54-15.31a2.91,2.91,0,0,1-.71-1.06l-.18-.37.4.07a2.8,2.8,0,0,1,1.2.4q13.55,10.52,27,21.09l4,3.15.8.64.38.33-.79.92Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-64)"
              id="p-64"
              d="M-104.15,54.32l.2-.33c.17-.26.32-.51.49-.73l23.15-31.87.17-.25a2,2,0,0,1,.45-.54,1.64,1.64,0,0,1,.68-.21,1.17,1.17,0,0,1,.28.94.7.7,0,0,1-.24.36l-.15.19L-102.8,54.47l-.26.32-.16.19Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-86)"
              id="p-86"
              d="M-79.07,94.24c-.21-.43-.26-.72-.17-.91s.38-.34.88-.43l16.77-3L-40,86.16h.11a2.4,2.4,0,0,1,.9.3l.35.16-.27.22a1.92,1.92,0,0,1-.87.53q-18.88,3.39-37.78,6.7l-.59.1a3.79,3.79,0,0,1-.67.06Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-18)"
              id="p-18"
              d="M-191.26,70.33l-.25-.08-1.25-.84L-224.54,48a2,2,0,0,1-.52-.83l-.14-.33h.69a.84.84,0,0,1,.49.1q15.18,10.2,30.33,20.44l2.84,1.92a.7.7,0,0,1,.16.14l.13.13-.57.87Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-82)"
              id="p-82"
              d="M-81.15,86.1l-.45-1.2c.17-.14.26-.28.39-.32q18.7-6.08,37.44-12.13c.4-.13.94.15,1.42.23-.35.39-.64,1-1.07,1.12Q-57.5,78.45-71.62,83Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-14)"
              id="p-14"
              d="M-194.72,76.85l-.71,1.2-9-4.37-26.54-13a3.64,3.64,0,0,1-.91-.49,3,3,0,0,1-.41-.85,4.1,4.1,0,0,1,1-.4,2,2,0,0,1,.67.28l35.13,17.13Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-52)"
              id="p-52"
              d="M-126.44,44.45l-1.18-.24a3.11,3.11,0,0,1,0-.61q4-18.92,8-37.8c.11-.49.6-.9.91-1.34.19.44.62.92.54,1.3q-4,19.13-8.1,38.23A2.54,2.54,0,0,1-126.44,44.45Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-62)"
              id="p-62"
              d="M-106.76,52.62l-1-.57a1.94,1.94,0,0,1,.09-.48Q-97.78,35.73-87.87,20c.24-.38.88-.52,1.33-.75,0,.44.17,1,0,1.31q-9.93,16-19.93,31.88A.92.92,0,0,1-106.76,52.62Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-37)"
              id="p-37"
              d="M-158.15,45.85l-1.34.36-3.39-10.42q-4-12.34-8-24.69a3,3,0,0,1-.27-1,3.23,3.23,0,0,1,.45-1,7.7,7.7,0,0,1,.89.6c.13.12.15.36.21.55l11.25,34.6C-158.28,45.11-158.24,45.36-158.15,45.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-44)"
              id="p-44"
              d="M-143.39,43.12l-1.26.06a1.76,1.76,0,0,1-.18-.47q-1.28-18-2.52-36c0-.41.42-.85.65-1.28.26.4.72.8.76,1.21.5,6.3.95,12.6,1.4,18.9q.58,8.27,1.14,16.53C-143.38,42.35-143.39,42.64-143.39,43.12Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-66)"
              id="p-66"
              d="M-99.8,57.85l-1-.83c0-.16,0-.26.06-.32q11.55-13.8,23.12-27.56c.28-.34.87-.41,1.31-.61-.07.51,0,1.18-.23,1.51C-84.15,39.3-91.95,48.52-99.8,57.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-32)"
              id="p-32"
              d="M-168.07,49.85l-1.21.64-5.78-10.84-10.77-20.28a4.53,4.53,0,0,1-.52-1.22.81.81,0,0,1,.36-.7.86.86,0,0,1,.77.16,2,2,0,0,1,.49.73l16.45,31A2.19,2.19,0,0,1-168.07,49.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-74)"
              id="p-74"
              d="M-89.25,69.42h.06a1.44,1.44,0,0,0,.4-.18l6.88-4.63q10.66-7.22,21.37-14.38a1.83,1.83,0,0,1,1-.19h.34a2.17,2.17,0,0,0-.15.35,2.17,2.17,0,0,1-.56.9q-9.69,6.59-19.44,13.14l-9.08,6.12Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-39)"
              id="p-39"
              d="M-155.4,44.85c-1.18-4.77-2.34-9.49-3.52-14.2-1.54-6.17-3.1-12.33-4.64-18.51a2.8,2.8,0,0,1-.22-1,8.54,8.54,0,0,1,.4-1.37c.33.34.86.65,1,1,1.08,4.08,2.09,8.18,3.11,12.28,1.7,6.8,3.38,13.6,5.1,20.38C-154,44.45-154.15,44.9-155.4,44.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-4)"
              id="p-4"
              d="M-218.73,96.75c-5-.52-10.16-1.06-15.24-1.63a5,5,0,0,1-1.93-.77c.11-.62.43-.7.7-.7a2.78,2.78,0,0,1,.7.12,3,3,0,0,0,.52.11q10.46,1.05,20.91,2.16l11.12,1.15a.88.88,0,0,1,.81.35,1.23,1.23,0,0,1-.1,1Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-48)"
              id="p-48"
              d="M-135.41,43.08a1.75,1.75,0,0,1-.71-.16l.22-3.32.54-8.11,1.08-15.29.36-5.12v-.5a5.42,5.42,0,0,1,.15-1.26,1.6,1.6,0,0,1,.44-.63l.18-.19a1.64,1.64,0,0,0,.19.25,1.34,1.34,0,0,1,.37.69c-.09,2.5-.27,5-.44,7.49l-1.76,25C-134.81,42.64-134.87,43.08-135.41,43.08Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-68)"
              id="p-68"
              d="M-97.15,60.45l-.49-.55a2.12,2.12,0,0,1,.27-.49l23-23.84c.3-.31.89-.34,1.35-.5-.11.51,0,1.17-.36,1.49-5.53,5.8-11.06,11.59-16.68,17.3C-92.15,56.08-94.6,58.11-97.15,60.45Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-56)"
              id="p-56"
              d="M-118.3,46.85l-1.17-.46c3-8.19,5.91-16.27,8.85-24.35.85-2.34,1.67-4.68,2.59-7,.15-.37.72-.59,1.1-.89.09.43.38.93.25,1.28Q-112.29,31-118,46.55C-118,46.67-118.15,46.73-118.3,46.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-17)"
              id="p-17"
              d="M-191.64,71.26l-.58,1a1.66,1.66,0,0,1-.49-.11q-13.68-8.54-27.34-17.1c-.38-.23-.51-.88-.75-1.33a3,3,0,0,1,1.42.1q13.65,8.46,27.24,17A3,3,0,0,1-191.64,71.26Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-79)"
              id="p-79"
              d="M-83.4,80.07-84,78.9a2.89,2.89,0,0,1,.47-.38c9.62-4.29,19.24-8.59,28.88-12.82.4-.18,1,.12,1.51.19-.36.4-.64,1-1.09,1.18q-12.51,5.63-25.06,11.17Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-24)"
              id="p-24"
              d="M-182.52,60.18h0c-.73-.67-1.47-1.32-2.22-2-1.61-1.42-3.27-2.91-4.8-4.45-3.77-3.81-7.55-7.74-11.21-11.55L-205,37.75l-.14-.15a2.1,2.1,0,0,1-.5-.62.84.84,0,0,1,0-.66,1,1,0,0,1,.82-.08,1.11,1.11,0,0,1,.47.39l.15.16,21.57,22.35.34.4.22.27-.43.49Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-51)"
              id="p-51"
              d="M-129.59,43.71s0,0-.06-.09a.33.33,0,0,1,0-.14q2.69-15.27,5.36-30.57V12.7a1.31,1.31,0,0,1,.18-.6,2.18,2.18,0,0,1,.53-.42l.19-.12.1.17a7.3,7.3,0,0,1,.37.66v.38l-5.41,30.71-.09.29-.06.19Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-59)"
              id="p-59"
              d="M-113.32,48.85V48.7a1.5,1.5,0,0,1,.11-.34l1.15-2.35q6.19-12.72,12.41-25.39a1.76,1.76,0,0,1,.76-.62l.3-.19.06.31a1.68,1.68,0,0,1,0,.89c-3.87,8-7.77,16-11.72,24.09l-2.09,4.28Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-21)"
              id="p-21"
              d="M-186.48,64.39l-.88,1L-201.95,53.2c-3.09-2.6-6.19-5.18-9.25-7.81-.33-.28-.4-.87-.6-1.31.51.07,1.17,0,1.51.25q11.78,9.78,23.47,19.66A2.57,2.57,0,0,1-186.48,64.39Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-87)"
              id="p-87"
              d="M-78.83,96.46c-.44-1-.25-1.38.81-1.53,9.76-1.34,19.51-2.75,29.26-4.08.52-.07,1.09.33,1.64.5-.47.32-.92.84-1.43.91q-14.48,2.11-29,4.13A12.67,12.67,0,0,1-78.83,96.46Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-81)"
              id="p-81"
              d="M-82.29,82.67-73,79.3C-66.8,77-60.6,74.76-54.37,72.55c.46-.17,1.09.12,1.64.21-.37.38-.68.94-1.13,1.1-9,3.29-17.93,6.53-26.89,9.82C-81.68,84-82.15,83.93-82.29,82.67Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-36)"
              id="p-36"
              d="M-160.22,46.42l-1.26.5-3.17-8.69q-3.43-9.45-6.88-18.91a6.21,6.21,0,0,1-.35-1.28.68.68,0,0,1,.4-.53,1,1,0,0,1,.8.16,1.88,1.88,0,0,1,.4.78l9.89,27.18A8,8,0,0,1-160.22,46.42Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-1)"
              id="p-1"
              d="M-201.35,103.69v1.37c-.5,0-.94.07-1.38.07h-26.89a2.66,2.66,0,0,1-.89,0,4.65,4.65,0,0,1-.85-.67,4.26,4.26,0,0,1,.78-.75c.18-.12.48,0,.73,0h27.64A5.37,5.37,0,0,1-201.35,103.69Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-91)"
              id="p-91"
              d="M-77.81,105.12h27.69c.42,0,.85-.44,1.27-.68-.45-.26-.9-.75-1.36-.75-9,0-18.1,0-27.15,0-1,0-1.36.35-1,1.41A5.17,5.17,0,0,0-77.81,105.12Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-7)"
              id="p-7"
              d="M-199.77,90.92l-.39,1.39-11.11-2.37-16.06-3.38a2.42,2.42,0,0,1-.71-.2,13,13,0,0,1-1.25-1,4.41,4.41,0,0,1,1.63-.38c1.62.23,3.22.64,4.83,1l22.17,4.73Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-13)"
              id="p-13"
              d="M-214.81,71.68c-2.55-1.14-5.11-2.26-7.65-3.44a1.74,1.74,0,0,1-.62-.67l-.17-.27.34-.07a2.55,2.55,0,0,1,.67-.12.63.63,0,0,1,.27,0q11.57,5.09,23.09,10.25l2.67,1.2a.78.78,0,0,1,.24.16l.15.1-.54,1Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-70)"
              id="p-70"
              d="M-94.52,62.79l16-14.4c1.76-1.59,3.59-3.24,5.41-4.82a1.29,1.29,0,0,1,.77-.18h.3v.31a1.1,1.1,0,0,1-.21.75q-9.93,9-19.89,17.93l-1.28,1.14-.17.07-.16.06Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-53)"
              id="p-53"
              d="M-125.38,44.58v-.23l.39-1.59q3.17-12.73,6.37-25.48a1.54,1.54,0,0,1,.58-.66l.24-.21.13.3a1.54,1.54,0,0,1,.22.86l-6,24.23-.61,2.41a2.27,2.27,0,0,1-.16.46l-.07.17Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-73)"
              id="p-73"
              d="M-89.73,68.85l-.83-1.08c.47-.35.88-.7,1.31-1l20.91-15.2a3,3,0,0,1,.87-.57,1.41,1.41,0,0,1,1,.18c.13.1,0,.62-.13.9s-.37.32-.57.46L-89,68.44C-89.25,68.57-89.47,68.67-89.73,68.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-15)"
              id="p-15"
              d="M-194.53,75.89a.67.67,0,0,1-.24,0l-1.29-.68Q-207.61,69-219.15,62.85a1.69,1.69,0,0,1-.53-.71l-.16-.29.33-.06a2.25,2.25,0,0,1,.58-.08.49.49,0,0,1,.29.06c7,3.65,13.88,7.34,20.93,11.09l3.81,2-.53,1Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-10)"
              id="p-10"
              d="M-198.07,84.68l-.47,1.39L-211.1,82l-13.32-4.34a1.56,1.56,0,0,1-.69-.25,12.4,12.4,0,0,1-1-1.05c.48-.11,1-.4,1.41-.27,5.45,1.72,10.87,3.5,16.31,5.27Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-19)"
              id="p-19"
              d="M-189.23,67.77l-.55.86h-.39q-11.25-8.13-22.46-16.29c-.31-.22-.36-.79-.54-1.2.43,0,1-.2,1.27,0q11.31,8.19,22.55,16.42A1.13,1.13,0,0,1-189.23,67.77Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-75)"
              id="p-75"
              d="M-87.33,72.48-88,71.4c.13-.16.19-.31.3-.38q11.64-7.29,23.3-14.54c.38-.24,1-.06,1.54-.08-.24.42-.38,1-.74,1.24C-71.48,62.58-79.33,67.46-87.33,72.48Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-41)"
              id="p-41"
              d="M-149.83,43.74-151,44a2.39,2.39,0,0,1-.28-.58q-2.28-12.85-4.52-25.7a4.28,4.28,0,0,1,.4-1.56c.35.44.93.84,1,1.32q2.28,12.5,4.45,25A9.14,9.14,0,0,1-149.83,43.74Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-78)"
              id="p-78"
              d="M-84.77,77a.08.08,0,0,1,.06-.07.36.36,0,0,1,.1-.11l1.93-.94c7.18-3.52,14.61-7.16,21.93-10.69a.34.34,0,0,1,.22-.05,2.2,2.2,0,0,1,.62.12l.33.09-.15.26a1.53,1.53,0,0,1-.49.64c-6.73,3.32-13.47,6.61-20.3,9.94L-84.25,78Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-67)"
              id="p-67"
              d="M-98.36,59.35l-.88-1.09,7-7.8q5.2-5.77,10.4-11.54a3.29,3.29,0,0,1,.87-.79.89.89,0,0,1,.79.13.92.92,0,0,1,.1.79,2.23,2.23,0,0,1-.55.71l-17.08,19C-97.83,58.85-98,59-98.36,59.35Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-27)"
              id="p-27"
              d="M-177.07,55.49l-1,.84a1.36,1.36,0,0,1-.39-.25q-7.83-10-15.62-20c-.27-.35-.21-1-.3-1.43.49.2,1.15.25,1.43.61C-187.66,41.92-182.43,48.64-177.07,55.49Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-83)"
              id="p-83"
              d="M-80.25,88h-.29l-.27-1.08,4.45-1.28,10.46-3,1.06-.3c2.52-.73,5.12-1.48,7.7-2.15H-57a2,2,0,0,1,.72.2l.3.11-.21.26a1.74,1.74,0,0,1-.66.6c-7,2.06-14.1,4.07-21.15,6.09l-2.23.63Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-30)"
              id="p-30"
              d="M-171.8,51.79c-.8,1-1.25.81-1.79-.06-4.08-6.61-8.21-13.16-12.29-19.77a3.82,3.82,0,0,1-.19-1.54c.4.16,1,.2,1.19.51C-180.5,37.85-176.15,44.85-171.8,51.79Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-65)"
              id="p-65"
              d="M-102.42,55.6l.27-.37.65-.88,13.41-17.17a1.88,1.88,0,0,0,.16-.23,1,1,0,0,1,.36-.41,2.61,2.61,0,0,1,.78-.18h.23v.19c0,.25,0,.51,0,.75,0,.05-.07.13-.13.19l-.1.11-14.65,18.76Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-3)"
              id="p-3"
              d="M-201.15,99.5c.22.89.07,1.35-1,1.28-7.39-.54-14.78-1-22.16-1.61-.41,0-.79-.51-1.18-.79.38-.22.78-.65,1.15-.63,7.54.5,15.07,1,22.61,1.59A2,2,0,0,1-201.15,99.5Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-60)"
              id="p-60"
              d="M-110.35,50.57l-1.12-.68a1.15,1.15,0,0,1,0-.37c3.61-6.79,7.2-13.6,10.85-20.38.2-.37.78-.54,1.18-.81.06.43.31,1,.15,1.28C-102.89,36.55-106.58,43.48-110.35,50.57Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-76)"
              id="p-76"
              d="M-86.26,74.33l-.65-1.09c.13-.17.19-.32.31-.39q9.93-5.76,19.87-11.46c.37-.21.94,0,1.42-.06-.22.43-.33,1-.67,1.24C-72.67,66.49-79.38,70.36-86.26,74.33Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-23)"
              id="p-23"
              d="M-184.59,62.14l-7-6.74c-3.3-3.17-6.6-6.33-9.86-9.55-.31-.3-.33-.9-.48-1.36.5.11,1.15.06,1.46.36,5.41,5.15,10.76,10.35,16.14,15.51C-183.62,61-183.38,61.54-184.59,62.14Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-71)"
              id="p-71"
              d="M-92.31,65.51l-.9-1.08c.4-.38.75-.72,1.11-1l16.22-13.58a2.73,2.73,0,0,1,.82-.62,2.43,2.43,0,0,1,.93,0,9.37,9.37,0,0,1,0,1.06c0,.11-.2.2-.32.31Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-50)"
              id="p-50"
              d="M-132,43.55c.67-4.78,1.31-9.35,1.94-13.93.4-2.8.76-5.61,1.22-8.42.08-.48.56-.89.86-1.34.18.53.59,1.08.53,1.57-1,7.36-2,14.68-3.05,22.12Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-89)"
              id="p-89"
              d="M-77.45,100.63a1.59,1.59,0,0,1-.74-.35l-.25-.17.23-.21a1.31,1.31,0,0,1,.7-.46c3.39-.29,6.79-.52,10.19-.76l2.84-.2h0l1.89-.12c2-.13,4-.28,6-.35h0a1.82,1.82,0,0,1,.87.3l.28.14-.27.24a1.7,1.7,0,0,1-.8.51c-4.07.34-8.21.62-12.21.9l-3.37.23c-1.77.12-3.59.25-5.39.32Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-55)"
              id="p-55"
              d="M-120.15,46.21l-1.27-.36a2,2,0,0,1,0-.49q3.27-10.11,6.57-20.24a.33.33,0,0,1,0-.14l1.2-1.13c.09.51.38,1.07.25,1.51-.64,2.24-1.39,4.46-2.11,6.66C-117,36.71-118.55,41.39-120.15,46.21Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-47)"
              id="p-47"
              d="M-137.66,22.11a.71.71,0,0,1,0-.29c.25-.43.51-.83.77-1.24.24.42.69.85.69,1.27-.09,4.11-.25,8.23-.39,12.36l-.24,6.86v1.64h-1S-137.66,25.39-137.66,22.11Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-77)"
              id="p-77"
              d="M-86,75l18.07-9.6a6.91,6.91,0,0,1,1.46-.74,2.69,2.69,0,0,1,1.15.2c-.17.36-.33.73-.52,1.08,0,.07-.16.09-.25.14l-19,10.14Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-33)"
              id="p-33"
              d="M-168.88,46.2c-2.57-5.29-5.12-10.53-7.64-15.78a1.33,1.33,0,0,1,0-.79c0-.1.05-.2.06-.3l.28.13c.28.12.57.24.66.43,2.57,5.19,5.11,10.4,7.68,15.66l1.56,3.21-1.12.57Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-57)"
              id="p-57"
              d="M-117.32,47.14l.53-1.35c.39-1,.76-1.93,1.15-2.89l5.82-14.36.1-.25a2.83,2.83,0,0,1,.39-.8.93.93,0,0,1,.54-.25,1.24,1.24,0,0,1,.49.68.44.44,0,0,1,0,.3v.11l-7.8,19.28Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-84)"
              id="p-84"
              d="M-80.09,90.08-80.33,89a1.86,1.86,0,0,1,.41-.28c6-1.51,12-3,18.09-4.5.43-.11,1,.19,1.43.3-.31.36-.56.94-.93,1-6.12,1.57-12.25,3.07-18.38,4.59C-79.8,90.17-79.9,90.11-80.09,90.08Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-9)"
              id="p-9"
              d="M-212.53,84.2c-1.81-.52-3.68-1-5.5-1.62-.21-.07-.38-.33-.54-.59l-.17-.25.28-.12a1.64,1.64,0,0,1,.67-.21h.11c5.16,1.44,10.3,2.92,15.54,4.43l3.26.94-.33,1.2Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-28)"
              id="p-28"
              d="M-176.49,54.85a.91.91,0,0,1-.21-.18l-1.09-1.49-10-13.72a1.61,1.61,0,0,1-.19-.89v-.33l.31.08a1.42,1.42,0,0,1,.79.32c3.1,4.21,6.17,8.43,9.29,12.74l2.09,2.87-.91.66Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-38)"
              id="p-38"
              d="M-157,45.3c-.2,0-.44-.09-.62-.73-.76-2.72-1.54-5.45-2.32-8.17-.87-3-1.74-6-2.58-9a1.63,1.63,0,0,1,.16-.9,1.07,1.07,0,0,1,.11-.33l.25.16c.26.16.53.33.59.52,1.46,5,2.88,10,4.32,15l.91,3.2A1.88,1.88,0,0,1-157,45.3Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-6)"
              id="p-6"
              d="M-200.27,93l-.25,1.44-11.21-2c-2.45-.42-4.9-.85-7.33-1.35-.36-.07-.63-.57-.94-.87.4-.18.84-.56,1.2-.5C-212.68,90.77-206.57,91.85-200.27,93Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-46)"
              id="p-46"
              d="M-139.15,42.85c-1,.33-1.43.07-1.42-1v-17c0-.47.48-1,.73-1.4.25.45.7.92.7,1.38,0,5.72,0,11.45,0,17.18A3.86,3.86,0,0,1-139.15,42.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-54)"
              id="p-54"
              d="M-122.15,45.57l-1.4-.4,3.08-10.81c.55-1.91,1.06-3.82,1.69-5.72.13-.4.68-.66,1-1,.13.43.45.9.35,1.26C-119,34.43-120.55,39.92-122.15,45.57Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-63)"
              id="p-63"
              d="M-104.88,53.92l-1.18-.85c1.65-2.44,3.24-4.82,4.84-7.2s3.2-4.79,4.86-7.14c.24-.33.85-.4,1.28-.58,0,.44.13,1-.08,1.31C-98.34,44.26-101.57,49-104.88,53.92Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-22)"
              id="p-22"
              d="M-188.8,61.11c-3.06-2.75-6-5.35-8.87-8a5.52,5.52,0,0,0-.55-.4c-.41-.25-.86-.54-.91-.89a.85.85,0,0,1,.28-.64.68.68,0,0,1,.48-.26c.35,0,.7.43,1,.79a3.42,3.42,0,0,0,.44.49c3,2.62,5.87,5.23,8.94,8l3,2.67-.89.88Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-90)"
              id="p-90"
              d="M-77.56,102.89a.8.8,0,0,1-.68-.21,1.42,1.42,0,0,1-.06-1.07l3-.11c4.52-.16,9-.32,13.47-.43.21,0,.44.2.67.4l.24.2a1.57,1.57,0,0,0-.25.2,1.42,1.42,0,0,1-.68.42c-2.92.12-5.84.24-8.76.34l-6.87.26Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-2)"
              id="p-2"
              d="M-201.34,101.5c.2,1,.1,1.54-1,1.48-5-.21-10-.36-15-.59-.39,0-.76-.53-1.14-.81.39-.22.78-.64,1.16-.63C-212,101.11-206.71,101.31-201.34,101.5Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-72)"
              id="p-72"
              d="M-91.73,66.05l2.21-1.73c3.49-2.74,7-5.44,10.44-8.12a.54.54,0,0,1,.39-.09h.59a1.71,1.71,0,0,0,0,.32,1.31,1.31,0,0,1-.25.73c-3.35,2.66-6.72,5.29-10.16,8l-2.43,1.89Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-69)"
              id="p-69"
              d="M-95.95,61.35v-.11a.83.83,0,0,1,.14-.22l1.55-1.51c3-2.91,6.11-5.93,9.19-8.86a1.65,1.65,0,0,1,.86-.27h.32v.32a1.43,1.43,0,0,1-.26.82C-87,54.36-89.93,57.17-92.9,60l-2.21,2.14Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-88)"
              id="p-88"
              d="M-78.94,98.14c.35-.34.67-1,1.06-1,4.63-.53,9.27-1,13.92-1.44.34,0,.73.41,1.1.63-.3.25-.57.72-.9.74q-7.38.86-14.77,1.61Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-26)"
              id="p-26"
              d="M-187,49.14l-.62-.74c-.59-.69-1.2-1.39-1.74-2.14a1.36,1.36,0,0,1-.13-.72v-.27h.31a1,1,0,0,1,.74.21c2.57,3,5.1,6,7.7,9.12l1.84,2.2-1,.8Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-45)"
              id="p-45"
              d="M-142.48,42.85a.64.64,0,0,1-.1-.24l-.07-1.87c-.14-3.88-.29-7.89-.38-11.85a1.8,1.8,0,0,1,.4-.89c.07-.1.13-.2.19-.3l.19.26a1.85,1.85,0,0,1,.41.83c.17,3.7.3,7.41.44,11.16l.11,2.94-1.12.09C-142.43,42.92-142.46,42.85-142.48,42.85Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-12)"
              id="p-12"
              d="M-196.62,80.64c-.15,1.22-.62,1.35-1.55,1-3.57-1.49-7.17-2.88-10.73-4.37-.41-.17-.66-.7-1-1.07.51-.1,1.1-.41,1.51-.25C-204.46,77.45-200.57,79.05-196.62,80.64Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-42)"
              id="p-42"
              d="M-147.64,43.39c-1,.43-1.48.28-1.61-.71q-.74-5.62-1.54-11.24a1.18,1.18,0,0,1,0-.59,6.94,6.94,0,0,1,.56-1c.28.28.76.53.82.85.28,1.37.43,2.75.62,4.13C-148.43,37.64-148,40.49-147.64,43.39Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-34)"
              id="p-34"
              d="M-164.15,48l-1.19.52a2.37,2.37,0,0,1-.34-.37c-1.5-3.35-3-6.71-4.46-10.07-.18-.43,0-1,.09-1.55.41.33,1,.57,1.2,1C-167.23,40.89-165.73,44.35-164.15,48Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-85)"
              id="p-85"
              d="M-79.57,92.33l-.33-1.43c3.12-.66,6.12-1.32,9.12-1.89.31-.06.71.31,1.06.48-.25.3-.46.81-.77.89C-73.47,91.07-76.48,91.67-79.57,92.33Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-16)"
              id="p-16"
              d="M-192.71,73l-.69,1.28c-2.76-1.59-5.43-3.1-8.06-4.69-.26-.16-.27-.72-.4-1.09.4,0,.89-.23,1.18-.07C-198,69.89-195.43,71.42-192.71,73Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-5)"
              id="p-5"
              d="M-201,96.54c-2.84-.41-5.69-.8-8.52-1.27-.3,0-.53-.54-.79-.82.35-.19.72-.58,1-.55,2.61.31,5.21.67,7.8,1.11.36.06.62.7.93,1.09Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-25)"
              id="p-25"
              d="M-181.39,59.27c-1.94-2.15-3.76-4.12-5.51-6.16-.23-.26-.12-.84-.17-1.26.42.1,1,.1,1.23.36,1.81,1.93,3.56,3.9,5.41,6Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-11)"
              id="p-11"
              d="M-197.31,82.67l-.58,1.35c-2.58-.94-5.11-1.83-7.6-2.81-.28-.11-.39-.65-.57-1,.38-.09.82-.37,1.14-.26C-202.43,80.85-200,81.7-197.31,82.67Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-40)"
              id="p-40"
              d="M-153.31,44.32c-.54-2.52-1.1-5-1.59-7.53,0-.31.33-.71.51-1,.31.25.81.46.88.77.55,2.26,1,4.53,1.45,6.82.07.35-.43.82-.67,1.25Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-31)"
              id="p-31"
              d="M-171.93,50c-1-1.74-2-3.4-2.91-5.1a1,1,0,0,1,.08-.62,1.36,1.36,0,0,1,.07-.25l.29.07a1.23,1.23,0,0,1,.63.28c1,1.61,1.91,3.22,2.89,4.93l.85,1.48-1.07.64Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-35)"
              id="p-35"
              d="M-164,46.2c-.58-1.43-1.14-2.8-1.66-4.19a1.24,1.24,0,0,1,.1-.71c0-.08,0-.17.08-.26l.28.12c.27.12.56.24.64.41.6,1.33,1.14,2.68,1.71,4.11l.56,1.41-1.15.46Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
            <path
              mask="url(#m-29)"
              id="p-29"
              d="M-173.56,53l-1,.7c-.15-.08-.27-.1-.32-.17-1-1.52-2.1-3-3.06-4.55-.2-.31,0-.85,0-1.28.41.16,1,.21,1.2.5C-175.72,49.76-174.7,51.33-173.56,53Z"
              transform="translate(236.77 -0.02)"
              fill="#ea5556"
            />
            <path
              mask="url(#m-8)"
              id="p-8"
              d="M-199.35,88.79l-.23,1.2c-.15.06-.25.13-.33.12-1.73-.41-3.47-.78-5.17-1.26-.4-.12-.67-.67-1-1,.42-.14.87-.46,1.24-.39C-203,87.85-201.21,88.33-199.35,88.79Z"
              transform="translate(236.77 -0.02)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};
export default Component;
