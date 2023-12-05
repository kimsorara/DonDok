import { motion } from "framer-motion";
import { useState } from "react";

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
        <span>
          <SelectedDate selected={setSelectDate} />
        </span>
      )}
    </div>
  );
};

export default Header;
