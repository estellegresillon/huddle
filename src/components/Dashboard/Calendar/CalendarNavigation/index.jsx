import styled from "styled-components";

import Select from "components/common/Select";
import IconArrow from "components/common/icons/IconArrow";

const daysDropdownOptions = [
  {
    value: 7,
    label: "7 days",
  },
  {
    value: 30,
    label: "30 days",
  },
];

const CalendarNavigation = ({
  children,
  daysInCalendar,
  onBackClick,
  onForwardClick,
  onTodayClick,
  setDaysInCalendar,
}) => (
  <CalendarNavigationWrapper>
    <div className="navigation-date">{children}</div>
    <div className="nav-arrow-buttons">
      <span onClick={onTodayClick}>Today</span>
      <div className="nav-arrow-left" onClick={onBackClick}>
        <IconArrow />
      </div>
      <div className="nav-arrow-right" onClick={onForwardClick}>
        <IconArrow />
      </div>
    </div>
    <Select
      name="days-select"
      onChange={(e) => setDaysInCalendar(parseInt(e.target.value))}
      options={daysDropdownOptions}
      value={daysInCalendar}
    />
  </CalendarNavigationWrapper>
);

export default CalendarNavigation;

const CalendarNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  width: 100%;

  select {
    margin-right: 15px;
  }

  .navigation-date {
    display: flex;
    font-weight: bolder;
    margin: 0 15px;
    white-space: nowrap;

    select {
      margin-right: 5px;
    }
  }

  .nav-arrow-buttons {
    align-items: center;
    display: flex;

    span {
      background-color: white;
      border-radius: 3px;
      box-shadow: 0 1px 10px 0 rgb(69 129 192 / 20%);
      cursor: pointer;
      font-size: 12px;
      margin: 0 10px;
      padding: 6px 10px 6px 9px;
      transition: all 0.5s ease;

      &:hover {
        box-shadow: 0 1px 15px 0 rgb(69 129 192 / 25%);
      }
    }

    div {
      align-items: center;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 1px 5px 0 rgb(69 129 192 / 15%);
      color: #bac5ff;
      cursor: pointer;
      display: flex;
      height: 20px;
      justify-content: center;
      transition: all 0.5s ease;
      width: 20px;

      &:hover {
        box-shadow: 0 1px 10px 0 rgb(69 129 192 / 25%);
      }
    }

    svg {
      height: 10px;
      width: 10px;
    }

    .nav-arrow-left {
      margin-right: 5px;

      svg {
        transform: rotate(-180deg);
      }
    }
  }
`;
