import { lastDayOfMonth, format } from "date-fns";

export function makeCalendarArr(startIdx, lastDay, date) {
  const calendarArr = [];
  const numWeeks = Math.ceil(1 + (lastDay - (8 - startIdx)) / 7);
  const numDays = numWeeks * 7;
  const prevMonth = date.month == 1 ? 12 : +date.month - 1;
  const nextMonth = date.month == 12 ? 1 : +date.month + 1;
  const lastDayPrevMonth = +format(
    lastDayOfMonth(
      new Date(`${prevMonth} 1, ${date.month == 1 ? date.year - 1 : date.year}`)
    ),
    "d"
  );
  let totalLeadingDays = startIdx - 1;
  let leadingDay = lastDayPrevMonth - totalLeadingDays + 1;
  let followingDays = 1;

  for (let i = 1; i <= numDays; i++) {
    let currentDay = i - startIdx + 1;
    if (i < startIdx) {
      calendarArr.push({
        day: leadingDay,
        month: prevMonth,
        year: +date.month == 1 ? +date.year - 1 : +date.year,
      });
      leadingDay++;
    } else if (currentDay > lastDay) {
      calendarArr.push({
        day: followingDays,
        month: nextMonth,
        year: date.month == 12 ? +date.year + 1 : +date.year,
      });
      followingDays++;
    } else {
      calendarArr.push({
        day: currentDay,
        month: prevMonth == 12 ? 1 : prevMonth + 1,
        year: +date.year,
      });
    }
  }

  return calendarArr;
}
