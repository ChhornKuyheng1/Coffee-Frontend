import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Pagination({ totalPages }) {
  const [page, setPage] = useState(1);
  const getPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      {/* Previous */}
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="p-2 rounded-lg border
                   disabled:opacity-30 hover:bg-gray-100"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {getPages().map((item, index) =>
        item === "..." ? (
          <span key={`dots-${index}`} className="px-1 sm:px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`w-9 h-9 rounded-lg text-sm
                        font-semibold transition ${
                          page === item
                            ? "bg-blue-600 text-white"
                            : "border bg-white text-gray-600 hover:bg-blue-50"
                        }`}
          >
            {item}
          </button>
        ),
      )}

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="p-2 rounded-lg border
                   disabled:opacity-30 hover:bg-gray-100"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
