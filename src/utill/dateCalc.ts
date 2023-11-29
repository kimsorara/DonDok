import { isSameDay, addDays, getDate } from "date-fns";
export const dateCalc = (start: Date, end: Date): number[] => {
  const dayList: number[] = [];
  while (true) {
    dayList.push(getDate(start));
    if (isSameDay(start, end)) break;

    start = addDays(start, 1);
  }
  return dayList;
};
