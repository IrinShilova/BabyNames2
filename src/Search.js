import React from "react";

function Search(props) {
  return (
    <div>
     <input onKeyUp={props.clickButton} type="text" id ="names" placeholder={props.whatToFind} />
    </div>
  );
}

export default Search;
