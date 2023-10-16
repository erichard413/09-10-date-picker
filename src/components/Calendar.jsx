import { startOfMonth, lastDayOfMonth, format } from "date-fns";
import { makeCalendarArr } from "../helpers/makeCalendarArr";
import { useEffect, useState } from "react";
import { getTodaysDate } from "../helpers/getTodaysDate";
import days from "../helpers/days";
import { DatePickerHeader } from "./DatePickerHeader";
import { formatCalendarData } from "../helpers/formatCalendarData";

export function Calendar({ setSelectedDate, selectedDate }) {
  const [dayData, setDayData] = useState();
  const [month, setMonth] = useState({
    month: selectedDate.month,
    year: selectedDate.year,
  });
  const today = getTodaysDate();

  useEffect(() => {
    const { startIdx, lastDay } = formatCalendarData();
    setDayData(makeCalendarArr(startIdx, lastDay, selectedDate));
  }, []);

  useEffect(() => {
    const { startIdx, lastDay } = formatCalendarData(month.month, month.year);
    setDayData(makeCalendarArr(startIdx, lastDay, month));
  }, [month]);

  if (!dayData) return <h1>Loading..</h1>;

  return (
    <div className="date-picker">
      <DatePickerHeader month={month} setMonth={setMonth} />

      <div className="date-picker-grid-dates date-picker-grid">
        {dayData?.map(day => (
          <button
            onClick={() => {
              setSelectedDate(day);
            }}
            key={`${day.month}-${day.day}`}
            className={`date ${
              day.day == selectedDate.day &&
              selectedDate.month == day.month &&
              selectedDate.year == day.year
                ? "selected"
                : ""
            } ${day.month == month.month ? "" : "date-picker-other-month-date"}
            ${
              day.day == today.day &&
              day.month == today.month &&
              day.year == today.year
                ? "today"
                : ""
            }
            `}
          >
            {day.day}
          </button>
        ))}
      </div>
    </div>
  );
}
