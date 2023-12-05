import { format } from "date-fns";
import "../style/Daily.scss";
import React from "react";
import { motion } from "framer-motion";
type ExpenseType = {
  id: string;
  date: Date;
  expenditureList: {
    amount: number;
    category: string;
  }[];
};
const dailyVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -100,
    opacity: 0,
  },
};
const Daily = () => {
  const dummy: ExpenseType[] = [
    {
      id: (Math.random() * 100).toString(),
      date: new Date(),
      expenditureList: [{ amount: 5000, category: "식비" }],
    },
    {
      id: (Math.random() * 100).toString(),
      date: new Date(),
      expenditureList: [{ amount: 6000, category: "교통" }],
    },
    {
      id: (Math.random() * 100).toString(),
      date: new Date(),
      expenditureList: [{ amount: 5000, category: "경조사비" }],
    },
  ];

  return (
    <motion.section>
      {dummy.map((list: ExpenseType, idx) => (
        <motion.div
          initial={dailyVariants.closed}
          animate={dailyVariants.open}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: idx * 0.4, duration: 1, ease: "circOut" }}
          className="expense__card"
          key={list.id}
        >
          <div>{format(list.date, "yyyy년 MM월 dd일")}</div>
          <ul>
            {list.expenditureList.map((item, idx) => (
              <React.Fragment key={`${item.category}-${idx}`}>
                <li>{item.category}</li>
                <li>{item.amount}</li>
              </React.Fragment>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Daily;
