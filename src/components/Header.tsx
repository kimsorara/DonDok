import { motion } from "framer-motion";
import { useState } from "react";

import "../style/Header.scss";
import CalenderHeader from "./CalenderHeader";
const Header = () => {
  const headerText = {
    animate: { y: [-40, -10, 0], opacity: [0, 1] },
    transition: {
      opacity: { ease: "easeOut" },
      layout: { duration: 3 },
      delay: 0.3,
    },
  };
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectDate, setSelectDate] = useState<Date>(new Date());

  return (
    <div className="header">
      <CalenderHeader month={currentMonth} montHandler={setCurrentMonth} />
      <motion.h1
        animate={headerText.animate}
        transition={headerText.transition}
      >
        Don-Dok$
      </motion.h1>
    </div>
  );
};

export default Header;
