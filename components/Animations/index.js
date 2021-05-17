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
const RolandKurmann = dynamic(() => import("../RolandKurmann"));
const SachinBuilding = dynamic(() => import("../SachinBuilding"));
const Unloved = dynamic(() => import("../Unloved"));
const Zozoom = dynamic(() => import("../Zozoom"));

const Animations = () => {
  return (
    <AnimationsWrapper>
      <Unloved />
      <RolandKurmann />
      <Peacefm />
      <SachinBuilding />
      <Zozoom />
      <Funkii18 />
      <Latoco />
      <Ellowww />
      <CohnRacers />
      <DkissEor />
      <Marcustr />
      <HenryLeeson />
      <JordanCuadrado />
      <Flower />
    </AnimationsWrapper>
  );
};

export default Animations;
