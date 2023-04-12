export const PS3_CARTOON_EVEN = ({ cartoonobject }) => {
  return (
    <div style={{ border: "solid 5px green" }}>
      <h2>EVEN MAGNITUDE</h2>
      {cartoonobject
        .filter((object) => object.magnitude % 2 === 0)
        .map((object) => {
          return <h3>{object.name}</h3>;
        })}
    </div>
  );
};
