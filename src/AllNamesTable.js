import React from "react";
import OneName from "./OneName";

function AllNamesTable(props) {
  return (
    <div>
      {props.data.map((e) => (
        <OneName clickName={props.clickName} name={e.name} sex={e.sex} />
      ))}
    </div>
  );
}

export default AllNamesTable;
