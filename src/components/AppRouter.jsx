import { Routes, Route, Navigate } from 'react-router-dom';
// import Loader from "./loader/Loader";

// Импорты страниц
import Main from "../pages/Home/Home"

const AppRouter = () => {

  return (
    <Routes>
      {/* Публичные */}

      {/* menu */}
        <Route path="/" element={<Main />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;