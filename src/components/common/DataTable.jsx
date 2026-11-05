import { Table } from "antd";
import "../../style.css";

export default function DataTable({ colums, datas }) {
  return (
    <div className="table-card">
      <Table
        className="clean-table"
        columns={colums}
        dataSource={datas}
        pagination={false}
        rowKey={"id"}
      />
    </div>
  );
}
