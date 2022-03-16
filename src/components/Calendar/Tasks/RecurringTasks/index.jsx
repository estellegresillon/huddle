import styled from "styled-components";

import IconPlus from "components/common/icons/IconPlus";

const RECURRING_TASKS = [
  {
    name: "Do the groceries",
    type: "recurrent",
    done: false,
  },
  {
    name: "Do the laundry",
    type: "recurrent",
    done: false,
  },
];

const RecurringTasks = () => (
  <RecurringTasksWrapper>
    <div className="tasks-title">
      Recurring tasks
      <span>
        <IconPlus />
      </span>
    </div>
    <div className="tasks-content-wrapper">
      {RECURRING_TASKS.map((task) => (
        <div key={task.name} className="task-wrapper">
          {task.name}
        </div>
      ))}
    </div>
  </RecurringTasksWrapper>
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
