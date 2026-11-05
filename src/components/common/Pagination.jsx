import { Button } from "antd";
import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

export default function Pagination({ totalPage, page, nextPage, backPage }) {
  return (
    <div className="w-full flex justify-end">
      <div className="flex items-center gap-3">
        <Button
          type="primary"
          icon={<MoveLeft />}
          disabled={page + totalPage - 1 == totalPage ? true : false}
        />
        <p>
          {totalPage}/{page}
        </p>
        <Button
          type="primary"
          icon={<MoveRight />}
          disabled={page + 1 > totalPage ? true : false}
        />
      </div>
    </div>
  );
}
