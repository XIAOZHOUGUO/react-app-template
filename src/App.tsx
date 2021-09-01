import React from "react";
import { Button, DatePicker, Typography } from "antd";
import { Moment } from "moment";
import { useAppDispatch, useAppSelector } from "src/hooks/useReactToolkit";
import { setAppToken } from "./store/slices/system.slice";
import styled from "@emotion/styled";
import logo from "./logo.svg";
import "./App.css";
function onChange(date: Moment | null, dateString: string) {
  console.log(date, dateString);
}
function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.system.token);
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
        <Button
          onClick={() => dispatch(setAppToken("fake token"))}
          type="primary"
        >
          antd
        </Button>
        <TestContainer type="success">{token || "暂无token..."}</TestContainer>
        <br />
        <DatePicker onChange={onChange} />
      </header>
    </div>
  );
}
const TestContainer = styled(Typography.Text)`
  width: 100%;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.2);
`;

export default App;
