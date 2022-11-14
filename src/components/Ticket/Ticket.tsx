import React, { FC, useState } from 'react';
import styles from './Ticket.module.css';

interface TicketProps {
  from: string;
  to: string;
  there: string;
  back?: string;
}

const Ticket: FC<TicketProps> = ({ from, to, there, back }) => {
  const [time, setTime] = useState(1);

  return (
    <div className={styles.container}>
      {back ? (
        <>
          <div className={styles.top}>
            <div className="left">
              <h2>
                {from}, {there}
              </h2>
            </div>
            <div className="right">
              <h2>
                {to}, {there}
              </h2>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className="left">
              <h2>
                {to}, {back}
              </h2>
            </div>
            <div className="right">
              <h2>
                {from}, {back}
              </h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.top}>
            <div className={styles.left}>
              <h2>
                {from}, {there}, {time === 1 && '09:20'} {time === 2 && '10:20'}
                {time === 3 && '11:20'}
              </h2>
            </div>
            <div className={styles.right}>
              <h2>
                {to}, {there}, {time === 1 && '11:05'} {time === 2 && '12:05'}
                {time === 3 && '13:05'}
              </h2>
            </div>
          </div>
          <ul className={styles.time}>
            <li
              className={`${styles.timeItem} ${time === 1 ? styles.timeItemActive : ''}`}
              onClick={() => setTime(1)}
            >
              09:20 - 11:05
            </li>
            <li
              className={`${styles.timeItem} ${time === 2 ? styles.timeItemActive : ''}`}
              onClick={() => setTime(2)}
            >
              10:20 - 12:05
            </li>
            <li
              className={`${styles.timeItem} ${time === 3 ? styles.timeItemActive : ''}`}
              onClick={() => setTime(3)}
            >
              11:20 - 13:05
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Ticket;
