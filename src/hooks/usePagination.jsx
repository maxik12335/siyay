import { useState, useEffect } from 'react';

const usePagination = (items, itemsPerPage ) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // защита от «залипшей» страницы, если список вдруг стал короче
  const safePage = Math.min(page, totalPages - 1);

  // сбрасываем на первую страницу при смене списка (таба)
  useEffect(() => {
    setPage(0);
  }, [items]);

  const visible = items.slice(safePage * itemsPerPage, (safePage + 1) * itemsPerPage);

  return { page: safePage, totalPages, visible, setPage };
};

export default usePagination;
