export const PS7_BOUQUET = ({ flowers1 }) => {
  return (
    <ol>
      {flowers1
        .filter(({ id, price }) => price > 2000)
        .map(({ id, flowers }) => {
          return (
            <li key={id}>
              {flowers.map((obj) => {
                return <p>--{obj}--</p>;
              })}
            </li>
          );
        })}
    </ol>
  );
};
