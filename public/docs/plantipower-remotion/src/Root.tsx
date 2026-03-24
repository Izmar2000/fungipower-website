import { Composition } from "remotion";
import { Silicium } from "./scenes/Silicium";
import { Fosfor } from "./scenes/Fosfor";
import { Molybdeen } from "./scenes/Molybdeen";
import { Zink } from "./scenes/Zink";
import { Ionen } from "./scenes/Ionen";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Silicium"
        component={Silicium}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="Fosfor"
        component={Fosfor}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="Molybdeen"
        component={Molybdeen}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="Zink"
        component={Zink}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="Ionen"
        component={Ionen}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
