import { format, addMonths, subMonths } from "date-fns";
import { Icon } from "@iconify/react";
import "../../style/Calender.scss";
import useDate from "../../hook/useDate";
const CalenderHeader = ({
  selected,
}: {
  selected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { currentDate, setCurrentDate } = useDate();
  const prevMonth = () => {
    setCurrentDate((pre) => subMonths(pre, 1));
  };
  const nextMonth = () => {
    setCurrentDate((pre) => addMonths(pre, 1));
  };
  const calendarInputClick = () => {
    selected((pre) => !pre);
  };

  return (
    <div className="calender__header">
      <div onClick={prevMonth}>
        <Icon icon="solar:round-alt-arrow-left-linear" />
      </div>
      <div onClick={calendarInputClick}>
        <span>{format(currentDate, "yyyy")}년</span>
        <span>{format(currentDate, "M")}월</span>
      </div>
      <div onClick={nextMonth}>
        <Icon icon="solar:round-alt-arrow-right-linear" />
      </div>
    </div>
  );
};

export default CalenderHeader;
