import format from "date-fns/format";
import { useState } from "react";
import months from "../helpers/months";
import { useEffect } from "react";

function doFormat(input = null) {
  let date;
  if (!input) {
    date = new Date();
  } else {
    const { month, day, year } = input;
    date = new Date(`${months[month - 1]} ${day}, ${year}`);
  }

  const fetchedMonth = format(date, "L");
  const fetchedDay = format(date, "d");
  const fetchedYear = format(date, "y");

  return { month: fetchedMonth, day: fetchedDay, year: fetchedYear };
}

function useDateFormatter(input) {
  const [currDate, setCurrDate] = useState();
  useEffect(() => {
    setCurrDate(doFormat(input));
  }, []);

  function setNewDate(input) {
    setCurrDate(doFormat(input));
  }

  return [currDate, setNewDate];
}
export { useDateFormatter, doFormat };
