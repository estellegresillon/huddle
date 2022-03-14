import styled from "styled-components";

import Tasks from "./Tasks";
import Calendar from "./Calendar";
import Budget from "./Budget";

const Dashboard = () => (
  <DashboardWrapper>
    <LeftSideWrapper>
      <Calendar />
      <Budget />
    </LeftSideWrapper>
    <Tasks />
  </DashboardWrapper>
);

export default Dashboard;

const DashboardWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: calc(100% - 150px);
`;

const LeftSideWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: calc(100% - 300px);
`;
