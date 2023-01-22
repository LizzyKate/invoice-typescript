import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

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
      <Input
        label={"Label"}
        type="text"
        getValue={(word) => console.log(word)}
        placeholder="Placeholder"
      />
    </div>
  );
}

export default App;
