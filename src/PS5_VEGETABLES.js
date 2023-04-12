import { useState } from "react";

export const PS5_VEGETABLES = ({ veg }) => {
  const [highlight, sethighlight] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          sethighlight(true);
        }}
      >
        FRESH VEGGIES
      </button>
      <ol>
        {veg.map((veg1) => {
          return (
            <li
              key={veg1.id}
              style={{
                color:
                  highlight && veg1.pickDate === "2023-03-30"
                    ? "green"
                    : "black",
                border:
                  highlight && veg1.pickDate === "2023-03-30"
                    ? "solid red 5px"
                    : "none"
              }}
            >
              <p>{veg1.name}</p>
              <p>{veg1.pickDate}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
