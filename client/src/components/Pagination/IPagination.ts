export interface IPagination {
  pagination: { offset: number; limit: number };
  charactersCount: number;
  onPageChange: (newPagination: { offset: number; limit: number }) => void;
}

export interface Pagination {
  offset: number;
  limit: number;
}
