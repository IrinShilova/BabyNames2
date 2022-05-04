import React from "react";
import BabyNamesData from "./babyNames.json";
import OneName from "./OneName";
import "./App.css";

function App() {
  return (
    <div>
      {BabyNamesData.map(e => 
      <OneName name={e.name} sex = {e.sex}/>
)};
    </div>
  );
}

export default App;
