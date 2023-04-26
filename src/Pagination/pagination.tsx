import  { useState } from "react";

function usePagination(data:string,itemsPerPage: number,page) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = page
    const end = page+8
    return data.products.slice(begin, end);
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return { jump, currentData,maxPage };
}

export default usePagination;
