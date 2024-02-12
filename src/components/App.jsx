import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MainPage } from '../pages/MainPage/MainPage';
import { ArticlesPage } from '../pages/ArticlesPage/ArticlesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/mainpage" />} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="mainpage/:id" element={<ArticlesPage />} />
        </Route>
      </Routes>
    </>
  );
};
