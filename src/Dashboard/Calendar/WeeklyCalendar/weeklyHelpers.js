import dayjs from "dayjs";

export const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const createDaysForCurrentWeek = (firstDayOfWeek) => {
  const weekDays = Array.from(Array(7).keys());
  const weekDaysArray = [];

  weekDays.forEach((day) => {
    const incrementedDay = dayjs(firstDayOfWeek)
      .add(day, "day")
      .format("YYYY-MM-DD");

    weekDaysArray.push({
      dateString: incrementedDay,
    });
  });

  return weekDaysArray;
};

const getWeekday = (dateString) => {
  return dayjs(dateString).isoWeekday() - 1;
};

export const isWeekendDay = (dateString) => {
  return [5, 6].includes(getWeekday(dateString));
};

export const hoursOfTheDay = Array.from(Array(24).keys());
