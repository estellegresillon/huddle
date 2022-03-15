import styled from "styled-components";

const RecurringTasks = () => (
  <RecurringTasksWrapper>Recurring Tasks</RecurringTasksWrapper>
);

export default RecurringTasks;

const RecurringTasksWrapper = styled.div`
  align-items: center;
  border-top: 0.5px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  height: 50%;
  position: relative;
  width: 100%;
`;
