import {
  link,
  height,
  width,
  cartoons,
  vegetables,
  bouquet,
  DonationData,
  cars
} from "./objects";
import { PS1_IMAGEHEIGHTWIDTH } from "./PS1_IMAGEHEIGHTWIDTH";
import { PS2_CARTOON } from "./PS2_CARTOON";
import { PS3_CARTOON_EVEN } from "./PS3_CARTOON_EVEN";
import { PS4_CARTOON_INTEL } from "./PS4_CARTOON_INTEL";
import "./styles.css";
import { PS5_VEGETABLES } from "./PS5_VEGETABLES";
import { PS6_BOUQUET } from "./PS6_BOUQUET";
import { PS7_BOUQUET } from "./PS7_BOUQUET";
import { PS8_DONATION } from "./PS8_DONATION";
import { PS9_CARS } from "./PS9_CARS";
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
      <PS6_BOUQUET flowers1={bouquet} />
      <PS7_BOUQUET flowers1={bouquet} />
      <PS8_DONATION donationData={DonationData} />
      <PS9_CARS car={cars} />
    </div>
  );
}
