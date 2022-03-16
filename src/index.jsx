import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./assets/index.css";

import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import Notes from "./components/Notes";
import Budget from "./components/Budget";
import Bookmarks from "./components/Bookmarks";
import Chat from "./components/Chat";
import Wall from "./components/Wall";

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
        <Route path="/" element={<Calendar />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/wall" element={<Wall />} />
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
