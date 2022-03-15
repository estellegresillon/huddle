import styled from "styled-components";

const CurrentTasks = () => (
  <CurrentTasksWrapper>Current Tasks</CurrentTasksWrapper>
);

export default CurrentTasks;

const CurrentTasksWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50%;
  position: relative;
  width: 100%;
`;
