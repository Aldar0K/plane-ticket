import React from 'react';

import styles from './AviaPage.module.css';
import TicketForm from 'pages/components/TicketForm';

const AviaPage = () => {
  return (
    <main className="main">
      <div className={`container ${styles.container}`}>
        <TicketForm />
      </div>
    </main>
  );
};

export default AviaPage;
