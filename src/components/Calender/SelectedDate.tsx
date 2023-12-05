// SelectedDate.tsx
import React from "react";
import { Icon } from "@iconify/react";
import useDate from "../../hook/useDate";
import { format, subYears, setMonth, addYears } from "date-fns";

interface SelectedDateProps {
  selected: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectedDate = ({ selected }: SelectedDateProps) => {
  const { currentDate, setCurrentDate } = useDate();

  const increaseYear = () => {
    setCurrentDate((pre) => addYears(pre, 1));
  };

  const decreaseYear = () => setCurrentDate((pre) => subYears(pre, 1));

  const seletedHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLSpanElement;
    const number = Number(target.textContent);
    const formattedDate = format(
      setMonth(currentDate, number - 1),
      "MMM dd yyyy HH:mm:ss "
    );
    const date = new Date(formattedDate);

    setCurrentDate(date);
    selected((pre) => !pre);
  };

  return (
    <div className="selected_date">
      <div>
        <div onClick={decreaseYear}>
          <Icon icon="solar:round-alt-arrow-left-linear" />
        </div>
        <div>{format(currentDate, "yyyy")}</div>
        <div onClick={increaseYear}>
          <Icon icon="solar:round-alt-arrow-right-linear" />
        </div>
      </div>
      <div className="month_list" onClick={seletedHandler}>
        {Array.from({ length: 12 }, (_, idx) => idx + 1).map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
};

export default SelectedDate;
