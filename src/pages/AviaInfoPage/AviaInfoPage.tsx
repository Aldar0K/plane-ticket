/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './AviaInfoPage.module.css';
import Ticket from 'components/Ticket';
import { useAppSelector } from 'store';

const AviaInfoPage = () => {
  const navigate = useNavigate();
  const { from, to, there, back } = useAppSelector((state) => state.ticket);

  useEffect(() => {
    if (from === '' || to === '' || there === '') {
      navigate('/avia');
    }
  }, []);

  return (
    <main className="main">
      <div className={styles.container}>
        <Ticket from={from} to={to} there={there} back={back} />
      </div>
    </main>
  );
};

export default AviaInfoPage;
