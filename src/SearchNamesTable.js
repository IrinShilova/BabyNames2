import React, { useState } from "react";
import Search from "./Search";
import AllNamesTable from "./AllNamesTable";
import Fav from "./Fav";
import BabyNamesData from "./babyNames.json";

function SearchNamesTable() {
  const [names, setNames] = useState(BabyNamesData);
  const [favNames, setFavNames] = useState([]);

  function chooseName() {
    let pattern = document.getElementById("names").value;

    setNames(
      BabyNamesData.filter((e) =>
        e.name.toLowerCase().includes(pattern.toLowerCase())
      )
    );
  }

  function saveNames() {
    let newList = favNames.concat([{ name: "Ira", sex: "f" }]);
    setFavNames(newList);
  }

  return (
    <div>
      <Search clickButton={chooseName} whatToFind="Type something" />
      <Search
        whatToFind="Hello"
        clickButton={() => {
          alert("Hello");
        }}
      />
      <Fav namesList={favNames} />
      <AllNamesTable data={names} clickName={saveNames} />
    </div>
  );
}

export default SearchNamesTable;
