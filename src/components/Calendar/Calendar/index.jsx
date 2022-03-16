import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";

import MonthlyCalendar from "./MonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendar";

const Calendar = () => {
  const [yearAndMonth, setYearAndMonth] = useState([
    dayjs().year(),
    dayjs().month() + 1,
  ]);
  const [week, setWeek] = useState(dayjs().week());
  const [daysInCalendar, setDaysInCalendar] = useState(30);

  return (
    <CalendarWrapper>
      {daysInCalendar === 30 ? (
        <MonthlyCalendar
          daysInCalendar={daysInCalendar}
          onYearAndMonthChange={setYearAndMonth}
          setDaysInCalendar={setDaysInCalendar}
          yearAndMonth={yearAndMonth}
        />
      ) : (
        <WeeklyCalendar
          daysInCalendar={daysInCalendar}
          onWeekChange={setWeek}
          setDaysInCalendar={setDaysInCalendar}
          week={week}
        />
      )}
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 100px);
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;
