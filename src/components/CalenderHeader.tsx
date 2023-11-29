import { addMonths, format, subMonths } from "date-fns";
import { Icon } from "@iconify/react";
import "../style/Calender.scss";
const CalenderHeader = ({
  month,
  montHandler,
}: {
  month: Date;
  montHandler: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const prevMonth = () => {
    montHandler((pre) => subMonths(pre, 1));
  };
  const nextMonth = () => {
    montHandler((pre) => addMonths(pre, 1));
  };
  return (
    <div className="calender__header">
      <div onClick={prevMonth}>
        <Icon icon="solar:round-alt-arrow-left-linear" />
      </div>
      <div>
        <span>{format(month, "yyyy")} 년</span>
        <span>{format(month, "M")} 월</span>
      </div>
      <div onClick={nextMonth}>
        <Icon icon="solar:round-alt-arrow-right-linear" />
      </div>
    </div>
  );
};

export default CalenderHeader;
