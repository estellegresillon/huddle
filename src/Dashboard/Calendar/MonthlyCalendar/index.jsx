import classNames from "classnames";
import styled from "styled-components";

import CalendarNavigation from "../CalendarNavigation";
import {
  daysOfWeek,
  createDaysForCurrentMonth,
  createDaysForNextMonth,
  createDaysForPreviousMonth,
  isWeekendDay,
  getMonthDropdownOptions,
  getYearDropdownOptions,
} from "./monthlyHelpers";

const MonthlyCalendar = ({
  daysInCalendar,
  onYearAndMonthChange,
  setDaysInCalendar,
  yearAndMonth,
}) => {
  const [year, month] = yearAndMonth;

  let currentMonthDays = createDaysForCurrentMonth(year, month);
  let previousMonthDays = createDaysForPreviousMonth(
    year,
    month,
    currentMonthDays
  );
  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays);
  let calendarGridDayObjects = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  const handleBackClick = () => {
    let nextYear = year;
    let nextMonth = month - 1;
    if (nextMonth === 0) {
      nextMonth = 12;
      nextYear = year - 1;
    }
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleForwardClick = () => {
    let nextYear = year;
    let nextMonth = month + 1;
    if (nextMonth === 13) {
      nextMonth = 1;
      nextYear = year + 1;
    }
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleMonthSelect = (evt) => {
    let nextYear = year;
    let nextMonth = parseInt(evt.target.value, 10);
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleYearSelect = (evt) => {
    let nextMonth = month;
    let nextYear = parseInt(evt.target.value, 10);
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  return (
    <MonthlyCalendarWrapper>
      <CalendarNavigation
        daysInCalendar={daysInCalendar}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
        setDaysInCalendar={setDaysInCalendar}
      >
        <select
          className="month-select"
          value={month}
          onChange={handleMonthSelect}
        >
          {getMonthDropdownOptions().map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          className="year-select"
          value={year}
          onChange={handleYearSelect}
        >
          {getYearDropdownOptions(year).map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </CalendarNavigation>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={classNames("day-of-week-header-cell", {
              "weekend-day": [5, 6].includes(index),
            })}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="days-grid">
        {calendarGridDayObjects.map((day) => (
          <div
            key={day.dateString}
            className={classNames("day-grid-item-container", {
              "weekend-day": isWeekendDay(day.dateString),
              "current-month": day.isCurrentMonth,
            })}
          >
            <div className="day-content-wrapper">
              <div className="day-grid-item-header">{day.dayOfMonth}</div>
            </div>
          </div>
        ))}
      </div>
    </MonthlyCalendarWrapper>
  );
};

export default MonthlyCalendar;

const MonthlyCalendarWrapper = styled.div`
  height: 100%;
  width: 100%;

  .days-of-week {
    align-items: center;
    border-top: 0.5px solid #dfdfdf;
    display: flex;
    font-size: 12px;
    height: 50px;
    text-align: center;
    width: 100%;

    .day-of-week-header-cell {
      width: calc(100% / 7);
    }
  }

  .days-grid {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 100px);
    text-align: center;
    width: 100%;

    .day-grid-item-container {
      border-top: 0.5px solid #dfdfdf;
      border-right: 0.5px solid #dfdfdf;
      color: #ccc9c9;
      width: calc(100% / 7 - 0.5px);

      &:nth-child(7n) {
        border-right: none;
      }

      &.current-month {
        color: #333333;
      }

      .day-content-wrapper {
        margin: 7px 5px;
      }
    }
  }
`;
