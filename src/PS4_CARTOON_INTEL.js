export const PS4_CARTOON_INTEL = ({ cartoonobject }) => {
  return (
    <div>
      {cartoonobject.map((obj) => {
        return (
          <li>
            {obj.name}-{obj.superpower}-{obj.magnitude}
          </li>
        );
      })}
    </div>
  );
};
