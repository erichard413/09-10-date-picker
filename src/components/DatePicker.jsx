import { Calendar } from "./Calendar";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import months from "../helpers/months";
import { useDateFormatter } from "../hooks/useDateFormatter";

export function DatePicker() {
  const [selectedDate, setSelectedDate] = useDateFormatter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return "loading";

  return (
    <div className="date-picker-container">
      <button className="date-picker-button" onClick={() => setIsOpen(s => !s)}>
        {months[selectedDate.month - 1]} {selectedDate.day}, {selectedDate.year}
      </button>
      {isOpen && (
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </div>
  );
}
