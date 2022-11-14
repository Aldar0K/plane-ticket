import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AviaPage from 'pages/AviaPage';
import AviaInfoPage from 'pages/AviaInfoPage';
import NotFoundPage from 'pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Navigate to={'/avia'} />} />
        <Route path="/avia" element={<AviaPage />} />
        <Route path="/avia/info" element={<AviaInfoPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={'/404'} />} />
      </Routes>
    </>
  );
};

export default App;
