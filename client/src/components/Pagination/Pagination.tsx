import React from "react";
import Pagination from "@mui/material/Pagination";

import { IPagination } from "./IPagination";

const Paginate: React.FC<IPagination> = ({ pagination, charactersCount, onPageChange }) => {
  const handlePaginationChange = (_: React.ChangeEvent<unknown>, page: number) => {
    const offset = (page - 1) * pagination.limit;
    onPageChange({ ...pagination, offset });
  };

  return (
    <Pagination
      count={Math.ceil(charactersCount / pagination.limit)}
      page={pagination.offset / pagination.limit + 1}
      onChange={handlePaginationChange}
    />
  );
};

export default Paginate;
