import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
