import React from "react";
import logo from "./logo.svg";
import { Button, DatePicker } from "antd";
import "./App.css";
import { Moment } from "moment";
function onChange(date: Moment | null, dateString: string) {
  console.log(date, dateString);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <Button type="primary">antd</Button>
        <br />
        <DatePicker onChange={onChange} />
      </header>
    </div>
  );
}

export default App;
