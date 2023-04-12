export const PS9_CARS = ({ car }) => {
  return (
    <div style={{ border: "solid pink 3px" }}>
      <h3>CARS:</h3>
      <p>
        LUXURY:{" "}
        {car
          .filter(({ category }) => category === "luxury")
          .reduce((total, obj1) => total + 1, 0)}{" "}
      </p>
      <p>
        SPORTS:{" "}
        {car
          .filter(({ category }) => category === "sports")
          .reduce((total, obj1) => total + 1, 0)}{" "}
      </p>
    </div>
  );
};
