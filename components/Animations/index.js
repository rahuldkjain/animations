import dynamic from "next/dynamic";
import SizeBanner from "../SizeBanner";
import {
  AnimationsWrapper,
  FlexContainer,
  FlexItem,
  AnimationContainer,
} from "./style";
const CohnRacers = dynamic(() => import("../CohnRacers"));
const DkissEor = dynamic(() => import("../DkissEor"));
const Flower = dynamic(() => import("../Flower"));
const Funkii18 = dynamic(() => import("../Funkii18"));
const HenryLeeson = dynamic(() => import("../HenryLeeson"));
const HenryLeesonC = dynamic(() => import("../HenryLeesonC"));
const JordanCuadrado = dynamic(() => import("../JordanCuadrado"));
const Latoco = dynamic(() => import("../Latoco"));
const Ellowww = dynamic(() => import("../Ellowww"));
const Marcustr = dynamic(() => import("../Marcustr"));
const Peacefm = dynamic(() => import("../Peacefm"));
const RolandKurmann = dynamic(() => import("../RolandKurmann"));
const SachinBuilding = dynamic(() => import("../SachinBuilding"));
const Unloved = dynamic(() => import("../Unloved"));
const Zozoom = dynamic(() => import("../Zozoom"));
const AndreasBind = dynamic(() => import("../AndreasBind"));
const TonyMcguigan3 = dynamic(() => import("../TonyMcguigan3"));
const TonyMcguigan4 = dynamic(() => import("../TonyMcguigan4"));
const Webmento = dynamic(() => import("../Webmento"));
const Leeking869 = dynamic(() => import("../Leeking869"));
const Jadet7 = dynamic(() => import("../Jadet7"));
const Dennisarct = dynamic(() => import("../Dennisarct"));

const Animations = () => {
  return (
    <AnimationsWrapper>
      <AnimationContainer>
        <Unloved />
        <SizeBanner size={40} />
      </AnimationContainer>

      <AnimationContainer>
        <RolandKurmann />
        <SizeBanner size={133} />
      </AnimationContainer>

      <FlexContainer>
        <FlexItem>
          <AnimationContainer margin="0">
            <Peacefm />
            <SizeBanner size={75} />
          </AnimationContainer>
        </FlexItem>
        <FlexItem>
          <AnimationContainer margin="0">
            <Marcustr />
            <SizeBanner size={6} />
          </AnimationContainer>
        </FlexItem>
      </FlexContainer>

      <AnimationContainer>
        <SachinBuilding />
        <SizeBanner size={1200} />
      </AnimationContainer>

      <AnimationContainer>
        <Funkii18 />
        <SizeBanner size={201} />
      </AnimationContainer>

      {/* <Latoco /> */}
      <FlexContainer>
        <FlexItem>
          <AnimationContainer margin="0">
            <Ellowww />
            <SizeBanner size={64} />
          </AnimationContainer>
        </FlexItem>
        <FlexItem>
          <AnimationContainer margin="0">
            <Zozoom />
            <SizeBanner size={98} />
          </AnimationContainer>
        </FlexItem>
      </FlexContainer>

      <AnimationContainer>
        <JordanCuadrado />
        <SizeBanner size={76} />
      </AnimationContainer>

      <FlexContainer>
        <FlexItem>
          <AnimationContainer margin="0">
            <AndreasBind />
            <SizeBanner size={74} />
          </AnimationContainer>
        </FlexItem>
        <FlexItem>
          <AnimationContainer margin="0">
            <HenryLeesonC />
            <SizeBanner size={37} />
          </AnimationContainer>
        </FlexItem>
      </FlexContainer>

      <FlexContainer>
        <FlexItem>
          <AnimationContainer margin="0">
            <TonyMcguigan3 />
            <SizeBanner size={64} />
          </AnimationContainer>
        </FlexItem>
        <FlexItem>
          <AnimationContainer margin="0">
            <TonyMcguigan4 />
            <SizeBanner size={67} />
          </AnimationContainer>
        </FlexItem>
      </FlexContainer>

      <AnimationContainer>
        <Dennisarct />
        <SizeBanner size={173} />
      </AnimationContainer>

      <FlexContainer>
        <FlexItem>
          <AnimationContainer margin="0">
            <Webmento />
            <SizeBanner size={114} />
          </AnimationContainer>
        </FlexItem>
        <FlexItem>
          <AnimationContainer margin="0">
            <Jadet7 />
            <SizeBanner size={71} />
          </AnimationContainer>
        </FlexItem>
      </FlexContainer>

      {/* <CohnRacers /> */}
      {/* <DkissEor /> */}
      {/* <HenryLeeson /> */}
      {/* <Flower /> */}
    </AnimationsWrapper>
  );
};

export default Animations;
