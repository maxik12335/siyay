import React from 'react';
import classes from './Pagination.module.css';
import Btn from '../UI/Btn/Btn';

// 1. импорты
  // import usePagination from '../../hooks/usePagination';
  // import Pagination from '../Pagination/Pagination';
// 2. внутри компонента, ПОСЛЕ того как определился currentList
  // const { page, totalPages, visible, setPage } = usePagination(currentList, itemsPerPage);
  // itemsPerPage - вставляем прямо или через props принимает от родителя
// 3. в разметке вместо currentList.map → visible.map
  //<ul>
  //  {visible.map((item) => (/* ... */))}
  //</ul>
// 4. сразу под списком
  // <Pagination page={page} totalPages={totalPages} onChange={setPage} />

const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className={classes.buttons}>
      {Array.from({ length: totalPages }, (_, i) => (
        <Btn
          isColor='dark'
          size='sm'
          key={i}
          onClick={() => onChange(i)}
          active={page === i}
          aria-current={page === i ? 'page' : undefined}
        >
          {i + 1}
        </Btn>
      ))}
    </div>
  );
};

export default Pagination;