import { startOfMonth, lastDayOfMonth, format } from "date-fns";
import months from "./months";
import days from "./days";

export function formatCalendarData(month = null, year = null) {
  const date =
    month != null && year != null
      ? new Date(`${months[month - 1]} ${year}`)
      : new Date();

  const monthStart = startOfMonth(date).toString();
  const startIdx = days[monthStart.slice(0, 3)];
  const lastDay = +format(lastDayOfMonth(date), "d");
  return { monthStart, startIdx, lastDay };
}
