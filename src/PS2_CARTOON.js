export const PS2_CARTOON = ({ cartoonobject }) => {
  //const {id,name,superpower,magnitude} = cartoonobject;
  return (
    <div>
      <ol>
        {cartoonobject
          .filter((object) => object.magnitude > 5)
          .map(({ id, name, superpower, magnitude }) => {
            return (
              <li
                key={id}
                style={{
                  border: "solid 2px green",
                  paddingLeft: "10px",
                  margin: "4px",
                  textAlign: "left"
                }}
              >
                <p>ID:{id}</p>
                <p>NAME:{name}</p>
                <p>SUPERPOWER:{superpower}</p>
                <p>MAGNITUDE:{magnitude}</p>
              </li>
            );
          })}
      </ol>
    </div>
  );
};
