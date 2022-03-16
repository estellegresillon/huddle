import classNames from "classnames";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { COLORS, EVENTS } from "utils";

import CalendarNavigation from "../CalendarNavigation";
import {
  createDaysForCurrentWeek,
  daysOfWeek,
  hoursOfTheDay,
  isWeekendDay,
} from "./weeklyHelpers";

const WeeklyCalendar = ({
  daysInCalendar,
  onWeekChange,
  setDaysInCalendar,
  week,
}) => {
  const calendarRef = useRef(null);
  const firstDayOfWeek = dayjs()
    .week(week)
    .startOf("isoWeek")
    .format("YYYY-MM-DD");
  const weekDaysObject = createDaysForCurrentWeek(firstDayOfWeek);

  const handleBackClick = () => {
    onWeekChange(week - 1);
  };

  const handleForwardClick = () => {
    onWeekChange(week + 1);
  };

  const handleTodayClick = () => {
    onWeekChange(dayjs().week());
  };

  const addEvent = (day, hour) => {
    const newEvent = {
      date: `${day.dateString}T${hour < 10 ? `0${hour}` : hour}:00:00.000Z`,
      name: `Doudinsky${day.dateString}`,
      userId: 1,
    };
    EVENTS.push(newEvent);
  };

  useEffect(() => {
    const ref = calendarRef.current;
    const currentHour = parseInt(dayjs().format("H"), 10);
    // don't stick the current hour to the very top and include borders
    ref.scrollTop = (currentHour - 3) * 50.5;
  }, []);

  const renderContent = (calendarDay, calendarHour) => {
    const filteredEvents = EVENTS.filter((evt) => {
      const isSameHour = dayjs(evt.date).hour() === calendarHour;
      const isSameDay =
        dayjs(evt.date).format("YYYY-MM-DD") === calendarDay.dateString;

      return isSameHour && isSameDay;
    });

    return filteredEvents.map((evt) => (
      <div
        className="hour-item-event"
        style={{ backgroundColor: COLORS[evt.userId] }}
        key={evt.name}
      >
        {evt.name}
      </div>
    ));
  };

  return (
    <WeeklyCalendarWrapper>
      <CalendarNavigation
        daysInCalendar={daysInCalendar}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
        onTodayClick={handleTodayClick}
        setDaysInCalendar={setDaysInCalendar}
      >
        <span>{dayjs(firstDayOfWeek).format("MMMM YYYY")}</span>
      </CalendarNavigation>

      <div className="weekly-calendar">
        <HeaderWrapper $daysInCalendar={daysInCalendar}>
          <div className="week-count">WEEK {week}</div>
          <div className="header-days">
            {weekDaysObject.slice(0, daysInCalendar).map((day, i) => (
              <div key={day.dateString} className="header-item">
                <div
                  className={classNames("header-item-wrapper", {
                    "is-today": dayjs().format("YYYY-MM-DD") === day.dateString,
                  })}
                >
                  {daysOfWeek[i]} {dayjs(day.dateString).format("D")}
                </div>
              </div>
            ))}
          </div>
        </HeaderWrapper>

        <ContentWrapper $daysInCalendar={daysInCalendar} ref={calendarRef}>
          <div className="weekly-calendar-hours">
            {hoursOfTheDay.map((hour) => (
              <div className="hour-container" key={hour}>
                {dayjs().hour(hour).format("HH")}h
              </div>
            ))}
          </div>
          <div className="weekly-calendar-inner">
            {weekDaysObject.slice(0, daysInCalendar).map((day, i) => (
              <div
                key={day.dateString}
                className={classNames("day-container current-month", {
                  "weekend-day": isWeekendDay(day.dateString),
                })}
              >
                {hoursOfTheDay.map((hour) => (
                  <div
                    className="hour-item"
                    onClick={() => addEvent(day, hour)}
                    key={hour}
                  >
                    {renderContent(day, hour)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ContentWrapper>
      </div>
    </WeeklyCalendarWrapper>
  );
};

export default WeeklyCalendar;

const WeeklyCalendarWrapper = styled.div`
  height: 100%;
  width: 100%;

  .weekly-calendar {
    border-top: 0.5px solid #dfdfdf;
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  font-size: 12px;

  .week-count {
    align-items: center;
    border-bottom: 0.5px solid #dfdfdf;
    border-right: 0.5px solid #dfdfdf;
    color: #ccc9c9;
    display: flex;
    font-weight: bolder;
    height: 50px;
    justify-content: center;
    padding: 0 5px;
    text-align: center;
    text-transform: uppercase;
    width: 40px;
  }

  .header-days {
    display: flex;
    width: calc(100% - 50px);

    .header-item {
      align-items: center;
      border-bottom: 0.5px solid #dfdfdf;
      display: flex;
      justify-content: center;
      width: ${({ $daysInCalendar }) => `calc(100% / ${$daysInCalendar})`};

      .header-item-wrapper {
        &.is-today {
          background: #3151e7;
          border-radius: 4px;
          color: white;
          font-weight: bolder;
          padding: 4px 6px;
        }
      }
    }
  }
`;

const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  overflow: scroll;

  .weekly-calendar-hours {
    border-right: 0.5px solid #dfdfdf;
    width: 50px;

    .hour-container {
      align-items: center;
      border-bottom: 0.5px solid #dfdfdf;
      color: #ccc9c9;
      display: flex;
      font-size: 12px;
      font-weight: bolder;
      height: 50px;
      justify-content: center;
      text-transform: uppercase;
      width: 100%;
    }
  }

  .weekly-calendar-inner {
    display: flex;
    width: calc(100% - 50px);

    .day-container {
      align-items: center;
      border-right: 0.5px solid #dfdfdf;
      display: flex;
      flex-direction: column;
      width: ${({ $daysInCalendar }) => `calc(100% / ${$daysInCalendar})`};

      &:last-child {
        border-right: none;
      }

      .hour-item {
        border-bottom: 0.5px solid #dfdfdf;
        height: 50px;
        width: 100%;

        .hour-item-event {
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
        }
      }
    }
  }
`;
