import format from "date-fns/format";

export function getTodaysDate() {
  let today = new Date();
  const fetchedMonth = format(today, "L");
  const fetchedDay = format(today, "d");
  const fetchedYear = format(today, "y");
  return { day: fetchedDay, month: fetchedMonth, year: fetchedYear };
}
