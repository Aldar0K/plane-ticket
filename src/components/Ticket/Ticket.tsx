import React, { FC, useState } from 'react';
import styles from './Ticket.module.css';
import logoPNG from '../../assets/icons/logo.png';
import schemaPNG from '../../assets/images/schema.png';
import smallBagPNG from '../../assets/icons/bag-small.png';
import bigBagPNG from '../../assets/icons/bag-big.png';

interface TicketProps {
  from: string;
  to: string;
  there: string;
  back?: string;
}

const Ticket: FC<TicketProps> = ({ from, to, there, back }) => {
  const [time, setTime] = useState(1);

  {
    return back ? (
      <>
        <div className={styles.container}>
          <div className={`${styles.ticket} ${styles.ticketFirst}`}>
            <span className={styles.sticker}>Невозвратный</span>
            <div className={styles.logo}>
              <div className={styles.logoImg}>
                <img src={logoPNG} alt="logo" />
              </div>
              <p className={styles.logoHeading}>S7 Airlines</p>
            </div>
            <div className={styles.info}>
              <div className={styles.from}>
                <div className={styles.fromTime}>22:57</div>
                <p className={styles.from}>{from}</p>
                <p className={styles.from}>{there}</p>
              </div>
              <div className={styles.schema}>
                <img src={schemaPNG} alt="logo" />
              </div>
              <div className={styles.to}>
                <div className={styles.toTime}>22:57</div>
                <p className={styles.to}>{to}</p>
                <p className={styles.to}>{there}</p>
              </div>
            </div>
            <div className={styles.icons}>
              <div className={styles.smallBag}>
                <img src={smallBagPNG} alt="smallBagPNG" />
              </div>
              <div className={styles.bigBag}>
                <img src={bigBagPNG} alt="bigBagPNG" />
              </div>
            </div>
          </div>
          <div className={styles.ticket}>
            <span className={styles.sticker}>Невозвратный</span>
            <div className={styles.logo}>
              <div className={styles.logoImg}>
                <img src={logoPNG} alt="logo" />
              </div>
              <p className={styles.logoHeading}>S7 Airlines</p>
            </div>
            <div className={styles.info}>
              <div className={styles.from}>
                <div className={styles.fromTime}>22:57</div>
                <p className={styles.from}>{to}</p>
                <p className={styles.from}>{back}</p>
              </div>
              <div className={styles.schema}>
                <img src={schemaPNG} alt="logo" />
              </div>
              <div className={styles.to}>
                <div className={styles.toTime}>22:57</div>
                <p className={styles.to}>{from}</p>
                <p className={styles.to}>{back}</p>
              </div>
            </div>
            <div className={styles.icons}>
              <div className={styles.smallBag}>
                <img src={smallBagPNG} alt="smallBagPNG" />
              </div>
              <div className={styles.bigBag}>
                <img src={bigBagPNG} alt="bigBagPNG" />
              </div>
            </div>
          </div>
          <div className={`${styles.price} ${styles.price_double}`}>9 300 ₽</div>
        </div>
      </>
    ) : (
      <>
        <div className={styles.container}>
          <div className={styles.ticket}>
            <span className={styles.sticker}>Невозвратный</span>
            <div className={styles.logo}>
              <div className={styles.logoImg}>
                <img src={logoPNG} alt="logo" />
              </div>
              <p className={styles.logoHeading}>S7 Airlines</p>
            </div>
            <div className={styles.info} style={{ flexDirection: 'column' }}>
              <div className={styles.top}>
                <div className={styles.from}>
                  <div className={styles.fromTime}>
                    {time === 1 && '09:20'} {time === 2 && '10:20'}
                    {time === 3 && '11:20'}
                  </div>
                  <p className={styles.from}>{from}</p>
                  <p className={styles.from}>{there}</p>
                </div>
                <div className={styles.schema}>
                  <img src={schemaPNG} alt="logo" />
                </div>
                <div className={styles.to}>
                  <div className={styles.toTime}>
                    {time === 1 && '11:05'} {time === 2 && '12:05'}
                    {time === 3 && '13:05'}
                  </div>
                  <p className={styles.from}>{to}</p>
                  <p className={styles.from}>{there}</p>
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
            </div>
            <div className={styles.icons}>
              <div className={styles.smallBag}>
                <img src={smallBagPNG} alt="smallBagPNG" />
              </div>
              <div className={styles.bigBag}>
                <img src={bigBagPNG} alt="bigBagPNG" />
              </div>
            </div>
          </div>
          <div className={`${styles.price} ${styles.price_single}`}>4 150 ₽</div>
        </div>
      </>
    );
  }
};

export default Ticket;
