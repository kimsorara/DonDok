import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

import "../style/Header.scss";
import CalenderHeader from "./Calender/CalenderHeader";
import SelectedDate from "./Calender/SelectedDate";
const Header = () => {
  const headerText = {
    animate: { y: [-10, 0], opacity: [0, 0.2, 1] },
    transition: {
      opacity: { ease: "circOut" },
      duration: 1,
      delay: 0.5,
    },
  };
  const [selectDate, setSelectDate] = useState<boolean>(false);
  const calenderRef = useRef<HTMLSpanElement | null>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        selectDate &&
        calenderRef.current &&
        !calenderRef.current.contains(e.target as Node)
      ) {
        setSelectDate(false);
      }
    },
    [selectDate]
  );

  useEffect(() => {
    console.log("selectDate:", selectDate);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, selectDate]);
  return (
    <div className="header">
      <CalenderHeader selected={setSelectDate} />
      <motion.h1
        animate={headerText.animate}
        transition={headerText.transition}
      >
        Don-Dok$
      </motion.h1>
      {selectDate && (
        <span ref={calenderRef}>
          <SelectedDate selected={setSelectDate} />
        </span>
      )}
    </div>
  );
};

export default Header;
