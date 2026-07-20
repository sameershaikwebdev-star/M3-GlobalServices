import MainCamera from "../camera/MainCamera";
import Lights from "../lights/Lights";
import Earth from "../objects/Earth";
import Atmosphere from "../objects/Atmosphere";
import SpaceStars from "../objects/Stars";
import M3Logo from "../objects/M3Logo";
import PostEffects from "../effects/PostEffects";

export default function Experience() {
  return (
    <>
      <MainCamera />
      <Lights />
      <SpaceStars />
       <PostEffects />
    </>
  );
}