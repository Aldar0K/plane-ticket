import React from 'react';

import styles from './AviaPage.module.css';
import TicketForm from 'components/TicketForm';

const AviaPage = () => {
  return (
    <main className="main">
      <div className={styles.container}>
        <TicketForm />
      </div>
    </main>
  );
};

export default AviaPage;
