import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./assets/index.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => (
  <BrowserRouter>
    <AppWrapper>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </AppWrapper>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
