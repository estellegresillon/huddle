import styled from "styled-components";

const daysDropdownOptions = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 30,
    label: "30",
  },
];

const CalendarNavigation = ({
  children,
  daysInCalendar,
  onBackClick,
  setDaysInCalendar,
  onForwardClick,
}) => (
  <CalendarNavigationWrapper>
    <div className="navigation-date">{children}</div>
    <div className="month-nav-arrow-buttons">
      <button onClick={onBackClick}>prev</button>
      <span>Today</span>
      <button onClick={onForwardClick}>next</button>
    </div>
    <select
      className="month-select"
      value={daysInCalendar}
      onChange={(e) => setDaysInCalendar(parseInt(e.target.value))}
    >
      {daysDropdownOptions.map(({ label, value }) => (
        <option value={value} key={value}>
          {label} days
        </option>
      ))}
    </select>
  </CalendarNavigationWrapper>
);

export default CalendarNavigation;

const CalendarNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  width: 100%;

  .navigation-date,
  .month-select {
    white-space: nowrap;
    width: 100px;
  }
`;
