import { link, height, width, cartoons, vegetables } from "./objects";
import { PS1_IMAGEHEIGHTWIDTH } from "./PS1_IMAGEHEIGHTWIDTH";
import { PS2_CARTOON } from "./PS2_CARTOON";
import { PS3_CARTOON_EVEN } from "./PS3_CARTOON_EVEN";
import { PS4_CARTOON_INTEL } from "./PS4_CARTOON_INTEL";
import "./styles.css";
import { PS5_VEGETABLES } from "./PS5_VEGETABLES";

export default function App() {
  return (
    <div className="App">
      <h1>tanaypratap's box</h1>
      <h2>write your app here</h2>
      <PS1_IMAGEHEIGHTWIDTH img={link} imgheight={height} imgwidth={width} />
      <PS2_CARTOON cartoonobject={cartoons} />
      <PS3_CARTOON_EVEN cartoonobject={cartoons} />
      <PS4_CARTOON_INTEL
        cartoonobject={cartoons.filter(
          (cartoon) => cartoon.superpower === "Intelligence"
        )}
      />
      <PS5_VEGETABLES veg={vegetables} />
    </div>
  );
}
