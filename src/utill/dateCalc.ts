import { isSameDay, addDays, getDate } from "date-fns";
export const dateCalc = (start: Date): number[] => {
  const dayList: number[] = [];
  let num = 42;
  while (num >= 1) {
    start = addDays(start, 1);
    dayList.push(getDate(start));
    num--;
  }
  return dayList;
};
