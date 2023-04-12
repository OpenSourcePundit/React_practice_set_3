export const PS6_BOUQUET = ({ flowers1 }) => {
  return (
    <div>
      {flowers1
        .filter(({ id, flowers, totalFlowers, price }) => {
          return flowers.find((flower) => flower === "rose");
        })
        .map(({ id, flowers, totalFlowers, price }) => {
          return <p>Price of bouquet with roses : {price}</p>;
        })}
    </div>
  );
};
