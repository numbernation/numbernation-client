import * as React from "react";
import styled from "styled-components";
import { colors } from "./colors";
import { GlobalStyle } from "./global-style";
import { accounts } from "./data";

const Row = styled.div`
  /* background-color: orange; */
  display: flex;
`;

const Input = styled.input`
  /* background-color: green; */

  outline: 0;
  border: none;
  display: block;
  height: 35px;
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
  box-sizing: border-box;
  width: 50%;
  background-color: transparent;
`;

const SideBar = styled.div<{ dock: "left" | "right" }>`
  background-color: ${colors.darkBlue};
  position: fixed;
  left: ${props => (props.dock === "left" ? "48px" : "auto")};
  right: ${props => (props.dock === "left" ? "auto" : "0")};
  top: 0;
  bottom: 0;
  width: 240px;
`;

const ActivityBar = styled.div`
  background-color: ${colors.yellow};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 48px;
`;

const Main = styled.div`
  position: fixed;
  left: 288px;
  right: 240px;
  top: 0;
  bottom: 0;
  overflow: auto;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ActivityBar>I</ActivityBar>
      <SideBar dock="left">Left</SideBar>
      <Main>
        <Row>
          <div>Description</div>
          <Input />
        </Row>
        <Row>
          <Input placeholder="xxx" />
          <Input />
        </Row>
        <Row>
          <Input />
          <Input />
        </Row>
        {accounts.map(account => (
          <div>{account.name}</div>
        ))}
      </Main>
      <SideBar dock="right">Right</SideBar>
    </>
  );
}
