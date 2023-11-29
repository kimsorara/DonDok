import "../style/Calender.scss";
import { useState, useEffect } from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { dateCalc } from "../utill/dateCalc";
import { number } from "prop-types";
const CalenderBody = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [dayList, setDayList] = useState<number[]>(
    dateCalc(startDate, endDate)
  );

  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  return (
    <section className="calender">
      <ul>
        {date.map((el) => (
          <li className="day" key={el}>
            {el}
          </li>
        ))}
        {dayList.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </section>
  );
};

export default CalenderBody;
