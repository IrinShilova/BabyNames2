import React from "react";
import OneName from "./OneName";

function Fav(props) {
  return (
    <div>
      <p>Favourites: </p>
      {props.namesList.map((e) => (
        <OneName name={e.name} sex={e.sex} />
      ))}
    </div>
  );
}

export default Fav;
