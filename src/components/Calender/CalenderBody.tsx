import "../../style/Calender.scss";
import { useEffect, useState } from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { dateCalc } from "../../utill/dateCalc";
import useDate from "../../hook/useDate";
const CalenderBody = () => {
  const { currentDate, setCurrentDate } = useDate();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [dayList, setDayList] = useState<number[]>(dateCalc(startDate));
  useEffect(() => {
    const newDayList = dateCalc(startDate);
    setDayList(newDayList);

    const dynamicGrid = document.getElementById("dynamicGrid") as HTMLElement;
    if (dynamicGrid) {
      const length = ~~(newDayList.length / 7);
      console.log(length);
      dynamicGrid.style.gridTemplateRows = `1fr repeat(${length}, 2.5fr)`;
    }
  }, [currentDate]);

  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  return (
    <section className="calender">
      <ul id="dynamicGrid">
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
