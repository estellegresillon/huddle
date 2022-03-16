import styled from "styled-components";

import IconPlus from "components/common/icons/IconPlus";

const CURRENT_TASKS = [
  {
    name: "Finish the app",
    type: "current",
    done: false,
  },
  {
    name: "Tasks UI",
    type: "current",
    done: false,
  },
];

const CurrentTasks = () => (
  <CurrentTasksWrapper>
    <div className="tasks-title">
      Current tasks
      <span>
        <IconPlus />
      </span>
    </div>
    <div className="tasks-content-wrapper">
      {CURRENT_TASKS.map((task) => (
        <div key={task.name} className="task-wrapper">
          {task.name}
        </div>
      ))}
    </div>
  </CurrentTasksWrapper>
);

export default CurrentTasks;

const CurrentTasksWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50%;
  position: relative;
  width: 100%;

  .tasks-title {
    align-items: center;
    color: #ccc9c9;
    display: flex;
    font-size: 13px;
    font-weight: bolder;
    margin: 15px;
    text-transform: uppercase;

    span {
      height: 18px;
    }

    svg {
      cursor: pointer;
      height: 100%;
      margin-left: 3px;
    }
  }

  .tasks-content-wrapper {
    width: 100%;
  }

  .task-wrapper {
    border-radius: 3px;
    box-shadow: 0 1px 10px 0 rgb(67 90 113 / 20%);
    cursor: pointer;
    font-size: 12px;
    margin: 10px;
    padding: 10px 15px;
  }
`;
