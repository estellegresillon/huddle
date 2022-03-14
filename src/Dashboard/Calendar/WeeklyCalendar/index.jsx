import classNames from "classnames";
import dayjs from "dayjs";
import styled from "styled-components";

import CalendarNavigation from "../CalendarNavigation";
import {
  createDaysForCurrentWeek,
  daysOfWeek,
  hoursOfTheDay,
  isWeekendDay,
} from "./weeklyHelpers";

// const today = dayjs().format("YYYY-MM-DD");
// const currentWeek = dayjs().week();

const WeeklyCalendar = ({
  daysInCalendar,
  onWeekChange,
  setDaysInCalendar,
  week,
}) => {
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
  console.log(hoursOfTheDay);
  return (
    <WeeklyCalendarWrapper>
      <CalendarNavigation
        daysInCalendar={daysInCalendar}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
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
                {daysOfWeek[i]} {dayjs(day.dateString).format("D")}
              </div>
            ))}
          </div>
        </HeaderWrapper>

        <ContentWrapper $daysInCalendar={daysInCalendar}>
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
                  <div className="hour-item" key={hour} />
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
      height: 70px;
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
        height: 70px;
        width: 100%;
      }
    }
  }
`;
