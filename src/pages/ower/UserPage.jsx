import { Button } from "antd";
import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { GetAllStaff } from "../../services/StaffService";
import UserModal from "../../components/UserModal";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Spin } from "antd";
import { imageUrl } from "../../config/api";
import { FundViewOutlined } from "@ant-design/icons";
export default function UserPage() {
  const [data, setData] = useState();

  const [openModel, setOpenModel] = useState(false);

  const [loading, setLoading] = useState(false);

  const OpenModel = () => {
    setOpenModel(true);
  };

  function CloseModel() {
    setOpenModel(false);
  }

  async function GetUser() {
    const response = await GetAllStaff(localStorage.getItem("token-user"));
    if (response.success) {
      setData(response.data);
      setLoading(true);
    }
  }

  const columns = [
    {
      title: "រូបភាព",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Avatar
          style={{
            backgroundColor: image ? null : "#87d068",
            width: "50px",
            height: "50px",
          }}
          icon={image ? null : <UserOutlined />}
        />
      ),
    },
    {
      title: "ឈ្មោះ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "លេខទូរស័ព្ទ",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "ទួនាទី",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "សាខា",
      dataIndex: "branche",
      key: "branche",
    },
    {
      title: "ព័ត៏មានលម្អិត",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <div className="w-full  flex justify-center">
          <Button
            type="primary"
            size="large"
            onClick={() => {
              hello(id);
            }}
            icon={<FundViewOutlined />}
          ></Button>
        </div>
      ),
    },
  ];

  function hello(name) {
    alert(name);
  }

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div className="w-full h-full  flex flex-col gap-1">
      <UserModal open={openModel} close={CloseModel} resetData={GetUser} />
      <div className="w-full  flex justify-between">
        <div className="w-full h-full"></div>
        <Button type="primary" onClick={OpenModel}>
          បញ្ចូលប្ថែម
        </Button>
      </div>
      <div className="w-full h-full overflow-hidden">
        {loading ? (
          <DataTable colum={columns} data={data} />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            {" "}
            <Spin size="large" description="Loading data..." />
          </div>
        )}
      </div>
    </div>
  );
}
