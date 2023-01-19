import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        color="white"
        backgroundColor="red"
        width="120px"
        add={true}
        disabled={false}
        children={"Children"}
        icon={false}
        handleClick={() => console.log("Clicked")}
      />
    </div>
  );
}

export default App;
