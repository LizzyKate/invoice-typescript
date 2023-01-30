import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { SelectValue } from "./components/Select";

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
        dark={false}
      />
      <SelectValue
        label={"Label"}
        getValue={(word) => console.log(word)}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
      />
    </div>
  );
}

export default App;
