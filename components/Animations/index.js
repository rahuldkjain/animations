import dynamic from "next/dynamic";
import { AnimationsWrapper } from "./style";
const CohnRacers = dynamic(() => import("../CohnRacers"));
const DkissEor = dynamic(() => import("../DkissEor"));
const Flower = dynamic(() => import("../Flower"));
const Funkii18 = dynamic(() => import("../Funkii18"));
const HenryLeeson = dynamic(() => import("../HenryLeeson"));
const JordanCuadrado = dynamic(() => import("../JordanCuadrado"));
const Latoco = dynamic(() => import("../Latoco"));
const Ellowww = dynamic(() => import("../Ellowww"));
const Marcustr = dynamic(() => import("../Marcustr"));
const Peacefm = dynamic(() => import("../Peacefm"));

const Animations = () => {
  return (
    <AnimationsWrapper>
      <CohnRacers />
      <DkissEor />
      <Flower />
      <Funkii18 />
      <HenryLeeson />
      <JordanCuadrado />
      <Latoco />
      <Ellowww />
      <Marcustr />
      <Peacefm />
    </AnimationsWrapper>
  );
};

export default Animations;
