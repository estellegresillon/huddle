import classNames from "classnames";
import dayjs from "dayjs";
import styled from "styled-components";

import Select from "components/common/Select";
import { COLORS, EVENTS } from "utils";

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

  const handleTodayClick = () => {
    onYearAndMonthChange([dayjs().year(), dayjs().month() + 1]);
  };

  const renderEvent = (day) => {
    const filteredEvents = EVENTS.filter(
      (event) => dayjs(event.date).format("YYYY-MM-DD") === day.dateString
    );

    return filteredEvents.map((evt) => (
      <div
        className={classNames("day-grid-item-event", {
          "current-month": dayjs(evt.date).month() + 1 === month,
        })}
        style={{ backgroundColor: COLORS[evt.userId] }}
        key={evt.name}
      >
        {evt.name}
      </div>
    ));
  };

  return (
    <MonthlyCalendarWrapper>
      <CalendarNavigation
        daysInCalendar={daysInCalendar}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
        onTodayClick={handleTodayClick}
        setDaysInCalendar={setDaysInCalendar}
      >
        <Select
          name="month-select"
          options={getMonthDropdownOptions()}
          onChange={handleMonthSelect}
          value={month}
        />
        <Select
          name="year-select"
          options={getYearDropdownOptions(year)}
          onChange={handleYearSelect}
          value={year}
        />
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
              "is-longer": calendarGridDayObjects.length > 35,
            })}
          >
            <div className="day-content-wrapper">
              <div
                className={classNames("day-grid-item-header", {
                  "is-today": dayjs().format("YYYY-MM-DD") === day.dateString,
                })}
              >
                {day.dayOfMonth}
              </div>
              <div className="day-grid-item-content">{renderEvent(day)}</div>
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
      height: calc(100% / 5 - 0.5px);
      overflow: hidden;
      width: calc(100% / 7 - 0.5px);

      &.is-longer {
        height: calc(100% / 6 - 0.5px);
      }

      &:nth-child(7n) {
        border-right: none;
      }

      &.current-month {
        color: #1530aa;
      }

      .day-content-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 7px 5px;
        overflow: hidden;
        width: calc(100% - 10px);

        .day-grid-item-header {
          align-items: center;
          border-radius: 50%;
          display: flex;
          font-size: 12px;
          height: 20px;
          justify-content: center;
          margin-bottom: 7px;
          width: 20px;

          &.is-today {
            background: #3151e7;
            color: white;
            font-weight: bolder;
          }
        }

        .day-grid-item-content {
          width: 100%;

          .day-grid-item-event {
            background: #5e79ff;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            font-size: 11px;
            font-weight: bolder;
            margin-bottom: 3px;
            opacity: 0.5;
            overflow: hidden;
            padding: 3px 5px;
            text-align: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: calc(100% - 10px);

            &.current-month {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
