import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.scss";
import previous from "../assets/icons/np-previous.svg";
import next from "../assets/icons/np-next.svg";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const calculateVisiblePages = () => {
      let pages: number[] = [];
      const maxVisiblePages = 5; // Adjust this to show more/fewer page numbers

      if (totalPages <= maxVisiblePages) {
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      } else {
        // Always show first page
        pages.push(1);

        // Calculate start and end of middle pages
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        // Adjust if we're near the start or end
        if (currentPage <= 3) {
          end = 4;
        } else if (currentPage >= totalPages - 2) {
          start = totalPages - 3;
        }

        // Add middle pages with ellipsis if needed
        if (start > 2) {
          pages.push(0); // 0 will represent ellipsis
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        if (end < totalPages - 1) {
          pages.push(0); // 0 will represent ellipsis
        }

        // Always show last page
        pages.push(totalPages);
      }

      setVisiblePages(pages);
    };

    calculateVisiblePages();
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`${styles.paginationContainer}`}>
      <div className={`${styles.itemPerSelector}`}>
        <div className={`${styles.paginationInfo}`}>
          Showing {startItem} - {endItem} of {totalItems}
        </div>

        <div className={`${styles.itemsPerPageSelector}`}>

          {/* Item per page selector */}
          <select
            value={itemsPerPage}
            onChange={(e) => {
              onItemsPerPageChange(Number(e.target.value));
              onPageChange(1); // Reset to first page when changing items per page
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

      </div>

      <div className={`${styles.paginationControls}`}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.paginationButton}`}
          style={{ marginRight: "4%" }}
        >
          <img src={previous} width={14} height={14} />
        </button>

        {visiblePages.map((page, index) => (
          <React.Fragment key={index}>
            {page === 0 ? (
              <span className={`${styles.paginationEllipsis}`}>...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page)}
                className={`${styles.paginationButton} ${
                  currentPage === page ? "active" : ""
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.paginationButton}`}
          style={{ marginLeft: "4%" }}
        >
          <img src={next} width={14} height={14} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
