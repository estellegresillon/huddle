import styled from "styled-components";

import CurrentTasks from "./CurrentTasks";
import RecurringTasks from "./RecurringTasks";

const Tasks = () => (
  <TasksWrapper>
    <CurrentTasks />
    <RecurringTasks />
  </TasksWrapper>
);

export default Tasks;

const TasksWrapper = styled.div`
  align-items: center;
  background: #f7f7f7;
  border-left: 0.5px solid #dfdfdf;
  display: flex;
  height: 100vh;
  position: relative;
  flex-direction: column;
  width: 300px;
`;
