import months from "../helpers/months";

export function DatePickerHeader({ setMonth, month }) {
  return (
    <>
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={() => {
            setMonth(m => ({
              month: +m.month == 1 ? 12 : +m.month - 1,
              year: +m.month == 1 ? +m.year - 1 : +m.year,
            }));
          }}
        >
          &larr;
        </button>
        <div className="current-month">
          {months[month.month - 1]} - {month.year}
        </div>
        <button
          className="next-month-button month-button"
          onClick={() => {
            setMonth(m => ({
              month: +m.month == 12 ? 1 : +m.month + 1,
              year: +m.month == 12 ? +m.year + 1 : +m.year,
            }));
          }}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
    </>
  );
}
